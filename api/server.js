const express = require("express");
const app = express();
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Connecting to the database
const db = mysql.createConnection({
    host: process.env.db_host,         
    user: process.env.db_user,         
    password: process.env.db_password,  
    // database: process.env.DB_NAME 
});

// Checking if the database connection was established
db.connect((err) => {
    if (err) return console.log(err);
    console.log("Connection was established successfully");

    // Ensure the `users` table exists
    const usersTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(50) NOT NULL,
            email VARCHAR(50) NOT NULL UNIQUE,
            password VARCHAR(256) NOT NULL
        )
    `;
    db.query(usersTableQuery, (err, result) => {
        if (err) return console.log(err);
        console.log("User table is ready");
    });
});

// User Registration Route
app.post("/api/register", async (req, res) => {
    try {
        const usersQuery = `SELECT * FROM users WHERE email = ?`;
        db.query(usersQuery, [req.body.email], (err, data) => {
            if (err) {
                console.error("Error during user lookup:", err);
                return res.status(500).json("Internal Server Error");
            }

            if (data.length > 0) {
                // Return error without icon
                return res.status(409).json("User already exists"); // Just plain text message
            }

            // Hashing the password
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(req.body.password, salt);

            // Insert the new user
            const insertUserQuery = `INSERT INTO users (email, username, password) VALUES (?, ?, ?)`;
            db.query(insertUserQuery, [req.body.email, req.body.username, hashedPassword], (err, result) => {
                if (err) {
                    console.error("Error during user insertion:", err);
                    return res.status(400).json("Something went wrong");
                }

                console.log("User registered successfully:", result);
                return res.status(200).json("User registered successfully");
            });
        });
    } catch (e) {
        console.error("Error in registration:", e);
        res.status(500).json("Internal Server Error");
    }
});


// User Login Route
app.post("/api/login", async (req, res) => {
    try {
        const usersQuery = `SELECT * FROM users WHERE email = ?`;
        db.query(usersQuery, [req.body.email], (err, data) => {
            if (err) {
                console.error("Error during user lookup:", err);
                return res.status(500).json("Internal Server Error");
            }

            if (data.length === 0) {
                return res.status(401).json("User does not exist");
            }

            // If there is a user, check if credentials match
            const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

            if (!isPasswordCorrect) {
                return res.status(401).json("Invalid password or email");
            }

            // Send success message
            return res.status(200).json("User logged in successfully");
        });
    } catch (e) {
        console.error("Error in login:", e);
        res.status(500).json("Internal Server error");
    }
});


// Start the server
app.listen(5501, () => {
    console.log("Server running on port 5501");
});

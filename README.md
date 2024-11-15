# NetLink - WiFi Provider Website

NetLink is a full-stack website designed for a WiFi provider company. 
The platform allows users to register, login, and access various services such as purchasing data bundles and WiFi accessories. 
The site is responsive and interactive, ensuring a seamless experience across devices.

## Features
- User Authentication: Allows users to sign up, log in, and manage their accounts.
- WiFi Plans: Users can view and select various data bundles based on their needs.
- Accessories Store: Offers a variety of WiFi accessories for purchase.
- Responsive Design: The website is fully responsive, optimized for desktop, tablet, and mobile devices.
- Interactive User Interface: Uses dynamic elements and frontend validation to enhance the user experience.

## Screenshots

[](/screenshots/registered-successfully.png)
[](/screenshots/user-exists.png)
[](/screenshots/Login-successfully.png)
[](/screenshots/Home-page.png)


## Technologies Used
### Frontend:
- HTML5: Markup language used to structure the content.
- CSS3: Styling and layout of the page.
- JavaScript: Frontend interactivity (form submission, validation, etc.).

### Backend:
- Node.js: Server-side JavaScript runtime for handling API requests.
- Express.js: Web framework for building the backend server.
- MySQL: Relational database to store user data, orders, and product information.

## Getting Started

### Prerequisites
Before you begin, make sure you have the following installed on your local machine:

- Node.js: You can download it from [NodeJS](nodejs.org.)
- MySQL: You can download it from [mySql](mysql.com.)

## Clone or Fork the Repository
If you'd like to contribute to this project or simply use it for your own purposes, follow these steps to get access to the repository:

### 1. Fork the Repository (Optional)
If you want to make changes or contribute to the project, it's recommended to fork the repository first:

Go to the NetLink repository on GitHub.
Click on the Fork button at the top-right of the page to create a copy of the repository under your GitHub account.

### 2. Clone the Repository
After forking, or if you want to directly clone the repository, follow these steps:

Open the terminal/command prompt.
Run the following command to clone the repository to your local machine:
git clone https://github.com/yourusername/netlink.git

### 3. Navigate to the project directory:
cd NetLink_Project


## Backend Setup
The backend uses Node.js with Express.js and MySQL. Here’s how to set up the backend server.

### 1. Install Backend Dependencies
Run the following command to install all required dependencies:

npm install

### 2. Set Up MySQL Database
Create a Database: Open MySQL Workbench (or any MySQL client) and create a new database for the project:

CREATE DATABASE NetLink_Project;

Update Database Connection in server.js: 
Make sure to update the database credentials in the server.js file to match your MySQL configuration:

const db = mysql.createConnection({
    user: "your_mysql_username",
    host: "localhost",
    password: "your_mysql_password",
    database: "NetLink_Project"
});

Create the users Table: The backend automatically creates the users table if it does not exist, but if you want to manually check, you can run the following SQL query:

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(256) NOT NULL
);
### 3. Start the Server: 
Run the following command to start the backend server:

node server.js

This will start the server on port 5501. You should see the following output:

Server running on port 5501
Connection was established successfully
User table is ready


## Frontend Setup
The frontend consists of HTML, CSS, and JavaScript files.

Open login.html and register.html in your browser to interact with the login and registration forms.
If necessary, update the API URLs in the frontend JavaScript files to match the backend server URL (http://localhost:5501).

## Testing the Application
### Register a New User:

- Open register.html in your browser.
- Enter a username, email, and password, and click "Register."
- If registration is successful, the user will be added to the database.

### Login:

- Open login.html in your browser.
- Enter the email and password you used during registration.
- If login is successful, you will be redirected to the homepage.

### Interact with the Products:

Users can view and select WiFi plans or WiFi accessories.

## File Structure

/netlink
├── /frontend
│   ├── register.html      . Registration form
│   ├── login.html         . Login form
│   ├── styles.css         . Frontend styles
│   └── script.js          . Frontend JavaScript (handles forms, API requests)
├── /api 
|-- server.js              . Backend Express.js server (handles registration, login)
├── package.json           . Node.js dependencies and scripts
└── README.md              . This file



## Troubleshooting
### Error: Failed to fetch:

Ensure that your backend server is running and that the frontend is correctly configured to point to the backend API.
Check CORS settings if you encounter issues with cross-origin requests.

### Error: ER_ACCESS_DENIED_ERROR:

Ensure your MySQL credentials in server.js are correct and that the MySQL user has access to the database.

### Redirection Not Working:

Make sure the window.location.href in the frontend JavaScript is pointing to the correct URL after login (e.g., home.html or another desired page).









document.addEventListener('DOMContentLoaded', function () {
    // Count-up Functionality
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 4000;

    valueDisplays.forEach(display => {
        let startValue = 0;
        let endValue = parseInt(display.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
            startValue += 1;
            display.textContent = startValue;
            if (startValue === endValue) {
                clearInterval(counter);
            }
        }, duration);
    });


     // Show and hide password toggle

    // const password = document.querySelector("#password");
    // const showPassword = document.querySelector("#show-password");
    // const hidePassword = document.querySelector("#hide-password")
    // showPassword.addEventListener("click", () => {
    //     showPassword.style.display = "none";
    //     hidePassword.style.display = "block"
    //     if(password.value !== 0){
    //         password.type = 'text';
    //     }
    // })

    // hidePassword.addEventListener("click", () => {
    //     showPassword.style.display = "block";
    //     hidePassword.style.display = "none"
    //     if(password.value !== 0){
    //         password.type = 'password';
    //     }
    // })

    
        

    // Product List Toggle
    const toggleButton = document.getElementById('products-toggle');
    const nestedList = document.getElementById('nested-list');
    const arrowIcon = document.getElementById('arrow-icon');

    if (toggleButton) {
        toggleButton.addEventListener('click', function (event) {
            event.preventDefault();
            if (nestedList.style.display === 'block') {
                nestedList.style.display = 'none';
                arrowIcon.classList.remove('fa-chevron-up');
                arrowIcon.classList.add('fa-chevron-down');
            } else {
                nestedList.style.display = 'block';
                arrowIcon.classList.remove('fa-chevron-down');
                arrowIcon.classList.add('fa-chevron-up');
            }
        });
    }

    // Testimonials Slide Show
    let counterSlide = 1;
    setInterval(function () {
        document.getElementById('radio' + counterSlide).checked = true;
        counterSlide++;
        if (counterSlide > 5) {
            counterSlide = 1;
        }
    }, 5000);

    // Profile Picture Dropdown
    const profileButton = document.getElementById('profile-button');
    const dropdownMenu = document.getElementById('dropdown-menu');

    if (profileButton) {
        profileButton.addEventListener('click', function () {
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });

        document.addEventListener('click', function (event) {
            if (!profileButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.style.display = 'none';
            }
        });
    }
});

// Registration Form Submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const authMsg = document.getElementById('auth-msg');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Clear previous messages
        authMsg.textContent = ''; 
        authMsg.style.display = 'none';  

        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('http://localhost:5501/api/register', {
                method: 'POST',
                headers:  {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, username, password })
            });

            const data = await response.json();

           
            if (!response.ok) {
                authMsg.textContent = data; 
                authMsg.style.color = 'red'; 
            } else {
                authMsg.textContent = data;
                authMsg.style.color = 'green'; 
            }

            // Show the message
            authMsg.style.display = 'block';

            // Hide the message after 6 seconds
            setTimeout(() => {
                authMsg.style.display = 'none';
            }, 6000); 

        } catch (err) {
            authMsg.textContent = "An error occurred, please try again.";
            authMsg.style.color = 'red';
            authMsg.style.display = 'block';

            // Hide the message after 6 seconds
            setTimeout(() => {
                authMsg.style.display = 'none';
            }, 6000); 
        }
    });
});

// Login Form Submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const authMsg = document.getElementById('auth-msg');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Clear previous messages
        authMsg.textContent = ''; 
        authMsg.style.display = 'none'; 

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('http://localhost:5501/api/login', {
                method: 'POST',
                headers:  {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            // Display the response message
            if (!response.ok) {
                authMsg.textContent = data; 
                authMsg.style.color = 'red'; 
            } else {
                authMsg.textContent = data; 
                authMsg.style.color = 'green'; 
            }

            // Show the message
            authMsg.style.display = 'block';

            // If login is successful, redirect to home page
            if (response.ok) {
                // Redirect to the home page (or another page of your choice)
                setTimeout(() => {
                    window.location.href = 'home.html';  // Replace with your actual homepage URL
                }, 2000); // Wait for 2 second before redirecting
            }

            // Hide the message after 6 seconds
            setTimeout(() => {
                authMsg.style.display = 'none';
            }, 6000); 
        } catch (err) {
            authMsg.textContent = "An error occurred, please try again.";
            authMsg.style.color = 'red';
            authMsg.style.display = 'block';

            // Hide the message after 6 seconds
            setTimeout(() => {
                authMsg.style.display = 'none';
            }, 6000);
        }
    });
});



// ======================|| FAQs || ================================================================
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');
        const answerDiv = item.querySelector('.faq-answer');
        const arrow = item.querySelector('.arrow');

        questionButton.addEventListener('click', () => {
            const isOpen = answerDiv.style.display === 'block';
            // Close all answers and reset arrows
            document.querySelectorAll('.faq-answer').forEach(answer => answer.style.display = 'none');
            document.querySelectorAll('.arrow').forEach(arrow => arrow.classList.remove('open'));

            // Toggle the clicked answer and arrow
            if (isOpen) {
                answerDiv.style.display = 'none';
                arrow.classList.remove('open');
            } else {
                answerDiv.style.display = 'block';
                arrow.classList.add('open');
            }
        });
    });
});



// ==================== || side navigational bar || ================================


document.addEventListener('DOMContentLoaded', (event) => {
    const showBtn = document.getElementById('sidebar-show-btn');
    const hideBtn = document.getElementById('sidebar-hide-btn');
    const sidebar = document.getElementById('sidebar');

    // Show the sidebar
    showBtn.addEventListener('click', () => {
        sidebar.classList.add('show'); // Add class to show sidebar
    });

    // Hide the sidebar
    hideBtn.addEventListener('click', () => {
        sidebar.classList.remove('show'); // Remove class to hide sidebar
    });
});

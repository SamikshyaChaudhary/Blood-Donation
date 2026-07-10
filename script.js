// Donate Button

document.querySelector(".donate-btn")
.addEventListener("click", function(){

  alert("Thank you for donating blood ");

});


// Find Blood Button

document.querySelector(".find-btn")
.addEventListener("click", function(){

  alert("Searching blood donors...");

});



//login page
// PASSWORD SHOW / HIDE

let password =
document.getElementById("password");

let toggle =
document.getElementById("togglePassword");

toggle.addEventListener("click", function(){

  if(password.type === "password"){

    password.type = "text";

    toggle.classList.remove("fa-eye");
    toggle.classList.add("fa-eye-slash");

  }

  else{

    password.type = "password";

    toggle.classList.remove("fa-eye-slash");
    toggle.classList.add("fa-eye");

  }

});

// LOGIN FORM

document.getElementById("loginForm")
.addEventListener("submit", function(event){

  event.preventDefault();

  let email =
  document.getElementById("email").value;

  let passwordValue =
  document.getElementById("password").value;

  if(email === "" || passwordValue === ""){

    alert("Please fill all fields");

  }

  else{

    alert("Login Successful");

  }

});



//dashboard.js
const btn = document.getElementById("statusBtn");
const badge = document.getElementById("statusBadge");

btn.addEventListener("click", () => {

    if(badge.innerText === "Available"){

        badge.innerText = "Unavailable";
        badge.style.background = "#ffdede";
        badge.style.color = "#d62828";

    }else{

        badge.innerText = "Available";
        badge.style.background = "#e7f3d6";
        badge.style.color = "#4d7d28";

    }

});


//myprofile.js
function saveProfile() {
    alert("Profile Updated Successfully!");
}

const menuItems = document.querySelectorAll(".si");

menuItems.forEach(item => {
    item.addEventListener("click", () => {

        menuItems.forEach(i => {
            i.classList.remove("active");
        });

        item.classList.add("active");
    });
});


//myrequests.js
// Select all filter buttons
const buttons = document.querySelectorAll(".tabs button");

// Select all table rows
const rows = document.querySelectorAll("tbody tr");

// Add click event to every button
buttons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove("active"));

        // Add active class to clicked button
        button.classList.add("active");

        const filter = button.innerText.toLowerCase();

        rows.forEach(row => {

            const status = row.querySelector("td:nth-child(5) .badge")
                              .innerText
                              .toLowerCase();

            if (filter === "all") {
                row.style.display = "";
            } 
            else if (status === filter) {
                row.style.display = "";
            } 
            else {
                row.style.display = "none";
            }

        });

    });

});



//mydonations.js

document.addEventListener("DOMContentLoaded", () => {

    // -------------------------------
    // Sidebar Active Menu
    // -------------------------------
    const menuItems = document.querySelectorAll(".sidebar ul li");

    menuItems.forEach(item => {

        item.addEventListener("click", () => {

            menuItems.forEach(menu => {
                menu.classList.remove("active");
            });

            item.classList.add("active");

        });

    });


    // -------------------------------
    // Animate Progress Bar
    // -------------------------------
    const progressBar = document.querySelector(".progress-bar");

    if(progressBar){

        let width = 0;
        const target = 60;

        const animation = setInterval(() => {

            if(width >= target){

                clearInterval(animation);

            }else{

                width++;
                progressBar.style.width = width + "%";

            }

        },15);

    }


    // -------------------------------
    // Card Hover Effect
    // -------------------------------
    const cards = document.querySelectorAll(".card");

    cards.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform="translateY(-6px)";
            card.style.transition=".3s";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="translateY(0)";

        });

    });


    // -------------------------------
    // Milestone Hover
    // -------------------------------
    const milestones=document.querySelectorAll(".milestone");

    milestones.forEach(item=>{

        item.addEventListener("mouseenter",()=>{

            item.style.transform="translateX(6px)";
            item.style.transition=".3s";

        });

        item.addEventListener("mouseleave",()=>{

            item.style.transform="translateX(0px)";

        });

    });


    // -------------------------------
    // Timeline Hover
    // -------------------------------
    const timeline=document.querySelectorAll(".timeline-item");

    timeline.forEach(item=>{

        item.addEventListener("mouseenter",()=>{

            item.style.background="#fafafa";
            item.style.borderRadius="12px";
            item.style.padding="10px";

        });

        item.addEventListener("mouseleave",()=>{

            item.style.background="transparent";
            item.style.padding="0px";

        });

    });


    // -------------------------------
    // Counter Animation
    // -------------------------------
    const counters=document.querySelectorAll(".card h2");

    counters.forEach(counter=>{

        let text=counter.innerText;

        if(text.includes("days")) return;

        let target=parseInt(text);
        let count=0;

        counter.innerText="0";

        const update=()=>{

            if(count<target){

                count++;
                counter.innerText=count;

                setTimeout(update,120);

            }else{

                counter.innerText=text;

            }

        };

        update();

    });


    // -------------------------------
    // Avatar Click
    // -------------------------------
    const avatar=document.querySelector(".avatar");

    avatar.addEventListener("click",()=>{

        alert("Profile Menu");

    });

});




//changepassword.js
// ===============================
// JeevanConnect Change Password
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // Get Elements
    const password = document.getElementById("password");
    const strengthFill = document.getElementById("strength-fill");
    const strengthText = document.getElementById("strength-text");

    // Password Strength Checker
    password.addEventListener("keyup", function () {

        let value = password.value;
        let strength = 0;

        // Minimum 8 characters
        if (value.length >= 8) {
            strength += 25;
        }

        // Uppercase Letter
        if (/[A-Z]/.test(value)) {
            strength += 25;
        }

        // Number
        if (/[0-9]/.test(value)) {
            strength += 25;
        }

        // Special Character
        if (/[^A-Za-z0-9]/.test(value)) {
            strength += 25;
        }

        strengthFill.style.width = strength + "%";

        // Password Strength Text
        if (strength === 0) {
            strengthFill.style.background = "#ddd";
            strengthText.innerHTML = "Password strength";
        }
        else if (strength <= 25) {
            strengthFill.style.background = "#ff3b30";
            strengthText.innerHTML = "Weak Password";
        }
        else if (strength <= 50) {
            strengthFill.style.background = "#ff9500";
            strengthText.innerHTML = "Medium Password";
        }
        else if (strength <= 75) {
            strengthFill.style.background = "#f4c20d";
            strengthText.innerHTML = "Good Password";
        }
        else {
            strengthFill.style.background = "#28a745";
            strengthText.innerHTML = "Strong Password";
        }

    });


    // Sidebar Active Menu
    const menuItems = document.querySelectorAll(".sidebar ul li");

    menuItems.forEach(item => {

        item.addEventListener("click", function () {

            menuItems.forEach(menu => {
                menu.classList.remove("active");
            });

            this.classList.add("active");

        });

    });


    // Button Hover Animation
    const button = document.querySelector("button");

    button.addEventListener("mouseenter", function () {
        button.style.transform = "translateY(-2px)";
    });

    button.addEventListener("mouseleave", function () {
        button.style.transform = "translateY(0px)";
    });


    // Avatar Click
    const avatar = document.querySelector(".avatar");

    avatar.addEventListener("click", function () {
        alert("Profile menu will open here.");
    });


    // Form Validation
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const currentPassword = document.querySelectorAll("input")[0].value;
        const newPassword = document.querySelectorAll("input")[1].value;
        const confirmPassword = document.querySelectorAll("input")[2].value;

        if (
            currentPassword === "" ||
            newPassword === "" ||
            confirmPassword === ""
        ) {
            alert("Please fill in all fields.");
            return;
        }

        if (newPassword.length < 8) {
            alert("Password must be at least 8 characters.");
            return;
        }

        if (newPassword !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        alert("Password updated successfully!");

        form.reset();

        strengthFill.style.width = "0%";
        strengthFill.style.background = "#ddd";
        strengthText.innerHTML = "Password strength";

    });

});



//dashboard.js
// ===============================
// Availability Status Toggle
// ===============================

const statusBtn = document.getElementById("statusBtn");
const statusText = document.querySelector(".available");

statusBtn.addEventListener("click", function () {

    if (statusText.innerHTML.includes("Available")) {

        statusText.innerHTML = "● Unavailable";
        statusText.style.background = "#fde2e2";
        statusText.style.color = "#c62828";
        statusBtn.innerHTML = "Set Available";

    } else {

        statusText.innerHTML = "● Available";
        statusText.style.background = "#dff6e8";
        statusText.style.color = "#198754";
        statusBtn.innerHTML = "Set Unavailable";

    }

});

// ===============================
// Sidebar Active Menu
// ===============================

const menuItems = document.querySelectorAll(".sidebar ul li");

menuItems.forEach(item => {

    item.addEventListener("click", function () {

        menuItems.forEach(i => i.classList.remove("active"));

        this.classList.add("active");

    });

});

// ===============================
// Card Hover Animation
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});

// ===============================
// Table Row Hover
// ===============================

const rows = document.querySelectorAll("tbody tr");

rows.forEach(row => {

    row.addEventListener("mouseenter", () => {
        row.style.background = "#fafafa";
    });

    row.addEventListener("mouseleave", () => {
        row.style.background = "";
    });

});

// ===============================
// Welcome Message
// ===============================

window.addEventListener("load", () => {
    console.log("Welcome to JeevanConnect Dashboard");
});





//myprofile.js
// ==========================
// Donor Availability Toggle
// ==========================

const toggleBtn = document.getElementById("toggleBtn");
const status = document.getElementById("status");

toggleBtn.addEventListener("click", function () {

    if (status.innerHTML.includes("Available")) {

        status.innerHTML = "● Unavailable";
        status.style.background = "#fde2e2";
        status.style.color = "#c62828";
        toggleBtn.innerHTML = "Set Available";

    } else {

        status.innerHTML = "● Available";
        status.style.background = "#dff6e8";
        status.style.color = "#198754";
        toggleBtn.innerHTML = "Set Unavailable";

    }

});

// ==========================
// Upload Photo
// ==========================

const uploadBtn = document.querySelector(".upload-btn");

uploadBtn.addEventListener("click", function () {

    const input = document.createElement("input");

    input.type = "file";
    input.accept = "image/*";

    input.click();

    input.onchange = function () {

        if (input.files.length > 0) {

            alert("Photo selected: " + input.files[0].name);

        }

    };

});

// ==========================
// Save Changes
// ==========================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Profile updated successfully!");

});

// ==========================
// Cancel Button
// ==========================

const cancelBtn = document.querySelector(".cancel-btn");

cancelBtn.addEventListener("click", function () {

    if (confirm("Reset all changes?")) {

        form.reset();

    }

});

// ==========================
// Sidebar Active Menu
// ==========================

const menuItems = document.querySelectorAll(".sidebar ul li");

menuItems.forEach(item => {

    item.addEventListener("click", function () {

        menuItems.forEach(i => i.classList.remove("active"));

        this.classList.add("active");

    });

});

// ==========================
// Input Focus Effect
// ==========================

const inputs = document.querySelectorAll("input, select");

inputs.forEach(input => {

    input.addEventListener("focus", function () {

        this.style.borderColor = "#c62828";

    });

    input.addEventListener("blur", function () {

        this.style.borderColor = "#ddd";

    });

});

// ==========================
// Page Loaded
// ==========================

window.onload = function () {

    console.log("My Profile Loaded");

};







// Registration.js

const form = document.getElementById("registerForm");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    // Get form values
    const data = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        userid: document.getElementById("userid").value.trim(),
        password: document.getElementById("password").value,
        blood_group: document.getElementById("blood_group").value,
        age: document.getElementById("age").value,
        address: document.getElementById("address").value.trim()
    };

    // Validation

    if (
        data.name === "" ||
        data.email === "" ||
        data.phone === "" ||
        data.userid === "" ||
        data.password === "" ||
        data.blood_group === "" ||
        data.age === "" ||
        data.address === ""
    ) {
        alert("Please fill all fields.");
        return;
    }

    if (data.age < 18) {
        alert("You must be at least 18 years old.");
        return;
    }

    try {

        const response = await fetch("http://127.0.0.1:5000/api/register", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)

        });

        const result = await response.json();

        if (response.ok) {

            alert("Registration Successful!");

            form.reset();

            // Optional
             window.location.href = "dashboard.html";

        } else {

            alert(result.message || "Registration Failed.");

        }

    } catch (error) {

        console.error(error);

        alert("Cannot connect to the server.");

    }

});
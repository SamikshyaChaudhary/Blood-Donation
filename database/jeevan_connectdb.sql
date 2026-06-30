Create database project;
use project;



CREATE TABLE users (

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    email VARCHAR(100) NOT NULL UNIQUE,

    phone VARCHAR(20) NOT NULL UNIQUE,

    password_hash VARCHAR(255) NOT NULL,

    role ENUM('donor','recipient','admin') NOT NULL DEFAULT 'recipient',

    gender ENUM('Male','Female','Other') NOT NULL,

    date_of_birth DATE NOT NULL,

    blood_group ENUM(
        'A+','A-',
        'B+','B-',
        'AB+','AB-',
        'O+','O-'
    ) NOT NULL,

    profile_image VARCHAR(255),

    address TEXT,

    city VARCHAR(100) NOT NULL,

    district VARCHAR(100) NOT NULL,

    emergency_contact_name VARCHAR(100),

    emergency_contact_phone VARCHAR(20),

    is_verified BOOLEAN DEFAULT FALSE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    last_login TIMESTAMP NULL
);



CREATE TABLE donors (

    id INT AUTO_INCREMENT PRIMARY KEY,

    user_id INT NOT NULL UNIQUE,

    is_available BOOLEAN DEFAULT TRUE,

    availability_status ENUM(
        'Available',
        'Busy',
        'Unavailable'
    ) DEFAULT 'Available',

    last_donation_date DATE,

    next_eligible_date DATE,

    total_donations INT DEFAULT 0,

    weight DECIMAL(5,2),

    medical_conditions TEXT,

    last_health_check DATE,

    latitude DECIMAL(10,8),

    longitude DECIMAL(11,8),

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
    REFERENCES users(id)
    ON DELETE CASCADE
);



CREATE TABLE requests (

    id INT AUTO_INCREMENT PRIMARY KEY,

    requester_id INT NOT NULL,

    donor_id INT NULL,

    patient_name VARCHAR(100) NOT NULL,

    patient_age INT,

    patient_gender ENUM(
        'Male',
        'Female',
        'Other'
    ),

    blood_group ENUM(
        'A+','A-',
        'B+','B-',
        'AB+','AB-',
        'O+','O-'
    ) NOT NULL,

    units_needed INT NOT NULL,

    urgency_level ENUM(
        'Low',
        'Medium',
        'High',
        'Critical'
    ) DEFAULT 'Medium',

    hospital_name VARCHAR(150) NOT NULL,

    hospital_address TEXT,

    contact_number VARCHAR(20) NOT NULL,

    city VARCHAR(100),

    description TEXT,

    status ENUM(
        'Pending',
        'Accepted',
        'Completed',
        'Cancelled'
    ) DEFAULT 'Pending',

    required_date DATE,

    required_time TIME,

    needed_by DATETIME,

    fulfilled_at DATETIME NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (requester_id)
    REFERENCES users(id)
    ON DELETE CASCADE,

    FOREIGN KEY (donor_id)
    REFERENCES donors(id)
    ON DELETE SET NULL
);



CREATE TABLE notifications (

    id INT AUTO_INCREMENT PRIMARY KEY,

    user_id INT NOT NULL,

    request_id INT,

    type ENUM(
        'Blood Request',
        'Request Accepted',
        'Request Rejected',
        'Donation Completed',
        'Eligibility Reminder',
        'General'
    ) NOT NULL,

    notification_mode ENUM(
        'App',
        'Email',
        'SMS'
    ) DEFAULT 'App',

    title VARCHAR(200) NOT NULL,

    message TEXT NOT NULL,

    is_read BOOLEAN DEFAULT FALSE,

    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
    REFERENCES users(id)
    ON DELETE CASCADE,

    FOREIGN KEY (request_id)
    REFERENCES requests(id)
    ON DELETE CASCADE
);



CREATE TABLE admins (

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    email VARCHAR(100) UNIQUE NOT NULL,

    phone VARCHAR(20),

    password_hash VARCHAR(255) NOT NULL,

    role ENUM(
        'Super Admin',
        'Moderator'
    ) DEFAULT 'Moderator',

    status ENUM(
        'Active',
        'Inactive'
    ) DEFAULT 'Active',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    last_login TIMESTAMP NULL
);



CREATE INDEX idx_users_email
ON users(email);

CREATE INDEX idx_users_phone
ON users(phone);

CREATE INDEX idx_users_blood_group
ON users(blood_group);

CREATE INDEX idx_users_location
ON users(city, district);

CREATE INDEX idx_requests_status
ON requests(status);

CREATE INDEX idx_requests_blood
ON requests(blood_group);

CREATE INDEX idx_requests_required_date
ON requests(required_date);

CREATE INDEX idx_notifications_user
ON notifications(user_id);


show tables from project;

select * from users;

select * from donors;

select * from requests;

select * from notifications;

select * from admins;

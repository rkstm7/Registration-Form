# 🧾 User Registration System | Node.js + Express + MongoDB

<p align="left">
  <img src="https://visitor-badge.laobi.icu/badge?page_id=rkstm7.user-registration-app&label=Visitors&color=0e75b6&style=flat" alt="visitor badge"/>
</p>

A basic user registration system built with **Node.js**, **Express**, and **MongoDB**. It allows users to sign up by providing personal details which are then stored securely in a MongoDB database.

---

## ✨ Features

- 🔐 User Signup with:
  - Full Name
  - Username
  - Email
  - Phone Number
  - Password & Confirm Password
  - Gender
- 📦 Stores data in MongoDB
- 🔧 Uses body-parser for handling form data
- 🌐 Frontend integration through static files
- ⚡ Fast and lightweight Node.js backend

---

## 📁 Tech Stack

| Technology      | Purpose                         |
|----------------|---------------------------------|
| **Node.js**     | Runtime environment             |
| **Express.js**  | Web server framework            |
| **MongoDB**     | NoSQL database                  |
| **Mongoose**    | MongoDB object modeling         |
| **body-parser** | Middleware for parsing form data|
| **HTML/CSS**    | Static frontend files (optional)|

---

## 🚀 Installation & Setup

> ⚠️ Requires Node.js and MongoDB installed locally.

```bash
# 1. Clone the repository
git clone https://github.com/rkstm7/user-registration-app.git
cd user-registration-app

# 2. Install dependencies
npm install

# 3. Make sure MongoDB is running on default port 27017
# Start the app
node index.js

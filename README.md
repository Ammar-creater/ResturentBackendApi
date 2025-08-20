# 🍴 Restaurant Backend API

A **Node.js RESTful API** for a restaurant food ordering system. Built with **Express.js, MongoDB, and JWT Authentication**, following the **MVC pattern**.

---

## Features
- User registration & login with JWT
- Password hashing & authentication middleware
- CRUD APIs for restaurants, categories, and food items
- Order management & admin order status updates
- Postman collection included for API testing

---

## Tech Stack
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Postman

---

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Ammar-creater/ResturentBackendApi.git


Navigate to the project folder:


cd ResturentBackendApi
Install dependencies:


npm install
Create a .env file (example):


PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Start the server:

npm start
API Testing
Import the Postman collection: RestaurantBackendAPI.postman_collection.json

Use fake credentials for testing.

All sensitive keys (JWT, DB passwords) are stored in .env and ignored in Git.
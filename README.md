# TravelEase – Vehicle Booking & Trip Management Platform

TravelEase is a full-stack MERN (MongoDB, Express, React, Node.js) web application designed to streamline the vehicle booking and trip management process. This platform allows users to explore available vehicles, list their own vehicles for rent, and manage their bookings, all through a clean and modern interface.

[![React Badge](https://img.shields.io/badge/React-19.x-%2361DAFB?logo=react)](https://react.dev/)
[![Node.js Badge](https://img.shields.io/badge/Node.js-20.x-%23339933?logo=nodedotjs)](https://nodejs.org/)
[![Express.js Badge](https://img.shields.io/badge/Express.js-4.x-%23000000?logo=express)](https://expressjs.com/)
[![MongoDB Badge](https://img.shields.io/badge/MongoDB-7.x-%2347A248?logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind_CSS-3.x-%2306B6D4?logo=tailwindcss)](https://tailwindcss.com/)

**Live Site:** [https://travel-ease-client-side.vercel.app/]
**Server Site:** [https://github.com/CodeWithArafat1/TravelEase-server]

---

## 🚀 Key Features

* **Full MERN Stack:** Built with a React frontend, Node/Express backend, and MongoDB database.
* **Firebase Authentication:** Secure user registration and login system using Email/Password and Google Social Login.
* **Private Routes:** Protected routes for user-specific pages like 'My Vehicles', 'My Bookings', 'Add Vehicle', and 'View Details'.
* **Vehicle CRUD Operations:**
    * **Create:** Authenticated users can add new vehicles through a dedicated form.
    * **Read:** View all vehicles, latest vehicles on the homepage, and a detailed page for each vehicle.
    * **Update:** Users can update their own vehicle listings via a pre-filled modal.
    * **Delete:** Users can delete their own listings with a confirmation modal.
* **Booking System:** Users can book any available vehicle with a single click. The "Book Now" button is intelligently disabled if the user has already booked that specific vehicle.
* **User Dashboard:**
    * **My Vehicles:** A table view for users to manage (update/delete) only the vehicles they have added.
    * **My Bookings:** A table view for users to see all their bookings and cancel any active booking. Includes a `tfoot` summary for the total price.
* **Advanced Filtering & Sorting:** On the 'All Vehicles' page, users can filter by category and location, and sort by price (low-to-high, high-to-low).
* **Dark/Light Theme:** A theme toggle in the navbar allows users to switch between dark and light modes, with the preference saved in `localStorage`.
* **Modern UI/UX:**
    * Fully responsive design for all devices using Tailwind CSS.
    * Custom modal components for updates and delete confirmations (no default browser alerts).
    * Sleek notifications using `react-hot-toast`.
    * Interactive homepage banner using `Swiper.js`.

---

## 🛠️ Technology Stack

### Client-Side (Frontend)

* **React (v19+)**: For building the user interface.
* **React Router (v7+)**: For client-side routing.
* **Redux Toolkit**: For global state management (user auth, modal status).
* **Tailwind CSS**: Utility-first CSS framework.
* **DaisyUI**: Tailwind CSS component library.
* **Axios**: For making HTTP requests to the server.
* **Firebase**: For user authentication.
* **React Hot Toast**: For clean, custom notifications.
* **Date-fns**: For date formatting.
* **Swiper.js**: For the interactive homepage banner.

### Server-Side (Backend)

* **Node.js**: JavaScript runtime environment.
* **Express.js**: Web framework for building the RESTful API.
* **MongoDB**: NoSQL database for storing vehicle, user, and booking data.
* **CORS**: For enabling Cross-Origin Resource Sharing.
* **Dotenv**: For managing environment variables.

---

## ⚙️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

* [Node.js](https://nodejs.org/) (v18 or newer)
* npm or yarn
* [MongoDB](https://www.mongodb.com/try/download/community) (Local instance or a free Atlas cluster)
* [Firebase](https://console.firebase.google.com/) project (for Authentication)

### 1. Clone the Repositories

```bash
# Clone the client repository
git clone https://github.com/CodeWithArafat1/TravelEase-client
cd travelease-client
npm install

# Clone the server repository
git clone https://github.com/CodeWithArafat1/TravelEase-server
cd travelease-server
npm install
```

### 2. Set Up Environment Variables

**Server-Side (`travelease-server`):**
Create a `.env` file in the root directory and add your MongoDB URI:

```env
# Server Port
PORT=3000

# MongoDB Connection URI (Format based on your index.js)
USER_NAME=your_mongodb_username
USER_PASSWORD=your_mongodb_password
```

**Client-Side (`travelease-client`):**
Create a `.env.local` file in the root directory and add your Firebase config.

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Base URL for your local server API
VITE_API_URL=http://localhost:3000/api
```

### 3. Run the Application

```bash
# Run the server (from the server directory)
# It will run on http://localhost:3000
npm start
# Or if using nodemon: npm run dev

# Run the client (from the client directory)
# It will run on http://localhost:5173 (or similar)
npm run dev
```
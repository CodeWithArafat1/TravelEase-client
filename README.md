<h1 align="center">TravelEase – Vehicle Booking & Trip Management</h1>

<p align="center" >
  TravelEase is a full-stack MERN application. It serves as a modern platform allowing users to browse, rent, and manage vehicle bookings.
</p>

<p align="center">
  <strong>🚀 Client Live Link: https://travelease-live.netlify.app/</strong>
  <br />
  <strong>📡 Server Live Link: https://assignment-10-server-travelease.vercel.app/api/vehicles</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React">
  <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" alt="Redux">
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router">
  <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase&logoColor=white" alt="Firebase">
  <img src="https://img.shields.io/badge/tailwind_css-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/daisyui-151A31?style=for-the-badge&logo=daisyui&logoColor=white" alt="daisyUI">
  <img src="https://img.shields.io/badge/axios-671ddf?style=for-the-badge&logo=axios&logoColor=white" alt="Axios">
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
</p>

---

<p align="center">
  <img src="https://github.com/CodeWithArafat1/TravelEase-client/blob/27b4a5a1bacf2f2732ee6dd7fd7908cd7bf19816/src/assets/bannerGit_.png" alt="TravelEase Project Banner" width="100%"/>
</p>
<p align="center">
  <img src="https://github.com/CodeWithArafat1/TravelEase-client/blob/998e867f583ed418a80f144f6b9f0de9a4c505c1/src/assets/bannerGitDark.png" alt="TravelEase Project Banner" width="100%"/>
</p>

---

### 🚀 Key Features

- **Firebase Authentication:** Secure user registration and login system using Email/Password and Google social login.
- **Full CRUD Functionality:** Authenticated users can **C**reate, **R**ead, **U**pdate, and **D**elete their own vehicle listings.
- **Booking System:** Users can view vehicle details and click "Book Now" to make a booking, which is saved to their "My Bookings" page.
- **Wishlist Functionality:** Users can save their favorite vehicles to a separate "My Wishlist" page for future reference.
- **Advanced Filtering & Sorting:** The "All Vehicles" page features dynamic filtering by category and location, as well as sorting by price (low-to-high / high-to-low).
- **Secure Private Routes:** Key pages like "My Vehicles," "My Bookings," and "Add Vehicle" are protected, ensuring they are accessible only to logged-in users.
- **Dark/Light Theme:** The entire application supports a dark/light mode toggle, with the user's preference saved in `localStorage`.
- **Responsive UI:** Fully responsive design built with Tailwind CSS and daisyUI, ensuring a seamless experience on mobile, tablet, and desktop devices.
- **Custom Notifications & Modals:** Uses `react-hot-toast` for elegant notifications and custom modals for delete confirmations, replacing default browser alerts.

---

### 🛠️ Technology Stack

**Client-Side (Frontend):**

- **React.js:** The core UI library.
- **React Router:** For client-side routing.
- **Redux Toolkit:** For global state management (user authentication, modal state).
- **Firebase:** For authentication and user management.
- **Axios:** For making API calls to the server.
- **Tailwind CSS:** A utility-first CSS framework.
- **daisyUI:** A component library for Tailwind CSS.
- **Swiper.js:** For the homepage banner slider.
- **date-fns:** For formatting dates and times.
- **React Hot Toast:** For custom notifications.

**Server-Side (Backend):**

- **Node.js:** Server runtime environment.
- **Express.js:** Web application framework.
- **MongoDB:** NoSQL database.
- **CORS:** For managing Cross-Origin Resource Sharing.
- **Dotenv:** For managing environment variables.

---

### 🚀 How to Run Locally

**1. Client-Side:**

```bash
# Clone the repository
git clone git@github.com:CodeWithArafat1/TravelEase-client.git

# Navigate into the directory
cd travelease-client

# Install npm packages
npm install

# Create a .env.local file and add your Firebase configuration
VITE_apiKey=...
VITE_authDomain=...
VITE_projectId=...
VITE_storageBucket=...
VITE_messagingSenderId=...
VITE_appId=...

# Start the development server
npm run dev
```
**2. Server-Side:**

```bash
# Clone the repository
git clone git@github.com:CodeWithArafat1/TravelEase-server.git

# Navigate into the directory
cd travelease-server

# Install npm packages
npm install

# Create a .env file and add your MongoDB URI and Port
USER_NAME=your_mongodb_user
USER_PASSWORD=your_mongodb_password
PORT=3000

# Start the server
npm start
```

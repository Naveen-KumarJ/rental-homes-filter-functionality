# 🏠 Rentak Homes

A responsive part of real estate rental web application built with **React**, allowing users to **search**, **filter**, and **favourite** properties to rent. Designed with clean UI components and local storage for persisting favourites.

---

## 📌 Project Overview

**Rentak Homes** is a property rental app where users can:

* Search for rental homes based on location, price, move-in date, and property type.
* Add or remove properties from their favourites.
* Navigate between the home and favourites page.
* Experience a smooth, responsive user interface.

This project was built using **React + React Router**, with **ShadCN UI**, **TailwindCSS**, and **date-fns**.

---

## 🚀 Live Demo
> [Live demo](https://rental-homes-filter-functionality.vercel.app/)

---


## ⚙️ Functionalities

| Feature       | Description                                                             |
| ------------- | ----------------------------------------------------------------------- |
| 🏠 Home       | Displays list of all properties with image, price, type, etc.           |
| 🔍 Search     | Search by property name using the header search box.                    |
| 🎯 FilterBar  | Filter by location, date, price range, and type.                        |
| ❤️ Favourites | Save/unsave properties using localStorage; persistent across reloads.   |
| 🧭 Navigation | Header allows switching between Home and Favourites using React Router. |
| ⚠️ Error Page | Displays a fallback UI for invalid routes.                              |

---

## 📦 Extra Packages Used

| Package              | Purpose                                               |
| -------------------- | ----------------------------------------------------- |
| **react-router-dom** | Routing between pages (`/`, `/favourites`)            |
| **date-fns**         | Date formatting for move-in calendar                  |
| **ShadCN UI**        | Select, Calendar, Button, and other styled components |
| **TailwindCSS**      | Utility-first CSS styling                             |
| **react-icons**      | Icons for UI such as calendar, heart, bed, etc.       |

---

## 📚 What I Learned

* How to structure a React app with `createBrowserRouter` and nested routes.
* Managing shared state between components via `Outlet context`.
* Using `localStorage` for persisting user data (favourites).
* Building reusable UI components with ShadCN and Tailwind.
* Date handling with `date-fns`.
* Writing clean, scalable, and maintainable component-based architecture.

---

## 🔮 Future Improvements

* ✅ Add pagination or infinite scroll for large property lists.
* 🔎 Improve search algorithm (search by address/type/price).
* 🗂️ Add backend support to fetch real-time data and store favourites server-side.
* 📱 Improve mobile responsiveness (minor tweaks needed).
* 💬 Add Toast/Notification for favourite action feedback.
* 🔐 User authentication (login/logout) and user-based favourites.

---

## 📁 Folder Structure (Simplified)

```
src/
├── assets/
│   └── house_placeholder.png
├── components/
│   └── Header/
├── pages/
│   ├── Home/
│   ├── Favourite/
│   └── Error/
├── data.js
├── App.jsx
├── main.jsx
└── routes/
    └── index.jsx
```

---

## 🧾 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/Naveen-KumarJ/rental-homes-filter-functionality.git
cd rental-homes-filter-functionality

# Install dependencies
npm install

# Start development server
npm run dev
```

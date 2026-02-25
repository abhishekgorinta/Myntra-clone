# MYNTRA — Vue 3 Vite Demo

A small Vue 3 single-page demo modeled after an e‑commerce login and browsing UI. Built with Vite and Vue Router. Includes a phone-based login flow (demo OTP) and several example pages (mens, womens, beauty, bag, wishlist).
## View live
Open this link to view project
```
https://gabhishek-clone-myntr-app.netlify.app/
```
**Tech Stack:**
- **Framework:** Vue 3
- **Bundler / Dev Server:** Vite
- **Routing:** vue-router
- **Extras:** canvas-confetti (demo success effect)
## 📸 Screenshot
![m1image](src/assets/m1.png)
![m2image](src/assets/m2.png)
![m3image](src/assets/m3.png)
![m4image](src/assets/m4.png)
![m5image](src/assets/m5.png)
![m6image](src/assets/m6.png)
![m7image](src/assets/m7.png)
![m8image](src/assets/m8.png)
![m9image](src/assets/m9.png)


## Quick start

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open the app in your browser at the address shown by Vite (usually http://localhost:5173).

## Available scripts

- `npm run dev` — start Vite dev server
- `npm run build` — build for production
- `npm run preview` — preview local production build

## Project structure (key files)

- `index.html` — app entry
- `src/main.js` — app bootstrap
- `src/App.vue` — root component (renders `Navabar` and `router-view`)
- `src/routes/index.js` — application routes
- `src/pages/` — page components (main, login, mens, womens, beauty, bag, wishlist, etc.)
- `src/components/navbar.vue` — top navigation
- `src/style.css` — global styles

## Login / Phone input behavior

- The login page is at route `/login`.
- The phone input enforces digits only and is limited to exactly 10 digits. Non-digit characters are stripped on input.
- The app expects a 10-digit phone number before requesting an OTP; validation message appears if the number is invalid.
- OTP is a demo flow: an auto-generated 4-digit OTP is shown on the screen (for demo). Entering the correct OTP shows a success message and a confetti animation.

## Routes

Main routes are declared in `src/routes/index.js` and include:

- `/` — Main
- `/login` — Login
- `/mens` — Mens
- `/womens` — Womens
- `/beauty` — Beauty
- `/bag` — Bag
- `/wishlist` — Wishlist

## Notes & next steps

- This project is a demo and does not perform real authentication or API calls.
- To integrate with a backend, replace the demo OTP generation and verification in `src/pages/login.vue` with API calls and add secure server-side verification.

## 👨‍💻 Author:
Developed by Abhishek Gorinta

## License:
This project is free to use and modify for learning purposes.

⭐ If you like this project, don't forget to give it a star on GitHub!

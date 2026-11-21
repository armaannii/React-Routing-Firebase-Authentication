# React Routing & Firebase Authentication Assignment

This project is a React application built with Vite demonstrating **React Router**, **Firebase Authentication**, and **Protected Routes**.

---

## 📋 Features & Requirements Implemented

1. **Required Pages & Routing**:
   - `/` (Home) - Public: Welcome message and login status.
   - `/login` (Login) - Public: Email and password fields to sign in with Firebase.
   - `/register` (Register) - Public: Email and password fields to create a new Firebase account.
   - `/dashboard` (Dashboard) - **Protected**: Displays welcome message and authenticated user's email.
   - `/profile` (Profile) - **Protected**: Displays user's email and a Logout button.

2. **React Router Navigation**:
   - Navigation bar (`Navbar`) linking to Home, Login, Register, Dashboard, Profile.
   - Conditional rendering in the Navbar based on authentication status (e.g., showing Login/Register when logged out, and Dashboard, Profile, and Logout when logged in).

3. **Protected Routes**:
   - `ProtectedRoute` component redirects unauthenticated users to `/login`.
   - Remembers the attempted destination and redirects back upon successful login.

4. **Firebase Authentication State Persistence**:
   - Authentication context (`AuthContext`) utilizes Firebase's `onAuthStateChanged`.
   - Users remain logged in even after refreshing or reopening the page.

---

## 🛠️ Project Structure

```
assignment/
├── .env                  # Firebase configuration keys
├── .env.example          # Template for Firebase credentials
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Top navigation bar
│   │   └── ProtectedRoute.jsx   # Route guard for protected pages
│   ├── context/
│   │   └── AuthContext.jsx      # Firebase Auth provider & custom hook
│   ├── pages/
│   │   ├── Home.jsx             # Home landing page
│   │   ├── Login.jsx            # Sign in page
│   │   ├── Register.jsx         # User registration page
│   │   ├── Dashboard.jsx        # Protected dashboard
│   │   └── Profile.jsx          # Protected profile with logout
│   ├── App.css                  # Clean application styles
│   ├── App.jsx                  # Main application with routes
│   ├── firebase.js              # Firebase SDK initialization
│   ├── index.css                # Base CSS
│   └── main.jsx                 # React root entry
├── package.json
└── vite.config.js
```

---

## 🚀 Setup & Running Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Firebase
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a project and enable **Authentication** (under *Build* > *Authentication* > *Sign-in method*, enable **Email/Password**).
3. Under *Project Settings* > *General*, create a **Web App** and copy the configuration keys.
4. Add your configuration values to `.env`:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```
   Copy `.env.example` as a starting point. Keep `.env` local; it is ignored by Git.
   `VITE_` values are included in the browser bundle, so Firebase web configuration
   is public and must not contain private keys or service-account credentials.
   Restrict the Firebase API key in Google Cloud, configure Firebase Authentication's
   authorized domains, and use Firebase Security Rules to protect data.

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

---

## 💡 Key Concepts Explained

### 1. React Routing (`react-router-dom`)
- **`BrowserRouter` (`Router`)**: Wraps the entire app to provide HTML5 history API navigation without full-page reloads.
- **`Routes` & `Route`**: Defines matching path definitions (`/`, `/login`, `/dashboard`, etc.) and the components to render.
- **`Link`**: Enables client-side navigation between pages without reloading the page.
- **`Navigate` & `useNavigate`**: Programmatic navigation (e.g. redirecting after login or logout).

### 2. Protected Routes
- The `ProtectedRoute` component inspects the current user (`currentUser`) from `AuthContext`.
- If no user is logged in, it renders `<Navigate to="/login" replace />`, blocking access to `/dashboard` and `/profile`.
- If the user is authenticated, it renders the requested component.

### 3. Firebase Authentication State
- `onAuthStateChanged` listens to Firebase token state changes and updates local state.
- Firebase stores authentication tokens in indexedDB/localStorage by default, ensuring the user stays logged in across page refreshes.

// Import Firebase and Google Auth provider
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqMw2Mbk6vHSesQ1FSqsjrYKvn1qymj34",
  authDomain: "log-in-system-authentication.firebaseapp.com",
  projectId: "log-in-system-authentication",
  storageBucket: "log-in-system-authentication.firebasestorage.app",
  messagingSenderId: "196698780625",
  appId: "1:196698780625:web:d0a11d578ff0ea4ce526f0",
  measurementId: "G-C9E0R5VKL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Google login button
const googleLoginBtn = document.getElementById('google-login-btn');

// Google Auth Provider
const provider = new GoogleAuthProvider();

// Handling Google sign-in with a popup
googleLoginBtn.addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log('User signed in: ', user.displayName);
      // Redirect to another page or update UI after login
      window.location.href = "home.html";  // Replace with your desired URL after login
    })
    .catch((error) => {
      console.error('Error signing in with Google: ', error);
    });
});

// Optional: Sign out functionality if needed (e.g., add a sign-out button)
const signOutBtn = document.getElementById('sign-out-btn'); // Assuming you have a sign-out button

signOutBtn?.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      console.log('User signed out');
      // Redirect to login page after sign out
      window.location.href = "index.html";  // Redirect back to the login page
    })
    .catch((error) => {
      console.error('Error signing out: ', error);
    });
});

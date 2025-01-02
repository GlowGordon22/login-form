// Import Firebase modules
import { 
    initializeApp 
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";

import { 
    getAuth, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup 
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCqMw2Mbk6vHSesQ1FSqsjrYKvn1qymj34",
    authDomain: "log-in-system-authentication.firebaseapp.com",
    projectId: "log-in-system-authentication",
    storageBucket: "log-in-system-authentication.firebasestorage.app",
    messagingSenderId: "196698780625",
    appId: "1:196698780625:web:d0a11d578ff0ea4ce526f0",
    measurementId: "G-C9E0R5VKL5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Email/Password Login
document.querySelector(".login-btn").addEventListener("click", () => {
    const email = document.querySelector("input[type='text']").value; // Email input
    const password = document.querySelector("input[type='password']").value; // Password input

    if (!email || !password) {
        alert("Please fill in both email and password fields.");
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert(`Welcome back, ${user.email}!`);
            console.log("User Info:", user);
            // Optional: Redirect to another page
            // window.location.href = "dashboard.html";
        })
        .catch((error) => {
            alert(`Login Error: ${error.message}`);
            console.error("Login Error:", error);
        });
});

// Google Login
const googleProvider = new GoogleAuthProvider();

document.querySelector(".google-login-btn").addEventListener("click", () => {
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            alert(`Welcome, ${user.displayName}!`);
            console.log("Google User Info:", user);
            // Optional: Redirect to another page
            // window.location.href = "dashboard.html";
        })
        .catch((error) => {
            alert(`Google Login Error: ${error.message}`);
            console.error("Google Login Error:", error);
        });
});

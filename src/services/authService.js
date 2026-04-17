import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// TODO: Replace with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const loginWithEmployeeId = async (employeeId, password) => {
  try {
    // Append domain suffix to employee ID to satisfy Firebase Email/Password auth
    const email = `${employeeId}@aastmt.edu`;
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Fetch user role from Firestore
    try {
      const userDoc = await getDoc(doc(db, "users", user.uid));
      let role = "Employee"; // Default fallback
      if (userDoc.exists()) {
        role = userDoc.data().role;
      }
      return { user, role };
    } catch (firestoreError) {
      console.warn("Could not fetch user role from Firestore, defaulting to Employee.", firestoreError);
      return { user, role: "Employee" };
    }
  } catch (error) {
    throw error;
  }
};

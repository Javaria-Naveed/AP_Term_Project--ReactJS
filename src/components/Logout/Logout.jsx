// import React, { useState, useEffect } from "react";
// import firebase from "firebase/app";
// import { auth } from "../../firebase";
// import { Link, useNavigate } from "react-router-dom";

// const Logout = () => {
//   const navigate = useNavigate();

//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Subscribe to the Firebase authentication state changes
//     const unsubscribe = auth.onAuthStateChanged((authUser) => {
//       setUser(authUser);
//     });

//     // Clean up subscription on component unmount
//     return () => unsubscribe();
//   }, []);

//   const handleLogout = () => {
//     auth
//       .signOut()
//       .then(() => {
//         console.log("User signed out");
//         navigate("/");
//       })
//       .catch((error) => {
//         console.error("Error signing out: ", error);
//       });
//   };

//   return (
//     <div>
//       {user ? (
//         <div>
//           <p>Hello, {user.displayName || user.email}!</p>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <p>You are not logged in.</p>
//       )}
//     </div>
//   );
// };

// export default Logout;

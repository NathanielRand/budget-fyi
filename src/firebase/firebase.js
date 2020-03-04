import * as firebase from "firebase";
// import "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

//
// !!! REFERENCE NOTES BELOW !!!
//

// // child removed
// database.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child changed
// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child added
// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").push({
//   description: "Insurance",
//   note: "",
//   amount: 12345,
//   createdAt: 85328534985
// });

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

// database
//   .ref()
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref("expenses").push({
//   description: "Phone",
//   note: "Due each month",
//   amount: 50,
//   createdAt: 123456
// });

// database.ref().on("value", snapshot => {
//   console.log(snapshot.val());
// });

// database
//   .ref()
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log("Error fetching data:", e);
//   });

// SET
// database
//   .ref()
//   .set({
//     name: "Nathaniel Rand",
//     age: 26,
//     isSingle: false,
//     stressLevel: 6,
//     job: {
//       title: "Customer Success",
//       company: "Code/+/Trust"
//     },
//     location: {
//       city: "Charleston",
//       state: "South Carolina",
//       country: "United States"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch(e => {
//     console.log("Data failed to save", e);
//   });

// REMOVE
// database
//   .ref("isSingle")
//   .remove()
//   .then(function() {
//     console.log("Remove succeeded.");
//   })
//   .catch(function(error) {
//     console.log("Remove failed: " + error.message);
//   });

// UPDATE
// database
//   .ref("location")
//   .update({
//     city: "Charleston",
//     state: "South Carolina",
//     country: "USA"
//   })
//   .then(function() {
//     console.log("Update succeeded.");
//   })
//   .catch(function(error) {
//     console.log("Update failed: " + error.message);
//   });

// database
//   .ref()
//   .update({
//     stressLevel: 9,
//     "job/title": "SQL Developer",
//     "job/company": "Brightvine",
//     "location/city": "James Island"
//   })
//   .then(function() {
//     console.log("Update succeeded.");
//   })
//   .catch(function(error) {
//     console.log("Update failed: " + error.message);
//   });

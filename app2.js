const firebaseConfig = {
    apiKey: "AIzaSyCJjaXex8BDeAzC8esLJTtEINXtJFTSYIw",
    authDomain: "todo-app110.firebaseapp.com",
    databaseURL: "https://todo-app110-default-rtdb.firebaseio.com",
    projectId: "todo-app110",
    storageBucket: "todo-app110.firebasestorage.app",
    messagingSenderId: "452522566177",
    appId: "1:452522566177:web:ecc2dc9eae819e5e933960"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Signup function
function signUp() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return firebase.database().ref('users/' + user.uid).set({
                name: name,
                email: email
            });
        })
        .then(() => {
            console.log("User data saved to database.");
            // Clear form inputs
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
            // Redirect to Quizapp.html
            window.location.href = "Quizapp.html";
        })
        .catch((error) => {
            console.error("Error:", error.message);
            alert(error.message);
        });
}

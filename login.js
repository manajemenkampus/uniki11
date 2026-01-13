// login.js
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Tampilkan loading
        const submitBtn = loginForm.querySelector('button');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = "Loading...";
        submitBtn.disabled = true;
        
        // Firebase login
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Login berhasil
                const user = userCredential.user;
                console.log("Login berhasil:", user.email);
                
                // Redirect ke dashboard
                window.location.href = "dashboard.html";
            })
            .catch((error) => {
                // Handle error
                errorMessage.textContent = "Error: " + error.message;
                errorMessage.style.color = "red";
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
    });
    
    // Cek jika user sudah login
    auth.onAuthStateChanged((user) => {
        if (user) {
            // Jika sudah login, redirect ke dashboard
            window.location.href = "dashboard.html";
        }
    });
});
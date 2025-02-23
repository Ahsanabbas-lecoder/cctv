// Password Toggle Functionality
        document.getElementById("togglePassword").addEventListener("click", function() {
            const passwordField = document.getElementById("password");
            const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
            passwordField.setAttribute("type", type);
            this.textContent = type === "password" ? "👁️" : "🔒";
        });

        // Form Validation and Submission
        document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission

            // Get input values
            const id = document.getElementById("id").value.trim();
            const password = document.getElementById("password").value.trim();

            // Regular expressions for validation
            const idRegex = /^[0-9]{6}$/; // 6-digit number
            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Password rules

            // Predefined credentials (for demo purposes only)
            const validEmployeeID = "212021";
            const validPassword = "Ah@654225";

            let isValid = true;

            // Validate Employee ID
            if (!idRegex.test(id)) {
                document.getElementById("idError").textContent = "Employee ID must be a 6-digit number.";
                isValid = false;
            } else if (id !== validEmployeeID) {
                document.getElementById("idError").textContent = "Invalid Employee ID.";
                isValid = false;
            } else {
                document.getElementById("idError").textContent = "";
            }

            // Validate Password
            if (!passwordRegex.test(password)) {
                document.getElementById("passwordError").textContent = "Password must be at least 8 characters, containing letters, numbers, and special characters.";
                isValid = false;
            } else if (password !== validPassword) {
                document.getElementById("passwordError").textContent = "Invalid Password.";
                isValid = false;
            } else {
                document.getElementById("passwordError").textContent = "";
            }

            // Clear password field if validation fails
            if (!isValid) {
                document.getElementById("password").value = "";
            }

            // Redirect if valid
            if (isValid) {
                window.location.href = "user-site.html"; // Redirect to dashboard
            }
        });
        document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) e.preventDefault();
});
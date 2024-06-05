// Handle sign in form submission
document.getElementById('signInForm').onsubmit = function(event) {
    event.preventDefault();
    
    var username = document.getElementById('signInUsername').value;
    var password = document.getElementById('signInPassword').value;
  
    fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Sign in successful!');
        signInModal.style.display = 'none';
      } else {
        alert('Sign in failed: ' + data.message);
      }
    });
  };
  
  // Handle register form submission
  document.getElementById('registerForm').onsubmit = function(event) {
    event.preventDefault();
    
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ fullName: fullName, email: email, username: username, password: password })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Registration successful!');
        registerModal.style.display = 'none';
      } else {
        alert('Registration failed: ' + data.message);
      }
    });
  };
  
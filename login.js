  //login modal
  const loginModal = document.getElementById("loginModal");
  const loginBtn = document.getElementById("loginBtn");
  const closeBtn = document.getElementsByClassName("close")[0];

  // Open the modal
  loginBtn.onclick = function() {
    loginModal.style.display = "block";
  };

  // Close the modal
  closeBtn.onclick = function() {
    loginModal.style.display = "none";
  };

  // Close the modal when the user clicks outside of it
  window.onclick = function(event) {
    if (event.target == loginModal) {
      loginModal.style.display = "none";
    }
  };

  function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation (this can be enhanced)
    if (username === "user" && password === "password") {
      alert("Login successful!");
      loginModal.style.display = "none";
    } else {
      alert("Invalid credentials!");
    }
  }

  //subscribe
  document.querySelector("#btn-subscribe").addEventListener("click", () => {
    alert("You have successfully subscribed, now you can enjoy unlimited content!");
    // window.location.href = 'subscription.html'; // Uncomment if you have a subscription page
  });
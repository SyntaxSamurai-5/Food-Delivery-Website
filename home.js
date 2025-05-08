
  document.getElementById("signup-btn").onclick = () => {
    document.getElementById("signup-modal").style.display = "block";
  };

  document.getElementById("login-btn").onclick = () => {
    document.getElementById("login-modal").style.display = "block";
  };

  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }

  window.onclick = function(event) {
    const signupModal = document.getElementById("signup-modal");
    const loginModal = document.getElementById("login-modal");
    if (event.target === signupModal) signupModal.style.display = "none";
    if (event.target === loginModal) loginModal.style.display = "none";
  };


// script.js

window.onload = function() {
    var submitBtn = document.getElementById('submit-btn');
    submitBtn.addEventListener('click', function() {
      var messageInput = document.getElementById('message-input');
      var typedMessage = messageInput.value;
      localStorage.setItem('typedMessage', typedMessage);
    });
  };
  
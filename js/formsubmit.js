document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Send the form data to Google Script
    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          // Show success message
          const successMessage = document.getElementById("successMessage");
          successMessage.style.display = "block";

          // Clear form fields
          form.reset();
        } else {
          alert("There was an error submitting the form. Please try again.");
        }
      })
      .catch((error) => {
        alert("There was an error submitting the form. Please try again.");
        console.error("Error:", error);
      });
  });

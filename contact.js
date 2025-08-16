document.getElementById("contact-form").addEventListener("submit", async function (event) {
    event.preventDefault();
    const form = event.target;
    const status = document.getElementById("form-status");
  
    const data = new FormData(form);
  
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });
  
      if (response.ok) {
        status.textContent = "✅ Thanks for your message! I'll get back to you soon.";
        status.style.color = "#2e7d32";
        form.reset();
      } else {
        status.textContent = "❌ Oops! Something went wrong. Please try again.";
        status.style.color = "#c62828";
      }
    } catch (error) {
      status.textContent = "❌ Network error. Please check your connection.";
      status.style.color = "#c62828";
    }
  });
  
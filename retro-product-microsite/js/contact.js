// Function to create the global header navigation
function createGlobalHeaderNavigation() {
  const header = document.querySelector('header');
  // Create the navigation links in the header
  header.innerHTML = `
    <nav>
      <a href="home.html">Home</a>
      <a href="about.html">About</a>
      <a href="product.html">Product</a>
    </nav>
  `;
}

// Function to create the global footer
function createGlobalFooter() {
  const footer = document.querySelector('footer');
  // Set the footer content with the current year and copyright message
  footer.innerHTML = `
    <p>&copy; ${new Date().getFullYear()} Retro Product Micro-site. All rights reserved.</p>
  `;
}

// Call functions to create the header navigation and footer
createGlobalHeaderNavigation();
createGlobalFooter();

// Event listener for when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');

  // Event listener for navigation link clicks to handle 'active' class
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      // Remove 'active' class from all links
      navLinks.forEach((link) => link.classList.remove('active'));
      // Add 'active' class to the clicked link
      event.target.classList.add('active');
    });
  });
});
 

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const thankYouMessage = document.getElementById('thankYouMessage');
  const submitButton = document.getElementById('submitButton');

  // Event listener for form submission
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Disable the submit button and show thank you message after a delay
    submitButton.disabled = true;
    setTimeout(() => {
      contactForm.style.display = 'none';
      thankYouMessage.style.display = 'block';
    }, 1000);
  });
});

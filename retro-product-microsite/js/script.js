// Function to create the global header navigation
function createGlobalHeaderNavigation() {
    const header = document.querySelector('header');
    // Add code here to create the header navigation
  }
  
  // Function to create the global footer
  function createGlobalFooter() {
    const footer = document.querySelector('footer');
    footer.innerHTML = `
      <p>&copy; ${new Date().getFullYear()} Retro Product Micro-site. All rights reserved.</p>
    `;
  }
  
  // Call functions to create the header navigation and footer
  createGlobalHeaderNavigation();
  createGlobalFooter();
  
  // Event listener for when the DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    // Code to handle navigation link clicks
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        navLinks.forEach((link) => link.classList.remove('active'));
        event.target.classList.add('active');
      });
    });
  
    // Slideshow functionality
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slideshow img');
    function showSlide(index) {
      slides.forEach((slide) => (slide.style.display = 'none'));
      slides[index].style.display = 'block';
    }
    function nextSlide() {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
    }
    function previousSlide() {
      slideIndex = (slideIndex - 1 + slides.length) % slides.length;
      showSlide(slideIndex);
    }
    showSlide(slideIndex);
    setInterval(nextSlide, 5000);
  
    // Form submission handling
    document.addEventListener('DOMContentLoaded', () => {
      const contactForm = document.getElementById('contactForm');
      const thankYouMessage = document.getElementById('thankYouMessage');
      const submitButton = document.getElementById('submitButton');
  
      contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
  
        submitButton.disabled = true;
        setTimeout(() => {
          contactForm.style.display = 'none';
          thankYouMessage.style.display = 'block';
        }, 1000);
      });
    });
  });
  
  // Product data and cart functionality
  const products = [
    { name: 'ARROW FLASH', price: 49.99, image: 'images/product1.jpg', description: 'Arrow Flash" is a side-scrolling shoot em up game by Sega, released in 1990 for Sega Genesis/Mega Drive. Players pilot the spaceship Arrow Flash to combat enemies and bosses through challenging levels, utilizing power-ups to enhance firepower. Praised for its solid gameplay and engaging shoot em up action.' },
    // Add more product data if needed
  ];
  
  const cartItems = [];
  let total = 0;
  
  function addToCart(product) {
    cartItems.push(product);
    total += product.price;
    alert(`${product.name} added to the cart!`);
    updateCart();
  }
  
  function updateCart() {
    const cartElement = document.getElementById('cartItems');
    cartElement.innerHTML = '';
    cartItems.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartElement.appendChild(listItem);
    });
  
    const cartTotalElement = document.getElementById('cartTotal');
    cartTotalElement.textContent = `$${total.toFixed(2)}`;
  }
  
  function checkout() {
    const name = prompt("Enter name");
    const phone = prompt("Enter Phone number");
    if (cartItems.length === 0) {
      alert('Your cart is empty.');
    } else {
      alert("Your Phone number " + phone);
      alert(name + ' Thank you for your purchase!');
      cartItems.length = 0; // to clear cart
      total = 0;
      updateCart();
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const cartDiv = document.getElementById('cart');
    const cartButton = document.createElement('button');
    cartButton.textContent = 'Show Cart';
    cartButton.onclick = () => {
      updateCart();
      cartDiv.style.display = 'block';
    };
    document.body.appendChild(cartButton);
  
    const productsSection = document.getElementById('products');
    products.forEach((product) => {
      // Code to dynamically create product elements and handle adding to cart
      const productElement = document.createElement('div');
      productElement.classList.add('product');
  
      const productImage = document.createElement('img');
      productImage.src = product.image;
      productImage.alt = product.name;
      productElement.appendChild(productImage);
  
      const productName = document.createElement('h2');
      productName.textContent = product.name;
      productElement.appendChild(productName);
  
      const productDesc = document.createElement('p');
      productDesc.textContent = product.description;
      productElement.appendChild(productDesc);
  
      const productPrice = document.createElement('p');
      productPrice.textContent = `Price: $${product.price.toFixed(2)}`;
      productElement.appendChild(productPrice);
  
      const addToCartButton = document.createElement('button');
      addToCartButton.textContent = 'Add to Cart';
      addToCartButton.onclick = () => addToCart(product);
      productElement.appendChild(addToCartButton);
  
      productsSection.appendChild(productElement);
    });
  });
  
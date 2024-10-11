// Header content
const headerContent = `
<nav class="navbar">
    <div class="container">
         <a href="index.html" class="logo">
           <span>ChemiConnect</span>
        </a>
         <ul class="nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="products.html">Products</a></li>
                    <li><a href="sustainability.html">Sustainability</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="subscription.html">Subscription</a></li>
                    <li><a href="consultation.html">Consultation</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
    </div>
</nav>
`;

// Footer content
const footerContent = `
<footer>
    <div class="container">
        <p>&copy; 2024 ChemiConnect | All Rights Reserved</p>
    </div>
</footer>
`;

// Insert header and footer into the respective divs
document.getElementById('header').innerHTML = headerContent;
document.getElementById('footer').innerHTML = footerContent;

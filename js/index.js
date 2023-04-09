// Show current item when scrolling through website
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const home = document.querySelector('#home-page');
    const about = document.querySelector('#about-page');
    const events = document.querySelector('#events-page');
    const contact = document.querySelector('#contact-page');
    let scrollPos = window.scrollY;
    console.log(scrollPos); //find scroll position for swapping highlight

    //adds highlight to the navbar items in appropriate scroll position
    if(/*indow.innerWidth > 960 &&*/ scrollPos < 800){
        home.classList.add('highlight');
    }else{
        home.classList.remove('highlight');
    }
    if(/*indow.innerWidth > 960 &&*/ scrollPos > 800 && scrollPos < 1600){
        about.classList.add('highlight');
    }else{
        about.classList.remove('highlight');
    }
    if(/*indow.innerWidth > 960 &&*/ scrollPos > 1600 && scrollPos < 2400){
        events.classList.add('highlight');
    }else{
        events.classList.remove('highlight');
    }
    if(/*indow.innerWidth > 960 &&*/ scrollPos > 2400 && scrollPos < 3000){
        contact.classList.add('highlight');
    }else{
        contact.classList.remove('highlight');
    }
}
window.addEventListener('scroll', highlightMenu); 
//window.addEventListener('click', highlightMenu); 

/*
const menu = document.querySelector('#mobile-menu');
const menuItems = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('#navbar-logo');

// Toggle Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuItems.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// close Mobile Menu when clicking
const closeMobileMenu =  () => {
    const openMenu = document.querySelector('.is-active');
    if(window.innerWidth <= 960 && openMenu){
        menu.classList.toggle('is-active');
        menuItems.classList.remove('active');
    }
}

menuItems.addEventListener('click', closeMobileMenu);
navLogo.addEventListener('click', closeMobileMenu);
*/

// Select the contact form
const contactForm = document.querySelector('#contact-form');

// Add event listener for form submission
contactForm.addEventListener('submit', function(event) {
  // Prevent default form submission behavior
  event.preventDefault();
  
  // Get the form data
  const formData = new FormData(this);
  
  // Send an AJAX request to the server
  fetch('process-contact-form.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    // Handle the server response
    alert(data);
    this.reset();
  })
  .catch(error => {
    console.error(error);
    alert('An error occurred while submitting the form.');
  });
});
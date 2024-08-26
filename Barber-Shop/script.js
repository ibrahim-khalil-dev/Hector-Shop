function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
}

// Close sidebar when clicking outside or on a menu item
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const menuIcon = document.querySelector('.menu-icon');
    
    // Check if the sidebar is currently open
    if (sidebar.classList.contains('show')) {
        // Check if the click was outside the sidebar or on a menu item
        if (!sidebar.contains(event.target) && event.target !== menuIcon) {
            sidebar.classList.remove('show');
        }
    }
});

// Add click event listener to all menu items to close the sidebar
const menuItems = document.querySelectorAll('.menu-items a');
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.remove('show');
    });
});


// Form submit event listener
document.querySelector('.contact form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    // Get form values
    const firstName = document.getElementById('first-name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const barber = document.getElementById('barber').value;
    const service = document.getElementById('service').value;

    // Log form data to the console
    console.log(`First Name: ${firstName}`);
    console.log(`Phone: ${phone}`);
    console.log(`Email: ${email}`);
    console.log(`Date: ${date}`);
    console.log(`Barber: ${barber}`);
    console.log(`Service: ${service}`);

    // Display popup message
    alert('Form submitted successfully!');

    // Optionally, you can clear the form fields here if needed
    // document.querySelector('.contact form').reset();
});

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count');
    const duration = 1000; 

    const startCounter = counter => {
        const target = +counter.getAttribute('data-target');
        const updateInterval = 10;  
        const increment = target / (duration / updateInterval);

        const updateCounter = () => {
            const count = +counter.innerText.replace(/,/g, '');  
            if (count < target) {
                counter.innerText = (count + increment).toFixed(3);  
                setTimeout(updateCounter, updateInterval);
            } else {
                counter.innerText = target;  
            }
        };
        updateCounter();
    };

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter(entry.target);
                observer.unobserve(entry.target);  
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.getElementById('scroll-to-top');

    // Show the button when scrolled down 300px
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Scroll to the top when the button is clicked
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('.nav-bar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

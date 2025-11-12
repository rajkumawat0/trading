document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const aboutSection = document.querySelector(".about");
  
    if (menuToggle && aboutSection) {
      menuToggle.addEventListener("click", () => {
        aboutSection.classList.toggle("active");
      });
    }
  });
  
    
    
    function updatePrices() {
    const tickers = document.querySelectorAll('.ticker-price');
    tickers.forEach(ticker => {
        const currentPrice = parseFloat(ticker.textContent.replace('₹', '').replace(',', ''));
        const change = (Math.random() - 0.5) * 10;
        const newPrice = currentPrice + change;
        
        if (ticker.textContent.includes('₹')) {
            ticker.textContent = '₹' + newPrice.toLocaleString('en-IN', {maximumFractionDigits: 2});
        } else {
            ticker.textContent = '₹' + newPrice.toFixed(2);
        }
    });
}

// Update prices every 3 seconds
setInterval(updatePrices, 3000);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(0, 212, 255, 0.1)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255, 255, 255, 0.05)';
        });
    });
});



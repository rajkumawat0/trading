const stocks = [
    "NIFTY 50", "BANK NIFTY", "RELIANCE", "HDFC BANK",
    "TATA MOTORS", "ADANI POWER", "INFOSYS", "BHARTI AIRTEL"
  ];

  function getRandomPrice(base) {
    const change = Math.random() * 50 - 25;
    return +(base + change).toFixed(2);
  }

  function getSignal(priceChange) {
    if (priceChange >= 15) return "BUY";
    else if (priceChange <= -15) return "SELL";
    else return "HOLD";
  }

  function updateStockCards() {
    const container = document.getElementById("stocks-container");
    container.innerHTML = "";

    stocks.forEach((name, index) => {
      const base = 1000 + index * 500;
      const price = getRandomPrice(base);
      const change = price - base;
      const color = change >= 0 ? "green" : "red";
      const signal = getSignal(change);

      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <div class="stock-name">${name}</div>
        <div class="price ${color}">₹${price}</div>
        <div class="signal ${signal.toLowerCase()}" title="${signal === 'BUY' ? 'Great entry point!' : signal === 'SELL' ? 'Avoid entry!' : 'Wait & watch mode'}">${signal} SIGNAL</div>
      `;

      container.appendChild(card);
    });
  }

  updateStockCards();
  setInterval(updateStockCards, 4000);

  // Fullscreen image logic
  const fullscreen = document.getElementById("fullscreen-view");
  const fullscreenImg = fullscreen.querySelector("img");
  const zoomIn = document.getElementById("zoom-in");
  const zoomOut = document.getElementById("zoom-out");
  const closeBtn = document.querySelector(".close-btn");
  let zoomLevel = 1;

  document.querySelectorAll(".image-link").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const imgUrl = this.getAttribute("data-full");
      fullscreenImg.src = imgUrl;
      zoomLevel = 1;
      fullscreenImg.style.transform = `scale(${zoomLevel})`;
      fullscreen.style.display = "flex";
    });
  });

  fullscreen.addEventListener("click", function (e) {
    if (e.target === fullscreen || e.target === closeBtn) {
      fullscreen.style.display = "none";
    }
  });

  zoomIn.onclick = () => {
    zoomLevel += 0.1;
    fullscreenImg.style.transform = `scale(${zoomLevel})`;
  };

  zoomOut.onclick = () => {
    if (zoomLevel > 0.5) {
      zoomLevel -= 0.1;
      fullscreenImg.style.transform = `scale(${zoomLevel})`;
    }
  };

  closeBtn.onclick = () => {
    fullscreen.style.display = "none";
  };
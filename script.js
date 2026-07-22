document.addEventListener("DOMContentLoaded", () => {
  // Core Elements Retrieval
  const parallaxText = document.getElementById("parallax-text");
  const parallaxBg = document.getElementById("parallax-bg");
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const navItems = document.querySelectorAll(".nav-item");
  const sections = document.querySelectorAll("section, main");

  // 1. Mobile Menu Toggle
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const icon = menuToggle.querySelector("i");
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-xmark");
    });
  }

  // 2. High-Performance Scroll Engine (Parallax & Auto Active Tracker)
  window.addEventListener("scroll", () => {
    let scrollValue = window.scrollY;

    if (parallaxText) {
      parallaxText.style.transform = `translateY(${scrollValue * 0.45}px)`;
    }
    if (parallaxBg) {
      parallaxBg.style.transform = `translateY(${scrollValue * 0.16}px) scale(${1 + scrollValue * 0.0003})`;
    }

    // Active Navigation Tracker Logic
    let activeId = "";
    sections.forEach((section) => {
      const top = section.offsetTop - 200;
      if (scrollValue >= top) {
        activeId = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href") === `#${activeId}`) {
        item.classList.add("active");
      }
    });
  });

  // 3. Dynamic Category Filtering Matrix
  const filterBtns = document.querySelectorAll(".filter-btn");
  const targetCards = document.querySelectorAll(".destination-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterType = btn.getAttribute("data-filter");

      targetCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");
        if (filterType === "all" || cardCategory.includes(filterType)) {
          card.classList.remove("hide");
        } else {
          card.classList.add("hide");
        }
      });
    });
  });

  // 4. Interactive Expedition Timeline Database
  const itineraryTabs = document.querySelectorAll(".itinerary-tab");
  const itineraryDisplay = document.getElementById("itinerary-content");

  const phaseDatabase = {
    1: {
      title: "Phase 01: Gear Integration & Acclimatization (Days 1-2)",
      text: "Arrival at base camp processing arrays. Equipment loadouts are checked against local atmospheric forecasts. Initial physical threshold verification treks are completed to balance parameters.",
      bullets: [
        "Satellite terminal sync & equipment validation.",
        "Group integration with certified regional leads.",
      ],
    },
    3: {
      title: "Phase 02: Deep Field Transit Deployment (Days 3-4)",
      text: "Disembarkation from intermediate baseline limits into unmanaged wilderness zones. Base tracking coordinates are activated perfectly.",
      bullets: [
        "Cross-river structural scaling and navigation.",
        "Off-grid overnight campsite architecture assembly.",
      ],
    },
    5: {
      title: "Phase 03: High Velocity Summit Injection (Days 5-6)",
      text: "Executing critical peak altitude vectors. Teams handle technical elevation ascents under the direct optimization instruction.",
      bullets: [
        "Rope line locking structures setup.",
        "Peak topographic verification and sensor mapping.",
      ],
    },
    7: {
      title: "Phase 04: Regulated Extraction Protocol (Day 7)",
      text: "Deceleration loops through fallback vectors. Safe extraction point rendezvous sequence execution.",
      bullets: [
        "Safe zone geographic recovery rendezvous.",
        "Post-route biometric analysis sequence.",
      ],
    },
  };

  itineraryTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      itineraryTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const selectedDay = tab.getAttribute("data-day");
      const data = phaseDatabase[selectedDay];

      if (data) {
        let bulletsHTML = data.bullets
          .map((b) => `<li><i class="fa-solid fa-check"></i> ${b}</li>`)
          .join("");
        itineraryDisplay.innerHTML = `
                    <h3>${data.title}</h3>
                    <p>${data.text}</p>
                    <ul class="itinerary-bullets">${bulletsHTML}</ul>
                `;
      }
    });
  });

  // 5. Numerical Stat Counter Acceleration Engine
  const counters = document.querySelectorAll(".counter");

  const countActivation = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const targetCounter = entry.target;
        const limitValue = parseInt(targetCounter.getAttribute("data-target"));
        let baseValue = 0;
        const incrementSpeed = Math.ceil(limitValue / 50);

        const sequenceLoop = setInterval(() => {
          baseValue += incrementSpeed;
          if (baseValue >= limitValue) {
            targetCounter.innerText = limitValue.toLocaleString();
            clearInterval(sequenceLoop);
          } else {
            targetCounter.innerText = baseValue.toLocaleString();
          }
        }, 25);

        observer.unobserve(targetCounter);
      }
    });
  };

  const counterObserver = new IntersectionObserver(countActivation, {
    threshold: 0.5,
  });
  counters.forEach((c) => counterObserver.observe(c));
});

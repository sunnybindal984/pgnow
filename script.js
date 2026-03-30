 
  // const navbar = document.querySelector('.navbar');

  // window.addEventListener('scroll', () => {
  //   if (window.scrollY > 50) {
  //     navbar.classList.add('scrolled');
  //   } else {
  //     navbar.classList.remove('scrolled');
  //   }
  // });
  
 var swiper = new Swiper(".mySwiper", {

  slidesPerView: 3,
  spaceBetween: 20,

  centeredSlides: false, // ❌ remove gap issue

  loop: true, // 🔁 infinite scroll

  autoplay: {
    delay: 2000, // auto slide
    disableOnInteraction: false, // keep autoplay after click
  },

  speed: 800, // smooth animation

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 1,
    },
  }

});
 const properties = [
  {
    title: "PN004-The Crown Heights",
    image: "assets/pn73.jpg",
    badge: "For Student",
    type: "Boys",
    svg:'assets/man.png'   
  },

  {
    title: "PN005-Sunshine Homes",
    image: "assets/pn27.jpg",
    badge: "For Student",
    type: "Girls",
      svg:'assets/woman.png' 
  }
  ,
  {
    title: "PN005-Sunshine Homes",
    image: "assets/pn27.jpg",
    badge: "For Student",
    type: "Girls",
      svg:'assets/woman.png' 
  }
  ,

  {
    title: "PN005-Sunshine Homes",
    image: "assets/pn27.jpg",
    badge: "For Student",
    type: "Girls",
      svg:'assets/woman.png' 
  }
  ,

  {
    title: "PN005-Sunshine Homes",
    image: "assets/pn27.jpg",
    badge: "For Student",
    type: "Girls",
      svg:'assets/woman.png' 
  }
  ,

  {
    title: "PN005-Sunshine Homes",
    image: "assets/pn27.jpg",
    badge: "For Student",
    type: "Girls",
      svg:'assets/woman.png' 
  }
];
const container = document.getElementById("card-container");

container.innerHTML = properties.map(item => `
  <div class="card">

    <div class="card-image">
      <div class="room-bg">
        <img src="${item.image}" alt="">
      </div>

      <div class="badge-student">${item.badge}</div>
      <div class="badge-boys"><img src="${item.svg}" width="13px" alt=""> ${item.type}</div>
    </div>

    <div class="booking-bar">Booking Open</div>

    <div class="card-body">
      <div class="property-name">${item.title}</div>

      <div class="amenities">
         
          <div class="amenity"> <div class="amenity-icon"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1a6fc4" stroke-width="2"> <rect x="2" y="3" width="20" height="8" rx="2"/> <path d="M7 11v10M17 11v10M12 11v10"/> </svg> </div> <span>Fully Ac</span> </div> <div class="amenity"> <div class="amenity-icon"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f5a623" stroke-width="2"> <path d="M3 12L12 3l9 9"/> <path d="M9 21V12h6v9"/> </svg> </div> <span>Feel Like<br>Home</span> </div> <div class="amenity"> <div class="amenity-icon"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#29b6f6" stroke-width="2"> <path d="M12 2C12 2 5 10 5 15a7 7 0 0014 0C19 10 12 2 12 2z"/> </svg> </div> <span>R.O. Water</span> </div> <!-- 24*7 Power --> <div class="amenity"> <div class="amenity-icon"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f5c518" stroke-width="2"> <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/> </svg> </div> <span>24*7 Power</span> </div> <!-- Free WiFi --> <div class="amenity"> <div class="amenity-icon"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4caf50" stroke-width="2"> <path d="M5 12.55a11 11 0 0114.08 0"/> <path d="M1.42 9a16 16 0 0121.16 0"/> <path d="M8.53 16.11a6 6 0 016.95 0"/> <circle cx="12" cy="20" r="1" fill="#4caf50"/> </svg> </div> <span>Free WIFI</span> </div> <!-- Parking --> <div class="amenity"> <div class="amenity-icon"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7043" stroke-width="2"> <rect x="2" y="4" width="20" height="16" rx="2"/> <path d="M8 16V8h5a3 3 0 010 6H8"/> </svg> </div> <span>Parking</span> </div>
         
      </div>

    </div>
  </div>
`).join("");

const filter = document.getElementById("genderFilter");
const cards = document.querySelectorAll(".listing-card");

filter.addEventListener("change", () => {
  const value = filter.value;

  cards.forEach(card => {
    const type = card.getAttribute("data-type");

    if (value === "all" || value === type) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
});
// Initialize Swiper carousel
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/*----------------------------------------------------------------*/

/*----------------------------------------------------------------*/
// read-more
document.addEventListener("DOMContentLoaded", () => {
  const readMoreBtn = document.querySelector(".read-more-btn");
  if (readMoreBtn) {
    readMoreBtn.addEventListener("click", function () {
      const paragraph = document.querySelector(".note-text");
      if (this.textContent === "+Read more") {
        paragraph.style.whiteSpace = "normal";
        paragraph.style.overflow = "visible";
        this.textContent = "Read less";
      } else {
        paragraph.style.whiteSpace = "nowrap";
        paragraph.style.overflow = "hidden";
        this.textContent = "+Read more";
      }
    });
  }
});
/*----------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", () => {
  const listItems = document.querySelectorAll(".list-item");
  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      listItems.forEach((i) => i.classList.remove("checked"));
      item.classList.add("checked");
    });
  });
});
const menuContainer = document.querySelector(".menu-container");
const userButton = document.querySelector(".user");
userButton.addEventListener("click", (e) => {
  menuContainer.classList.toggle("open");
  e.stopPropagation();
});

document.addEventListener("click", (e) => {
  if (!menuContainer.contains(e.target) && !userButton.contains(e.target)) {
    menuContainer.classList.remove("open");
  }
});

const filter = document.querySelector(".filter");
const filterSlider = document.querySelector(".fa-sliders");

filterSlider.addEventListener("click", (event) => {
  filter.classList.toggle("open");
  event.stopPropagation();
});

document.addEventListener("click", (event) => {
  if (!filter.contains(event.target) && event.target !== filterSlider) {
    filter.classList.remove("open");
  }
});

/*----------------------------------------------------------------*/

/*----------------------------------------------------------------*/
// Manage SVG state with localStorage
const allSvgElements = document.querySelectorAll(".card svg, .heart svg");

allSvgElements.forEach((svg, index) => {
  const type = svg.closest(".card") ? "card" : "heart";
  const storageKey = `${type}State-${index}`;

  if (localStorage.getItem(storageKey) === "full") {
    svg.classList.add("full");
    svg.style.opacity = "1";
  }

  svg.addEventListener("click", (event) => {
    event.stopPropagation();
    svg.classList.toggle("full");

    if (svg.classList.contains("full")) {
      localStorage.setItem(storageKey, "full");
      svg.style.opacity = "1";
    } else {
      localStorage.setItem(storageKey, "");
      svg.style.opacity = "";
    }
  });
});
/*----------------------------------------------------------------*/

/*----------------------------------------------------------------*/
// Verify phone number functionality
const OTPinputs = document.querySelectorAll(".verify-inputs input");
const button = document.querySelector("#verify-btn");
OTPinputs.forEach((input) => {
  input.addEventListener("input", () => {
    const currentInput = input;
    const nextInput = currentInput.nextElementSibling;
    if (currentInput.value.length > 1 && currentInput.value.length == 2) {
      currentInput.value = "";
    }
    if (
      nextInput !== null &&
      nextInput.hasAttribute("disabled") &&
      currentInput.value !== ""
    ) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }
    if (!OTPinputs[3].disabled && OTPinputs[3].value !== "") {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  input.addEventListener("keyup", (e) => {
    if (e.key == "Backspace") {
      if (input.previousElementSibling != null) {
        e.target.value = "";
        e.target.setAttribute("disabled", true);
        input.previousElementSibling.focus();
      }
    }
  });
});
/*----------------------------------------------------------------*/

/*----------------------------------------------------------------*/
// Hide loader after page load
window.addEventListener("load", () => {
  const overlay = document.querySelector(".overlay");

  if (overlay) {
    overlay.classList.add("overlay-hidden");
    overlay.addEventListener(
      "transitionend",
      () => {
        if (document.body.contains(overlay)) {
          document.body.removeChild(overlay);
        }
      },
      { once: true }
    );
  }

  document.body.classList.remove("no-scroll");
});

document.body.classList.add("no-scroll");

/*----------------------------------------------------------------*/

/*----------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const dateElement = document.getElementById("current-date");
  const calendarPopup = document.getElementById("calendar-popup");
  const datePicker = document.getElementById("date-picker");
  const prevDateBtn = document.querySelector(".fa-chevron-left");
  const nextDateBtn = document.querySelector(".fa-chevron-right");
  let currentDate = new Date("2024-10-27");
  let isCalendarVisible = false;

  // Update date function
  function updateDate() {
    if (dateElement) {
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const day = String(currentDate.getDate()).padStart(2, "0");
      dateElement.textContent = `${year}-${month}-${day}`;
      datePicker.value = `${year}-${month}-${day}`;
    }
  }

  // Toggle calendar visibility
  dateElement.addEventListener("click", (event) => {
    isCalendarVisible = !isCalendarVisible; // Toggle visibility
    calendarPopup.style.display = isCalendarVisible ? "block" : "none";
    event.stopPropagation(); // Prevent event from propagating to the document
  });

  // Hide calendar when clicking outside
  document.addEventListener("click", (event) => {
    if (isCalendarVisible && !calendarPopup.contains(event.target)) {
      calendarPopup.style.display = "none";
      isCalendarVisible = false;
    }
  });

  // Previous and Next date buttons
  if (prevDateBtn && nextDateBtn) {
    prevDateBtn.addEventListener("click", () => {
      currentDate.setDate(currentDate.getDate() - 1);
      updateDate();
    });

    nextDateBtn.addEventListener("click", () => {
      currentDate.setDate(currentDate.getDate() + 1);
      updateDate();
    });
  }

  // Handle date picker change
  datePicker.addEventListener("change", (e) => {
    currentDate = new Date(e.target.value);
    updateDate();
  });

  updateDate();
});

/*----------------------------------------------------------------*/

/*----------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", () => {
  const menuBarRestaurant = document.querySelectorAll(".menu-bar .menu-item");
  const bookingMenu = document.querySelector(".menu-bar .book");
  const overviewMenu = document.querySelector(".menu-bar .overview");
  const galleryMenu = document.querySelector(".menu-bar .gallery");
  const reviewsMenu = document.querySelector(".menu-bar .reviews");

  const reservationdate = document.querySelector(
    ".reservation-container .date-header"
  );
  const reservationBooking = document.querySelector(
    ".reservation-container .booking-option"
  );
  const reservationAppointment = document.querySelectorAll(
    ".reservation-container .appointment-container"
  );
  const reservationMape = document.querySelector(
    ".reservation-container .map-restaurant"
  );
  const iconsWrapper = document.querySelector(".icons-wrapper");
  const locationRestaurant = document.querySelector(".location-restaurant");
  const allTags = document.querySelector(".all-tags");
  const pillsTab = document.querySelector(".all-pills-tab");
  const allTimer = document.querySelector(".all-timer");
  const restaurantDetails = document.querySelector(".restaurant-details");
  const workingHoursSchedule = document.querySelector(
    ".working-hours-schedule"
  );
  const mapRestaurant = document.querySelector(".map-restaurant");
  const album = document.querySelector(".album");
  const guestsHeader = document.querySelector(".guests-header");
  const ratingContainer = document.querySelector(".rating-container");
  const commentContainer = document.querySelector(".comment-container");
  const timerInline = document.querySelector(".timer-inline");

  if (menuBarRestaurant && menuBarRestaurant.length > 0) {
    menuBarRestaurant.forEach((item) => {
      item.addEventListener("click", () => {
        menuBarRestaurant.forEach((e) => e.classList.remove("active"));
        item.classList.add("active");
      });
    });
  }

  if (overviewMenu) {
    overviewMenu.addEventListener("click", () => {
      if (reservationdate) reservationdate.style.display = "none";
      if (reservationBooking) reservationBooking.style.display = "none";
      reservationAppointment.forEach((appointment) => {
        appointment.style.display = "none";
      });
      if (reservationMape) reservationMape.style.display = "none";
      if (iconsWrapper) iconsWrapper.style.display = "flex";
      if (restaurantDetails) restaurantDetails.style.display = "block";
      if (workingHoursSchedule) workingHoursSchedule.style.display = "block";
      if (mapRestaurant) mapRestaurant.style.display = "block";
      if (locationRestaurant) locationRestaurant.style.display = "flex";
      if (album) album.style.display = "none";
      if (allTags) allTags.style.display = "flex";
      if (ratingContainer) ratingContainer.style.display = "none";
      if (timerInline) timerInline.style.display = "none";
      if (pillsTab) pillsTab.style.display = "none";
      if (guestsHeader) guestsHeader.style.display = "none";
      if (allTimer) allTimer.style.display = "none";
      if (commentContainer) commentContainer.style.display = "none";
    });
  }

  if (bookingMenu) {
    bookingMenu.addEventListener("click", () => {
      if (reservationdate) reservationdate.style.display = "flex";
      if (reservationBooking) reservationBooking.style.display = "flex";
      if (pillsTab) pillsTab.style.display = "flex";
      if (allTimer) allTimer.style.display = "flex";
      reservationAppointment.forEach((appointment) => {
        appointment.style.display = "flex";
      });
      if (reservationMape) reservationMape.style.display = "flex";
      if (timerInline) timerInline.style.display = "flex";
      if (guestsHeader) guestsHeader.style.display = "flex";
      if (iconsWrapper) iconsWrapper.style.display = "none";
      if (restaurantDetails) restaurantDetails.style.display = "none";
      if (workingHoursSchedule) workingHoursSchedule.style.display = "none";
      if (mapRestaurant) mapRestaurant.style.display = "none";
      if (locationRestaurant) locationRestaurant.style.display = "none";
      if (album) album.style.display = "none";
      if (allTags) allTags.style.display = "none";
      if (ratingContainer) ratingContainer.style.display = "none";
      if (commentContainer) commentContainer.style.display = "none";
    });
  }

  if (galleryMenu) {
    galleryMenu.addEventListener("click", () => {
      if (album) album.style.display = "block";
      if (iconsWrapper) iconsWrapper.style.display = "none";
      if (restaurantDetails) restaurantDetails.style.display = "none";
      if (workingHoursSchedule) workingHoursSchedule.style.display = "none";
      if (reservationdate) reservationdate.style.display = "none";
      if (reservationBooking) reservationBooking.style.display = "none";
      if (timerInline) timerInline.style.display = "none";
      if (pillsTab) pillsTab.style.display = "none";
      if (guestsHeader) guestsHeader.style.display = "none";
      if (allTimer) allTimer.style.display = "none";
      reservationAppointment.forEach((appointment) => {
        appointment.style.display = "none";
      });
      if (reservationMape) reservationMape.style.display = "none";
      if (locationRestaurant) locationRestaurant.style.display = "none";
      if (allTags) allTags.style.display = "none";
      if (ratingContainer) ratingContainer.style.display = "none";
      if (commentContainer) commentContainer.style.display = "none";
    });
  }

  if (reviewsMenu) {
    reviewsMenu.addEventListener("click", () => {
      if (album) album.style.display = "none";
      if (iconsWrapper) iconsWrapper.style.display = "none";
      if (restaurantDetails) restaurantDetails.style.display = "none";
      if (workingHoursSchedule) workingHoursSchedule.style.display = "none";
      if (reservationdate) reservationdate.style.display = "none";
      if (reservationBooking) reservationBooking.style.display = "none";
      if (timerInline) timerInline.style.display = "none";
      if (pillsTab) pillsTab.style.display = "none";
      if (guestsHeader) guestsHeader.style.display = "none";
      if (allTimer) allTimer.style.display = "none";
      if (locationRestaurant) locationRestaurant.style.display = "none";
      reservationAppointment.forEach((appointment) => {
        appointment.style.display = "none";
      });
      if (reservationMape) reservationMape.style.display = "none";
      if (allTags) allTags.style.display = "none";
      if (ratingContainer) ratingContainer.style.display = "block";
      if (commentContainer) commentContainer.style.display = "block";
    });
  }
});
/*----------------------------------------------------------------*/

/*----------------------------------------------------------------*/
// Gallery thumbnail functionality
let currentIndex = 0;
let autoSlideInterval;

const mainImage = document.getElementById("displayed-image");
const thumbnails = document.querySelectorAll(".thumbnail");
const thumbnailContainer = document.getElementById("thumbnail-container");

// Change image function
function changeImage(element) {
  if (mainImage && element) {
    mainImage.src = element.src;
    thumbnails.forEach((thumbnail) => thumbnail.classList.remove("active"));
    element.classList.add("active");
    // Scroll horizontally within the thumbnail container
    const elementOffsetLeft = element.offsetLeft;
    const containerWidth = thumbnailContainer.offsetWidth;
    const elementWidth = element.offsetWidth;

    thumbnailContainer.scrollLeft =
      elementOffsetLeft - containerWidth / 2 + elementWidth / 2;
  }
}
// Auto-slide functionality
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    changeImage(thumbnails[currentIndex]);
  }, 4000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

function restartAutoSlide() {
  stopAutoSlide();
  startAutoSlide();
}

// Add click event listeners
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    stopAutoSlide();
    currentIndex = index;
    changeImage(thumbnail);

    setTimeout(restartAutoSlide, 5000);
  });
});

startAutoSlide();
/*----------------------------------------------------------------*/

/*----------------------------------------------------------------*/
// Scroll functionality
const container = document.querySelector(".thumbnail-container");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");
const scrollAmount = 100;

if (container) {
  if (leftArrow) {
    leftArrow.addEventListener("click", () => {
      container.scrollLeft -= scrollAmount;
    });
  }

  if (rightArrow) {
    rightArrow.addEventListener("click", () => {
      container.scrollLeft += scrollAmount;
    });
  }

  let isDragging = false;
  let startX;
  let scrollLeft;

  container.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    container.style.cursor = "grabbing";
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
  });

  container.addEventListener("mouseup", () => {
    isDragging = false;
    container.style.cursor = "grab";
  });

  container.addEventListener("mouseleave", () => {
    isDragging = false;
    container.style.cursor = "grab";
  });
}
/*----------------------------------------------------------------*/

/*----------------------------------------------------------------*/
// Initialize counters for dropdown
document.addEventListener("DOMContentLoaded", () => {
  const dropdownHeaders = document.querySelectorAll(".dropdown-header");
  dropdownHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const parent = header.parentElement;
      parent.classList.toggle("open");
    });
  });

  const personRow = document.querySelectorAll(".guest-row")[0];
  const childRow = document.querySelectorAll(".guest-row")[1];
  const floorRow = document.querySelector(".dropdown-content");

  if (personRow) {
    const personDecrement = personRow.querySelector(".decrement");
    const personIncrement = personRow.querySelector(".increment");
    const personCount = document.getElementById("person-count");
    if (personDecrement && personIncrement && personCount) {
      setupCounter(personDecrement, personIncrement, personCount, 0, 10);
    }
  }

  if (childRow) {
    const childDecrement = childRow.querySelector(".decrement");
    const childIncrement = childRow.querySelector(".increment");
    const childCount = document.getElementById("child-count");
    if (childDecrement && childIncrement && childCount) {
      setupCounter(childDecrement, childIncrement, childCount, 0, 10);
    }
  }

  if (floorRow) {
    const floorDecrement = floorRow.querySelector(".decrement-foor");
    const floorIncrement = floorRow.querySelector(".increment-foor");
    const floorCount = document.getElementById("floor-count");
    if (floorDecrement && floorIncrement && floorCount) {
      setupCounter(floorDecrement, floorIncrement, floorCount, 1, 20);
    }
  }
});

function setupCounter(
  decrementBtn,
  incrementBtn,
  countElement,
  min = 0,
  max = 10
) {
  incrementBtn.addEventListener("click", () => {
    let count = parseInt(countElement.textContent);
    if (count < max) {
      count++;
      countElement.textContent = count;
    }
  });
  decrementBtn.addEventListener("click", () => {
    let count = parseInt(countElement.textContent);
    if (count > min) {
      count--;
      countElement.textContent = count;
    }
  });
}
/*----------------------------------------------------------------*/

/*----------------------------------------------------------------*/
//dark-mode-code
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  body.classList.remove("dark-mode");
  themeToggle.checked = false;
  themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  });
});
/*----------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const gridView = document.querySelector(".toggle-view .grid-view");
  const listView = document.querySelector(".toggle-view .list-view");
  const cardsContainer = document.querySelector(".cards-place-list");

  const gridViewIcon = document.querySelector(".toggle-view img.grid-view");
  const listViewIcon = document.querySelector(".toggle-view img.list-view");

  if (gridView && listView && cardsContainer && gridViewIcon && listViewIcon) {
    gridView.addEventListener("click", () => {
      cardsContainer.classList.remove("list-view");
      cardsContainer.classList.add("grid-view");
      gridViewIcon.src = "assets/Images/grid-view-active.svg";
      listViewIcon.src = "assets/Images/list-gray.png";
    });

    listView.addEventListener("click", () => {
      cardsContainer.classList.remove("grid-view");
      cardsContainer.classList.add("list-view");
      gridViewIcon.src = "assets/Images/grid-view.svg";
      listViewIcon.src = "assets/Images/list-view-active.svg";
    });
  }
});
/*----------------------------------------------------------------*/

/*----------------------------------------------------------------*/
const searchField = document.getElementById("searchField");
const dropDownList = document.querySelector(".drop-down-list-search");

searchField.addEventListener("input", () => {
  if (searchField.value.trim() !== "") {
    dropDownList.style.display = "block";
  } else {
    dropDownList.style.display = "none";
  }
});

document.addEventListener("click", (event) => {
  if (
    !searchField.contains(event.target) &&
    !dropDownList.contains(event.target)
  ) {
    dropDownList.style.display = "none";
  }
});

const gridItems = document.querySelectorAll(".grid-item-search");

gridItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const readMoreLinks = document.querySelectorAll(".read-more");

  readMoreLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const parentParagraph = link.parentElement;

      if (link.textContent === "- Read less") {
        parentParagraph.textContent = parentParagraph.dataset.shortText;
        parentParagraph.appendChild(link);
        link.textContent = "+ Read more";
      } else {
        parentParagraph.textContent = parentParagraph.dataset.fullText;
        parentParagraph.appendChild(link);
        link.textContent = "- Read less";
      }
    });

    const parentParagraph = link.parentElement;
    const fullText = parentParagraph.textContent.trim();
    const shortText =
      fullText.substring(0, 100) + (fullText.length > 100 ? "..." : "");

    parentParagraph.dataset.fullText = fullText;
    parentParagraph.dataset.shortText = shortText;

    parentParagraph.textContent = shortText;
    parentParagraph.appendChild(link);
  });
});

const navItems = document.querySelectorAll(".nav-item-mobile");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});
/*----------------------------------------------------------------*/

/*----------------------------------------------------------------*/
const opactioBtnYes = document.querySelectorAll(".opactio-btn .btn.yes");
const opactioBtn = document.querySelectorAll(".opactio-btn");
const occasionOpaction = document.querySelectorAll(".occasion-opaction");

opactioBtnYes.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    opactioBtn[index].style.display = "none";

    occasionOpaction[index].style.display = "block";
  });
});
/*----------------------------------------------------------------*/

/*----------------------------------------------------------------*/
//categories
const categories = document.querySelector(".categories");

if (categories) {
  let isDragging = false;
  let startX;
  let scrollLeft;

  categories.addEventListener("mousedown", (e) => {
    e.preventDefault(); 
    isDragging = true;
    startX = e.pageX - categories.offsetLeft;
    scrollLeft = categories.scrollLeft;
  });

  categories.addEventListener("mouseleave", () => {
    isDragging = false;
  });

  categories.addEventListener("mouseup", () => {
    isDragging = false;
  });

  categories.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - categories.offsetLeft;
    const walk = (x - startX) * 2;
    categories.scrollLeft = scrollLeft - walk;
  });
} else {
  console.log("Element '.categories' not found. Skipping event listeners.");
}
/*----------------------------------------------------------------*/

/*----------------------------------------------------------------*/
/*========>> selected <<=======*/
const selected = document.querySelector(".selected");
const options = document.querySelector(".options");
const selectedArrow = document.querySelector(".selected .fa-solid");
const optionItems = document.querySelectorAll(".options div");

selected.addEventListener("click", (event) => {
  options.classList.toggle("show");
  selectedArrow.classList.toggle("show");
  event.stopPropagation();
});

optionItems.forEach((option) => {
  option.addEventListener("click", () => {
    options.classList.remove("show");
    selectedArrow.classList.remove("show");
  });
});

document.addEventListener("click", (event) => {
  if (!selected.contains(event.target) && !options.contains(event.target)) {
    options.classList.remove("show");
    selectedArrow.classList.remove("show");
  }
});
/*----------------------------------------------------------------*/

/*----------------------------------------------------------------*/
//price-options
const filterSalyer = document.querySelectorAll('.price-options div');
filterSalyer.forEach(option => {
  option.addEventListener('click', () => {
    filterSalyer.forEach(opt => opt.classList.remove('active'));
    
    option.classList.add('active');
  });
});
/*----------------------------------------------------------------*/

/*----------------------------------------------------------------*/
const filterIcons = document.querySelectorAll(".icons-filter-search .filter-icon .filter-div");
const mapIcons = document.querySelectorAll(".icons-filter-search .map-icon .map-div");
const filterModal = document.querySelector(".filter-modal");
const MapModal = document.querySelector(".map-modal");
const closeBtn = document.querySelector(".filter-header .close-btn");
const closeBtnMpa = document.querySelector(".map-header .close-btn");
const resetBtn = document.querySelector(".reset-btn"); 
const body = document.body;
const checkGradantElements = document.querySelectorAll(".checkGradant");

filterIcons.forEach(filterIcon => {
    filterIcon.addEventListener("click", () => {
        filterModal.classList.add("show");
        body.style.height = "100vh";  
        body.style.overflow = "hidden";  
    });
});

mapIcons.forEach(mapIcon => {
  mapIcon.addEventListener("click", () => {
    MapModal.classList.add("show");
        body.style.height = "100vh";  
        body.style.overflow = "hidden";  
    });
});

if (closeBtn && filterModal) {
  closeBtn.addEventListener("click", () => {
    filterModal.classList.remove("show");
    body.style.height = "";  
    body.style.overflow = ""; 
  });
}
if (closeBtnMpa && MapModal) {
  closeBtnMpa.addEventListener("click", () => {
    MapModal.classList.remove("show");
    console.log("MapModal closed");
    body.style.height = "";  
    body.style.overflow = ""; 
  });
}

if (resetBtn && checkGradantElements.length > 0 && filterModal) {
  resetBtn.addEventListener("click", () => {
    checkGradantElements.forEach((checkbox) => {
      checkbox.checked = false;  
    });

    filterModal.classList.remove("show");
    console.log("Filters reset");
    body.style.height = "";  
    body.style.overflow = ""; 
  });
}
const seeAllBtns = document.querySelectorAll(".see-all-btn");

seeAllBtns.forEach((btn) => {
  let expanded = false;

  btn.addEventListener("click", () => {
    const optionsContainer = btn.previousElementSibling;
    if (!expanded) {
      optionsContainer.innerHTML += `
        <label>
          <input class="checkGradant" type="checkbox">
          <span></span>
          <p>Option 5</p>
        </label>
        <label>
          <input class="checkGradant" type="checkbox">
          <span></span>
          <p>Option 6</p>
        </label>
        <label>
          <input class="checkGradant" type="checkbox">
          <span></span>
          <p>Option 7</p>
        </label>
        <label>
          <input class="checkGradant" type="checkbox">
          <span></span>
          <p>Option 8</p>
        </label>
        <label>
          <input class="checkGradant" type="checkbox">
          <span></span>
          <p>Option 9</p>
        </label>
      `;
      btn.textContent = "See Less";
    } else {
      const allLabels = optionsContainer.querySelectorAll("label");
      allLabels.forEach((label, index) => {
        if (index >= 4) label.remove();
      });
      btn.textContent = "See All";
    }
    expanded = !expanded;
  });
});
/*----------------------------------------------------------------*/

/*----------------------------------------------------------------*/
//auth-continue-btn
document.addEventListener('DOMContentLoaded', () => {
  const continueBtn = document.querySelector('.auth-continue-btn.booking');
  const popupConditions = document.querySelector('.popup-conditions');
  const overlayConditions = document.querySelector('.overlay-conditions');
  const acceptButton = document.querySelector('.buttons .accept');
  const paymentContainer = document.querySelector('.payment-container');
  const loaderOverlay = document.querySelector('.overlay');
  const body = document.body;

  if (continueBtn && popupConditions && overlayConditions) {
    continueBtn.addEventListener('click', () => {
      popupConditions.style.display = "flex";
      setTimeout(() => {
        popupConditions.classList.add('show');
        overlayConditions.classList.add('show');
        body.style.overflow = "hidden";
      }, 10);
    });
  }

  if (acceptButton && popupConditions && paymentContainer && loaderOverlay) {
    acceptButton.addEventListener('click', () => {
      popupConditions.classList.remove('show'); 

      loaderOverlay.style.display = "block";
      loaderOverlay.classList.remove('overlay-hidden');

      setTimeout(() => {
        loaderOverlay.style.display = "none"; 
        loaderOverlay.classList.add('overlay-hidden'); 
        paymentContainer.classList.add('show');
      }, 1000);
    });
  }

  document.addEventListener('click', (event) => {
    const isOutsidePopup = popupConditions && continueBtn &&
                           !popupConditions.contains(event.target) && 
                           !continueBtn.contains(event.target);

    const isOutsidePayment = paymentContainer && acceptButton &&
                             !paymentContainer.contains(event.target) && 
                             !acceptButton.contains(event.target);

    if (isOutsidePopup && isOutsidePayment) {
      popupConditions?.classList.remove('show');
      paymentContainer?.classList.remove('show');
      overlayConditions?.classList.remove('show');
      body.style.overflow = ""; 
    }
  });
});
/*----------------------------------------------------------------*/

/*----------------------------------------------------------------*/
//card-number
 document.addEventListener('DOMContentLoaded', () => {
  const cardNumberInput = document.getElementById('card-number');
  const expiryInput = document.getElementById('expiry');
  const cvvInput = document.getElementById('cvv');
  const payButton = document.getElementById('pay-button');

  const checkInputs = () => {
    const cardNumber = cardNumberInput?.value.trim();
    const expiry = expiryInput?.value.trim();
    const cvv = cvvInput?.value.trim();

    if (cardNumber && expiry && cvv) {
      payButton.disabled = false; 
    } else {
      payButton.disabled = true; 
    }
  };

  [cardNumberInput, expiryInput, cvvInput].forEach((input) => {
    input?.addEventListener('input', checkInputs);
  });

  payButton?.addEventListener('click', () => {
    window.location.href = 'booked.html'; 
  });
});
/*----------------------------------------------------------------*/

/*----------------------------------------------------------------*/
//cards-place-list
document.addEventListener('DOMContentLoaded', () => {
  const cardsPlaceList = document.querySelector('.cards-place-list');

  if (cardsPlaceList) {
    const updateView = () => {
      if (window.innerWidth < 1024) {
        cardsPlaceList.classList.add('list-view');
      } else {
        cardsPlaceList.classList.remove('list-view');
      }
    };
    updateView();

    window.addEventListener('resize', updateView);
  }
});
/*----------------------------------------------------------------*/

/*----------------------------------------------------------------*/
//toggle-btn
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.toggle-btn');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
});
/*----------------------------------------------------------------*/

/*----------------------------------------------------------------*/
//btn-opaction
document.addEventListener("DOMContentLoaded", () => {
  const allLabels = document.querySelectorAll(".btn-opaction, .btn-allergens");

  allLabels.forEach((label) => {
    label.addEventListener("click", () => {
      label.classList.toggle("active");
    });
  });
});

/*----------------------------------------------------------------*/

/*----------------------------------------------------------------*/
document.querySelectorAll(".cyberpunk-checkbox, .Apple-Pay img").forEach((element) => {
  element.addEventListener("click", (e) => {
    document.querySelectorAll(".cyberpunk-checkbox").forEach((checkbox) => {
      checkbox.checked = false;
    });

    const parent = e.target.closest(".Apple-Pay");
    const checkbox = parent.querySelector(".cyberpunk-checkbox");

    checkbox.checked = true;
  });
});
/*----------------------------------------------------------------*/

/*----------------------------------------------------------------*/
//custom-text
document.addEventListener('DOMContentLoaded', () => {
  const customText = document.querySelector('.custom-text');
  const overlay = document.querySelector('.custom-overlay');
  
  if (customText && overlay) {
      customText.addEventListener('click', () => {
          overlay.style.display = 'none';
      });
  }

  if (overlay) {
      overlay.addEventListener('click', (event) => {
          if (event.target === overlay) {
              overlay.style.display = 'none';
          }
      });
  }

  const popupWrapper = document.querySelector('.popup-modal-wrapper');
  const closeButton = document.querySelector('.popup-close-button');
  const infoButtons = document.querySelectorAll('.information-restaurant');

  if (popupWrapper && closeButton && infoButtons) {
      infoButtons.forEach(button => {
          button.addEventListener('click', () => {
              popupWrapper.classList.add('open');
              document.body.classList.add('no-scroll');
          });
      });

      closeButton.addEventListener('click', () => {
          popupWrapper.classList.remove('open');
          document.body.classList.remove('no-scroll');
      });
  }
});
/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
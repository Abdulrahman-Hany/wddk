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

      // Check if already expanded
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

    // Store short and full texts in data attributes
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

const navItems = document.querySelectorAll('.nav-item-mobile');

navItems.forEach(item => {
  item.addEventListener('click', () => {
      navItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
});

/*===========*/
const opactioBtnYes = document.querySelectorAll('.opactio-btn .btn.yes');
const opactioBtn = document.querySelectorAll('.opactio-btn');
const occasionOpaction = document.querySelectorAll('.occasion-opaction');

opactioBtnYes.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // إخفاء الـ opactio-btn
        opactioBtn[index].style.display = 'none';
        
        // إظهار الـ occasion-opaction
        occasionOpaction[index].style.display = 'block';
    });
});


/*===========*/
const categories = document.querySelector('.categories');

if (categories) {
    let isDragging = false;
    let startX;
    let scrollLeft;

    categories.addEventListener('mousedown', (e) => {
        e.preventDefault(); // منع التحديد الافتراضي
        isDragging = true;
        startX = e.pageX - categories.offsetLeft;
        scrollLeft = categories.scrollLeft;
    });

    categories.addEventListener('mouseleave', () => {
        isDragging = false; // إيقاف السحب عند مغادرة الماوس للعنصر
    });

    categories.addEventListener('mouseup', () => {
        isDragging = false; // إيقاف السحب عند إفلات الماوس
    });

    categories.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - categories.offsetLeft;
        const walk = (x - startX) * 2; // التحكم بسرعة السحب
        categories.scrollLeft = scrollLeft - walk;
    });
} else {
    console.log("Element '.categories' not found. Skipping event listeners.");
}


/*==============*/

// Scroll animation logic
const animatedItems = document.querySelectorAll(".animate-on-scroll");

const handleScroll = () => {
  animatedItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add("active");
    }
  });
};

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);

// ----------------------------------
// Scroll animation
let lastScrollTop = 0;

const scrollElements = document.querySelectorAll(".scroll-animate");

const handleScrolls = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  scrollElements.forEach((el) => {
    const rect = el.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      if (scrollTop > lastScrollTop) {
        // Scrolling Down
        el.classList.add("scroll-down");
        el.classList.remove("scroll-up");
      } else {
        // Scrolling Up
        el.classList.add("scroll-up");
        el.classList.remove("scroll-down");
      }
    }
  });

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
};

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);

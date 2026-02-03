document.addEventListener("DOMContentLoaded", () => {

  const counters = document.querySelectorAll(".stat-number");
  let started = false;

  function startCounter() {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const speed = 100; 

      const updateCount = () => {
        const current = +counter.innerText;
        const increment = Math.ceil(target / speed);

        if (current < target) {
          counter.innerText = current + increment;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }

  function onScroll() {
    const statsSection = document.querySelector(".stats");
    const sectionTop = statsSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100 && !started) {
      startCounter();
      started = true;
      window.removeEventListener("scroll", onScroll);
    }
  }

  window.addEventListener("scroll", onScroll);
});

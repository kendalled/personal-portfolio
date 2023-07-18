export function animateOnView() {
  const animateOnScroll = (elements: any) => {
    elements.forEach((element: any) => {
      if (element.isIntersecting) {
        element.target.classList.add("md:animate-fadeDown");
      }
    });
  };

  const observer = new IntersectionObserver(animateOnScroll);
  const elements = document.querySelectorAll(".animate");

  elements.forEach((target) => {
    observer.observe(target);
  });
}

export function smoothScrollTo(id: string) {
  let element = document.getElementById(id);

  if (window == null) return;
  if (element == null) return;

  window.scrollTo({ behavior: "smooth", top: element.offsetTop - 90 });
}

export function smoothScrollToBottom() {
  if (window == null) return;

  window.scrollTo({ behavior: "smooth", top: document.body.scrollHeight });
}

export function disableScroll() {
  document.body.style.overflow = "hidden";
}

export function enableScroll() {
  document.body.style.overflow = "auto";
}

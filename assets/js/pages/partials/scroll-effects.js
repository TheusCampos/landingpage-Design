// Efeitos de entrada ao rolar (fade up) com fallback
const animatedElements = document.querySelectorAll(
  '.project-card, .process-item, h1, h2, .service-card, .testimonial, .faq__item, .about-col--intro, .about-col--specs, .about-col--media'
);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedElements.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
  });
} else {
  // Fallback simples: mostra tudo sem animação
  animatedElements.forEach((el) => {
    el.style.opacity = 1;
    el.style.transform = 'none';
  });
}

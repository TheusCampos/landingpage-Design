document.addEventListener('DOMContentLoaded', () => {
  const heroSection = document.querySelector('.hero');
  const floatingCard = document.querySelector('.hero-floating-card');
  const heroGlow = document.querySelector('.hero-glow');
  const heroContent = document.querySelector('.hero-content');

  // Entrance Animation
  const animateEntrance = () => {
    if (heroContent) {
      heroContent.style.opacity = '0';
      heroContent.style.transform = 'translateY(20px)';
      heroContent.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
      
      setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
      }, 100);
    }

    /* Animation disabled for hero-floating-card
    if (floatingCard) {
      floatingCard.style.opacity = '0';
      floatingCard.style.transform = 'translateY(20px) translateX(0)'; // Reset for entrance
      floatingCard.style.transition = 'opacity 1.2s ease-out 0.5s, transform 1.2s ease-out 0.5s';
      
      setTimeout(() => {
        floatingCard.style.opacity = '1';
        floatingCard.style.transform = 'translateY(-50%) translateX(0)'; // Back to CSS default
        
        // Remove transition after entrance to allow mouse move effect
        setTimeout(() => {
          floatingCard.style.transition = 'transform 0.1s ease-out';
        }, 1500);
      }, 100);
    }
    */
  };

  animateEntrance();

  // Mouse Move Parallax Effect
  if (heroSection && window.matchMedia("(min-width: 992px)").matches) {
    heroSection.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate position relative to center (-1 to 1)
      const xPos = (clientX / innerWidth - 0.5) * 2;
      const yPos = (clientY / innerHeight - 0.5) * 2;

      /* Animation disabled for floatingCard
      // Move Floating Card (Inverse direction for depth)
      if (floatingCard) {
        // Keep the base translateY(-50%) and add parallax
        floatingCard.style.transform = `translateY(calc(-50% + ${yPos * 20}px)) translateX(${xPos * -20}px)`;
      }
      */

      // Move Glow (Follow direction slightly)
      if (heroGlow) {
        heroGlow.style.transform = `translate(${xPos * 30}px, ${yPos * 30}px)`;
      }
    });
  }
});

// Cursor customizado e efeitos de hover
// Nota: Mantém o mesmo comportamento do código inline original

// Inicializa cursor customizado
const cursorDot = document.getElementById('cursor-dot');
const cursorOutline = document.getElementById('cursor-outline');

if (cursorDot && cursorOutline) {
  window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Ponto segue instantaneamente
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Círculo segue com leve atraso
    cursorOutline.animate({ left: `${posX}px`, top: `${posY}px` }, { duration: 500, fill: 'forwards' });
  });
}

// Aplica estado de hover para elementos interativos
const hoverTriggers = document.querySelectorAll('.hover-trigger, a');
hoverTriggers.forEach((trigger) => {
  trigger.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
  trigger.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
});

const tiltCard = (e, card, setMouse, gradientColor) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Calculate tilt based on mouse position
  const tiltX = (x / rect.width - 0.5) * 20; // Max tilt of 10 degrees
  const tiltY = (y / rect.height - 0.5) * 10; // Max tilt of 10 degrees
  setMouse({ x, y });

  // Apply the tilt
  card.style.transform = `rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;

  // Calculate which side is nearest
  const distanceToLeft = x;
  const distanceToRight = rect.width - x;
  const distanceToTop = y;
  const distanceToBottom = rect.height - y;

  const minDistance = Math.min(distanceToLeft, distanceToRight, distanceToTop, distanceToBottom);

  // Reset borders
  card.style.borderLeft = '';
  card.style.borderRight = '';
  card.style.borderTop = '';
  card.style.borderBottom = '';

  let borderColor = `2px solid ${gradientColor}`;
  // Apply border to nearest side
  if (minDistance === distanceToLeft) {
    card.style.borderLeft = borderColor; // You can change color and width as needed
  } else if (minDistance === distanceToRight) {
    card.style.borderRight = borderColor;
  } else if (minDistance === distanceToTop) {
    card.style.borderTop = borderColor;
  } else {
    card.style.borderBottom = borderColor;
  }
};

const resetTiltCard = (card) => {
  card.style.transform = '';
  card.style.borderLeft = '';
  card.style.borderRight = '';
  card.style.borderBottom = '';
  card.style.borderTop = '';
};

export { tiltCard, resetTiltCard };

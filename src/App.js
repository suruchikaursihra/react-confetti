import React from 'react';
import Confetti from 'react-dom-confetti';
import './style.css';

export default function App() {
  const [isExploding, setIsExploding] = React.useState(false);

  const config = {
    angle: '10',
    spread: '360',
    startVelocity: 30,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 5000,
    stagger: 3,
    width: '12px',
    height: '12px',
    perspective: '500px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
  };

  return (
    <>
      <a
        href="#"
        class="button pulse"
        onClick={() => setIsExploding(!isExploding)}
      >
        Subscribe
        <Confetti active={isExploding} config={config} />
      </a>
    </>
  );
}

import React from 'react';
import Confetti from 'react-dom-confetti';
import './style.css';

export default function App() {
  const [isExploding, setIsExploding] = React.useState(false);

  const config = {
    angle: '280',
    spread: '360',
    startVelocity: 30,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 4000,
    stagger: 3,
    width: '12px',
    height: '12px',
    perspective: '500px',
    colors: ['#F491F7', '#8DF2C9'],
    // colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
  };

  return (
    <>
      <a class="button pulse" onClick={() => setIsExploding(!isExploding)}>
        <Confetti active={isExploding} config={config} />
        Subscribe
      </a>
    </>
  );
}

import React from 'react';
import Confetti from 'react-dom-confetti';

export default function App() {
  const [isExploding, setIsExploding] = React.useState(false);

  const config = {
    angle: '90',
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
      <button
        style={{
          width: 100,
          height: 20,
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          margin: 'auto',
        }}
        onClick={() => setIsExploding(!isExploding)}
      >
        Explore
        <Confetti active={isExploding} config={config} />
      </button>
    </>
  );
}

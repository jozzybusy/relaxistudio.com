import { useRef, useState } from 'react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  backgroundImage?: string;
  hideContentOnHover?: boolean;
}

const SpotlightCard = ({ children, className = '', spotlightColor = 'rgba(0, 229, 255, 0.2)', backgroundImage, hideContentOnHover = true }: SpotlightCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
    setIsHovered(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setIsHovered(false);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl border border-neutral-800 overflow-hidden ${className}`}
    >
      {/* Content (visible by default, hidden on hover if hideContentOnHover is true) */}
      <div
        className={`relative z-20 transition-opacity duration-300 ease-in-out p-8 ${
          hideContentOnHover && isHovered ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {children}
      </div>
      
      {/* Image (hidden by default, shown on hover) */}
      {backgroundImage && (
        <div
          className={`absolute inset-0 z-10 transition-opacity duration-300 ease-in-out ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={backgroundImage}
            alt="Service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>
      )}
      
      {/* Spotlight effect */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out z-30"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`
        }}
      />
    </div>
  );
};

export default SpotlightCard;
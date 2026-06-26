import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark'; // kept for backward compatibility if needed, but using the exact Cloudinary logo image
  className?: string;
}

export default function Logo({ variant = 'light', className = '' }: LogoProps) {
  const imageUrl = variant === 'dark' 
    ? 'https://res.cloudinary.com/dfywgxkn3/image/upload/v1782511777/white_logo_for_love_2_iron_4_l2n1z4.png'
    : 'https://res.cloudinary.com/dfywgxkn3/image/upload/v1782511777/logo_for_love_2_iron_2_sn3eha.png';

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={imageUrl}
        alt="Love 2 Iron Logo"
        className="w-full h-auto object-contain select-none"
        style={{ imageRendering: 'auto' }}
        referrerPolicy="no-referrer"
        loading="eager"
      />
    </div>
  );
}

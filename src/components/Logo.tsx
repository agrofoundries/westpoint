import React from 'react';

type Props = {
  className?: string;
  style?: React.CSSProperties;
  variant?: 'light' | 'dark' | 'transparent';
  division?: 'infrastructure' | 'water' | 'group';
  height?: string | number;
};

export default function Logo({
  className = '',
  style,
  division = 'group',
  height = '56px'
}: Props) {
  let logoSrc = '/logos/logo-white.png';
  let altText = 'Westpoint Group Companies Logo';

  if (division === 'infrastructure') {
    logoSrc = '/logos/westpoint-infrastructure.png';
    altText = 'Westpoint Infrastructure Logo';
  } else if (division === 'water') {
    logoSrc = '/logos/Westpoint-Waterworks-Corporate-Logo.png';
    altText = 'Westpoint Waterworks Logo';
  }

  return (
    <a
      href="/"
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        ...style
      }}
    >
      <img
        src={logoSrc}
        alt={altText}
        style={{
          height,
          width: 'auto',
          objectFit: 'contain',
          objectPosition: 'left center'
        }}
      />
    </a>
  );
}

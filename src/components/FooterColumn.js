import React from 'react';

export default function FooterColumn({ heading = 'column heading' }) {
  return (
    <div>
      <h1 className="heading">{heading}</h1>
    </div>
  );
}

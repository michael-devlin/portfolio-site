import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
text-align:center;
  font-size: 1.5rem;
p {
    font-family: 'Quicksand Regular'
    font-size: 3.5rem;
}
h2 {
  font-family: 'Montserrat Bold';
    font-size: 6rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
    margin-bottom: 0.8rem;
}

@media only screen and (max-width: 768px) {
p {
    font-size: 1.2rem
}
h2 {
    font-size: 3.2rem;
}
}
`;

export default function SectionTitle({
  subheading = 'Subheading',
  heading = 'Heading',
}) {
  return (
    <SectionTitleStyle className="section-title">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}

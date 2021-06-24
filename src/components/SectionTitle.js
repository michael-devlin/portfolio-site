import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
text-align:center;
p {
    font-family: 'Quicksand Regular'
    font-size: 2rem;
}
h2 {
    font-family: 'Montserrat Bold';
    font-size: 6rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
}

@media only screen and (max-width: 768px) {

}
`;

export default function SectionTitle() {
  return (
    <SectionTitleStyle>
      <p>Subtitle goes here</p>
      <h2>Title goes here</h2>
    </SectionTitleStyle>
  );
}

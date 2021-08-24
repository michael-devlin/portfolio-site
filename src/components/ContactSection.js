import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import ContactInfoItem from './ContactInfoItem';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contact" subheading="get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+447942679140" />
            <ContactInfoItem
              icon={<MdEmail />}
              text="michaeldevfay@gmail.com"
            />
            <ContactInfoItem text="London, UK" />
          </div>
          <div className="right" />
        </div>
      </div>
    </ContactSectionStyle>
  );
}

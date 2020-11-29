import React from 'react';
import ContactHero from '../Components/ContactHero';
import ContactDetails from '../Components/ContactDetails';
import ContactTop from '../Components/ContactTop';
import Contactform from '../Components/Contactform';
function Contact() {
  return (
    <div>
      <ContactHero />
      <ContactTop />
      <ContactDetails />
      <Contactform />
    </div>
  );
}

export default Contact;

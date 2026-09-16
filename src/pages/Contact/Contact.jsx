'use client';

import ContactHero from './sections/ContactHero';
import ContactForm from './sections/ContactForm';
import ContactInfo from './sections/ContactInfo';

export default function ContactPage() {
  return (
    <main>
      <ContactHero />

      <ContactForm />

      <ContactInfo />
    </main>
  );
}

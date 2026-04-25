'use client';

import ContactHero from './sections/ContactHero';
import ContactForm from './sections/ContactForm';
import ContactInfo from './sections/ContactInfo';
import ContactA from './sections/ContactA';
export default function ContactPage() {
  return (
    <main>
      <ContactHero />

      <ContactForm />
      <ContactA />
      <ContactInfo />
    </main>
  );
}

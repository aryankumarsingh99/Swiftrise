'use client';

import { useState } from 'react';

const termsSections = [
  {
    title: "1. Acceptance of Terms",
    paragraphs: [
      "By accessing or using SwiftRise, you agree to be bound by these Terms of Service. If you do not agree, you must not use the platform.",
    ],
  },
  {
    title: "2. Description of Service",
    paragraphs: [
      "SwiftRise provides an event management platform that enables organizers, exhibitors, and attendees to manage events, registrations, communication, and analytics efficiently.",
    ],
  },
  {
    title: "3. User Accounts",
    bullets: [
      "Users must provide accurate and complete information during registration",
      "You are responsible for maintaining the confidentiality of your account credentials",
      "Any activity under your account is your responsibility",
    ],
  },
  {
    title: "4. Use of the Platform",
    paragraphs: ["You agree not to:"],
    bullets: [
      "Use the service for unlawful or fraudulent purposes",
      "Interfere with system security or operations",
      "Upload harmful, misleading, or unauthorized content",
    ],
  },
  {
    title: "5. Data and Privacy",
    paragraphs: [
      "SwiftRise collects and processes user data such as name, email, phone number, and usage data to improve services and communication.",
      "Data is used to:",
    ],
    bullets: [
      "Provide and maintain services",
      "Improve platform performance",
      "Communicate updates and support",
    ],
  },
  {
    title: "6. Third-Party Sharing",
    paragraphs: ["Information may be shared:"],
    bullets: [
      "With service providers",
      "When legally required",
      "During business transfers (e.g., merger/acquisition)",
    ],
  },
  {
    title: "7. Intellectual Property",
    paragraphs: [
      "All platform content, features, and technology are owned by SwiftRise and protected under applicable laws. Unauthorized use is strictly prohibited.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    paragraphs: ["SwiftRise shall not be liable for:"],
    bullets: [
      "Indirect or consequential damages",
      "Data loss or service interruptions",
      "Unauthorized access beyond reasonable control",
    ],
  },
  {
    title: "9. Termination",
    paragraphs: [
      "SwiftRise reserves the right to suspend or terminate accounts that violate these terms without prior notice.",
    ],
  },
  {
    title: "10. Changes to Terms",
    paragraphs: [
      "Terms may be updated periodically. Continued use of the platform implies acceptance of revised terms.",
    ],
  },
  {
    title: "11. Contact Information",
    paragraphs: ["For support or legal queries:"],
    bullets: ["Email: contactswiftrise@gmail.com"],
  },
];

export default function TermsOfServiceSection() {
  return (
    <section id="terms-of-service" style={{ background: '#fff', padding: '2rem 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 8, textAlign: 'center', color: '#174ea6', padding: '0.75rem 1rem', borderRadius: '0.75rem', display: 'inline-block', boxShadow: '0 2px 8px 0 rgba(23,78,166,0.06)' }}>
          SwiftRise Terms of Service
        </h1>
         <p style={{ textAlign: 'center', color: '#666', marginBottom: 24 }}>
          This agreement outlines the rules and responsibilities for using SwiftRise, including account conduct, data usage, intellectual property, and legal limitations.
        </p>
        {termsSections.map((section) => (
          <div key={section.title} style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 600,color: '#174ea6', marginBottom: 6 }}>
              {section.title}
            </h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} style={{ color: '#444', marginBottom: 4 }}>{paragraph}</p>
            ))}
            {section.bullets && (
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                {section.bullets.map((item) => (
                  <li key={item} style={{ color: '#444', marginBottom: 2 }}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

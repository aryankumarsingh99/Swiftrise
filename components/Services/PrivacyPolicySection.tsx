'use client';

const privacySections = [
  {
    title: "1. Information They Collect",
    paragraphs: [
      "SwiftRise collects personal and usage data to operate and improve the platform.",
    ],
    bullets: [
      "Personal Information: Name, email, phone number, and any details you provide",
      "Usage Data: Device info, IP address, and how you use the app",
    ],
  },
  {
    title: "2. How They Use Your Information",
    paragraphs: ["SwiftRise uses your information for the following purposes:"],
    bullets: [
      "To operate and maintain the platform",
      "To improve and personalize services",
      "To communicate (support, updates, alerts)",
      "To analyze usage and trends",
    ],
  },
  {
    title: "3. Sharing of Information",
    paragraphs: ["Your data may be shared in the following circumstances:"],
    bullets: [
      "With your consent",
      "With service providers (for operations)",
      "For legal obligations",
      "During mergers or business transfers",
    ],
  },
  {
    title: "4. Data Retention",
    paragraphs: [
      "Data is kept only as long as necessary for its intended purpose or legal requirements.",
    ],
  },
  {
    title: "5. Security",
    paragraphs: [
      "SwiftRise uses reasonable measures to protect your data from unauthorized access, alteration, and disclosure.",
    ],
  },
  {
    title: "6. Children's Privacy",
    paragraphs: [
      "SwiftRise is not intended for children under 13 years of age.",
    ],
    bullets: [
      "If we become aware that a minor has provided personal information, we will remove such data from our systems promptly",
    ],
  },
  {
    title: "7. Updates to Policy",
    paragraphs: [
      "This Privacy Policy may change over time as our services evolve.",
    ],
    bullets: [
      "Updates will be posted on this page",
      "Please review periodically for the latest policy",
    ],
  },
  {
    title: "8. Contact Information",
    paragraphs: ["For privacy concerns or inquiries, please contact us at:"],
    bullets: ["Email: contactswiftrise@gmail.com"],
  },
];

export default function PrivacyPolicySection() {
  return (
    <section id="privacy-policy" style={{ background: '#ffffff', padding: '2rem 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#113f67', marginBottom: 8, textAlign: 'center' }}>SwiftRise Privacy Policy</h1>
         <p style={{ textAlign: 'center', color: '#666', marginBottom: 24 }}>
          We are committed to protecting your privacy. This policy describes what information we collect, how we use it, and the rights you have when using SwiftRise.
        </p>
        {privacySections.map((section) => (
          <div key={section.title} style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 900,color: '#113f67', marginBottom: 6 }}>
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

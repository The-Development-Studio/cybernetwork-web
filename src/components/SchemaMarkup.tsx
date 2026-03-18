import { useEffect } from 'react';

interface SchemaMarkupProps {
  data: object;
  id?: string;
}

export function SchemaMarkup({ data, id = 'schema' }: SchemaMarkupProps) {
  useEffect(() => {
    const scriptId = `schema-${id}`;
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify(data);

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [data, id]);

  return null;
}

// Organization Schema
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Cyber Network',
  alternateName: 'Cyber Network Co',
  url: 'https://cybernetworkco.com',
  logo: 'https://cybernetworkco.com/logo.png',
  description: 'Professional networking and cybersecurity training and services company in India',
  email: 'info@cybernetworkco.com',
  telephone: '+916379728770',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.linkedin.com/company/cybernetworkco',
    'https://www.instagram.com/cybernetwork_co',
  ],
  areaServed: 'IN',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Networking and Cybersecurity Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'CCNA Training',
          description: 'Cisco Certified Network Associate certification training',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'CEH Training',
          description: 'Certified Ethical Hacker certification training',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Penetration Testing',
          description: 'Professional penetration testing services for web and mobile applications',
        },
      },
    ],
  },
};

// Local Business Schema
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://cybernetworkco.com',
  name: 'Cyber Network',
  image: 'https://cybernetworkco.com/logo.png',
  url: 'https://cybernetworkco.com',
  telephone: '+916379728770',
  email: 'info@cybernetworkco.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 12.9716,
    longitude: 77.5946,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '150',
  },
};

// Course Schema Generator
export const getCourseSchema = (courseName: string, description: string, price: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: courseName,
  description: description,
  provider: {
    '@type': 'Organization',
    name: 'Cyber Network',
    sameAs: 'https://cybernetworkco.com',
  },
  offers: {
    '@type': 'Offer',
    category: 'Education',
    price: price,
    priceCurrency: 'INR',
  },
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: ['online', 'onsite'],
    courseWorkload: 'PT40H',
  },
});

// Service Schema Generator
export const getServiceSchema = (serviceName: string, description: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: serviceName,
  description: description,
  provider: {
    '@type': 'Organization',
    name: 'Cyber Network',
    url: 'https://cybernetworkco.com',
    telephone: '+916379728770',
    email: 'info@cybernetworkco.com',
  },
  areaServed: 'IN',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://cybernetworkco.com/services',
  },
});

// FAQ Schema
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best cybersecurity course for beginners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For beginners, we recommend starting with our CCNA course to build strong networking fundamentals, followed by CEH (Certified Ethical Hacker) to learn cybersecurity concepts. Both courses provide hands-on labs and real-world scenarios.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Cyber Network offer placement support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide career guidance and industry connections to help our students find opportunities in networking and cybersecurity. We also offer resume building and interview preparation assistance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is penetration testing and why is it important?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Penetration testing is a simulated cyber attack against your system to check for exploitable vulnerabilities. It is important because it helps identify security weaknesses before malicious hackers can exploit them, protecting your data and infrastructure.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can colleges partner with Cyber Network for workshops?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Colleges can contact us at info@cybernetworkco.com or call +91 6379728770 to discuss customized workshop programs. We offer both on-campus and online sessions tailored to your institution\'s needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What corporate security services do you provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide web application security testing, mobile app penetration testing, network security audits, firewall configuration, vulnerability assessments, QA testing, and security consulting services for businesses of all sizes.',
      },
    },
  ],
};

// Breadcrumb Schema Generator
export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// Website Schema with Search Action
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Cyber Network',
  alternateName: 'Cyber Network Co',
  url: 'https://cybernetworkco.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://cybernetworkco.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

// Educational Organization Schema
export const educationalOrgSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Cyber Network',
  url: 'https://cybernetworkco.com',
  logo: 'https://cybernetworkco.com/logo.png',
  description: 'Professional networking and cybersecurity training organization',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+916379728770',
    contactType: 'customer service',
    email: 'info@cybernetworkco.com',
    availableLanguage: ['English'],
    areaServed: 'IN',
  },
};

// Review/Rating Schema
export const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'Organization',
    name: 'Cyber Network',
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '4.8',
    bestRating: '5',
  },
  author: {
    '@type': 'Person',
    name: 'Verified Students & Clients',
  },
  reviewBody: 'Excellent cybersecurity and networking training with hands-on labs and expert instructors.',
};

// Event Schema Generator (for workshops and training sessions)
export const getEventSchema = (name: string, startDate: string, endDate: string, description: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: name,
  startDate: startDate,
  endDate: endDate,
  description: description,
  location: {
    '@type': 'Place',
    name: 'Cyber Network',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
  },
  organizer: {
    '@type': 'Organization',
    name: 'Cyber Network',
    url: 'https://cybernetworkco.com',
  },
  offers: {
    '@type': 'Offer',
    url: 'https://cybernetworkco.com/contact',
    price: 'Contact for pricing',
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
  },
});

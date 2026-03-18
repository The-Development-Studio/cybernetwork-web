import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
  articleTags?: string[];
}

export function SEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  canonical,
  articleTags,
}: SEOProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper function to set or update meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('author', 'Cyber Network');
    setMetaTag('robots', 'index, follow');
    setMetaTag('language', 'English');
    setMetaTag('distribution', 'global');
    setMetaTag('theme-color', '#00B871');
    setMetaTag('revisit-after', '7 days');
    setMetaTag('rating', 'general');
    setMetaTag('copyright', 'Cyber Network');
    
    // Geographic meta tags
    setMetaTag('geo.region', 'IN-KA');
    setMetaTag('geo.placename', 'Bengaluru');
    setMetaTag('geo.position', '12.9716;77.5946');
    setMetaTag('ICBM', '12.9716, 77.5946');
    
    // Mobile optimization
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=5.0');
    setMetaTag('format-detection', 'telephone=yes');
    setMetaTag('mobile-web-app-capable', 'yes');
    setMetaTag('apple-mobile-web-app-capable', 'yes');
    setMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');
    setMetaTag('apple-mobile-web-app-title', 'Cyber Network');
    
    // Additional SEO tags
    setMetaTag('classification', 'Education, Technology, Cybersecurity');
    setMetaTag('category', 'Cybersecurity Training and Services');
    setMetaTag('coverage', 'Worldwide');
    setMetaTag('target', 'all');
    
    // Article tags for better categorization
    if (articleTags && articleTags.length > 0) {
      articleTags.forEach((tag, index) => {
        setMetaTag(`article:tag${index}`, tag, true);
      });
    }

    // Open Graph tags
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:site_name', 'Cyber Network', true);
    setMetaTag('og:title', ogTitle || title, true);
    setMetaTag('og:description', ogDescription || description, true);
    setMetaTag('og:url', canonical || window.location.href, true);
    setMetaTag('og:locale', 'en_IN', true);
    setMetaTag('og:locale:alternate', 'en_US', true);
    
    if (ogImage) {
      setMetaTag('og:image', ogImage, true);
      setMetaTag('og:image:alt', 'Cyber Network - Networking & Cybersecurity Training', true);
      setMetaTag('og:image:type', 'image/png', true);
      setMetaTag('og:image:width', '1200', true);
      setMetaTag('og:image:height', '630', true);
    }
    
    // Additional OG tags for better social sharing
    setMetaTag('og:email', 'info@cybernetworkco.com', true);
    setMetaTag('og:phone_number', '+916379728770', true);
    setMetaTag('og:street-address', 'Bengaluru', true);
    setMetaTag('og:locality', 'Bengaluru', true);
    setMetaTag('og:region', 'Karnataka', true);
    setMetaTag('og:country-name', 'India', true);

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:site', '@CyberNetwork');
    setMetaTag('twitter:creator', '@CyberNetwork');
    setMetaTag('twitter:title', ogTitle || title);
    setMetaTag('twitter:description', ogDescription || description);
    setMetaTag('twitter:domain', 'cybernetworkco.com');
    
    if (ogImage) {
      setMetaTag('twitter:image', ogImage);
      setMetaTag('twitter:image:alt', 'Cyber Network - Networking & Cybersecurity Training');
    }
    
    // LinkedIn specific tags
    setMetaTag('linkedin:owner', 'Cyber Network');
    
    // Pinterest verification (if needed)
    setMetaTag('p:domain_verify', 'cybernetworkco');
    
    // Google-specific tags
    setMetaTag('google', 'notranslate');
    setMetaTag('google-site-verification', 'pending'); // Add actual verification code when available

    // Security Headers (Meta Tags)
    setMetaTag('X-Content-Type-Options', 'nosniff');
    setMetaTag('X-Frame-Options', 'SAMEORIGIN');
    setMetaTag('X-XSS-Protection', '1; mode=block');
    setMetaTag('Referrer-Policy', 'strict-origin-when-cross-origin');
    setMetaTag('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
    
    // Content Security Policy
    const cspContent = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: https: figma:asset blob:",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' https://maps.googleapis.com https://www.google-analytics.com",
      "frame-src 'self' https://maps.google.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
      "upgrade-insecure-requests"
    ].join('; ');
    setMetaTag('Content-Security-Policy', cspContent);

    // Canonical link
    let linkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!linkElement) {
      linkElement = document.createElement('link');
      linkElement.setAttribute('rel', 'canonical');
      document.head.appendChild(linkElement);
    }
    linkElement.setAttribute('href', canonical || window.location.href);

  }, [title, description, keywords, ogTitle, ogDescription, ogImage, canonical, articleTags]);

  return null;
}

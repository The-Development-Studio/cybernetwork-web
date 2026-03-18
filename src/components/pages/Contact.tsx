import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Clock } from 'lucide-react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { SEO } from '../SEO';
import { SchemaMarkup, getBreadcrumbSchema } from '../SchemaMarkup';

export function Contact() {
  const enquiryEndpoint = import.meta.env.VITE_CONTACT_API_URL?.trim() || '/api/contact';
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://cybernetworkco.com/' },
    { name: 'Contact', url: 'https://cybernetworkco.com/contact' },
  ]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
    honeypot: '', // Anti-spam honeypot field
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);

  const sanitizeInput = (input: string): string => {
    // Remove potential XSS characters
    return input
      .replace(/[<>]/g, '') // Remove < and >
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting - prevent spam submissions (30 seconds between submissions)
    const currentTime = Date.now();
    const timeSinceLastSubmit = currentTime - lastSubmitTime;
    const minimumTimeBetweenSubmissions = 30000; // 30 seconds
    
    if (timeSinceLastSubmit < minimumTimeBetweenSubmissions && lastSubmitTime !== 0) {
      const remainingSeconds = Math.ceil((minimumTimeBetweenSubmissions - timeSinceLastSubmit) / 1000);
      alert(`Please wait ${remainingSeconds} seconds before submitting another enquiry.`);
      return;
    }
    
    // Honeypot check - if filled, it's a bot
    if (formData.honeypot !== '') {
      // Silent rejection for bots
      return;
    }
    
    // Sanitize all inputs before processing
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone),
      serviceType: sanitizeInput(formData.serviceType),
      message: sanitizeInput(formData.message),
    };
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    setSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch(enquiryEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...sanitizedData,
          honeypot: formData.honeypot,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || 'Enquiry submission failed');
      }

      setLastSubmitTime(currentTime);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', serviceType: '', message: '', honeypot: '' });
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'We could not send your enquiry right now. Please try again in a moment or email us directly.',
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Limit input length for security
    const maxLengths: { [key: string]: number } = {
      name: 100,
      email: 100,
      phone: 20,
      message: 1000,
    };
    
    const maxLength = maxLengths[name] || 100;
    const sanitizedValue = value.slice(0, maxLength);

    if (submitError) {
      setSubmitError('');
    }

    setFormData({
      ...formData,
      [name]: sanitizedValue,
    });
  };

  const handleServiceTypeChange = (value: string) => {
    if (submitError) {
      setSubmitError('');
    }

    setFormData({
      ...formData,
      serviceType: value,
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO
        title="Contact Cyber Network | Enroll or Request Security Services"
        description="Contact Cyber Network for course enrollment, cybersecurity services, or corporate training in Bengaluru, India. Email: info@cybernetworkco.com | Phone: +91 6379728770"
        keywords="contact Cyber Network, CCNA course enrollment, request penetration testing, corporate training inquiry, cybersecurity consultation India, Coimbatore network training contact, Bengaluru security services, get in touch cyber network, security service quote, training program inquiry, free consultation, cybersecurity expert contact, book security audit, schedule training session, IT security consultation, request demo, course information, training calendar, security assessment request"
        ogTitle="Get in Touch with Cyber Network"
        ogDescription="Reach out to our team for training, services, and collaboration. Located in Bengaluru, Karnataka, India."
        canonical="https://cybernetworkco.com/contact"
        articleTags={['Contact', 'Inquiry', 'Consultation', 'Bengaluru', 'India']}
      />
      <SchemaMarkup data={breadcrumbSchema} id="breadcrumb" />
      
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6 text-white">
            Contact <span className="text-[#00B871] text-glow">Us</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions about our training programs or services? We're here to help. 
            Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#00B871]/20">
                <h2 className="text-2xl md:text-3xl mb-2 text-white">Send us an Enquiry</h2>
                <p className="text-gray-400 mb-6">
                  Fill out the enquiry form below and we'll get back to you as soon as possible. 
                  <span className="block text-sm text-gray-500 mt-1">
                    Enquiries sent outside business hours will be responded to on the next business day (IST).
                  </span>
                </p>
                
                {submitted ? (
                  <div className="bg-[#00B871]/20 border border-[#00B871] rounded-lg p-6 text-center">
                    <div className="w-16 h-16 bg-[#00B871] rounded-full flex items-center justify-center mx-auto mb-4 glow-green">
                      <Send className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl text-white mb-2">Enquiry Sent!</h3>
                    <p className="text-gray-400">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {submitError ? (
                      <div className="rounded-lg border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-200">
                        {submitError}
                      </div>
                    ) : null}

                    <div>
                      <label htmlFor="name" className="block text-white mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-black border-[#00B871]/20 text-white focus:border-[#00B871] transition-colors"
                        placeholder="John Doe"
                        maxLength={100}
                        autoComplete="name"
                        pattern="[A-Za-z\s]+"
                        title="Please enter a valid name (letters and spaces only)"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-white mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-black border-[#00B871]/20 text-white focus:border-[#00B871] transition-colors"
                          placeholder="john@example.com"
                          maxLength={100}
                          autoComplete="email"
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                          title="Please enter a valid email address"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-white mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-black border-[#00B871]/20 text-white focus:border-[#00B871] transition-colors"
                          placeholder="+1 (555) 123-4567"
                          maxLength={20}
                          autoComplete="tel"
                          pattern="[\+]?[0-9\s\-\(\)]+"
                          title="Please enter a valid phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="serviceType" className="block text-white mb-2">
                        Service Request *
                      </label>
                      <Select value={formData.serviceType} onValueChange={handleServiceTypeChange} required>
                        <SelectTrigger className="w-full bg-black border-[#00B871]/20 text-white focus:border-[#00B871] transition-colors">
                          <SelectValue placeholder="Select a service type" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1A1A1A] border-[#00B871]/20">
                          <SelectItem value="training-ccna" className="text-white hover:bg-[#00B871]/20">Training - CCNA</SelectItem>
                          <SelectItem value="training-ceh" className="text-white hover:bg-[#00B871]/20">Training - CEH</SelectItem>
                          <SelectItem value="training-linux" className="text-white hover:bg-[#00B871]/20">Training - Linux</SelectItem>
                          <SelectItem value="training-python" className="text-white hover:bg-[#00B871]/20">Training - Python</SelectItem>
                          <SelectItem value="training-corporate" className="text-white hover:bg-[#00B871]/20">Corporate Training</SelectItem>
                          <SelectItem value="training-college" className="text-white hover:bg-[#00B871]/20">College Workshop</SelectItem>
                          <SelectItem value="service-web-pentest" className="text-white hover:bg-[#00B871]/20">Service - Web App Pentesting</SelectItem>
                          <SelectItem value="service-mobile-pentest" className="text-white hover:bg-[#00B871]/20">Service - Mobile App Pentesting</SelectItem>
                          <SelectItem value="service-network-pentest" className="text-white hover:bg-[#00B871]/20">Service - Network Pentesting</SelectItem>
                          <SelectItem value="service-network-setup" className="text-white hover:bg-[#00B871]/20">Service - Network Infrastructure</SelectItem>
                          <SelectItem value="service-qa" className="text-white hover:bg-[#00B871]/20">Service - QA & Testing</SelectItem>
                          <SelectItem value="other" className="text-white hover:bg-[#00B871]/20">Other Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-white mb-2">
                        Enquiry *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full bg-black border-[#00B871]/20 text-white focus:border-[#00B871] transition-colors resize-none"
                        placeholder="Tell us about your requirements..."
                        maxLength={1000}
                        minLength={10}
                        title="Please enter your enquiry (10-1000 characters)"
                      />
                    </div>

                    {/* Honeypot field - hidden from users, visible to bots */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="website">Website (leave blank)</label>
                      <input
                        type="text"
                        id="website"
                        name="honeypot"
                        value={formData.honeypot}
                        onChange={handleChange}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full px-8 py-4 bg-[#00B871] text-white rounded-lg hover:bg-[#00D67E] transition-all duration-300 glow-green-hover flex items-center justify-center gap-2"
                    >
                      <Send size={20} />
                      {submitting ? 'Sending Enquiry...' : 'Send Enquiry'}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#00B871]/20">
                <h3 className="text-xl mb-6 text-white">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#00B871]/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#00B871]" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">Email</div>
                      <a href="mailto:info@cybernetworkco.com" className="text-white hover:text-[#00B871] transition-colors">
                        info@cybernetworkco.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#00B871]/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#00B871]" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">Phone</div>
                      <a href="tel:+916379728770" className="text-white hover:text-[#00B871] transition-colors">
                        +91 6379728770
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#00B871]/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#00B871]" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">Location</div>
                      <a 
                        href="https://maps.app.goo.gl/GThNNU4UVEEFZqrv7" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#00B871] transition-colors"
                      >
                        Bengaluru, Karnataka, India
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#00B871]/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#00B871]" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">Business Hours (IST)</div>
                      <p className="text-white">
                        Mon - Fri: 9:00 AM - 6:00 PM<br />
                        Sat: 10:00 AM - 4:00 PM<br />
                        Sun: Closed
                      </p>
                      <p className="text-[#00D67E] text-sm mt-2">
                        Indian Standard Time (UTC+5:30)
                      </p>
                      <p className="text-gray-500 text-xs mt-2 italic">
                        Enquiries sent outside business hours will be responded to on the next business day
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#00B871]/20">
                <h3 className="text-xl mb-6 text-white">Follow Us</h3>
                
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/company/cybernetworkco"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Cyber Network on LinkedIn"
                    className="w-12 h-12 rounded-full border border-[#00B871] flex items-center justify-center text-[#00B871] hover:bg-[#00B871] hover:text-white transition-all duration-300 glow-green-hover"
                  >
                    <Linkedin size={20} aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.instagram.com/cybernetwork_co"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Cyber Network on Instagram"
                    className="w-12 h-12 rounded-full border border-[#00B871] flex items-center justify-center text-[#00B871] hover:bg-[#00B871] hover:text-white transition-all duration-300 glow-green-hover"
                  >
                    <Instagram size={20} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#1A1A1A] rounded-lg border border-[#00B871]/20 overflow-hidden">
            <div className="relative h-96 bg-gradient-to-br from-[#0a0a0a] to-[#1A1A1A] flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#00B871] mx-auto mb-4" />
                <h3 className="text-2xl text-white mb-2">Find Us</h3>
                <p className="text-gray-400">Bengaluru, Karnataka, India</p>
                <a 
                  href="https://maps.app.goo.gl/GThNNU4UVEEFZqrv7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 px-6 py-3 border-2 border-[#00B871] text-[#00B871] rounded-lg hover:bg-[#00B871] hover:text-white transition-all duration-300 inline-block cursor-pointer"
                >
                  Get Directions
                </a>
              </div>
              {/* Map grid overlay */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00B871" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-white">Frequently Asked Questions</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto"></div>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'How do I enroll in a training program?',
                answer: 'You can enroll by filling out the contact form above or calling us directly. Our team will guide you through the enrollment process and help you choose the right program.',
              },
              {
                question: 'Do you offer custom training programs?',
                answer: 'Yes! We offer fully customized training programs tailored to your organization\'s specific needs, whether it\'s for corporate teams or educational institutions.',
              },
              {
                question: 'What are your service rates?',
                answer: 'Our rates vary depending on the scope and duration of the engagement. Contact us for a detailed quote based on your specific requirements.',
              },
              {
                question: 'Do you provide certification assistance?',
                answer: 'Absolutely! Our training programs include comprehensive certification preparation, and we provide guidance throughout the certification process.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#00B871]/20"
              >
                <h3 className="text-lg text-white mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

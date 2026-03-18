import { ArrowRight, Shield, GraduationCap, Users, Award, Code, Network, Lock, Globe, Smartphone, Settings, AlertTriangle, Server, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { SEO } from '../SEO';
import { SchemaMarkup, organizationSchema, localBusinessSchema, faqSchema, getBreadcrumbSchema, websiteSchema, educationalOrgSchema, reviewSchema } from '../SchemaMarkup';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const services = [
    {
      icon: Globe,
      title: 'Web Application Security',
      description: 'Comprehensive security testing of web applications to identify and fix vulnerabilities.',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Security',
      description: 'Security assessment of iOS and Android applications with detailed analysis.',
    },
    {
      icon: Network,
      title: 'Network Pentesting',
      description: 'External and internal network security assessments to identify attack vectors.',
    },
    {
      icon: Server,
      title: 'Network Infrastructure',
      description: 'Design, configuration, and support for secure network architecture.',
    },
    {
      icon: Shield,
      title: 'Security Consulting',
      description: 'Expert guidance on security architecture and compliance requirements.',
    },
    {
      icon: Settings,
      title: 'QA Testing & Support',
      description: 'Quality assurance and security testing to ensure application stability.',
    },
  ];

  const trainingPrograms = [
    {
      icon: Network,
      title: 'CCNA',
      description: 'Master networking fundamentals and routing protocols',
    },
    {
      icon: Shield,
      title: 'CEH',
      description: 'Learn penetration testing and vulnerability assessment',
    },
    {
      icon: Code,
      title: 'Linux & Python',
      description: 'System administration and security automation',
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'IT Manager',
      content: 'Cyber Network helped secure our infrastructure with their comprehensive penetration testing services. Highly professional and thorough.',
    },
    {
      name: 'Priya Sharma',
      role: 'Security Engineer',
      content: 'The training programs are top-notch. Practical, hands-on, and industry-relevant. Helped me transition into cybersecurity.',
    },
    {
      name: 'Arjun Patel',
      role: 'Network Administrator',
      content: 'Their network design and implementation services transformed our infrastructure. Excellent support and guidance throughout.',
    },
  ];

  const achievements = [
    { number: '100+', label: 'Security Assessments' },
    { number: '50+', label: 'Corporate Clients' },
    { number: '500+', label: 'Students Trained' },
    { number: '95%', label: 'Client Satisfaction' },
  ];

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://cybernetworkco.com/' },
  ]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Cyber Network | Networking & Cybersecurity Training in India"
        description="Master CCNA, CEH, Linux, and Python through Cyber Network's expert-led training and professional cybersecurity services in Bengaluru, India."
        keywords="networking training in India, CCNA course Coimbatore, CEH training India, ethical hacking course, cybersecurity institute, network security certification, Python for cybersecurity, cyber network academy, networking labs online, best cybersecurity course 2025, online CCNA coaching, IT infrastructure training, penetration testing services, VAPT services India, cybersecurity training Bengaluru, Cisco certification India, ethical hacking training, information security course, network engineer training, security analyst training, cybersecurity bootcamp, penetration testing company, web application security, mobile app security testing, network security audit, corporate cybersecurity training, college cybersecurity workshop, IT security services India, bug bounty training, security awareness training, OWASP training, vulnerability assessment, threat intelligence training, SOC analyst training, incident response training"
        ogTitle="Cyber Network – Protect | Educate | Empower"
        ogDescription="Leading networking and cybersecurity training company in India offering CCNA, CEH, and professional security services."
        canonical="https://cybernetworkco.com/"
        articleTags={['Cybersecurity', 'Networking', 'Training', 'Penetration Testing', 'CCNA', 'CEH', 'Ethical Hacking', 'India', 'Bengaluru']}
      />
      <SchemaMarkup data={organizationSchema} id="organization" />
      <SchemaMarkup data={localBusinessSchema} id="localbusiness" />
      <SchemaMarkup data={faqSchema} id="faq" />
      <SchemaMarkup data={breadcrumbSchema} id="breadcrumb" />
      <SchemaMarkup data={websiteSchema} id="website" />
      <SchemaMarkup data={educationalOrgSchema} id="educational" />
      <SchemaMarkup data={reviewSchema} id="review" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-96 h-96 bg-[#00B871] rounded-full blur-[120px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#00D67E] rounded-full blur-[120px]"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-white">
              Professional <span className="text-[#00B871] text-glow">Networking & Cybersecurity</span><br />
              Solutions
            </motion.h1>
            
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 mb-12">
              <span className="text-[#00D67E] text-xl">Protect</span>
              <span className="text-white">|</span>
              <span className="text-[#00D67E] text-xl">Educate</span>
              <span className="text-white">|</span>
              <span className="text-[#00D67E] text-xl">Empower</span>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('services')}
                className="px-8 py-4 bg-[#00B871] text-white rounded-lg hover:bg-[#00D67E] transition-all duration-300 glow-green-hover flex items-center justify-center gap-2"
              >
                View Services
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('training')}
                className="px-8 py-4 border-2 border-[#00B871] text-[#00B871] rounded-lg hover:bg-[#00B871] hover:text-white transition-all duration-300 glow-green-hover flex items-center justify-center gap-2"
              >
                Explore Training
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cybersecurity & Networking Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#0a0a0a]">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-white">Our Services</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Comprehensive cybersecurity and networking services to protect your digital assets and infrastructure
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#00B871]/20 hover:border-[#00B871] transition-colors duration-300 glow-green-hover cursor-pointer group"
              >
                <service.icon className="w-12 h-12 text-[#00B871] mb-4 group-hover:text-[#00D67E] transition-colors" />
                <h3 className="text-xl mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('services')}
              className="px-8 py-4 bg-[#00B871] text-white rounded-lg hover:bg-[#00D67E] transition-all duration-300 glow-green-hover inline-flex items-center gap-2"
            >
              Explore All Services
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 text-white">
                Why Choose <span className="text-[#00B871] text-glow">Cyber Network?</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mb-6"></div>
              <p className="text-gray-400 mb-8">
                We provide innovative, reliable, and accessible solutions that support businesses and individuals 
                in navigating the ever-changing digital landscape.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Shield, title: 'Proven Expertise', description: 'Industry-certified professionals with years of experience' },
                  { icon: CheckCircle2, title: 'Comprehensive Solutions', description: 'End-to-end security and networking services' },
                  { icon: Users, title: 'Client-Focused', description: 'Tailored solutions to meet your specific needs' },
                  { icon: Award, title: 'Quality Assurance', description: 'Rigorous testing and detailed reporting' },
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-4"
                    variants={fadeInUp}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#00B871]/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#00B871]" />
                    </div>
                    <div>
                      <h3 className="text-lg text-white mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="bg-[#1A1A1A] p-8 rounded-lg border border-[#00B871]/20 relative overflow-hidden"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00B871] opacity-10 rounded-full blur-3xl"></div>
              <h3 className="text-2xl mb-6 text-[#00B871]">Our Approach</h3>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Consultation', description: 'Understand your requirements and objectives' },
                  { step: '02', title: 'Assessment', description: 'Thorough analysis using industry-standard tools' },
                  { step: '03', title: 'Implementation', description: 'Deploy solutions with minimal disruption' },
                  { step: '04', title: 'Support', description: 'Ongoing support and maintenance' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-3xl text-[#00B871]/30">{item.step}</div>
                    <div>
                      <h4 className="text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] to-black">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-white">Professional Training</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Upskill your team with our comprehensive training programs in networking and cybersecurity
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            variants={staggerContainer}
          >
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-[#1A1A1A] p-8 rounded-lg border border-[#00B871]/20 hover:border-[#00B871] transition-colors duration-300 glow-green-hover cursor-pointer text-center group"
              >
                <program.icon className="w-16 h-16 text-[#00B871] mx-auto mb-4 group-hover:text-[#00D67E] transition-colors" />
                <h3 className="text-2xl mb-3 text-white">{program.title}</h3>
                <p className="text-gray-400">{program.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeInUp}
              className="bg-[#1A1A1A] p-8 rounded-lg border border-[#00B871]/20"
            >
              <Users className="w-12 h-12 text-[#00B871] mb-4" />
              <h3 className="text-2xl mb-4 text-white">Corporate Training</h3>
              <p className="text-gray-400 mb-4">
                Customized training programs for your organization with flexible on-site or remote delivery.
              </p>
              <button
                onClick={() => onNavigate('training')}
                className="text-[#00B871] hover:text-[#00D67E] flex items-center gap-2 transition-colors"
              >
                Learn More <ArrowRight size={18} />
              </button>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-[#1A1A1A] p-8 rounded-lg border border-[#00B871]/20"
            >
              <GraduationCap className="w-12 h-12 text-[#00B871] mb-4" />
              <h3 className="text-2xl mb-4 text-white">College Training</h3>
              <p className="text-gray-400 mb-4">
                Partner with us to provide students with industry-relevant skills and hands-on experience.
              </p>
              <button
                onClick={() => onNavigate('training')}
                className="text-[#00B871] hover:text-[#00D67E] flex items-center gap-2 transition-colors"
              >
                Learn More <ArrowRight size={18} />
              </button>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('training')}
              className="px-8 py-4 border-2 border-[#00B871] text-[#00B871] rounded-lg hover:bg-[#00B871] hover:text-white transition-all duration-300 glow-green-hover inline-flex items-center gap-2"
            >
              View All Training Programs
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={fadeInUp}
              >
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-4xl md:text-5xl text-[#00B871] mb-2"
                >
                  {achievement.number}
                </motion.div>
                <div className="text-gray-400">{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#0a0a0a]">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-white">Client Testimonials</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto"></div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#00B871]/20"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 text-[#00B871] fill-[#00B871]" />
                  ))}
                </div>
                <p className="text-gray-400 mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="text-white">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-[#00B871]/20 to-[#00D67E]/20 rounded-lg border border-[#00B871] p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-white">Ready to Secure Your Digital Future?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Get in touch with us to discuss how we can help protect and empower your organization.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-[#00B871] text-white rounded-lg hover:bg-[#00D67E] transition-all duration-300 glow-green-hover inline-flex items-center gap-2"
            >
              Contact Us Today
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

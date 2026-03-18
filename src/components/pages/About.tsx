import { Network, Shield, GraduationCap, Target, Eye, Award, Sprout, RefreshCw, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import { SEO } from '../SEO';
import { SchemaMarkup, getBreadcrumbSchema } from '../SchemaMarkup';

export function About() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://cybernetworkco.com/' },
    { name: 'About', url: 'https://cybernetworkco.com/about' },
  ]);
  const whatWeDo = [
    {
      icon: Network,
      title: 'Networking Services',
      description: 'Infrastructure design, configuration, and support to keep your network running smoothly and efficiently.',
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Risk assessments, threat detection, and protection to safeguard your digital assets and data.',
    },
    {
      icon: GraduationCap,
      title: 'Professional Training',
      description: 'Upskilling programs in networking and cybersecurity to empower individuals and teams.',
    },
  ];

  const timeline = [
    {
      year: '2019',
      title: 'The Beginning',
      description: 'Launched as "Cyber India" on Instagram with a vision to build something meaningful and independent.',
      icon: <Sprout className="w-16 h-16 text-[#00B871] mx-auto" />,
    },
    {
      year: '2021',
      title: 'Evolution',
      description: 'Rebranded to "Cyber Network" to better represent our core focus on networking and cybersecurity.',
      icon: <RefreshCw className="w-16 h-16 text-[#00B871] mx-auto" />,
    },
    {
      year: '2024',
      title: 'Growth',
      description: 'Operations resumed stronger and more driven, steadily expanding our services and impact in the tech community.',
      icon: <Rocket className="w-16 h-16 text-[#00B871] mx-auto" />,
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO
        title="About Cyber Network | Experts in Networking & Cybersecurity Education"
        description="Learn about Cyber Network's mission to empower students and professionals with real-world skills in networking and cybersecurity. Our journey from 2019 to becoming a leading training provider."
        keywords="about Cyber Network, cybersecurity experts India, networking professionals, IT training company, MSME cybersecurity business, networking education Bengaluru, professional training institute, cybersecurity company India, IT security firm, training and consulting, certified instructors, industry experts, cybersecurity thought leaders, technology education, digital security experts, information security professionals, security consultants India, cyber defense experts, network engineering company"
        ogTitle="About Cyber Network – Building Cyber Experts"
        ogDescription="Discover our mission, vision, and achievements in networking and cybersecurity education since 2019."
        canonical="https://cybernetworkco.com/about"
        articleTags={['About Us', 'Company', 'Mission', 'Vision', 'Cybersecurity Experts', 'India']}
      />
      <SchemaMarkup data={breadcrumbSchema} id="breadcrumb" />
      
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <div className="w-[600px] h-[600px] relative">
            <div className="absolute inset-0 border-8 border-[#00B871] rounded-full"></div>
            <div className="absolute inset-12 border-8 border-[#00B871] rounded-full"></div>
            <div className="absolute inset-24 border-8 border-[#00B871] rounded-full"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6 text-white">
            Our <span className="text-[#00B871] text-glow">Story</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-8"></div>
          <p className="text-xl text-gray-400">
            From a spark of inspiration to a growing digital network
          </p>
        </div>
      </section>

      {/* Our Story Content */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#1A1A1A] p-8 md:p-12 rounded-lg border border-[#00B871]/20">
            <div className="space-y-6 text-gray-400">
              <p>
                Like many dreamers, our journey began with a vision — to build something meaningful and independent. 
                In 2019, that vision took its first step with the creation of an Instagram page under the name <span className="text-[#00B871]">Cyber India</span>.
              </p>
              <p>
                As our goals evolved, so did our identity. In 2021, we rebranded to <span className="text-[#00B871]">Cyber Network</span> to 
                better represent our core focus on networking and cybersecurity.
              </p>
              <p>
                After a brief pause, we resumed operations in 2024 — stronger and more driven. Since then, 
                Cyber Network has steadily grown, expanding our services and our impact in the tech community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gradient-to-b from-[#0a0a0a] to-black py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-white">Our Journey</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto"></div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            {timeline.map((milestone, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ y: -5 }}
                className="bg-[#1A1A1A] p-8 rounded-lg border border-[#00B871]/20 hover:border-[#00B871] transition-colors duration-300 glow-green-hover text-center"
              >
                <div className="mb-4">{milestone.icon}</div>
                <div className="text-4xl text-[#00B871] mb-3">{milestone.year}</div>
                <h3 className="text-xl mb-3 text-white">{milestone.title}</h3>
                <p className="text-gray-400">{milestone.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-white">What We Do</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-3xl mx-auto">
              At Cyber Network, we specialize in three core areas that support businesses and individuals 
              in navigating the ever-changing digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatWeDo.map((service, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] p-8 rounded-lg border border-[#00B871]/20 hover:border-[#00B871] transition-all duration-300 glow-green-hover group text-center"
              >
                <service.icon className="w-16 h-16 text-[#00B871] mx-auto mb-6 group-hover:text-[#00D67E] transition-colors" />
                <h3 className="text-2xl mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gradient-to-b from-[#0a0a0a] to-black py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#1A1A1A] p-8 md:p-12 rounded-lg border border-[#00B871]/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00B871] opacity-10 rounded-full blur-3xl"></div>
              <Target className="w-16 h-16 text-[#00B871] mb-6" />
              <h3 className="text-3xl mb-4 text-[#00B871]">Our Mission</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                We are committed to empowering others through knowledge, security, and innovation. 
                Whether you're a business seeking protection or an individual looking to upskill, 
                Cyber Network is here to support your digital journey.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#00B871]/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-[#00B871]" />
                </div>
                <div>
                  <h4 className="text-xl mb-2 text-white">Innovation</h4>
                  <p className="text-gray-400">
                    Providing innovative and reliable solutions that adapt to the evolving digital landscape.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#00B871]/20 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-[#00B871]" />
                </div>
                <div>
                  <h4 className="text-xl mb-2 text-white">Accessibility</h4>
                  <p className="text-gray-400">
                    Making professional cybersecurity and networking services accessible to all.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#00B871]/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-[#00B871]" />
                </div>
                <div>
                  <h4 className="text-xl mb-2 text-white">Excellence</h4>
                  <p className="text-gray-400">
                    Delivering excellence in every service we provide, from training to security solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#00B871]/20 to-[#00D67E]/20 rounded-lg border border-[#00B871] p-12 text-center">
            <h2 className="text-3xl md:text-4xl mb-6 text-white">
              Building a <span className="text-[#00B871]">Secure Digital Future</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              At Cyber Network, we believe in the power of knowledge and security to transform businesses 
              and careers. Our aim is to provide innovative, reliable, and accessible solutions that support 
              businesses and individuals in navigating the ever-changing digital landscape.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Clock, Users, Award, ArrowRight, CheckCircle2, Building2, GraduationCap } from 'lucide-react';
import { SEO } from '../SEO';
import { SchemaMarkup, getCourseSchema, getBreadcrumbSchema } from '../SchemaMarkup';
import { PaloAltoCourse } from '../PaloAltoCourse';
import { useEffect } from 'react';

interface TrainingProps {
  onNavigate: (page: string) => void;
}

export function Training({ onNavigate }: TrainingProps) {
  // Scroll to Palo Alto section if hash is present
  useEffect(() => {
    // Small delay to ensure the component is fully rendered
    const timer = setTimeout(() => {
      const hash = window.location.hash;
      if (hash === '#palo-alto') {
        const element = document.getElementById('palo-alto-training');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if (hash === '#corporate') {
        const element = document.getElementById('corporate-training');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if (hash === '#college') {
        const element = document.getElementById('college-training');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://cybernetworkco.com/' },
    { name: 'Training', url: 'https://cybernetworkco.com/training' },
  ]);

  const ccnaSchema = getCourseSchema(
    'CCNA - Cisco Certified Network Associate',
    'Master the fundamentals of networking, routing, and switching. Learn to configure, manage, and troubleshoot network infrastructure.',
    'Contact for pricing'
  );

  const cehSchema = getCourseSchema(
    'CEH - Certified Ethical Hacker',
    'Learn ethical hacking techniques to identify and fix security vulnerabilities. Gain hands-on experience with penetration testing tools.',
    'Contact for pricing'
  );

  const linuxSchema = getCourseSchema(
    'Linux System Administration',
    'Master Linux command line, shell scripting, and server management. Essential skills for cybersecurity professionals.',
    'Contact for pricing'
  );

  const pythonSchema = getCourseSchema(
    'Python for Cybersecurity',
    'Learn Python programming for security automation, tool development, and penetration testing.',
    'Contact for pricing'
  );

  const paloAltoSchema = getCourseSchema(
    'Palo Alto Next-Generation Firewall (NGFW) Training',
    'A comprehensive Palo Alto Firewall training program designed for networking students, engineers, and cybersecurity professionals to gain real-world firewall expertise through hands-on labs and live configurations.',
    '₹18,000'
  );

  const courses = [
    {
      title: 'CCNA - Cisco Certified Network Associate',
      description: 'Master the fundamentals of networking, routing, and switching. Learn to configure, manage, and troubleshoot network infrastructure.',
      duration: '8-10 weeks',
      level: 'Beginner to Intermediate',
      topics: [
        'Network Fundamentals',
        'IP Connectivity & Services',
        'Security Fundamentals',
        'Routing & Switching',
        'Network Access',
        'Automation & Programmability',
      ],
      color: '#00B871',
    },
    {
      title: 'CEH - Certified Ethical Hacker',
      description: 'Learn ethical hacking techniques to identify and fix security vulnerabilities. Gain hands-on experience with penetration testing tools.',
      duration: '10-12 weeks',
      level: 'Intermediate to Advanced',
      topics: [
        'Footprinting & Reconnaissance',
        'Scanning Networks',
        'Enumeration',
        'System Hacking',
        'Web Application Security',
        'Penetration Testing',
      ],
      color: '#00D67E',
    },
    {
      title: 'Linux System Administration',
      description: 'Comprehensive training in Linux server management, shell scripting, and system security. Perfect for aspiring system administrators.',
      duration: '6-8 weeks',
      level: 'Beginner to Intermediate',
      topics: [
        'Linux Fundamentals',
        'Shell Scripting & Automation',
        'User & Permission Management',
        'Network Configuration',
        'Server Administration',
        'Security Hardening',
      ],
      color: '#00B871',
    },
    {
      title: 'Python for Cybersecurity',
      description: 'Learn Python programming with a focus on cybersecurity applications. Build security tools and automate security tasks.',
      duration: '8 weeks',
      level: 'Beginner to Intermediate',
      topics: [
        'Python Fundamentals',
        'Network Programming',
        'Web Scraping',
        'Automation Scripts',
        'Security Tool Development',
        'API Integration',
      ],
      color: '#00D67E',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO
        title="CCNA, CEH, Linux & Python Courses | Corporate & College Training"
        description="Learn CCNA, CEH, Linux, and Python from Cyber Network. We offer specialized corporate and college training programs in cybersecurity and networking in Bengaluru, India."
        keywords="CCNA certification, CEH ethical hacking, Linux system administration, Python for security automation, corporate cybersecurity workshops, college IT training India, networking bootcamp, penetration testing course, security awareness training, ethical hacking classes Coimbatore, CCNA online training, CEH exam preparation, network engineer training, Cisco CCNA course, certified ethical hacker training, cybersecurity certification programs, network security training, Linux security course, Python scripting for hackers, hands-on cyber training, IT certification courses India, cyber security degree, network administration course, cybersecurity professional training, enterprise security training, college cybersecurity programs, campus cybersecurity workshops, student training programs, career in cybersecurity, cybersecurity jobs training"
        ogTitle="Learn CCNA, CEH, and Cybersecurity at Cyber Network"
        ogDescription="Explore our corporate and college training programs with hands-on labs and career support. Industry-recognized certifications."
        canonical="https://cybernetworkco.com/training"
        articleTags={['CCNA Training', 'CEH Training', 'Linux Course', 'Python Course', 'Corporate Training', 'College Workshop', 'Certification']}
      />
      <SchemaMarkup data={breadcrumbSchema} id="breadcrumb" />
      <SchemaMarkup data={ccnaSchema} id="course-ccna" />
      <SchemaMarkup data={cehSchema} id="course-ceh" />
      <SchemaMarkup data={linuxSchema} id="course-linux" />
      <SchemaMarkup data={pythonSchema} id="course-python" />
      <SchemaMarkup data={paloAltoSchema} id="course-paloalto" />
      
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6 text-white">
            Corporate & College <span className="text-[#00B871] text-glow">Training Programs</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive training programs designed to build expertise in networking and cybersecurity. 
            Industry-recognized certifications and hands-on practical experience.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] rounded-lg border border-[#00B871]/20 overflow-hidden hover:border-[#00B871] transition-all duration-300 glow-green-hover"
              >
                <div className="p-8">
                  <h3 className="text-2xl mb-4 text-white">{course.title}</h3>
                  <p className="text-gray-400 mb-6">{course.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-5 h-5 text-[#00B871]" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Award className="w-5 h-5 text-[#00B871]" />
                      <span>{course.level}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-[#00B871] mb-3">What You'll Learn:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {course.topics.map((topic, i) => (
                        <div key={i} className="flex items-start gap-2 text-gray-400">
                          <CheckCircle2 className="w-4 h-4 text-[#00B871] mt-1 flex-shrink-0" />
                          <span className="text-sm">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full px-6 py-3 bg-[#00B871] text-white rounded-lg hover:bg-[#00D67E] transition-all duration-300 glow-green-hover flex items-center justify-center gap-2"
                  >
                    Enroll Now
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Course - Palo Alto NGFW Training */}
      <PaloAltoCourse onNavigate={onNavigate} />

      {/* Corporate Training Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gradient-to-b from-[#0a0a0a] to-black py-20" id="corporate-training">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Building2 className="w-16 h-16 text-[#00B871] mb-6" />
              <h2 className="text-3xl md:text-4xl mb-6 text-white">
                Corporate <span className="text-[#00B871]">Training Programs</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mb-6"></div>
              <p className="text-gray-400 mb-6">
                Elevate your team's capabilities with our customized corporate training solutions. 
                We deliver comprehensive programs tailored to your organization's specific needs and objectives.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Customized curriculum based on your requirements',
                  'On-site or remote training options',
                  'Flexible scheduling to minimize business disruption',
                  'Hands-on labs and real-world scenarios',
                  'Post-training support and resources',
                  'Group discounts and certification assistance',
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00B871] mt-1 flex-shrink-0" />
                    <span className="text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-[#00B871] text-white rounded-lg hover:bg-[#00D67E] transition-all duration-300 glow-green-hover inline-flex items-center gap-2"
              >
                Request Corporate Training
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#00B871]/20">
              <h3 className="text-2xl mb-6 text-[#00B871]">Training Packages</h3>
              <div className="space-y-6">
                {[
                  {
                    name: 'Basic Package',
                    participants: 'Up to 15 participants',
                    duration: '5 days intensive',
                    features: ['1 course', 'Training materials', 'Certificate of completion'],
                  },
                  {
                    name: 'Professional Package',
                    participants: 'Up to 25 participants',
                    duration: '10 days comprehensive',
                    features: ['2 courses', 'Advanced labs', 'Certification exam prep', '30-day support'],
                  },
                  {
                    name: 'Enterprise Package',
                    participants: 'Unlimited participants',
                    duration: 'Custom duration',
                    features: ['Multiple courses', 'Custom curriculum', 'Ongoing support', 'Dedicated trainer'],
                  },
                ].map((pkg, index) => (
                  <div key={index} className="border-l-2 border-[#00B871] pl-4">
                    <h4 className="text-white mb-2">{pkg.name}</h4>
                    <div className="text-sm text-gray-400 mb-2">
                      <div>{pkg.participants}</div>
                      <div>{pkg.duration}</div>
                    </div>
                    <ul className="space-y-1">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="text-sm text-gray-500">• {feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* College Training Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20" id="college-training">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#00B871]/20">
                <h3 className="text-2xl mb-6 text-[#00B871]">Program Benefits</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Industry-Ready Skills',
                      description: 'Students gain practical, job-ready skills that align with current industry demands.',
                    },
                    {
                      title: 'Certification Preparation',
                      description: 'Comprehensive preparation for industry-recognized certifications like CCNA, CEH, and more.',
                    },
                    {
                      title: 'Hands-on Experience',
                      description: 'Access to state-of-the-art labs and real-world project work.',
                    },
                    {
                      title: 'Career Guidance',
                      description: 'Resume building, interview preparation, and job placement assistance.',
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="border-l-2 border-[#00B871] pl-4">
                      <h4 className="text-white mb-2">{benefit.title}</h4>
                      <p className="text-sm text-gray-400">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <GraduationCap className="w-16 h-16 text-[#00B871] mb-6" />
              <h2 className="text-3xl md:text-4xl mb-6 text-white">
                College <span className="text-[#00B871]">Training Programs</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mb-6"></div>
              <p className="text-gray-400 mb-6">
                Partner with us to provide your students with cutting-edge cybersecurity and networking education. 
                Our college programs bridge the gap between academic knowledge and industry requirements.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Curriculum aligned with academic standards',
                  'Experienced industry trainers',
                  'State-of-the-art virtual labs',
                  'Certification preparation included',
                  'Workshops and guest lectures',
                  'Internship opportunities',
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00B871] mt-1 flex-shrink-0" />
                    <span className="text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-[#00B871] text-white rounded-lg hover:bg-[#00D67E] transition-all duration-300 glow-green-hover inline-flex items-center gap-2"
              >
                Partner With Us
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-white">Why Choose Cyber Network?</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'Expert Instructors', description: 'Industry veterans with 10+ years experience' },
              { icon: Award, title: 'Certified Training', description: 'Authorized training partner for leading certifications' },
              { icon: CheckCircle2, title: '95% Success Rate', description: 'Students consistently achieve certification' },
              { icon: Building2, title: 'Industry Partnerships', description: 'Direct connections with top employers' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#00B871]/20 text-center hover:border-[#00B871] transition-all duration-300"
              >
                <item.icon className="w-12 h-12 text-[#00B871] mx-auto mb-4" />
                <h3 className="text-lg mb-2 text-white">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
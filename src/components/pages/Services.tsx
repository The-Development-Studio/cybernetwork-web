import { Shield, Network, Globe, Smartphone, Lock, Settings, AlertTriangle, CheckCircle2, ArrowRight, Eye } from 'lucide-react';
import { SEO } from '../SEO';
import { SchemaMarkup, getServiceSchema, getBreadcrumbSchema } from '../SchemaMarkup';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://cybernetworkco.com/' },
    { name: 'Services', url: 'https://cybernetworkco.com/services' },
  ]);

  const webPentestSchema = getServiceSchema(
    'Web Application Penetration Testing',
    'Comprehensive security testing of web applications to identify vulnerabilities like SQL injection, XSS, CSRF, and business logic flaws.'
  );

  const mobilePentestSchema = getServiceSchema(
    'Mobile Application Penetration Testing',
    'Security assessment of iOS and Android applications, including reverse engineering and runtime analysis.'
  );

  const networkPentestSchema = getServiceSchema(
    'Network Penetration Testing',
    'External and internal network security assessments to identify attack vectors and security weaknesses.'
  );
  const cybersecurityServices = [
    {
      icon: Globe,
      title: 'Web Application Pentesting',
      description: 'Comprehensive security testing of web applications to identify vulnerabilities like SQL injection, XSS, CSRF, and business logic flaws.',
      features: [
        'OWASP Top 10 assessment',
        'API security testing',
        'Authentication & authorization testing',
        'Detailed vulnerability reports',
      ],
      route: 'web-app-pentesting',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Pentesting',
      description: 'Security assessment of iOS and Android applications, including reverse engineering and runtime analysis.',
      features: [
        'Static & dynamic analysis',
        'Data storage security',
        'Communication security',
        'Binary analysis',
      ],
      route: 'mobile-app-pentesting',
    },
    {
      icon: Network,
      title: 'Network Pentesting',
      description: 'External and internal network security assessments to identify misconfigurations, vulnerabilities, and potential attack vectors.',
      features: [
        'Vulnerability scanning',
        'Network mapping',
        'Exploitation testing',
        'Post-exploitation analysis',
      ],
      route: 'network-pentesting',
    },
    {
      icon: Eye,
      title: 'Security Operations Center (SOC)',
      description: 'Our Security Operations Center (SOC) provides 24/7 monitoring, detection, and response to cybersecurity threats, ensuring your organization stays protected at all times.',
      features: [
        'Continuous Monitoring: Round-the-clock surveillance of networks, systems, and endpoints',
        'Threat Detection & Incident Response: Rapid identification and containment of security incidents',
        'Log Management & Analysis: Centralized collection and analysis of security logs for full visibility',
        'Threat Intelligence Integration: Proactive defense using global threat data and insights',
        'Compliance & Reporting: Support for regulatory requirements and detailed incident reports',
      ],
      route: 'soc',
    },
    {
      icon: Settings,
      title: 'QA Testing & Support',
      description: 'Quality assurance testing services to ensure your applications are secure, stable, and performant before deployment.',
      features: [
        'Functional testing',
        'Security regression testing',
        'Performance testing',
        'Continuous security monitoring',
      ],
      route: 'qa-testing',
    },
  ];

  const networkingServices = [
    {
      icon: Network,
      title: 'Network Design & Architecture',
      description: 'Design and implementation of secure, scalable network infrastructure tailored to your business needs.',
      features: [
        'Network topology design',
        'Capacity planning',
        'Redundancy & high availability',
        'Documentation & diagrams',
      ],
      route: 'network-design',
    },
    {
      icon: Shield,
      title: 'Firewall Setup & Configuration',
      description: 'Expert configuration of next-generation firewalls, IDS/IPS systems, and network security appliances.',
      features: [
        'Firewall rule optimization',
        'VPN configuration',
        'Intrusion prevention setup',
        'Security policy implementation',
      ],
      route: 'firewall-setup',
    },
    {
      icon: AlertTriangle,
      title: 'Network Troubleshooting',
      description: 'Rapid diagnosis and resolution of network performance issues, connectivity problems, and security incidents.',
      features: [
        '24/7 emergency support',
        'Performance optimization',
        'Root cause analysis',
        'Preventive maintenance',
      ],
      route: 'network-troubleshooting',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO
        title="Cybersecurity & Networking Services | Web, Mobile & QA Pentesting"
        description="Cyber Network offers penetration testing for web and mobile apps, network audits, firewall setup, QA testing, and technical support in Bengaluru, India."
        keywords="penetration testing India, web app security testing, mobile app penetration testing, network security audit, firewall configuration service, QA testing and support, vulnerability assessment, bug bounty and security testing, cybersecurity consulting, IT infrastructure hardening, VAPT services India, ethical hacking services, application security testing, API security testing, cloud security assessment, AWS security audit, secure code review, security compliance testing, PCI DSS compliance, HIPAA security audit, SOC 2 compliance, ISO 27001 consulting, security risk assessment, threat modeling, security architecture review, red team services, blue team training, purple team exercises, security operations center, managed security services, 24/7 security monitoring, incident response services, malware analysis, forensic investigation, data breach response, ransomware protection"
        ogTitle="Professional Networking & Cybersecurity Services"
        ogDescription="Protect your organization with our advanced pentesting and network security solutions. Expert cybersecurity services in India."
        canonical="https://cybernetworkco.com/services"
        articleTags={['Penetration Testing', 'VAPT', 'Security Services', 'Web Security', 'Mobile Security', 'Network Security', 'Consulting']}
      />
      <SchemaMarkup data={breadcrumbSchema} id="breadcrumb" />
      <SchemaMarkup data={webPentestSchema} id="service-web" />
      <SchemaMarkup data={mobilePentestSchema} id="service-mobile" />
      <SchemaMarkup data={networkPentestSchema} id="service-network" />
      
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6 text-white">
            Professional <span className="text-[#00B871] text-glow">Cybersecurity Services</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive networking and cybersecurity services to protect your digital assets, 
            infrastructure, and reputation.
          </p>
        </div>
      </section>

      {/* Cybersecurity Services */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-white">
              <Shield className="inline w-10 h-10 text-[#00B871] mr-3 mb-2" />
              Cybersecurity Services
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cybersecurityServices.map((service, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] rounded-lg border border-[#00B871]/20 overflow-hidden hover:border-[#00B871] transition-all duration-300 glow-green-hover"
              >
                <div className="p-8">
                  <service.icon className="w-12 h-12 text-[#00B871] mb-4" />
                  <h3 className="text-2xl mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#00B871] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onNavigate(service.route)}
                    className="w-full px-6 py-3 bg-[#00B871] text-white rounded-lg hover:bg-[#00D67E] transition-all duration-300 inline-flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Networking Services */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gradient-to-b from-[#0a0a0a] to-black py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-white">
              <Network className="inline w-10 h-10 text-[#00B871] mr-3 mb-2" />
              Networking Services
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {networkingServices.map((service, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] rounded-lg border border-[#00B871]/20 overflow-hidden hover:border-[#00B871] transition-all duration-300 glow-green-hover"
              >
                <div className="p-8">
                  <service.icon className="w-12 h-12 text-[#00B871] mb-4" />
                  <h3 className="text-2xl mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#00B871] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onNavigate(service.route)}
                    className="w-full px-6 py-3 bg-[#00B871] text-white rounded-lg hover:bg-[#00D67E] transition-all duration-300 inline-flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-white">Our Service Process</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A structured approach to deliver comprehensive security assessments and solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Initial meeting to understand your requirements, scope, and objectives.',
              },
              {
                step: '02',
                title: 'Assessment',
                description: 'Thorough security testing using industry-standard tools and methodologies.',
              },
              {
                step: '03',
                title: 'Reporting',
                description: 'Detailed reports with findings, risk ratings, and remediation recommendations.',
              },
              {
                step: '04',
                title: 'Support',
                description: 'Post-assessment support to help implement fixes and verify remediation.',
              },
            ].map((process, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#00B871]/20 relative overflow-hidden"
              >
                <div className="text-6xl text-[#00B871]/20 mb-4">{process.step}</div>
                <h3 className="text-xl mb-3 text-white">{process.title}</h3>
                <p className="text-gray-400">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gradient-to-b from-[#0a0a0a] to-black py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-white">Why Choose Us?</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Certified Experts',
                description: 'Our team holds industry-leading certifications including CEH, OSCP, CISSP, and CCNP.',
              },
              {
                icon: Lock,
                title: 'Proven Methodology',
                description: 'We follow established frameworks like OWASP, NIST, and PTES for comprehensive testing.',
              },
              {
                icon: CheckCircle2,
                title: 'Detailed Reports',
                description: 'Clear, actionable reports with step-by-step remediation guidance and POC documentation.',
              },
              {
                icon: Settings,
                title: 'Latest Tools',
                description: 'We use cutting-edge security tools combined with manual testing for thorough assessments.',
              },
              {
                icon: AlertTriangle,
                title: 'Confidentiality',
                description: 'Strict NDA compliance and secure handling of all sensitive information and findings.',
              },
              {
                icon: Network,
                title: 'Ongoing Support',
                description: 'Post-engagement support to help verify fixes and answer security questions.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#00B871]/20 text-center hover:border-[#00B871] transition-all duration-300"
              >
                <item.icon className="w-12 h-12 text-[#00B871] mx-auto mb-4" />
                <h3 className="text-xl mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#00B871]/20 to-[#00D67E]/20 rounded-lg border border-[#00B871] p-12 text-center">
            <h2 className="text-3xl md:text-4xl mb-4 text-white">Ready to Secure Your Infrastructure?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Get a free consultation to discuss your security needs and how we can help protect your organization.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-[#00B871] text-white rounded-lg hover:bg-[#00D67E] transition-all duration-300 glow-green-hover inline-flex items-center gap-2"
            >
              Request a Free Consultation
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
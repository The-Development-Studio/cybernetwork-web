import { Eye, CheckCircle2, Shield, AlertTriangle, ArrowRight, FileText, Users, Clock, Activity } from 'lucide-react';
import { SEO } from '../../SEO';
import { SchemaMarkup, getServiceSchema, getBreadcrumbSchema } from '../../SchemaMarkup';

interface SOCProps {
  onNavigate: (page: string) => void;
}

export function SOC({ onNavigate }: SOCProps) {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://cybernetworkco.com/' },
    { name: 'Services', url: 'https://cybernetworkco.com/services' },
    { name: 'Security Operations Center', url: 'https://cybernetworkco.com/services/soc' },
  ]);

  const serviceSchema = getServiceSchema(
    'Security Operations Center (SOC) Services',
    '24/7 security monitoring, threat detection, and incident response services to protect your organization from cybersecurity threats with continuous surveillance and rapid response.'
  );

  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO
        title="Security Operations Center (SOC) | 24/7 Monitoring & Threat Response"
        description="Professional SOC services with 24/7 monitoring, threat detection, incident response, log management, and threat intelligence integration. Protect your organization round-the-clock."
        keywords="security operations center, SOC services, 24/7 security monitoring, threat detection, incident response, SIEM, log management, threat intelligence, security monitoring, managed security services, SOC as a service"
        canonical="https://cybernetworkco.com/services/soc"
      />
      <SchemaMarkup data={breadcrumbSchema} id="breadcrumb" />
      <SchemaMarkup data={serviceSchema} id="service" />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => onNavigate('services')}
            className="text-[#00B871] hover:text-[#00D67E] mb-6 inline-flex items-center gap-2 transition-colors"
          >
            ← Back to Services
          </button>
          <div className="flex items-center gap-4 mb-6">
            <Eye className="w-16 h-16 text-[#00B871]" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-white">
              Security Operations Center <span className="text-[#00B871] text-glow">(SOC)</span>
            </h1>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl">
            24/7 monitoring, detection, and response to cybersecurity threats, ensuring your organization 
            stays protected at all times with continuous surveillance and rapid incident response.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#1A1A1A] rounded-lg border border-[#00B871]/20 p-8">
            <h2 className="text-3xl mb-6 text-white">Service Overview</h2>
            <p className="text-gray-400 mb-6">
              Our Security Operations Center (SOC) provides round-the-clock security monitoring and incident response 
              services to protect your organization from evolving cyber threats. Our team of experienced security analysts 
              uses advanced SIEM tools, threat intelligence, and proven incident response procedures to detect, analyze, 
              and respond to security incidents in real-time.
            </p>
            <p className="text-gray-400">
              Whether you need complete SOC-as-a-Service or co-managed SOC support, we deliver enterprise-grade security 
              monitoring tailored to your organization's needs, ensuring compliance and protecting your critical assets 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Core SOC Services */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gradient-to-b from-[#0a0a0a] to-black py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-white text-center">Comprehensive SOC Services</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Activity,
                title: 'Continuous Monitoring',
                description: 'Round-the-clock surveillance of networks, systems, and endpoints to detect security threats in real-time.',
                features: [
                  'Network traffic analysis',
                  'Endpoint monitoring',
                  'Server & application monitoring',
                  'Cloud infrastructure monitoring',
                  'User activity monitoring',
                  'Real-time alerting',
                ],
              },
              {
                icon: AlertTriangle,
                title: 'Threat Detection & Incident Response',
                description: 'Rapid identification and containment of security incidents to minimize impact and prevent damage.',
                features: [
                  'Advanced threat detection',
                  'Anomaly detection',
                  'Malware detection',
                  'Incident triage & analysis',
                  'Rapid containment',
                  'Forensic investigation',
                ],
              },
              {
                icon: FileText,
                title: 'Log Management & Analysis',
                description: 'Centralized collection and analysis of security logs for full visibility across your infrastructure.',
                features: [
                  'Centralized log collection',
                  'Log correlation & analysis',
                  'SIEM integration',
                  'Security event correlation',
                  'Historical data retention',
                  'Compliance reporting',
                ],
              },
              {
                icon: Shield,
                title: 'Threat Intelligence Integration',
                description: 'Proactive defense using global threat data and insights to stay ahead of emerging threats.',
                features: [
                  'Global threat feeds',
                  'IOC monitoring',
                  'Threat actor tracking',
                  'Vulnerability intelligence',
                  'Attack pattern analysis',
                  'Proactive threat hunting',
                ],
              },
              {
                icon: CheckCircle2,
                title: 'Compliance & Reporting',
                description: 'Support for regulatory requirements with detailed incident reports and compliance documentation.',
                features: [
                  'Compliance monitoring',
                  'Regulatory reporting',
                  'Audit trail maintenance',
                  'Custom dashboards',
                  'Executive reporting',
                  'Trend analysis',
                ],
              },
              {
                icon: Users,
                title: 'Security Consulting',
                description: 'Expert guidance on security strategy, architecture, and best practices from our SOC team.',
                features: [
                  'Security architecture review',
                  'Policy development',
                  'Playbook creation',
                  'Security awareness',
                  'Incident response planning',
                  'Technology recommendations',
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#00B871]/20 hover:border-[#00B871] transition-all duration-300"
              >
                <service.icon className="w-12 h-12 text-[#00B871] mb-4" />
                <h3 className="text-xl mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00B871] mt-1 flex-shrink-0" />
                      <span className="text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOC Capabilities */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-white text-center">What We Monitor & Protect</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Network Security',
                items: [
                  'Firewall logs',
                  'IDS/IPS alerts',
                  'VPN connections',
                  'Network traffic',
                  'DNS queries',
                  'DDoS attacks',
                ],
              },
              {
                title: 'Endpoint Security',
                items: [
                  'Antivirus alerts',
                  'EDR solutions',
                  'Malware detection',
                  'Process monitoring',
                  'File integrity',
                  'USB device control',
                ],
              },
              {
                title: 'Application Security',
                items: [
                  'Web applications',
                  'API gateways',
                  'Authentication logs',
                  'Database access',
                  'Business applications',
                  'SaaS platforms',
                ],
              },
              {
                title: 'Cloud Security',
                items: [
                  'AWS/Azure/GCP',
                  'Cloud access logs',
                  'Configuration changes',
                  'IAM activities',
                  'Storage access',
                  'Compute resources',
                ],
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#00B871]/20 hover:border-[#00B871] transition-all duration-300"
              >
                <h3 className="text-xl mb-4 text-[#00B871]">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00B871] mt-1 flex-shrink-0" />
                      <span className="text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Response Process */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gradient-to-b from-[#0a0a0a] to-black py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-white text-center">Incident Response Process</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {[
              {
                step: '01',
                title: 'Detection',
                description: 'Automated tools and analysts detect security events.',
              },
              {
                step: '02',
                title: 'Analysis',
                description: 'Triage and investigate alerts to determine severity.',
              },
              {
                step: '03',
                title: 'Containment',
                description: 'Isolate affected systems to prevent spread.',
              },
              {
                step: '04',
                title: 'Eradication',
                description: 'Remove threat actors and malware from environment.',
              },
              {
                step: '05',
                title: 'Recovery',
                description: 'Restore systems and verify normal operations.',
              },
              {
                step: '06',
                title: 'Reporting',
                description: 'Document incident and provide recommendations.',
              },
            ].map((phase, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#00B871]/20"
              >
                <div className="text-4xl text-[#00B871]/20 mb-3">{phase.step}</div>
                <h3 className="text-lg mb-2 text-white">{phase.title}</h3>
                <p className="text-gray-400">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOC Benefits */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-white text-center">Why Choose Our SOC Services?</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '24/7/365 Coverage',
                description: 'Round-the-clock monitoring with no gaps in coverage, including holidays and weekends.',
              },
              {
                title: 'Expert Security Analysts',
                description: 'Certified professionals with years of experience in threat detection and incident response.',
              },
              {
                title: 'Advanced Technology',
                description: 'Enterprise-grade SIEM, EDR, and threat intelligence platforms for comprehensive protection.',
              },
              {
                title: 'Rapid Response',
                description: 'Mean time to detect (MTTD) and respond (MTTR) measured in minutes, not hours or days.',
              },
              {
                title: 'Cost-Effective',
                description: 'More affordable than building and maintaining an in-house SOC team and infrastructure.',
              },
              {
                title: 'Scalable Solution',
                description: 'Easily scale services up or down based on your organization\'s changing needs.',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#00B871]/20 hover:border-[#00B871] transition-all duration-300"
              >
                <h3 className="text-xl mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gradient-to-b from-[#0a0a0a] to-black py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-white text-center">Service Options</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Managed SOC',
                description: 'Complete 24/7 SOC services - we handle everything from monitoring to incident response.',
                icon: Shield,
              },
              {
                title: 'Co-Managed SOC',
                description: 'We augment your existing security team with our SOC analysts and technology.',
                icon: Users,
              },
              {
                title: 'SOC Consulting',
                description: 'Build and optimize your in-house SOC with our expertise and guidance.',
                icon: Activity,
              },
            ].map((tier, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] p-8 rounded-lg border border-[#00B871]/20 hover:border-[#00B871] transition-all duration-300 text-center"
              >
                <tier.icon className="w-16 h-16 text-[#00B871] mx-auto mb-4" />
                <h3 className="text-2xl mb-4 text-white">{tier.title}</h3>
                <p className="text-gray-400">{tier.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#00B871]/20 to-[#00D67E]/20 rounded-lg border border-[#00B871] p-12 text-center">
            <h2 className="text-3xl md:text-4xl mb-4 text-white">Protect Your Organization 24/7</h2>
            <p className="text-xl text-gray-400 mb-8">
              Get a free SOC assessment and learn how our security operations center can protect your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-[#00B871] text-white rounded-lg hover:bg-[#00D67E] transition-all duration-300 glow-green-hover inline-flex items-center justify-center gap-2"
              >
                Request SOC Assessment
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="px-8 py-4 bg-transparent border border-[#00B871] text-[#00B871] rounded-lg hover:bg-[#00B871]/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                View All Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

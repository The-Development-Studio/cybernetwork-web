import { Shield, CheckCircle2, Network, AlertTriangle, ArrowRight, FileText, Users, Clock } from 'lucide-react';
import { SEO } from '../../SEO';
import { SchemaMarkup, getServiceSchema, getBreadcrumbSchema } from '../../SchemaMarkup';

interface FirewallSetupProps {
  onNavigate: (page: string) => void;
}

export function FirewallSetup({ onNavigate }: FirewallSetupProps) {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://cybernetworkco.com/' },
    { name: 'Services', url: 'https://cybernetworkco.com/services' },
    { name: 'Firewall Setup & Configuration', url: 'https://cybernetworkco.com/services/firewall-setup' },
  ]);

  const serviceSchema = getServiceSchema(
    'Firewall Setup & Configuration Services',
    'Expert configuration of next-generation firewalls, IDS/IPS systems, and network security appliances with rule optimization and security policy implementation.'
  );

  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO
        title="Firewall Setup & Configuration | Next-Gen Firewall Services"
        description="Professional firewall setup and configuration services. Next-generation firewalls, IDS/IPS, VPN, rule optimization, and security policy implementation."
        keywords="firewall configuration, next-gen firewall, NGFW, firewall setup, IDS IPS configuration, VPN setup, firewall rules, network security, perimeter security, firewall optimization"
        canonical="https://cybernetworkco.com/services/firewall-setup"
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
            <Shield className="w-16 h-16 text-[#00B871]" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-white">
              Firewall Setup & <span className="text-[#00B871] text-glow">Configuration</span>
            </h1>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl">
            Expert configuration of next-generation firewalls, IDS/IPS systems, and network security appliances 
            to protect your network perimeter and internal assets from cyber threats.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#1A1A1A] rounded-lg border border-[#00B871]/20 p-8">
            <h2 className="text-3xl mb-6 text-white">Service Overview</h2>
            <p className="text-gray-400 mb-6">
              Our Firewall Setup & Configuration service provides comprehensive deployment and optimization of network 
              security appliances to protect your organization from external and internal threats. We configure firewalls, 
              intrusion detection/prevention systems, VPNs, and other security devices according to industry best practices 
              and your specific security requirements.
            </p>
            <p className="text-gray-400">
              From initial installation to ongoing rule optimization, our certified security engineers ensure your firewall 
              infrastructure provides maximum protection while maintaining necessary business functionality and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gradient-to-b from-[#0a0a0a] to-black py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-white text-center">Comprehensive Firewall Services</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: 'Firewall Rule Optimization',
                description: 'Optimize firewall rules for security, performance, and manageability.',
                features: [
                  'Rule base cleanup and consolidation',
                  'Redundant rule removal',
                  'Rule ordering optimization',
                  'Policy-based rule organization',
                  'Shadow rule identification',
                  'Unused rule cleanup',
                  'Documentation and comments',
                  'Change management procedures',
                ],
              },
              {
                icon: Network,
                title: 'VPN Configuration',
                description: 'Secure remote access and site-to-site VPN implementations.',
                features: [
                  'Site-to-site VPN tunnels',
                  'Remote access VPN (SSL/IPsec)',
                  'Client VPN configuration',
                  'VPN high availability',
                  'Split tunneling configuration',
                  'Multi-factor authentication',
                  'VPN performance optimization',
                  'Certificate management',
                ],
              },
              {
                icon: AlertTriangle,
                title: 'Intrusion Prevention Setup',
                description: 'Deploy and configure IDS/IPS systems for advanced threat detection.',
                features: [
                  'IPS signature management',
                  'Custom signature creation',
                  'Threat prevention policies',
                  'Anomaly detection configuration',
                  'Inline vs. passive mode setup',
                  'False positive tuning',
                  'Integration with SIEM',
                  'Alert notification setup',
                ],
              },
              {
                icon: CheckCircle2,
                title: 'Security Policy Implementation',
                description: 'Implement comprehensive security policies aligned with business needs.',
                features: [
                  'Access control policies',
                  'Application control',
                  'URL filtering',
                  'Content filtering',
                  'Anti-malware policies',
                  'Data loss prevention (DLP)',
                  'SSL inspection',
                  'Threat prevention policies',
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] p-8 rounded-lg border border-[#00B871]/20 hover:border-[#00B871] transition-all duration-300"
              >
                <service.icon className="w-12 h-12 text-[#00B871] mb-4" />
                <h3 className="text-2xl mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
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

      {/* Supported Platforms */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-white text-center">Supported Firewall Platforms</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Enterprise Firewalls',
                items: [
                  'Palo Alto Networks',
                  'Fortinet FortiGate',
                  'Cisco ASA/Firepower',
                  'Check Point',
                  'Juniper SRX',
                  'pfSense Enterprise',
                ],
              },
              {
                title: 'Next-Gen Features',
                items: [
                  'Application awareness',
                  'User identity integration',
                  'Advanced threat protection',
                  'SSL/TLS inspection',
                  'Sandboxing',
                  'Threat intelligence feeds',
                ],
              },
              {
                title: 'Cloud Firewalls',
                items: [
                  'AWS Security Groups',
                  'Azure Firewall',
                  'GCP Firewall Rules',
                  'Cloud-native NGFW',
                  'Virtual appliances',
                  'Hybrid deployments',
                ],
              },
              {
                title: 'IDS/IPS Systems',
                items: [
                  'Snort',
                  'Suricata',
                  'Cisco Firepower IPS',
                  'Palo Alto Threat Prevention',
                  'FortiGate IPS',
                  'Custom signatures',
                ],
              },
              {
                title: 'Unified Threat Management',
                items: [
                  'Sophos XG Firewall',
                  'SonicWall TZ Series',
                  'WatchGuard Firebox',
                  'Barracuda CloudGen',
                  'Untangle NG Firewall',
                  'pfSense',
                ],
              },
              {
                title: 'Advanced Features',
                items: [
                  'SD-WAN integration',
                  'Zero Trust architecture',
                  'Microsegmentation',
                  'API security',
                  'IoT security',
                  'Multi-cloud security',
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

      {/* Implementation Process */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gradient-to-b from-[#0a0a0a] to-black py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-white text-center">Implementation Process</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Analyze current security posture and requirements.',
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Design security architecture and policies.',
              },
              {
                step: '03',
                title: 'Configuration',
                description: 'Configure firewall according to best practices.',
              },
              {
                step: '04',
                title: 'Testing',
                description: 'Validate rules and security policies.',
              },
              {
                step: '05',
                title: 'Deployment',
                description: 'Deploy to production with minimal disruption.',
              },
              {
                step: '06',
                title: 'Optimization',
                description: 'Monitor, tune, and optimize performance.',
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

      {/* Key Benefits */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-white text-center">Why Professional Firewall Configuration?</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Enhanced Security',
                description: 'Properly configured firewalls significantly reduce attack surface and block threats effectively.',
              },
              {
                title: 'Compliance Ready',
                description: 'Meet regulatory requirements (PCI DSS, HIPAA, SOC 2) with documented security controls.',
              },
              {
                title: 'Optimized Performance',
                description: 'Eliminate bottlenecks and ensure firewall performance doesn\'t impact network speed.',
              },
              {
                title: 'Reduced Downtime',
                description: 'Prevent misconfigurations that could block legitimate traffic and cause business disruption.',
              },
              {
                title: 'Best Practices',
                description: 'Leverage industry best practices and vendor-specific optimization techniques.',
              },
              {
                title: 'Expert Support',
                description: 'Ongoing support and guidance from certified firewall administrators.',
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

      {/* Deliverables */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gradient-to-b from-[#0a0a0a] to-black py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-white text-center">What You'll Receive</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: FileText,
                title: 'Configuration Documentation',
                description: 'Complete documentation of all firewall rules, policies, and configurations with justifications.',
              },
              {
                icon: Shield,
                title: 'Security Policy Document',
                description: 'Detailed security policy documentation aligned with business requirements and compliance needs.',
              },
              {
                icon: Network,
                title: 'Network Diagrams',
                description: 'Security zone diagrams showing firewall placement, DMZ, and traffic flows.',
              },
              {
                icon: CheckCircle2,
                title: 'Knowledge Transfer',
                description: 'Training sessions and operational handbooks for your IT team to manage the firewall.',
              },
            ].map((deliverable, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] p-8 rounded-lg border border-[#00B871]/20 hover:border-[#00B871] transition-all duration-300"
              >
                <deliverable.icon className="w-12 h-12 text-[#00B871] mb-4" />
                <h3 className="text-2xl mb-3 text-white">{deliverable.title}</h3>
                <p className="text-gray-400">{deliverable.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline & Expertise */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#00B871]/20 text-center">
              <Clock className="w-12 h-12 text-[#00B871] mx-auto mb-4" />
              <h3 className="text-2xl mb-3 text-white">Timeline</h3>
              <p className="text-gray-400 mb-2">Basic Setup: 3-5 days</p>
              <p className="text-gray-400 mb-2">Advanced Config: 1-2 weeks</p>
              <p className="text-gray-400">Enterprise: 2-4 weeks</p>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#00B871]/20 text-center">
              <Users className="w-12 h-12 text-[#00B871] mx-auto mb-4" />
              <h3 className="text-2xl mb-3 text-white">Expertise</h3>
              <p className="text-gray-400 mb-2">Firewall Specialists</p>
              <p className="text-gray-400 mb-2">CCNP Security, NSE Certified</p>
              <p className="text-gray-400">Vendor Certifications</p>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#00B871]/20 text-center">
              <Shield className="w-12 h-12 text-[#00B871] mx-auto mb-4" />
              <h3 className="text-2xl mb-3 text-white">Support</h3>
              <p className="text-gray-400 mb-2">Post-Implementation Support</p>
              <p className="text-gray-400 mb-2">24/7 Emergency Assistance</p>
              <p className="text-gray-400">Ongoing Optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#00B871]/20 to-[#00D67E]/20 rounded-lg border border-[#00B871] p-12 text-center">
            <h2 className="text-3xl md:text-4xl mb-4 text-white">Secure Your Network Perimeter</h2>
            <p className="text-xl text-gray-400 mb-8">
              Get expert firewall configuration to protect your organization from cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-[#00B871] text-white rounded-lg hover:bg-[#00D67E] transition-all duration-300 glow-green-hover inline-flex items-center justify-center gap-2"
              >
                Request a Consultation
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

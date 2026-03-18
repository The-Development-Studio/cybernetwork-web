import { AlertTriangle, CheckCircle2, Shield, ArrowRight, FileText, Users, Clock, Activity } from 'lucide-react';
import { SEO } from '../../SEO';
import { SchemaMarkup, getServiceSchema, getBreadcrumbSchema } from '../../SchemaMarkup';

interface NetworkTroubleshootingProps {
  onNavigate: (page: string) => void;
}

export function NetworkTroubleshooting({ onNavigate }: NetworkTroubleshootingProps) {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://cybernetworkco.com/' },
    { name: 'Services', url: 'https://cybernetworkco.com/services' },
    { name: 'Network Troubleshooting', url: 'https://cybernetworkco.com/services/network-troubleshooting' },
  ]);

  const serviceSchema = getServiceSchema(
    'Network Troubleshooting Services',
    'Rapid diagnosis and resolution of network performance issues, connectivity problems, and security incidents with 24/7 emergency support and root cause analysis.'
  );

  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO
        title="Network Troubleshooting | 24/7 Emergency Network Support"
        description="Professional network troubleshooting services with 24/7 emergency support. Rapid diagnosis and resolution of network issues, performance optimization, and root cause analysis."
        keywords="network troubleshooting, network support, network issues, connectivity problems, network performance, emergency network support, network diagnosis, network repair, IT support"
        canonical="https://cybernetworkco.com/services/network-troubleshooting"
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
            <AlertTriangle className="w-16 h-16 text-[#00B871]" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-white">
              Network <span className="text-[#00B871] text-glow">Troubleshooting</span>
            </h1>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl">
            Rapid diagnosis and resolution of network performance issues, connectivity problems, and security 
            incidents with 24/7 emergency support and expert analysis.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#1A1A1A] rounded-lg border border-[#00B871]/20 p-8">
            <h2 className="text-3xl mb-6 text-white">Service Overview</h2>
            <p className="text-gray-400 mb-6">
              Our Network Troubleshooting service provides rapid response to network issues, minimizing downtime and 
              business impact. Our experienced network engineers use advanced diagnostic tools and methodologies to 
              quickly identify root causes and implement effective solutions for connectivity issues, performance 
              degradation, and security incidents.
            </p>
            <p className="text-gray-400">
              Available 24/7/365 for emergency support, we help organizations maintain network reliability, optimize 
              performance, and prevent future issues through proactive monitoring and preventive maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gradient-to-b from-[#0a0a0a] to-black py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-white text-center">Comprehensive Support Services</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: '24/7 Emergency Support',
                description: 'Round-the-clock emergency support for critical network issues and outages.',
                features: [
                  'Immediate response to emergencies',
                  'Critical incident management',
                  'After-hours support',
                  'Holiday coverage',
                  'Escalation procedures',
                  'War room coordination',
                  'Vendor liaison',
                  'Service restoration priority',
                ],
              },
              {
                icon: Activity,
                title: 'Performance Optimization',
                description: 'Identify and resolve network performance bottlenecks and slowdowns.',
                features: [
                  'Bandwidth analysis',
                  'Latency troubleshooting',
                  'Packet loss investigation',
                  'QoS optimization',
                  'Traffic pattern analysis',
                  'Link utilization monitoring',
                  'Application performance',
                  'Network capacity planning',
                ],
              },
              {
                icon: FileText,
                title: 'Root Cause Analysis',
                description: 'Deep dive investigation to identify underlying causes of recurring issues.',
                features: [
                  'Detailed problem analysis',
                  'Timeline reconstruction',
                  'Log file analysis',
                  'Configuration review',
                  'Change correlation',
                  'Trend analysis',
                  'Issue documentation',
                  'Prevention recommendations',
                ],
              },
              {
                icon: Shield,
                title: 'Preventive Maintenance',
                description: 'Proactive monitoring and maintenance to prevent issues before they occur.',
                features: [
                  'Regular health checks',
                  'Firmware/software updates',
                  'Configuration backups',
                  'Capacity monitoring',
                  'Performance baseline tracking',
                  'Predictive analysis',
                  'Scheduled maintenance',
                  'Documentation updates',
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

      {/* Common Issues */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-white text-center">Issues We Resolve</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Connectivity Issues',
                items: [
                  'Internet connectivity loss',
                  'Intermittent disconnections',
                  'VPN connection problems',
                  'WiFi connectivity issues',
                  'Site-to-site link failures',
                  'DNS resolution problems',
                ],
              },
              {
                title: 'Performance Problems',
                items: [
                  'Slow network speeds',
                  'High latency',
                  'Packet loss',
                  'Bandwidth congestion',
                  'Application timeouts',
                  'Video conferencing issues',
                ],
              },
              {
                title: 'Hardware Failures',
                items: [
                  'Router/switch failures',
                  'Port failures',
                  'Power supply issues',
                  'Cable problems',
                  'Transceiver failures',
                  'Environmental issues',
                ],
              },
              {
                title: 'Configuration Errors',
                items: [
                  'Routing misconfigurations',
                  'VLAN issues',
                  'Firewall rule problems',
                  'NAT configuration errors',
                  'QoS misconfigurations',
                  'Access control issues',
                ],
              },
              {
                title: 'Security Incidents',
                items: [
                  'DDoS attacks',
                  'Unauthorized access',
                  'Malware infections',
                  'Port scanning',
                  'Intrusion attempts',
                  'Data exfiltration',
                ],
              },
              {
                title: 'Service Disruptions',
                items: [
                  'DHCP server issues',
                  'DNS server problems',
                  'Email delivery failures',
                  'Web service unavailability',
                  'Database connectivity',
                  'Cloud service access',
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

      {/* Troubleshooting Process */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gradient-to-b from-[#0a0a0a] to-black py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-white text-center">Our Troubleshooting Process</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {[
              {
                step: '01',
                title: 'Identify',
                description: 'Understand symptoms and gather initial information.',
              },
              {
                step: '02',
                title: 'Isolate',
                description: 'Narrow down potential causes and affected areas.',
              },
              {
                step: '03',
                title: 'Diagnose',
                description: 'Use tools to pinpoint exact cause of the issue.',
              },
              {
                step: '04',
                title: 'Resolve',
                description: 'Implement solution to fix the problem.',
              },
              {
                step: '05',
                title: 'Verify',
                description: 'Test to ensure issue is fully resolved.',
              },
              {
                step: '06',
                title: 'Document',
                description: 'Record findings and preventive measures.',
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

      {/* Diagnostic Tools */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-white text-center">Advanced Diagnostic Tools</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Network Analyzers',
                items: [
                  'Wireshark',
                  'tcpdump',
                  'Network protocol analyzers',
                  'Packet capture tools',
                ],
              },
              {
                title: 'Monitoring Tools',
                items: [
                  'PRTG Network Monitor',
                  'SolarWinds',
                  'Nagios',
                  'Zabbix',
                ],
              },
              {
                title: 'Performance Tools',
                items: [
                  'iPerf',
                  'NetFlow analyzers',
                  'Bandwidth monitors',
                  'Latency testers',
                ],
              },
              {
                title: 'Diagnostic Commands',
                items: [
                  'ping/traceroute',
                  'nslookup/dig',
                  'netstat',
                  'show commands',
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

      {/* Support Options */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gradient-to-b from-[#0a0a0a] to-black py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-white text-center">Support Options</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: 'Emergency Support',
                description: 'Immediate response for critical network outages',
                features: [
                  '24/7/365 availability',
                  '< 15 min response time',
                  'Priority escalation',
                  'Dedicated hotline',
                ],
              },
              {
                icon: Activity,
                title: 'Managed Support',
                description: 'Ongoing monitoring and proactive maintenance',
                features: [
                  'Continuous monitoring',
                  'Regular health checks',
                  'Preventive maintenance',
                  'Monthly reports',
                ],
              },
              {
                icon: Users,
                title: 'On-Demand Support',
                description: 'Pay-per-incident troubleshooting services',
                features: [
                  'No retainer required',
                  'Flexible engagement',
                  'Expert consultation',
                  'Problem resolution',
                ],
              },
            ].map((option, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] p-8 rounded-lg border border-[#00B871]/20 hover:border-[#00B871] transition-all duration-300"
              >
                <option.icon className="w-12 h-12 text-[#00B871] mb-4" />
                <h3 className="text-2xl mb-3 text-white">{option.title}</h3>
                <p className="text-gray-400 mb-6">{option.description}</p>
                <ul className="space-y-2">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#00B871] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#00B871]/20 text-center">
              <Clock className="w-12 h-12 text-[#00B871] mx-auto mb-4" />
              <h3 className="text-2xl mb-3 text-white">Response Time</h3>
              <p className="text-gray-400 mb-2">Critical: 15 minutes</p>
              <p className="text-gray-400 mb-2">High: 1 hour</p>
              <p className="text-gray-400">Medium: 4 hours</p>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#00B871]/20 text-center">
              <Users className="w-12 h-12 text-[#00B871] mx-auto mb-4" />
              <h3 className="text-2xl mb-3 text-white">Expertise</h3>
              <p className="text-gray-400 mb-2">Network Engineers</p>
              <p className="text-gray-400 mb-2">CCNA, CCNP, CCIE</p>
              <p className="text-gray-400">Multi-vendor Experience</p>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#00B871]/20 text-center">
              <Shield className="w-12 h-12 text-[#00B871] mx-auto mb-4" />
              <h3 className="text-2xl mb-3 text-white">Coverage</h3>
              <p className="text-gray-400 mb-2">24/7/365 Availability</p>
              <p className="text-gray-400 mb-2">Remote & On-site</p>
              <p className="text-gray-400">Global Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#00B871]/20 to-[#00D67E]/20 rounded-lg border border-[#00B871] p-12 text-center">
            <h2 className="text-3xl md:text-4xl mb-4 text-white">Need Network Support Right Now?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Our network experts are standing by 24/7 to help resolve your network issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-[#00B871] text-white rounded-lg hover:bg-[#00D67E] transition-all duration-300 glow-green-hover inline-flex items-center justify-center gap-2"
              >
                Get Emergency Support
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

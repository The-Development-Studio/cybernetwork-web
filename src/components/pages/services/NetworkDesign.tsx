import { Network, CheckCircle2, Shield, ArrowRight, FileText, Users, Clock } from 'lucide-react';
import { SEO } from '../../SEO';
import { SchemaMarkup, getServiceSchema, getBreadcrumbSchema } from '../../SchemaMarkup';

interface NetworkDesignProps {
  onNavigate: (page: string) => void;
}

export function NetworkDesign({ onNavigate }: NetworkDesignProps) {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://cybernetworkco.com/' },
    { name: 'Services', url: 'https://cybernetworkco.com/services' },
    { name: 'Network Design & Architecture', url: 'https://cybernetworkco.com/services/network-design' },
  ]);

  const serviceSchema = getServiceSchema(
    'Network Design & Architecture Services',
    'Professional network design and implementation services for secure, scalable network infrastructure tailored to your business needs with high availability and redundancy.'
  );

  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO
        title="Network Design & Architecture | Scalable Infrastructure Solutions"
        description="Professional network design and architecture services. Secure, scalable network infrastructure with high availability, redundancy, and comprehensive documentation."
        keywords="network design, network architecture, infrastructure design, network topology, network planning, scalable network, high availability network, redundant network, network documentation"
        canonical="https://cybernetworkco.com/services/network-design"
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
            <Network className="w-16 h-16 text-[#00B871]" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-white">
              Network Design & <span className="text-[#00B871] text-glow">Architecture</span>
            </h1>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl">
            Design and implementation of secure, scalable network infrastructure tailored to your business needs, 
            ensuring high performance, reliability, and future growth.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#1A1A1A] rounded-lg border border-[#00B871]/20 p-8">
            <h2 className="text-3xl mb-6 text-white">Service Overview</h2>
            <p className="text-gray-400 mb-6">
              Our Network Design & Architecture service helps organizations build robust, secure, and scalable network 
              infrastructure from the ground up or optimize existing networks. We analyze your business requirements, 
              growth projections, and security needs to design network solutions that support your operations today and 
              scale seamlessly as your business grows.
            </p>
            <p className="text-gray-400">
              From small business networks to enterprise data centers and multi-site deployments, our certified network 
              architects deliver comprehensive designs with detailed documentation, implementation plans, and ongoing 
              optimization recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gradient-to-b from-[#0a0a0a] to-black py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-white text-center">Comprehensive Design Services</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Network Topology Design',
                description: 'Strategic network architecture planning for optimal performance and security.',
                features: [
                  'LAN/WAN topology design',
                  'Network segmentation strategy',
                  'VLAN design and implementation',
                  'Subnet planning and IP addressing',
                  'Physical and logical diagrams',
                  'Layer 2/Layer 3 architecture',
                  'Data center network design',
                  'Campus network design',
                ],
              },
              {
                title: 'Capacity Planning',
                description: 'Future-proof your network with proper capacity and growth planning.',
                features: [
                  'Bandwidth requirements analysis',
                  'Traffic pattern analysis',
                  'Growth projection modeling',
                  'Scalability assessment',
                  'Performance baseline establishment',
                  'QoS requirements analysis',
                  'Resource utilization planning',
                  'Technology lifecycle planning',
                ],
              },
              {
                title: 'Redundancy & High Availability',
                description: 'Ensure business continuity with redundant, highly available network designs.',
                features: [
                  'Redundant link design (LACP, EtherChannel)',
                  'Router redundancy (HSRP, VRRP, GLBP)',
                  'Load balancing strategies',
                  'Failover planning',
                  'Disaster recovery network design',
                  'Multi-site connectivity',
                  'Backup connectivity options',
                  'SLA compliance design',
                ],
              },
              {
                title: 'Documentation & Diagrams',
                description: 'Comprehensive network documentation for operations and troubleshooting.',
                features: [
                  'Network topology diagrams',
                  'IP address management (IPAM) documentation',
                  'VLAN documentation',
                  'Rack elevation diagrams',
                  'Cable management documentation',
                  'Configuration templates',
                  'Network policies and procedures',
                  'As-built documentation',
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] p-8 rounded-lg border border-[#00B871]/20 hover:border-[#00B871] transition-all duration-300"
              >
                <h3 className="text-2xl mb-4 text-[#00B871]">{service.title}</h3>
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

      {/* Design Process */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-white text-center">Our Design Process</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understand business requirements, current infrastructure, and future goals.',
              },
              {
                step: '02',
                title: 'Analysis',
                description: 'Analyze traffic patterns, capacity needs, and security requirements.',
              },
              {
                step: '03',
                title: 'Design',
                description: 'Create detailed network architecture with topology and component selection.',
              },
              {
                step: '04',
                title: 'Implementation',
                description: 'Deploy network infrastructure according to approved design specifications.',
              },
              {
                step: '05',
                title: 'Optimization',
                description: 'Fine-tune configuration, test performance, and provide documentation.',
              },
            ].map((phase, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#00B871]/20"
              >
                <div className="text-5xl text-[#00B871]/20 mb-4">{phase.step}</div>
                <h3 className="text-xl mb-3 text-white">{phase.title}</h3>
                <p className="text-gray-400">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Components */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gradient-to-b from-[#0a0a0a] to-black py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-white text-center">Network Components We Design</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Core Infrastructure',
                items: [
                  'Core routers and switches',
                  'Distribution layer design',
                  'Access layer architecture',
                  'Backbone connectivity',
                  'Data center switching',
                  'Collapsed core designs',
                ],
              },
              {
                title: 'Security Components',
                items: [
                  'Firewall placement',
                  'DMZ design',
                  'IDS/IPS positioning',
                  'Security zones',
                  'VPN infrastructure',
                  'Network access control (NAC)',
                ],
              },
              {
                title: 'Wireless Networks',
                items: [
                  'WiFi coverage design',
                  'Access point placement',
                  'Controller architecture',
                  'Guest network isolation',
                  'Wireless security',
                  'Site survey and planning',
                ],
              },
              {
                title: 'WAN & Connectivity',
                items: [
                  'WAN topology design',
                  'SD-WAN architecture',
                  'MPLS design',
                  'Internet connectivity',
                  'Backup connections',
                  'Multi-cloud connectivity',
                ],
              },
              {
                title: 'Voice & Video',
                items: [
                  'VoIP network design',
                  'QoS implementation',
                  'Video conferencing',
                  'UC infrastructure',
                  'SIP trunking',
                  'Voice VLAN design',
                ],
              },
              {
                title: 'Management & Monitoring',
                items: [
                  'Network management systems',
                  'Monitoring infrastructure',
                  'SNMP architecture',
                  'Syslog servers',
                  'NetFlow/sFlow',
                  'Out-of-band management',
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

      {/* Deliverables */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-white text-center">Project Deliverables</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: FileText,
                title: 'Design Documentation',
                description: 'Complete network design documents including architecture overview, component specifications, and implementation guidelines.',
              },
              {
                icon: Network,
                title: 'Network Diagrams',
                description: 'Professional Visio/Lucidchart diagrams showing physical topology, logical topology, and rack layouts.',
              },
              {
                icon: Shield,
                title: 'Security Architecture',
                description: 'Security zone design, firewall rule templates, and security best practices documentation.',
              },
              {
                icon: CheckCircle2,
                title: 'Implementation Plan',
                description: 'Step-by-step implementation guide with timelines, resource requirements, and rollback procedures.',
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
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gradient-to-b from-[#0a0a0a] to-black py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#00B871]/20 text-center">
              <Clock className="w-12 h-12 text-[#00B871] mx-auto mb-4" />
              <h3 className="text-2xl mb-3 text-white">Timeline</h3>
              <p className="text-gray-400 mb-2">Small Network: 2-3 weeks</p>
              <p className="text-gray-400 mb-2">Medium Network: 4-6 weeks</p>
              <p className="text-gray-400">Enterprise: 8-12 weeks</p>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#00B871]/20 text-center">
              <Users className="w-12 h-12 text-[#00B871] mx-auto mb-4" />
              <h3 className="text-2xl mb-3 text-white">Expertise</h3>
              <p className="text-gray-400 mb-2">Network Architects</p>
              <p className="text-gray-400 mb-2">CCNP, CCIE Certified</p>
              <p className="text-gray-400">20+ Years Experience</p>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#00B871]/20 text-center">
              <Shield className="w-12 h-12 text-[#00B871] mx-auto mb-4" />
              <h3 className="text-2xl mb-3 text-white">Support</h3>
              <p className="text-gray-400 mb-2">Vendor-Neutral Design</p>
              <p className="text-gray-400 mb-2">Best Practices</p>
              <p className="text-gray-400">Ongoing Consultation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#00B871]/20 to-[#00D67E]/20 rounded-lg border border-[#00B871] p-12 text-center">
            <h2 className="text-3xl md:text-4xl mb-4 text-white">Build a Scalable Network Infrastructure</h2>
            <p className="text-xl text-gray-400 mb-8">
              Get a free consultation to discuss your network design and architecture needs.
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

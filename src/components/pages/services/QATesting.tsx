import { Settings, CheckCircle2, Shield, AlertTriangle, ArrowRight, FileText, Users, Clock } from 'lucide-react';
import { SEO } from '../../SEO';
import { SchemaMarkup, getServiceSchema, getBreadcrumbSchema } from '../../SchemaMarkup';

interface QATestingProps {
  onNavigate: (page: string) => void;
}

export function QATesting({ onNavigate }: QATestingProps) {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://cybernetworkco.com/' },
    { name: 'Services', url: 'https://cybernetworkco.com/services' },
    { name: 'QA Testing & Support', url: 'https://cybernetworkco.com/services/qa-testing' },
  ]);

  const serviceSchema = getServiceSchema(
    'QA Testing & Support Services',
    'Comprehensive quality assurance testing services to ensure your applications are secure, stable, and performant before deployment with continuous security monitoring.'
  );

  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO
        title="QA Testing & Support | Security-Focused Quality Assurance Services"
        description="Professional QA testing services with security focus. Functional testing, security regression, performance testing, and continuous monitoring for secure application deployment."
        keywords="QA testing services, quality assurance, security testing, functional testing, regression testing, performance testing, test automation, security QA, application testing, software testing"
        canonical="https://cybernetworkco.com/services/qa-testing"
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
            <Settings className="w-16 h-16 text-[#00B871]" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-white">
              QA Testing & <span className="text-[#00B871] text-glow">Support Services</span>
            </h1>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl">
            Comprehensive quality assurance testing services to ensure your applications are secure, stable, 
            and performant before deployment, with ongoing support and continuous monitoring.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#1A1A1A] rounded-lg border border-[#00B871]/20 p-8">
            <h2 className="text-3xl mb-6 text-white">Service Overview</h2>
            <p className="text-gray-400 mb-6">
              Our QA Testing & Support service combines traditional quality assurance with security-focused testing 
              to ensure your applications meet both functional requirements and security standards. We help organizations 
              deliver high-quality, secure software by identifying bugs, performance issues, and security vulnerabilities 
              before they reach production.
            </p>
            <p className="text-gray-400">
              With expertise in both manual and automated testing, our QA engineers work closely with your development 
              team to integrate security testing into your SDLC, enabling continuous security monitoring and rapid 
              issue resolution throughout the development lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Testing Services */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gradient-to-b from-[#0a0a0a] to-black py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-white text-center">Comprehensive Testing Services</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: CheckCircle2,
                title: 'Functional Testing',
                description: 'Verify that your application works as intended and meets all business requirements.',
                features: [
                  'User interface testing',
                  'API testing',
                  'Database testing',
                  'Integration testing',
                  'User acceptance testing',
                  'Smoke & sanity testing',
                  'End-to-end testing',
                  'Cross-browser testing',
                ],
              },
              {
                icon: Shield,
                title: 'Security Regression Testing',
                description: 'Ensure security fixes remain effective and no new vulnerabilities are introduced.',
                features: [
                  'Vulnerability revalidation',
                  'Security patch verification',
                  'Code change impact analysis',
                  'Authentication testing',
                  'Authorization testing',
                  'Input validation testing',
                  'Session management testing',
                  'Security configuration review',
                ],
              },
              {
                icon: Settings,
                title: 'Performance Testing',
                description: 'Evaluate application speed, scalability, stability, and resource usage under load.',
                features: [
                  'Load testing',
                  'Stress testing',
                  'Scalability testing',
                  'Endurance testing',
                  'Spike testing',
                  'Volume testing',
                  'Response time analysis',
                  'Resource utilization monitoring',
                ],
              },
              {
                icon: AlertTriangle,
                title: 'Continuous Security Monitoring',
                description: 'Ongoing monitoring to detect security issues and ensure compliance post-deployment.',
                features: [
                  'Runtime security monitoring',
                  'Dependency vulnerability scanning',
                  'Configuration drift detection',
                  'Compliance monitoring',
                  'Security log analysis',
                  'Anomaly detection',
                  'Threat detection',
                  'Incident alerting',
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

      {/* Testing Methodologies */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-white text-center">Our Testing Approach</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Manual Testing',
                description: 'Expert testers manually explore your application to find issues automated tools might miss.',
                benefits: [
                  'Exploratory testing',
                  'Usability testing',
                  'Ad-hoc testing',
                  'Human-centric analysis',
                ],
              },
              {
                title: 'Automated Testing',
                description: 'Efficient test automation for regression, performance, and continuous integration testing.',
                benefits: [
                  'Faster test execution',
                  'CI/CD integration',
                  'Regression test automation',
                  'Consistent test coverage',
                ],
              },
              {
                title: 'Security-First Approach',
                description: 'Integrate security testing throughout the QA process, not as an afterthought.',
                benefits: [
                  'Shift-left security',
                  'OWASP compliance',
                  'Secure coding validation',
                  'Threat modeling',
                ],
              },
            ].map((approach, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#00B871]/20 hover:border-[#00B871] transition-all duration-300"
              >
                <h3 className="text-xl mb-3 text-[#00B871]">{approach.title}</h3>
                <p className="text-gray-400 mb-4">{approach.description}</p>
                <ul className="space-y-2">
                  {approach.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00B871] mt-1 flex-shrink-0" />
                      <span className="text-gray-400">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Test Coverage */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gradient-to-b from-[#0a0a0a] to-black py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-white text-center">What We Test</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Web Applications',
                items: [
                  'Single-page applications',
                  'Multi-page applications',
                  'Progressive web apps',
                  'E-commerce platforms',
                  'Admin dashboards',
                ],
              },
              {
                title: 'Mobile Applications',
                items: [
                  'iOS applications',
                  'Android applications',
                  'React Native apps',
                  'Flutter applications',
                  'Hybrid apps',
                ],
              },
              {
                title: 'APIs & Services',
                items: [
                  'REST APIs',
                  'GraphQL APIs',
                  'SOAP services',
                  'Microservices',
                  'Third-party integrations',
                ],
              },
              {
                title: 'Desktop Applications',
                items: [
                  'Windows applications',
                  'macOS applications',
                  'Linux applications',
                  'Electron apps',
                  'Cross-platform apps',
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
          <h2 className="text-3xl md:text-4xl mb-4 text-white text-center">Testing Deliverables</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: FileText,
                title: 'Test Plans & Cases',
                description: 'Comprehensive test documentation including test plans, test cases, and test scripts for transparency.',
              },
              {
                icon: AlertTriangle,
                title: 'Bug Reports',
                description: 'Detailed bug reports with severity ratings, reproduction steps, screenshots, and recommended fixes.',
              },
              {
                icon: Settings,
                title: 'Test Execution Reports',
                description: 'Regular test execution reports showing pass/fail rates, coverage metrics, and quality trends.',
              },
              {
                icon: CheckCircle2,
                title: 'Quality Metrics',
                description: 'Quality dashboards with KPIs, defect density, test coverage, and overall health indicators.',
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

      {/* Engagement Models */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gradient-to-b from-[#0a0a0a] to-black py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-white text-center">Flexible Engagement Models</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#00B871]/20 text-center">
              <Clock className="w-12 h-12 text-[#00B871] mx-auto mb-4" />
              <h3 className="text-2xl mb-3 text-white">Project-Based</h3>
              <p className="text-gray-400 mb-4">Fixed-scope testing for specific releases or features.</p>
              <ul className="text-gray-400 space-y-2">
                <li>Defined timeline</li>
                <li>Fixed deliverables</li>
                <li>Budget certainty</li>
              </ul>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#00B871]/20 text-center">
              <Users className="w-12 h-12 text-[#00B871] mx-auto mb-4" />
              <h3 className="text-2xl mb-3 text-white">Dedicated Team</h3>
              <p className="text-gray-400 mb-4">Extended QA team working exclusively on your projects.</p>
              <ul className="text-gray-400 space-y-2">
                <li>Dedicated resources</li>
                <li>Deep product knowledge</li>
                <li>Ongoing support</li>
              </ul>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#00B871]/20 text-center">
              <Shield className="w-12 h-12 text-[#00B871] mx-auto mb-4" />
              <h3 className="text-2xl mb-3 text-white">Continuous QA</h3>
              <p className="text-gray-400 mb-4">Ongoing testing integrated into your CI/CD pipeline.</p>
              <ul className="text-gray-400 space-y-2">
                <li>CI/CD integration</li>
                <li>Automated regression</li>
                <li>24/7 monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#00B871]/20 to-[#00D67E]/20 rounded-lg border border-[#00B871] p-12 text-center">
            <h2 className="text-3xl md:text-4xl mb-4 text-white">Ensure Quality & Security Before Launch</h2>
            <p className="text-xl text-gray-400 mb-8">
              Get a free consultation to discuss your QA testing and support needs.
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

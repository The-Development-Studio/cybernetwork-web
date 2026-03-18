import { ExternalLink, Building2, GraduationCap, Shield, Users, Calendar } from 'lucide-react';
import { SEO } from '../SEO';
import { SchemaMarkup, getBreadcrumbSchema } from '../SchemaMarkup';

export function Portfolio() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://cybernetworkco.com/' },
    { name: 'Portfolio', url: 'https://cybernetworkco.com/portfolio' },
  ]);
  const projects = [
    {
      category: 'Penetration Testing',
      icon: Shield,
      title: 'Full-Stack Security Assessment - The Development Studio',
      description: 'Comprehensive web application and API security testing for development agency, covering OWASP Top 10, authentication flaws, and business logic vulnerabilities.',
      outcomes: [
        '22 vulnerabilities identified and fixed',
        'Secure SDLC recommendations implemented',
        'DevSecOps pipeline established',
      ],
      duration: '3 weeks',
      year: '2025',
    },
    {
      category: 'Penetration Testing',
      icon: Shield,
      title: 'Cloud Infrastructure Security Audit - RhinoSoft',
      description: 'AWS cloud security assessment including IAM policies, S3 bucket configurations, network security groups, and container security review.',
      outcomes: [
        'Cloud security posture hardened',
        'Zero-trust architecture implemented',
        'Cost optimization through security improvements',
      ],
      duration: '2 weeks',
      year: '2025',
    },
    {
      category: 'Corporate Training',
      icon: Building2,
      title: 'Advanced Threat Hunting Workshop - RhinoSoft',
      description: 'Customized training on threat detection, incident response, and security monitoring for SOC team members.',
      outcomes: [
        '15 SOC analysts trained',
        'Threat detection capabilities enhanced',
        'Mean time to detect reduced by 50%',
      ],
      duration: '2 months',
      year: '2025',
    },
    {
      category: 'Penetration Testing',
      icon: Shield,
      title: 'Mobile Banking App Security Testing - FinSecure Technologies',
      description: 'Comprehensive security assessment of Android and iOS banking applications including reverse engineering, runtime analysis, and API security testing.',
      outcomes: [
        '18 critical security issues resolved',
        'Compliance with mobile security standards',
        'Secure code review guidelines created',
      ],
      duration: '4 weeks',
      year: '2025',
    },
    {
      category: 'Corporate Training',
      icon: Building2,
      title: 'Enterprise Security Training - TechCorp Solutions',
      description: 'Delivered comprehensive CEH and network security training to 50+ employees across multiple departments.',
      outcomes: [
        '45 employees certified',
        'Enhanced security posture',
        'Reduced incident response time by 40%',
      ],
      duration: '3 months',
      year: '2024',
    },
    {
      category: 'Penetration Testing',
      icon: Shield,
      title: 'API Security Assessment - The Development Studio',
      description: 'REST and GraphQL API penetration testing, identifying authentication bypasses, injection flaws, and rate limiting issues.',
      outcomes: [
        'API security framework established',
        'Automated security testing integrated',
        'Zero critical vulnerabilities in production',
      ],
      duration: '2 weeks',
      year: '2024',
    },
    {
      category: 'College Workshop',
      icon: GraduationCap,
      title: 'Cybersecurity Bootcamp - State University',
      description: 'Conducted intensive 5-day cybersecurity bootcamp for 200+ engineering students covering ethical hacking and penetration testing.',
      outcomes: [
        '200+ students trained',
        '85% satisfaction rate',
        '30 students placed in security roles',
      ],
      duration: '5 days',
      year: '2024',
    },
    {
      category: 'Penetration Testing',
      icon: Shield,
      title: 'Web Application Security Assessment - FinTech Startup',
      description: 'Comprehensive security testing of banking application, identifying critical vulnerabilities before production launch.',
      outcomes: [
        '15 critical vulnerabilities fixed',
        'PCI DSS compliance achieved',
        'Successful security audit',
      ],
      duration: '2 weeks',
      year: '2024',
    },
    {
      category: 'Penetration Testing',
      icon: Shield,
      title: 'Network Segmentation Review - Global Enterprises',
      description: 'Internal network penetration testing and segmentation analysis to prevent lateral movement in case of breach.',
      outcomes: [
        'Network architecture redesigned',
        'Microsegmentation implemented',
        'Attack surface reduced by 60%',
      ],
      duration: '3 weeks',
      year: '2024',
    },
    {
      category: 'Corporate Training',
      icon: Building2,
      title: 'CCNA Certification Program - Global Logistics Inc.',
      description: 'Customized CCNA training program for network operations team with hands-on lab exercises.',
      outcomes: [
        '28 team members certified',
        'Improved network efficiency',
        'Reduced downtime incidents',
      ],
      duration: '2 months',
      year: '2023',
    },
    {
      category: 'College Workshop',
      icon: GraduationCap,
      title: 'Python for Security - Tech Institute',
      description: 'Workshop series on building security tools using Python for computer science students.',
      outcomes: [
        '150 students participated',
        '20+ security tools developed',
        'Student research projects initiated',
      ],
      duration: '1 month',
      year: '2023',
    },
    {
      category: 'Penetration Testing',
      icon: Shield,
      title: 'Network Security Assessment - Healthcare Provider',
      description: 'Internal and external network penetration testing to ensure HIPAA compliance and data protection.',
      outcomes: [
        'Network vulnerabilities remediated',
        'HIPAA compliance verified',
        'Security policy improvements',
      ],
      duration: '3 weeks',
      year: '2023',
    },
    {
      category: 'Corporate Training',
      icon: Building2,
      title: 'Security Awareness Program - Manufacturing Corp',
      description: 'Organization-wide security awareness training covering phishing, social engineering, and best practices.',
      outcomes: [
        '500+ employees trained',
        '70% reduction in security incidents',
        'Improved security culture',
      ],
      duration: '6 months',
      year: '2023',
    },
    {
      category: 'College Workshop',
      icon: GraduationCap,
      title: 'Capture The Flag Competition - Engineering College',
      description: 'Organized and conducted 48-hour CTF competition with real-world security challenges.',
      outcomes: [
        '100+ participants',
        'Identified top security talent',
        'Increased interest in cybersecurity',
      ],
      duration: '2 days',
      year: '2022',
    },
    {
      category: 'Penetration Testing',
      icon: Shield,
      title: 'Mobile App Security Testing - E-commerce Platform',
      description: 'Security assessment of iOS and Android applications for major e-commerce platform.',
      outcomes: [
        'Critical vulnerabilities patched',
        'App store approval achieved',
        'Customer data protected',
      ],
      duration: '2 weeks',
      year: '2022',
    },
  ];

  const categoryColors: { [key: string]: string } = {
    'Corporate Training': '#00B871',
    'College Workshop': '#00D67E',
    'Penetration Testing': '#00A060',
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO
        title="Cyber Network Portfolio | Security Projects & Training Workshops"
        description="See Cyber Network's successful college workshops, corporate training sessions, and real-world penetration testing projects across India."
        keywords="cybersecurity portfolio, penetration testing projects, college workshop case study, corporate IT training results, ethical hacking events India, success stories in cybersecurity, VAPT case studies, security training testimonials, client success stories, security assessment case studies, training program outcomes, cybersecurity project examples, penetration testing results, security audit portfolio, vulnerability assessment reports, security consulting projects, enterprise security implementations, cloud security projects, API security testing, mobile security assessments"
        ogTitle="Our Portfolio – Real Impact, Real Learning"
        ogDescription="Explore our achievements in training and cybersecurity projects. 500+ students trained, 100+ security assessments completed."
        canonical="https://cybernetworkco.com/portfolio"
        articleTags={['Portfolio', 'Case Studies', 'Success Stories', 'Projects', 'Training Results', 'Security Assessments']}
      />
      <SchemaMarkup data={breadcrumbSchema} id="breadcrumb" />
      
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6 text-white">
            Our <span className="text-[#00B871] text-glow">Portfolio</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Featured projects showcasing our expertise in corporate training, college workshops, 
            and professional security assessments.
          </p>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Building2, number: '50+', label: 'Corporate Projects' },
              { icon: GraduationCap, number: '100+', label: 'College Workshops' },
              { icon: Shield, number: '200+', label: 'Security Assessments' },
              { icon: Users, number: '5000+', label: 'People Trained' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#00B871]/20 text-center"
              >
                <stat.icon className="w-10 h-10 text-[#00B871] mx-auto mb-3" />
                <div className="text-3xl text-[#00B871] mb-1">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] rounded-lg border border-[#00B871]/20 overflow-hidden hover:border-[#00B871] transition-all duration-300 glow-green-hover group cursor-pointer"
              >
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="px-3 py-1 rounded-full text-xs border"
                      style={{
                        color: categoryColors[project.category],
                        borderColor: categoryColors[project.category],
                      }}
                    >
                      {project.category}
                    </div>
                    <project.icon className="w-6 h-6 text-[#00B871]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg mb-3 text-white group-hover:text-[#00B871] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Outcomes */}
                  <div className="mb-4">
                    <div className="text-xs text-[#00B871] mb-2">Key Outcomes:</div>
                    <ul className="space-y-1">
                      {project.outcomes.map((outcome, i) => (
                        <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                          <div className="w-1 h-1 bg-[#00B871] rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-[#00B871]/20">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{project.year}</span>
                    </div>
                    <div>{project.duration}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gradient-to-b from-[#0a0a0a] to-black py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-white">Client Testimonials</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Cyber Network's training program transformed our IT team. The hands-on approach and expert instructors made complex security concepts accessible and practical.",
                author: 'John Mitchell',
                position: 'CTO, TechCorp Solutions',
                company: 'Corporate Client',
              },
              {
                quote: "The cybersecurity bootcamp was incredibly valuable for our students. Many secured internships and jobs thanks to the practical skills they gained.",
                author: 'Dr. Sarah Johnson',
                position: 'Dean of Engineering',
                company: 'State University',
              },
              {
                quote: "Their penetration testing service uncovered critical vulnerabilities we weren't aware of. The detailed reports and remediation guidance were exceptional.",
                author: 'Michael Chen',
                position: 'Security Manager',
                company: 'Healthcare Provider',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#00B871]/20"
              >
                <div className="text-[#00B871] text-5xl mb-4">"</div>
                <p className="text-gray-400 mb-6">{testimonial.quote}</p>
                <div>
                  <div className="text-white">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.position}</div>
                  <div className="text-[#00B871] text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#00B871]/20 to-[#00D67E]/20 rounded-lg border border-[#00B871] p-12 text-center">
            <h2 className="text-3xl md:text-4xl mb-4 text-white">
              Want to Work With Us?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join our growing list of satisfied clients. Let's discuss how we can help your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#00B871] text-white rounded-lg hover:bg-[#00D67E] transition-all duration-300 glow-green-hover inline-flex items-center justify-center gap-2">
                Start a Project
                <ExternalLink size={20} />
              </button>
              <button className="px-8 py-4 border-2 border-[#00B871] text-[#00B871] rounded-lg hover:bg-[#00B871] hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2">
                View All Projects
                <ExternalLink size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

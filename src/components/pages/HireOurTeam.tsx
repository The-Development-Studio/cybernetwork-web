import { motion } from 'motion/react';
import { Globe, Smartphone, Network, Eye, CheckCircle2, Server, ArrowRight, Shield, Code, Zap } from 'lucide-react';

interface HireOurTeamProps {
  onNavigate: (page: string) => void;
}

export function HireOurTeam({ onNavigate }: HireOurTeamProps) {
  const specialists = [
    {
      title: 'Web Application Pentester',
      route: '/hire-our-team/web-pentester',
      icon: Globe,
      description: 'Expert in identifying and exploiting web application vulnerabilities using OWASP methodologies.',
      skills: ['OWASP Top 10', 'Burp Suite', 'SQL Injection', 'XSS', 'Authentication Bypass'],
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'Mobile Application Pentester',
      route: '/hire-our-team/mobile-pentester',
      icon: Smartphone,
      description: 'Specialized in iOS and Android security testing, reverse engineering, and mobile threat analysis.',
      skills: ['iOS/Android Security', 'Reverse Engineering', 'Mobile OWASP', 'API Testing', 'Frida'],
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      title: 'Network Pentester',
      route: '/hire-our-team/network-pentester',
      icon: Network,
      description: 'Skilled in network infrastructure testing, exploit development, and advanced persistent threat simulation.',
      skills: ['Network Protocols', 'Metasploit', 'Wireshark', 'MITM Attacks', 'VPN Security'],
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      title: 'SOC Analyst',
      route: '/hire-our-team/soc-analyst',
      icon: Eye,
      description: 'Experienced in threat detection, incident response, and security monitoring operations.',
      skills: ['SIEM Tools', 'Threat Hunting', 'Incident Response', 'Log Analysis', 'Splunk/ELK'],
      color: 'from-red-500/20 to-orange-500/20'
    },
    {
      title: 'QA Engineer',
      route: '/hire-our-team/qa-engineer',
      icon: CheckCircle2,
      description: 'Expert in quality assurance, automated testing, and ensuring software reliability and security.',
      skills: ['Automated Testing', 'Selenium', 'API Testing', 'Test Automation', 'CI/CD'],
      color: 'from-yellow-500/20 to-amber-500/20'
    },
    {
      title: 'Network Engineer',
      route: '/hire-our-team/network-engineer',
      icon: Server,
      description: 'Specialized in network design, implementation, troubleshooting, and infrastructure optimization.',
      skills: ['Cisco/Palo Alto', 'Network Design', 'Routing/Switching', 'Firewall Config', 'VPN Setup'],
      color: 'from-indigo-500/20 to-violet-500/20'
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00B871]/10 border border-[#00B871]/30 mb-6"
          >
            <Shield className="w-5 h-5 text-[#00B871]" />
            <span className="text-[#00B871] text-sm font-medium">Elite Cybersecurity Professionals</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#00D67E] to-white bg-clip-text text-transparent">
            Hire Our Team
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Access top-tier cybersecurity specialists, network engineers, and quality assurance experts. 
            Our vetted professionals are ready to strengthen your security posture and infrastructure.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00B871] rounded-full animate-pulse" />
              <span className="text-gray-400">Certified Experts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00D67E] rounded-full animate-pulse" />
              <span className="text-gray-400">Immediate Availability</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00B871] rounded-full animate-pulse" />
              <span className="text-gray-400">Flexible Engagement</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Specialists Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialists.map((specialist, index) => (
            <motion.div
              key={specialist.route}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className="h-full p-6 rounded-2xl border border-[#00B871]/20 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl hover:border-[#00B871]/40 transition-all duration-500"
                style={{
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(0, 184, 113, 0.1)',
                }}
              >
                {/* Gradient Background */}
                <div 
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${specialist.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} 
                />

                {/* Icon */}
                <div className="relative mb-4">
                  <div className="w-14 h-14 rounded-xl bg-[#00B871]/10 border border-[#00B871]/30 flex items-center justify-center group-hover:bg-[#00B871]/20 transition-all duration-500">
                    <specialist.icon className="w-7 h-7 text-[#00B871] group-hover:text-[#00D67E] transition-colors duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#00D67E] transition-colors duration-500">
                    {specialist.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {specialist.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {specialist.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs rounded-md bg-[#00B871]/5 border border-[#00B871]/20 text-gray-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => onNavigate(specialist.route)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-[#00B871]/10 border border-[#00B871]/30 text-[#00B871] hover:bg-[#00B871]/20 hover:border-[#00B871]/50 transition-all duration-300 group/btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="font-medium">View Details</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Hire Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-[#00B871]/10 to-transparent border border-[#00B871]/20"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Why Hire From Cyber Network?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-[#00B871]/10 border border-[#00B871]/30 flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#00B871]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Vetted Professionals</h3>
              <p className="text-gray-400 text-sm">All team members are thoroughly vetted with verified certifications and proven track records.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-[#00B871]/10 border border-[#00B871]/30 flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#00B871]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Rapid Deployment</h3>
              <p className="text-gray-400 text-sm">Get experts onboarded quickly with flexible engagement models to meet your timeline.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-[#00B871]/10 border border-[#00B871]/30 flex items-center justify-center">
                <Code className="w-6 h-6 text-[#00B871]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Continuous Support</h3>
              <p className="text-gray-400 text-sm">Ongoing support and knowledge transfer to ensure long-term success.</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <motion.button
              onClick={() => onNavigate('/contact')}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#00B871] to-[#00D67E] text-white font-medium shadow-lg hover:shadow-[#00B871]/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

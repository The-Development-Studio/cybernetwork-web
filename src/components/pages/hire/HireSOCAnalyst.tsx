import { Eye, Shield, CheckCircle2, Users, Clock, Briefcase, ArrowRight, Activity, Search, Target } from 'lucide-react';
import { SEO } from '../../SEO';
import { motion } from 'motion/react';

interface HireSOCAnalystProps {
  onNavigate: (page: string) => void;
}

export function HireSOCAnalyst({ onNavigate }: HireSOCAnalystProps) {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-[#04110B] via-black to-[#000]">
      <SEO
        title="Hire a SOC Analyst | 24/7 Security Monitoring Expert"
        description="Hire certified SOC analysts for 24/7 security monitoring, threat detection, incident response. SIEM expertise, threat hunting, log analysis."
        keywords="hire SOC analyst, hire security analyst, security operations center expert, threat detection specialist, SIEM analyst"
        canonical="https://cybernetworkco.com/hire-soc-analyst"
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00B871]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00D67E]/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <section className="px-4 sm:px-6 lg:px-8 mb-20 relative">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-3 mb-6">
              <Eye className="w-16 h-16 text-[#00B871]" style={{ filter: 'drop-shadow(0 0 20px rgba(0, 184, 113, 0.6))' }} />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl mb-6 text-white">
              Hire a <span className="text-[#00B871] text-glow">SOC Analyst</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
              Expert SOC analysts for 24/7 security monitoring, threat detection, and incident response. SIEM specialists with advanced threat hunting skills.
            </p>
            <motion.button
              onClick={() => onNavigate('contact')}
              className="px-12 py-5 bg-gradient-to-r from-[#00B871] to-[#00D67E] text-white text-lg rounded-2xl shadow-2xl inline-flex items-center gap-3"
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(0, 184, 113, 0.8)' }}
              whileTap={{ scale: 0.95 }}
            >
              Enquire Now
              <ArrowRight size={24} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 mb-20 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-4 text-white text-center">What We Provide</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Activity, title: '24/7 Monitoring', desc: 'Round-the-clock security monitoring and threat detection' },
              { icon: Shield, title: 'Incident Response', desc: 'Rapid response to security incidents and breaches' },
              { icon: Search, title: 'Threat Hunting', desc: 'Proactive threat hunting and advanced analysis' },
              { icon: Target, title: 'SIEM Management', desc: 'Splunk, QRadar, ELK stack configuration and tuning' },
              { icon: Activity, title: 'Log Analysis', desc: 'Comprehensive log analysis and correlation' },
              { icon: CheckCircle2, title: 'Reporting', desc: 'Detailed security reports and compliance documentation' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A] p-8 rounded-2xl border border-[#00B871]/20 hover:border-[#00B871] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <item.icon className="w-12 h-12 text-[#00B871] mb-4" />
                <h3 className="text-2xl mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 mb-20 relative bg-gradient-to-b from-black/50 to-transparent py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-4 text-white text-center">Why Choose Our Experts</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Certified Analysts', desc: 'GCIH, GCIA, Security+ certified professionals' },
              { icon: Users, title: '10,000+ Incidents', desc: 'Handled thousands of security incidents successfully' },
              { icon: Clock, title: '24/7 Availability', desc: 'Around-the-clock coverage for your security needs' },
              { icon: CheckCircle2, title: 'MTTD < 15 min', desc: 'Industry-leading mean time to detect threats' },
            ].map((item, index) => (
              <motion.div key={index} className="text-center" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }}>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#00B871]/20 to-[#00D67E]/20 rounded-2xl mb-6 border border-[#00B871]/30">
                  <item.icon className="w-10 h-10 text-[#00B871]" />
                </div>
                <h3 className="text-2xl mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 mb-20 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-4 text-white text-center">Tools & Technologies</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['Splunk', 'QRadar', 'ELK Stack', 'Sentinel', 'Chronicle', 'ArcSight', 'MITRE ATT&CK', 'TheHive', 'Cortex', 'Suricata', 'Zeek', 'CrowdStrike'].map((tool, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A] p-6 rounded-xl border border-[#00B871]/20 text-center hover:border-[#00B871] transition-all duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-[#00B871]">{tool}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 mb-20 relative bg-gradient-to-b from-black/50 to-transparent py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-4 text-white text-center">Our Engagement Model</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: 'Hourly Basis', price: 'Flexible Rate', desc: 'On-demand SOC support for specific projects or tasks.' },
              { icon: Briefcase, title: 'Monthly Retainer', price: 'Fixed Monthly', desc: 'Dedicated SOC analyst for continuous monitoring.' },
              { icon: Target, title: 'Project Basis', price: 'Fixed Price', desc: 'SIEM setup, tuning, or specific security projects.' },
            ].map((model, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A] p-10 rounded-2xl border border-[#00B871]/30 hover:border-[#00B871] transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <model.icon className="w-16 h-16 text-[#00B871] mx-auto mb-6" />
                <h3 className="text-3xl mb-2 text-white">{model.title}</h3>
                <div className="text-[#00B871] text-xl mb-6">{model.price}</div>
                <p className="text-gray-400">{model.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-r from-[#00B871]/20 to-[#00D67E]/20 rounded-3xl border border-[#00B871] p-12 md:p-16 text-center"
            style={{ boxShadow: '0 0 60px rgba(0, 184, 113, 0.3)' }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Ready for 24/7 Security Monitoring?</h2>
            <p className="text-xl text-gray-400 mb-10">
              Contact us to hire expert SOC analysts for your security operations.
            </p>
            <motion.button
              onClick={() => onNavigate('contact')}
              className="px-12 py-5 bg-gradient-to-r from-[#00B871] to-[#00D67E] text-white text-lg rounded-2xl inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enquire Now
              <ArrowRight size={24} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

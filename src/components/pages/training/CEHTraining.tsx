import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  Laptop, 
  Users, 
  Award, 
  Zap, 
  Target,
  ChevronDown,
  Download,
  ArrowRight,
  CheckCircle2,
  IndianRupee,
  Search,
  Scan,
  Lock,
  Bug,
  Globe,
  Activity
} from 'lucide-react';

interface CEHTrainingProps {
  onNavigate: (page: string) => void;
}

export function CEHTraining({ onNavigate }: CEHTrainingProps) {
  const [openModule, setOpenModule] = useState<number | null>(null);

  const highlights = [
    { icon: Target, text: 'Certified Ethical Hacker (CEH) prep' },
    { icon: Laptop, text: 'Hands-on penetration testing labs' },
    { icon: Users, text: 'Expert ethical hacking instructors' },
    { icon: Zap, text: 'Live vulnerability assessments' },
    { icon: Award, text: 'Industry-recognized certification' },
  ];

  const modules = [
    {
      title: 'Footprinting & Reconnaissance',
      icon: Search,
      topics: [
        'Information Gathering Techniques',
        'OSINT & Social Engineering',
        'Footprinting Tools & Methodologies',
        'Network Scanning Basics'
      ]
    },
    {
      title: 'Scanning Networks',
      icon: Scan,
      topics: [
        'Port Scanning with Nmap',
        'Network Discovery & Mapping',
        'Vulnerability Scanning',
        'Banner Grabbing & OS Fingerprinting'
      ]
    },
    {
      title: 'Enumeration',
      icon: Activity,
      topics: [
        'SMB, SNMP & LDAP Enumeration',
        'DNS & NetBIOS Enumeration',
        'Active Directory Enumeration',
        'Enumeration Countermeasures'
      ]
    },
    {
      title: 'System Hacking',
      icon: Lock,
      topics: [
        'Password Cracking Techniques',
        'Privilege Escalation',
        'Keyloggers & Spyware',
        'Covering Tracks & Steganography'
      ]
    },
    {
      title: 'Web Application Security',
      icon: Globe,
      topics: [
        'OWASP Top 10 Vulnerabilities',
        'SQL Injection & XSS Attacks',
        'Session Hijacking & CSRF',
        'Web Application Penetration Testing'
      ]
    },
    {
      title: 'Penetration Testing',
      icon: Bug,
      topics: [
        'Penetration Testing Methodologies',
        'Metasploit Framework',
        'Report Writing & Documentation',
        'Post-Exploitation Techniques'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <motion.section 
        className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#00B871]/30 mb-6">
              <Shield className="w-5 h-5 text-[#00B871]" />
              <span className="text-[#00D67E] text-sm">Industry-Standard | Hands-On | CEH Certified</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-white">
              CEH - Certified Ethical Hacker <span className="text-[#00B871] text-glow">Training</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto mb-6"></div>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto">
              Learn ethical hacking techniques to identify and fix security vulnerabilities. Gain hands-on experience with 
              penetration testing tools and methodologies used by professional security experts.
            </p>
          </motion.div>

          {/* Main Content Card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Course Details - Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Highlights Section */}
              <motion.div 
                className="glass rounded-2xl p-8 border border-[#00B871]/20 hover:border-[#00B871]/50 transition-all duration-300"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl mb-6 text-[#00B871] flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  Course Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-black/30 hover:bg-black/50 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    >
                      <highlight.icon className="w-5 h-5 text-[#00B871] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{highlight.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Course Info */}
              <motion.div 
                className="glass rounded-2xl p-8 border border-[#00B871]/20"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-2xl mb-6 text-[#00B871]">Course Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Activity className="w-6 h-6 text-[#00B871]" />
                    <div>
                      <div className="text-sm text-gray-400">Duration</div>
                      <div className="text-white">10-12 weeks</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-[#00B871]" />
                    <div>
                      <div className="text-sm text-gray-400">Level</div>
                      <div className="text-white">Intermediate to Advanced</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Key Modules Section */}
              <motion.div 
                className="glass rounded-2xl p-8 border border-[#00B871]/20"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl mb-6 text-[#00B871] flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  Key Modules
                </h3>
                <div className="space-y-3">
                  {modules.map((module, index) => (
                    <motion.div
                      key={index}
                      className="border border-[#00B871]/20 rounded-lg overflow-hidden bg-black/30 hover:bg-black/40 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    >
                      <button
                        onClick={() => setOpenModule(openModule === index ? null : index)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-[#00B871]/5 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-[#00B871]/10">
                            <module.icon className="w-5 h-5 text-[#00B871]" />
                          </div>
                          <span className="text-white">{module.title}</span>
                        </div>
                        <motion.div
                          animate={{ rotate: openModule === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5 text-[#00B871]" />
                        </motion.div>
                      </button>
                      <motion.div
                        initial={false}
                        animate={{ height: openModule === index ? 'auto' : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 pt-0 space-y-2 border-t border-[#00B871]/10">
                          {module.topics.map((topic, topicIndex) => (
                            <div key={topicIndex} className="flex items-start gap-2 text-gray-400">
                              <CheckCircle2 className="w-4 h-4 text-[#00B871] mt-1 flex-shrink-0" />
                              <span className="text-sm">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Fee Card - Right Column */}
            <div className="lg:col-span-1">
              <motion.div 
                className="glass rounded-2xl p-8 border-2 border-[#00B871]/30 sticky top-24 glow-green"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00B871]/10 mb-4">
                    <IndianRupee className="w-8 h-8 text-[#00B871]" />
                  </div>
                  <h3 className="text-2xl mb-2 text-[#00B871]">Course Investment</h3>
                  <div className="h-0.5 w-16 bg-gradient-to-r from-[#00B871] to-[#00D67E] mx-auto"></div>
                </div>

                {/* Contact for Pricing */}
                <div className="mb-6 p-6 rounded-xl bg-black/40 border border-[#00B871]/20 text-center">
                  <p className="text-gray-400 mb-2">Flexible pricing options</p>
                  <p className="text-2xl text-[#00B871]">Contact for Details</p>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3 mb-6">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full px-6 py-4 bg-[#00B871] text-white rounded-lg hover:bg-[#00D67E] transition-all duration-300 glow-green-hover flex items-center justify-center gap-2 group"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full px-6 py-4 bg-transparent text-[#00B871] rounded-lg border-2 border-[#00B871] hover:bg-[#00B871]/10 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                    <span>Download Syllabus</span>
                  </button>
                </div>

                {/* Additional Benefits */}
                <div className="space-y-2 pt-6 border-t border-[#00B871]/20">
                  {[
                    'CEH certification exam preparation',
                    'Real-world hacking scenarios',
                    'Job placement assistance',
                    '30-day post-training support'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00B871] mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-400">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Footer Note */}
          <motion.div 
            className="text-center pt-8 border-t border-[#00B871]/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-gray-400">
              Training conducted by <span className="text-[#00B871]">Cyber Network</span> – 
              <span className="text-gray-500"> Protect | Educate | Empower</span>
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Bug, Search, Lock, CheckCircle2, AlertTriangle, Terminal, Scan, XCircle, FileCode, Server } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing Cyber Network...');
  const [detectedThreats, setDetectedThreats] = useState(0);
  const [scanComplete, setScanComplete] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const logMessages = [
    "Establishing secure connection...",
    "Accessing mainframe...",
    "Scanning port 443... OK",
    "Scanning port 80... OK",
    "Checking for SQL Injection vulnerabilities...",
    "Analyzing XSS vectors...",
    "Verifying SSL/TLS certificates...",
    "Validating firewall rules...",
    " detecting potential exploits...",
    "Mitigating security risks...",
    "System hardening in progress...",
    "Optimization complete."
  ];

  useEffect(() => {
    // Progress bar and status text simulation
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        
        // Randomize speed
        const increment = Math.random() * 2 + 0.5;
        return Math.min(prev + increment, 100);
      });
    }, 50);

    // Log messages simulation
    let logIndex = 0;
    const logTimer = setInterval(() => {
      if (logIndex < logMessages.length) {
        setLogs(prev => [...prev.slice(-4), `> ${logMessages[logIndex]}`]);
        setStatusText(logMessages[logIndex]);
        logIndex++;
      }
    }, 300);

    // Threat detection simulation
    const threatTimer = setInterval(() => {
      if (progress < 60) {
        setDetectedThreats(prev => prev + Math.floor(Math.random() * 2)); // Add threats
      } else if (progress > 80 && detectedThreats > 0) {
        setDetectedThreats(prev => Math.max(0, prev - 1)); // Fix threats
      }
    }, 200);

    // Completion check
    const completeCheck = setInterval(() => {
        if (progress >= 100) {
            clearInterval(completeCheck);
            setScanComplete(true);
            setTimeout(onComplete, 800); // Wait a bit before unmounting
        }
    }, 100);

    return () => {
      clearInterval(timer);
      clearInterval(logTimer);
      clearInterval(threatTimer);
      clearInterval(completeCheck);
    };
  }, [progress, detectedThreats, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden font-mono"
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      transition={{ duration: 0.8 }}
    >
      {/* Matrix-like Background Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,184,113,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,184,113,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>

      <div className="relative w-full max-w-2xl px-6 flex flex-col items-center gap-8">
        
        {/* Central Animation Area */}
        <div className="relative w-48 h-48 flex items-center justify-center">
            {/* Spinning Rings */}
            <motion.div 
                className="absolute inset-0 border-2 border-[#00B871]/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
                className="absolute inset-2 border-2 border-[#00D67E]/30 rounded-full border-t-transparent"
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Center Icon logic */}
            <AnimatePresence mode="wait">
                {!scanComplete ? (
                    detectedThreats > 0 ? (
                        <motion.div
                            key="bug"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                        >
                            <Bug className="w-20 h-20 text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="scan"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                        >
                            <Scan className="w-20 h-20 text-[#00B871] drop-shadow-[0_0_15px_rgba(0,184,113,0.5)]" />
                        </motion.div>
                    )
                ) : (
                    <motion.div
                        key="secure"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1.2 }}
                    >
                        <Shield className="w-24 h-24 text-[#00D67E] drop-shadow-[0_0_20px_rgba(0,214,126,0.8)]" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Scanning Line */}
            {!scanComplete && (
                <motion.div 
                    className="absolute w-full h-1 bg-[#00D67E]/50 shadow-[0_0_15px_#00D67E]"
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
            )}
        </div>

        {/* Status Indicators */}
        <div className="w-full flex justify-between items-end text-sm mb-2 text-[#00B871]">
            <span className="flex items-center gap-2">
                <Terminal size={16} /> SYSTEM_STATUS
            </span>
            <span className="font-bold">{Math.round(progress)}%</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-[#00B871]/20 rounded-full overflow-hidden relative">
            <motion.div 
                className="h-full bg-[#00D67E] shadow-[0_0_10px_#00D67E]"
                style={{ width: `${progress}%` }}
            />
        </div>

        {/* Detailed Logs & Stats */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            
            {/* Console Log */}
            <div className="bg-black/40 border border-[#00B871]/20 p-4 rounded-md h-32 overflow-hidden flex flex-col justify-end font-mono text-xs">
                {logs.map((log, i) => (
                    <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }} 
                        animate={{ opacity: 1, x: 0 }}
                        className="text-[#00D67E]/80 truncate"
                    >
                        {log}
                    </motion.div>
                ))}
            </div>

            {/* Stats Panel */}
            <div className="bg-black/40 border border-[#00B871]/20 p-4 rounded-md h-32 flex flex-col justify-between">
                <div className="flex justify-between items-center border-b border-[#00B871]/10 pb-2">
                    <span className="text-gray-400 text-xs uppercase tracking-wider">Active Threats</span>
                    <span className={`font-bold ${detectedThreats > 0 ? 'text-red-500 animate-pulse' : 'text-[#00D67E]'}`}>
                        {detectedThreats > 0 ? detectedThreats : 'NONE'}
                    </span>
                </div>
                
                <div className="flex justify-between items-center border-b border-[#00B871]/10 pb-2">
                    <span className="text-gray-400 text-xs uppercase tracking-wider">Vulnerabilities</span>
                    <span className="text-[#00D67E]">ASSESSED</span>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-xs uppercase tracking-wider">Security Level</span>
                    <span className="text-[#00B871] font-bold">MAXIMUM</span>
                </div>
            </div>
        </div>

        {/* Final Status Text */}
        <div className="h-8 flex items-center justify-center">
            <AnimatePresence mode="wait">
                {scanComplete ? (
                     <motion.div 
                        key="complete"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[#00D67E] flex items-center gap-2 text-lg font-bold tracking-widest uppercase"
                    >
                        <CheckCircle2 size={24} />
                        Access Granted
                    </motion.div>
                ) : (
                    <motion.div 
                        key="scanning"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-[#00B871]/80 text-sm tracking-widest uppercase animate-pulse"
                    >
                        {statusText}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

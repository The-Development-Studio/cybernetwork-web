import { ChevronRight, Home } from 'lucide-react';
import { motion } from 'motion/react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
}

export function Breadcrumb({ items, onNavigate }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
      {/* Home Link */}
      <motion.button
        onClick={() => onNavigate('/')}
        className="flex items-center gap-1 text-gray-400 hover:text-[#00B871] dark:hover:text-[#00D67E] transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Home className="w-4 h-4" />
        <span>Home</span>
      </motion.button>

      {/* Breadcrumb Items */}
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        
        return (
          <div key={item.path} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-gray-500" />
            {isLast ? (
              <span className="text-[#00B871] dark:text-[#00D67E] font-medium">
                {item.label}
              </span>
            ) : (
              <motion.button
                onClick={() => onNavigate(item.path)}
                className="text-gray-400 hover:text-[#00B871] dark:hover:text-[#00D67E] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            )}
          </div>
        );
      })}
    </nav>
  );
}

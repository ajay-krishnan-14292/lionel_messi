
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Characters', href: '#', hasDropdown: true },
    { name: 'Episodes & Info', href: '#', hasDropdown: true },
    { name: 'About', href: '#' }
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative z-20 p-6"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white"
        >
          <h1 className="text-2xl font-bold tracking-wider">呪術廻戦</h1>
          <p className="text-sm text-white/80 font-light">Jujutsu Kaisen</p>
        </motion.div>

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:flex space-x-8"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10 transition-all duration-300 relative group"
              >
                {/* {item.name}
                {item.hasDropdown && (
                  <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                )} */}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:hidden"
        >
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <div className="space-y-1">
              <div className="w-5 h-0.5 bg-white"></div>
              <div className="w-5 h-0.5 bg-white"></div>
              <div className="w-5 h-0.5 bg-white"></div>
            </div>
          </Button>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

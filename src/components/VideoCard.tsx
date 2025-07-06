
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface VideoCardProps {
  video: {
    title: string;
    thumbnail: string;
  };
  delay?: number;
}

const VideoCard = ({ video, delay = 0 }: VideoCardProps) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0, scale: 0.9 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        stiffness: 100 
      }}
      whileHover={{ 
        scale: 1.05,
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="relative group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-xl bg-black/20 backdrop-blur-sm border border-white/10">
        <motion.img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-32 object-cover transition-all duration-500"
          whileHover={{ scale: 1.1 }}
        />
        
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/50 flex items-center justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30"
          >
            <Play className="h-6 w-6 text-white fill-white" />
          </motion.div>
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Title */}
        <div className="absolute bottom-3 left-3 right-3">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: delay + 0.2 }}
            className="text-white text-sm font-medium line-clamp-2 group-hover:text-white/90 transition-colors duration-300"
          >
            {video.title}
          </motion.p>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-xl"
          initial={{ boxShadow: "0 0 0 rgba(255,255,255,0)" }}
          whileHover={{ 
            boxShadow: "0 0 20px rgba(255,255,255,0.3)",
            transition: { duration: 0.3 }
          }}
        />
      </div>
    </motion.div>
  );
};

export default VideoCard;

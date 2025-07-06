
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import VideoCard from '@/components/VideoCard';

const characters = [
  {
    id: 'gojo',
    name: 'GOJO SATORU',
    japanese: 'ゴジョサトール',
    bgColor: 'from-purple-900 via-purple-600 to-pink-500',
    image: '/lovable-uploads/ad1d90d2-3ad7-4ce4-87bc-72ea3a5c50a0.png',
    videos: [
      { title: 'Jujutsu Kaisen Best of Gojo', thumbnail: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop' },
      { title: 'Just Gojo Moments', thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop' },
      { title: 'Satoru Gojo being Iconic', thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop' },
      { title: 'Every Gojou Satoru being Gojou...', thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop' }
    ]
  },
  {
    id: 'sukuna',
    name: 'RYOMEN SUKUNA',
    japanese: 'ライオメンスクナ',
    bgColor: 'from-red-900 via-red-600 to-orange-500',
    image: '/lovable-uploads/f50eb10a-2249-4f70-adf7-282632989e9e.png',
    videos: [
      { title: 'Ryomen Sukuna Raw Scenes', thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop' },
      { title: '"Know Your Place, Fool." - Sukuna', thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=200&fit=crop' },
      { title: 'everytime sukuna appears', thumbnail: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=200&fit=crop' },
      { title: 'Sukuna all battles till now', thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=200&fit=crop' }
    ]
  },
  {
    id: 'megumi',
    name: 'MEGUMI FUSHIGURO',
    japanese: 'メガミフシグロ',
    bgColor: 'from-blue-900 via-blue-600 to-indigo-500',
    image: '/lovable-uploads/136563d7-076f-490b-af44-c35c9e331b38.png',
    videos: [
      { title: 'Megumi Domain Expansion', thumbnail: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=200&fit=crop' },
      { title: 'Megumi Fushiguro moments', thumbnail: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=300&h=200&fit=crop' },
      { title: "gojo and megumi's relationship", thumbnail: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop' },
      { title: 'Megumi Fushiguro Twixtor Clips', thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop' }
    ]
  },
  {
    id: 'nobara',
    name: 'NOBARA KUGISAKI',
    japanese: 'ノバラクーギサキ',
    bgColor: 'from-red-800 via-pink-600 to-rose-500',
    image: '/lovable-uploads/ba5eb651-4a3a-42c7-abd5-a0da8f7cc5e0.png',
    videos: [
      { title: 'Nobara Kugisaki Moments', thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop' },
      { title: 'Best of Nobara Kugisaki', thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop' },
      { title: 'Kugisaki Nobara Fight Scenes', thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop' },
      { title: '12 Minutes of Kugisaki Being Ku...', thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=200&fit=crop' }
    ]
  }
];

const Index = () => {
  const [currentCharacter, setCurrentCharacter] = useState(0);
  const [videoStartIndex, setVideoStartIndex] = useState(0);

  const nextCharacter = () => {
    setCurrentCharacter((prev) => (prev + 1) % characters.length);
  };

  const prevCharacter = () => {
    setCurrentCharacter((prev) => (prev - 1 + characters.length) % characters.length);
  };

  const nextVideos = () => {
    const maxStart = Math.max(0, characters[currentCharacter].videos.length - 4);
    setVideoStartIndex((prev) => Math.min(prev + 1, maxStart));
  };

  const prevVideos = () => {
    setVideoStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const character = characters[currentCharacter];
  const visibleVideos = character.videos.slice(videoStartIndex, videoStartIndex + 4);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCharacter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className={`absolute inset-0 bg-gradient-to-br ${character.bgColor}`}
        />
      </AnimatePresence>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <Navbar />
        
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            
            {/* Character Info Section */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-white/80 text-lg mb-2 font-light tracking-wider">
                  {character.japanese}
                </h3>
                <motion.h1 
                  className="text-6xl md:text-8xl font-bold text-white mb-8 leading-none"
                  style={{ 
                    textShadow: '4px 4px 8px rgba(0,0,0,0.5)',
                    transform: 'perspective(500px) rotateX(15deg)'
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {character.name}
                </motion.h1>
              </motion.div>

              {/* Popular Clips Section */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-12"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">Popular clips</h2>
                  <Button 
                    variant="ghost" 
                    className="text-white hover:bg-white/10 transition-all duration-300"
                  >
                    View All
                  </Button>
                </div>
                
                <div className="relative">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {visibleVideos.map((video, index) => (
                      <VideoCard 
                        key={`${videoStartIndex}-${index}`} 
                        video={video} 
                        delay={index * 0.1} 
                      />
                    ))}
                  </div>
                  
                  {/* Video Navigation */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
                    onClick={prevVideos}
                    disabled={videoStartIndex === 0}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
                    onClick={nextVideos}
                    disabled={videoStartIndex >= character.videos.length - 4}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
              </motion.div>
            </motion.div>

            {/* Character Image Section */}
            <motion.div
              initial={{ x: 100, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center"
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/10 rounded-3xl blur-xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <img
                  src={character.image}
                  alt={character.name}
                  className="relative z-10 max-w-full h-auto rounded-3xl shadow-2xl"
                  style={{ filter: 'drop-shadow(0 25px 25px rgba(0,0,0,0.3))' }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Character Navigation */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4"
        >
          <Button
            variant="outline"
            size="icon"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
            onClick={prevCharacter}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <div className="flex space-x-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
            {characters.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentCharacter 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                onClick={() => setCurrentCharacter(index)}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
            onClick={nextCharacter}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;

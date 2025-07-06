import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import VideoCard from "@/components/VideoCard";

const characters = [
  {
    id: "gojo",
    name: "GOJO SATORU",
    first_name: "GOJO",
    last_name: "SATORU",
    japanese: "ゴジョサトール",
    bgColor: "from-purple-900 via-purple-600 to-pink-500",
    image: "/lovable-uploads/gojo.png",
    videos: [
      {
        title: "Jujutsu Kaisen Best of Gojo",
        thumbnail:
          "https://i.pinimg.com/736x/24/fe/4e/24fe4ebc5306b811fb7ea09dc970cb41.jpg",
      },
      {
        title: "Just Gojo Moments",
        thumbnail:
          "https://i.pinimg.com/736x/87/30/1f/87301fb95e89b58ca9a055e00df928e6.jpg",
      },
      {
        title: "Satoru Gojo being Iconic",
        thumbnail:
          "https://i.pinimg.com/736x/b9/66/8b/b9668b8233a769967e4ba7cdf0e0d3bf.jpg",
      },
      {
        title: "Every Gojou Satoru being Gojou...",
        thumbnail:
          "https://i.pinimg.com/736x/99/85/d8/9985d89064ebc6c2c12fc20385430629.jpg",
      },
    ],
  },
  {
    id: "sukuna",
    name: "RYOMEN SUKUNA",
    first_name: "RYOMEN",
    last_name: "SUKUNA",
    japanese: "ライオメンスクナ",
    bgColor: "from-red-900 via-red-600 to-orange-500",
    image: "/lovable-uploads/sukuna.png",
    videos: [
      {
        title: "Ryomen Sukuna Raw Scenes",
        thumbnail:
          "https://i.pinimg.com/736x/65/da/fb/65dafb49fed4ff91da4f32dfa8a6db7c.jpg",
      },
      {
        title: '"Know Your Place, Fool." - Sukuna',
        thumbnail:
          "https://i.pinimg.com/736x/29/33/c6/2933c673baa478dac18763689185b346.jpg",
      },
      {
        title: "everytime sukuna appears",
        thumbnail:
          "https://i.pinimg.com/736x/e4/78/84/e478840b7082c18b46d70350915da9f8.jpg",
      },
      {
        title: "Sukuna all battles till now",
        thumbnail:
          "https://i.pinimg.com/736x/2e/70/9c/2e709c091ec598bdfa32f778b37a1147.jpg",
      },
    ],
  },
  {
    id: "megumi",
    name: "MEGUMI FUSHIGURO",
    first_name: "MEGUMI",
    last_name: "FUSHIGURO",
    japanese: "メガミフシグロ",
    bgColor: "from-blue-900 via-blue-600 to-indigo-500",
    image: "/lovable-uploads/fusiguo.png",
    videos: [
      {
        title: "Megumi Domain Expansion",
        thumbnail:
          "https://i.pinimg.com/736x/fb/b6/b2/fbb6b2a42edec9dd4fc33269d3e3c28e.jpg",
      },
      {
        title: "Megumi Fushiguro moments",
        thumbnail:
          "https://i.pinimg.com/736x/7a/6a/a3/7a6aa301dc841da134705beae156ccca.jpg",
      },
      {
        title: "gojo and megumi's relationship",
        thumbnail:
          "https://i.pinimg.com/736x/f7/21/bc/f721bc534c3d10e8bd3e5f39678aa1b0.jpg",
      },
      {
        title: "Megumi Fushiguro Twixtor Clips",
        thumbnail:
          "https://i.pinimg.com/736x/e7/28/e7/e728e7f00f233a231b5eed284819e07a.jpg",
      },
    ],
  },
  {
    id: "nobara",
    name: "NOBARA KUGISAKI",
    first_name: "NOBARA",
    last_name: "KUGISAKI",
    japanese: "ノバラクーギサキ",
    bgColor: "from-red-800 via-pink-600 to-rose-500",
    image: "/lovable-uploads/novara.png",
    videos: [
      {
        title: "Nobara Kugisaki Moments",
        thumbnail:
          "https://i.pinimg.com/736x/ca/1f/0f/ca1f0ffd572bd0159262943a36ff2167.jpg",
      },
      {
        title: "Best of Nobara Kugisaki",
        thumbnail:
          "https://i.pinimg.com/736x/15/df/37/15df377da43e81a58317df5b6b38701f.jpg",
      },
      {
        title: "Kugisaki Nobara Fight Scenes",
        thumbnail:
          "https://i.pinimg.com/736x/8d/ba/e4/8dbae4775b932bff6ca67111e316f397.jpg",
      },
      {
        title: "12 Minutes of Kugisaki Being Ku...",
        thumbnail:
          "https://i.pinimg.com/736x/92/20/c9/9220c917f353e75a1fa836b17d4342a7.jpg",
      },
    ],
  },
];

const Index = () => {
  const [currentCharacter, setCurrentCharacter] = useState(0);
  const [videoStartIndex, setVideoStartIndex] = useState(0);

  const nextCharacter = () => {
    setCurrentCharacter((prev) => (prev + 1) % characters.length);
  };

  const prevCharacter = () => {
    setCurrentCharacter(
      (prev) => (prev - 1 + characters.length) % characters.length
    );
  };

  const nextVideos = () => {
    const maxStart = Math.max(
      0,
      characters[currentCharacter].videos.length - 4
    );
    setVideoStartIndex((prev) => Math.min(prev + 1, maxStart));
  };

  const prevVideos = () => {
    setVideoStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const character = characters[currentCharacter];
  const visibleVideos = character.videos.slice(
    videoStartIndex,
    videoStartIndex + 4
  );

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
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
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
                  className="text-6xl md:text-8xl font-bold text-white mb-8 leading-none homemade-apple-regular"
                  style={{
                    textShadow: "4px 4px 8px rgba(0,0,0,0.5)",
                    transform: "perspective(500px) rotateX(15deg)",
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {character.first_name}<br/>
                  {character.last_name}
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
                  <h2 className="text-2xl font-bold text-white">
                    Popular clips
                  </h2>
                  {/* <Button
                    variant="ghost"
                    className="text-white hover:bg-white/10 transition-all duration-300"
                  >
                    View All
                  </Button> */}
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
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <img
                  src={character.image}
                  alt={character.name}
                  className="relative z-10  h-[70vh] rounded-3xl shadow-lg"
                  style={{ filter: "drop-shadow(0 25px 25px rgba(0,0,0,0.3))" }}
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
          className="fixed bottom-6 inset-x-0 flex justify-center items-center space-x-4 px-4 z-20"
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
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentCharacter
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/70"
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

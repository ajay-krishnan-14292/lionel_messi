import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import VideoCard from "@/components/VideoCard";

const characters = [
  {
    id: "messi1",
    name: "LIONEL MESSI",
    first_name: "LIONEL",
    last_name: "MESSI",
    bgColor: "from-purple-900 via-purple-600 to-pink-500",
    image: "/lovable-uploads/lm10_argentina.jpeg",
    videos: [
      {
        title: "Lionel Messi Argentina Journey",
        thumbnail: "/lovable-uploads/messi batch/Lionel Messi of Argentina celebrates after scoring the team's first goal during the FIFA World Cup 2026 Qualifier match between Argentina and Ecuador....jpg",
      },
      {
        title: "Messi's Greatest Goals",
        thumbnail: "/lovable-uploads/messi batch/Lionel Messi of Barcelona celebrates scoring his sides first goal during the UEFA Champions League Group D match between FC Barcelona and Juventus at....jpg",
      },
      {
        title: "Messi's Iconic Moments",
        thumbnail: "/lovable-uploads/messi batch/Lionel Messi of Barcelona celebrates after scoring his sides second goal during the La Liga match between Barcelona and Real Madrid at Camp Nou on....jpg",
      },
      {
        title: "Messi's Barcelona Era",
        thumbnail: "/lovable-uploads/messi batch/Barcelona's Argentine forward Lionel Messi celebrates after scoring a goal during the Spanish League football match between FC Barcelona and RC Celta....jpg",
      },
    ],
  },
  {
    id: "messi2",
    name: "LIONEL MESSI",
    first_name: "LIONEL",
    last_name: "MESSI",
    bgColor: "from-red-900 via-red-600 to-orange-500",
    image: "/lovable-uploads/lm10_barcelona.jpeg",
    videos: [
      {
        title: "Messi's Barcelona Legacy",
        thumbnail: "/lovable-uploads/messi batch/Barcelona's Argentinian Messi and Brazilian Ronaldinho celebrate their second goal against Albacete during their Spanish League football match at the....jpg",
      },
      {
        title: "Messi's Champions League Magic",
        thumbnail: "/lovable-uploads/messi batch/Lionel Messi of Barcelona and Cristiano Ronaldo of Juventus F.C. Look on during the UEFA Champions League Group G stage match between FC Barcelona....jpg",
      },
      {
        title: "Messi's Free Kick Mastery",
        thumbnail: "/lovable-uploads/messi batch/Cristiano Ronaldo of Juventus, Lionel Messi of FC Barcelona and Virgil Van Dijk of Liverpool react during the UEFA Champions League Draw, part of the....jpg",
      },
      {
        title: "Messi's Dribbling Skills",
        thumbnail: "/lovable-uploads/messi batch/Lionel Messi of FC Barcelona shows his dejection during the La Liga Santander match between FC Barcelona and RC Celta at Camp Nou on May 16, 2021 in....jpg",
      },
    ],
  },
  {
    id: "messi3",
    name: "LIONEL MESSI",
    first_name: "LIONEL",
    last_name: "MESSI",
    bgColor: "from-blue-900 via-blue-600 to-indigo-500",
    image: "/lovable-uploads/lm10_balon_dor.jpeg",
    videos: [
      {
        title: "Messi's Ballon d'Or Moments",
        thumbnail: "/lovable-uploads/messi batch/Lionel Messi attends the 67th Ballon D'Or Ceremony at Theatre Du Chatelet on October 30, 2023 in Paris, France..jpg",
      },
      {
        title: "Messi's Trophy Collection",
        thumbnail: "/lovable-uploads/messi batch/Lionel Messi attends the 67th Ballon D'Or Ceremony at Theatre Du Chatelet on October 30, 2023 in Paris, France. (1).jpg",
      },
      {
        title: "Messi's Individual Awards",
        thumbnail: "/lovable-uploads/messi batch/Lionel Messi attends the 67th Ballon D'Or Ceremony at Theatre Du Chatelet on October 30, 2023 in Paris, France. (2).jpg",
      },
      {
        title: "Messi's Golden Boot",
        thumbnail: "/lovable-uploads/messi batch/Lionel Messi attends the 67th Ballon D'Or Ceremony at Theatre Du Chatelet on October 30, 2023 in Paris, France. (3).jpg",
      },
    ],
  },
  {
    id: "messi4",
    name: "LIONEL MESSI",
    first_name: "LIONEL",
    last_name: "MESSI",
    bgColor: "from-red-800 via-pink-600 to-rose-500",
    image: "/lovable-uploads/lm10_fire.jpeg",
    videos: [
      {
        title: "Messi's Fire Celebration",
        thumbnail: "/lovable-uploads/messi batch/Lionel Messi of Inter Miami CF celebrates after scoring a goal during the Leagues Cup 2023 Round of 32 match between Orlando City SC and Inter Miami....jpg",
      },
      {
        title: "Messi's Passionate Moments",
        thumbnail: "/lovable-uploads/messi batch/Lionel Messi of Inter Miami CF celebrates after scoring a goal in the second half during the Leagues Cup 2023 Round of 32 match between Orlando City....jpg",
      },
      {
        title: "Messi's Team Celebrations",
        thumbnail: "/lovable-uploads/messi batch/Lionel Messi of Inter Miami CF celebrates after scoring his second goal during the second half against the Orlando City SC at Chase Stadium on March....jpg",
      },
      {
        title: "Messi's Victory Moments",
        thumbnail: "/lovable-uploads/messi batch/Lionel Messi of Inter Miami CF celebrates after kicking the game winning goal during the second half of the Leagues Cup 2023 match between Cruz Azul....jpg",
      },
    ],
  },
  {
    id: "messi5",
    name: "LIONEL MESSI",
    first_name: "LIONEL",
    last_name: "MESSI",
    bgColor: "from-gray-900 via-slate-600 to-zinc-500",
    image: "/lovable-uploads/lm10_vintage.jpeg",
    videos: [
      {
        title: "Young Messi's Journey",
        thumbnail: "/lovable-uploads/messi batch/Lionel Messi of Inter Miami CF celebrates after kicking the game winning goal during the second half of the Leagues Cup 2023 match between Cruz Azul... (1).jpg",
      },
      {
        title: "Messi's Evolution",
        thumbnail: "/lovable-uploads/messi batch/Lionel Messi of Inter Miami CF celebrates scoring their second goal during the FIFA Club World Cup 2025 group A match between Internacional CF Miami....jpg",
      },
      {
        title: "Messi's Classic Moments",
        thumbnail: "/lovable-uploads/messi batch/Lionel Messi of Inter Miami CF celebrates after scoring a goal in the first half during the Leagues Cup 2023 semifinals match between Inter Miami CF....jpg",
      },
      {
        title: "Messi's Historic Goals",
        thumbnail: "/lovable-uploads/messi batch/Lionel Messi of Inter Miami CF and co-owner David Beckham look on as fans take photos during the second half of the Leagues Cup 2023 match between....jpg",
      },
    ],
  },
  {
    id: "messi6",
    name: "LIONEL MESSI",
    first_name: "LIONEL",
    last_name: "MESSI",
    bgColor: "from-emerald-900 via-green-600 to-teal-500",
    image: "/lovable-uploads/lm10_world_cup.jpeg",
    videos: [
      {
        title: "Messi's World Cup Glory",
        thumbnail: "/lovable-uploads/messi batch/Lionel Messi of Argentina lifts the FIFA World Cup Qatar 2022 Winner's Trophy during the FIFA World Cup Qatar 2022 Final match between Argentina and....jpg",
      },
      {
        title: "Messi's World Cup Final",
        thumbnail: "/lovable-uploads/messi batch/Lionel Messi of Argentina kisses the FIFA World Cup Qatar 2022 Winner's Trophy during the FIFA World Cup Qatar 2022 Final match between Argentina and....jpg",
      },
      {
        title: "Messi's Argentina Triumph",
        thumbnail: "/lovable-uploads/messi batch/Lionel Messi of Argentina reacts after winning the CONMEBOL Copa America 2024 Final match between Argentina and Colombia at Hard Rock Stadium on July....jpg",
      },
      {
        title: "Messi's World Cup Journey",
        thumbnail: "/lovable-uploads/messi batch/Lionel Messi of Argentina looks on during the CONMEBOL Copa America 2024 quarter-final match between Argentina and Ecuador at NRG Stadium on July 04,....jpg",
      },
    ],
  },
  {
    id: "messi7",
    name: "LIONEL MESSI",
    first_name: "LIONEL",
    last_name: "MESSI",
    bgColor: "from-orange-900 via-pink-600 to-purple-500",
    image: "/lovable-uploads/lm10_young_with_old.jpeg",
    videos: [
      {
        title: "Messi's Career Timeline",
        thumbnail: "/lovable-uploads/messi batch/Lionel Messi of Argentina looks on in the second half against Ecuador during an International Friendly match at Soldier Field on June 09, 2024 in....jpg",
      },
      {
        title: "Messi's Growth Story",
        thumbnail: "/lovable-uploads/messi batch/Lionel Messi of Argentina and teammate Rodrigo de Paul talk to Rodrygo of Brazil after the match was delayed due to incidents in the stands during a....jpg",
      },
      {
        title: "Messi's Legacy Moments",
        thumbnail: "/lovable-uploads/messi batch/Lionel Messi of Argentina smiles during the CONMEBOL Copa America 2024 semifinal match between Canada and Argentina at MetLife Stadium on July 09,....jpg",
      },
      {
        title: "Messi's Iconic Career",
        thumbnail: "/lovable-uploads/messi batch/Lionel Messi of Inter Miami celebrates after defeating the Nashville SC to win the Leagues Cup 2023 final match between Inter Miami CF and Nashville....jpg",
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
                {/* <h3 className="text-white/80 text-lg mb-2 font-light tracking-wider">
                  {character.japanese}
                </h3> */}
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

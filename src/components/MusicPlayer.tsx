import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [userManuallyToggled, setUserManuallyToggled] = useState(false);

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!userManuallyToggled) {
        setIsMuted(false);
        setPlaying(true);
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);
    window.addEventListener('scroll', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
  }, [userManuallyToggled]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (isMuted) {
      setIsMuted(false);
      setPlaying(true);
    } else {
      setPlaying(!playing);
    }
    
    setHasInteracted(true);
    setUserManuallyToggled(true);
  };

  const isAudioActive = playing && !isMuted;

  return (
    <>
      <div className="fixed top-0 left-0 w-0 h-0 opacity-0 pointer-events-none overflow-hidden -z-50">
        <ReactPlayer
          src="https://youtu.be/4Wxi4sVCeo0?list=RD4Wxi4sVCeo0"
          playing={playing}
          muted={isMuted}
          loop={true}
          volume={0.5}
          width="10px"
          height="10px"
          playsInline={true}
        />
      </div>

      <AnimatePresence>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          onClick={togglePlay}
          className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-[9999] flex items-center justify-center w-12 h-12 rounded-full bg-brand-bg border border-brand-accent text-brand-accent shadow-lg hover:bg-brand-accent hover:text-brand-bg transition-all duration-300 group"
          aria-label={isAudioActive ? "Pause background music" : "Play background music"}
        >
          {isAudioActive ? (
            <Volume2 className="w-5 h-5" />
          ) : (
            <VolumeX className="w-5 h-5" />
          )}
          
          {/* Tooltip */}
          {!hasInteracted && (
            <span className="absolute left-full ml-4 whitespace-nowrap bg-brand-bg border border-brand-accent/30 text-brand-text text-xs uppercase tracking-widest px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {isAudioActive ? "Pause Music" : "Play Music"}
            </span>
          )}
        </motion.button>
      </AnimatePresence>
    </>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { Settings2, VolumeX, Volume1, Volume2 } from 'lucide-react';
import { isHapticsSupported, setHapticsIntensity, getHapticsIntensity } from '@/utils/haptics';

export default function HapticsSettings() {
  const [isSupported, setIsSupported] = useState<boolean | null>(null);
  const [intensity, setIntensity] = useState<'off' | 'light' | 'medium' | 'heavy'>('medium');
  const [showSettings, setShowSettings] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 991);
    };
    
    // Check if haptics are supported with multiple detection methods
    const checkSupport = async () => {
      // Test with navigator.vibrate directly first
      const hasVibrate = 'vibrate' in navigator;
      
      // Also check with our utility function that has additional checks
      const utilityCheck = isHapticsSupported();
      
      // Device supports haptics only if both checks pass
      const supported = hasVibrate && utilityCheck;
      
      // Set the support state
      setIsSupported(supported);
      
      // If supported, get saved intensity
      if (supported) {
        setIntensity(getHapticsIntensity());
      }
    };
    
    // Initial checks
    checkScreenSize();
    checkSupport();
    
    // Add window resize listener
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // If haptics are not supported, not mobile (<991px), or still checking, don't render
  if (isSupported === null || isSupported === false || !isMobile) return null;

  const handleIntensityChange = (newIntensity: 'off' | 'light' | 'medium' | 'heavy') => {
    setIntensity(newIntensity);
    setHapticsIntensity(newIntensity);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <button
        onClick={() => setShowSettings(!showSettings)}
        className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-[#1F1F1F] shadow-lg border border-[#DCDCDC] dark:border-[#D64206]/20"
        aria-label="Haptic feedback settings"
      >
        <Settings2 className="w-5 h-5 text-[#1F1F1F] dark:text-[#D64206]" />
      </button>
      
      {showSettings && (
        <div className="absolute right-0 bottom-full mb-2 w-64 p-4 rounded-xl bg-white dark:bg-[#1F1F1F] shadow-lg border border-[#DCDCDC] dark:border-[#D64206]/20 z-50">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-medium">Haptic Feedback</h3>
            <button 
              onClick={() => setShowSettings(false)}
              className="text-gray-500 hover:text-[#1F1F1F] dark:text-gray-400 dark:hover:text-[#D64206]"
              aria-label="Close haptic settings"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-2">
            <div 
              className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors ${intensity === 'off' ? 'bg-gray-100 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-800'}`}
              onClick={() => handleIntensityChange('off')}
            >
              <VolumeX className="w-4 h-4 mr-2 text-[#1F1F1F] dark:text-[#DCDCDC]" />
              <span className="text-sm">Off</span>
            </div>
            
            <div 
              className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors ${intensity === 'light' ? 'bg-gray-100 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-800'}`}
              onClick={() => handleIntensityChange('light')}
            >
              <Volume1 className="w-4 h-4 mr-2 text-[#1F1F1F] dark:text-[#DCDCDC]" />
              <span className="text-sm">Light</span>
            </div>
            
            <div 
              className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors ${intensity === 'medium' ? 'bg-gray-100 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-800'}`}
              onClick={() => handleIntensityChange('medium')}
            >
              <Volume2 className="w-4 h-4 mr-2 text-[#1F1F1F] dark:text-[#DCDCDC]" />
              <span className="text-sm">Medium</span>
            </div>
            
            <div 
              className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors ${intensity === 'heavy' ? 'bg-gray-100 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-800'}`}
              onClick={() => handleIntensityChange('heavy')}
            >
              <Volume2 className="w-4 h-4 mr-2 text-[#1F1F1F] dark:text-[#DCDCDC]" />
              <span className="text-sm">Strong</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 
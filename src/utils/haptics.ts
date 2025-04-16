import { Capacitor } from '@capacitor/core';
import { Haptics, ImpactStyle, NotificationType } from '@capacitor/haptics';

// Enhanced device detection
export const isHapticsSupported = () => {
  // Check if running in a browser environment
  if (typeof window === 'undefined') return false;
  
  // Capacitor plugin availability
  const hasCapacitorHaptics = Capacitor.isPluginAvailable('Haptics');
  
  // Web Vibration API support
  const hasVibrationAPI = 'vibrate' in navigator;
  
  return hasCapacitorHaptics || hasVibrationAPI;
};

// Get current haptics intensity level from localStorage
export const getHapticsIntensity = (): 'off' | 'light' | 'medium' | 'heavy' => {
  if (typeof window === 'undefined') return 'light';
  
  const savedIntensity = localStorage.getItem('hapticsIntensity');
  if (savedIntensity && ['off', 'light', 'medium', 'heavy'].includes(savedIntensity)) {
    return savedIntensity as 'off' | 'light' | 'medium' | 'heavy';
  }
  
  return 'light'; // Default to light intensity
};

// Set haptics intensity level
export const setHapticsIntensity = (intensity: 'off' | 'light' | 'medium' | 'heavy') => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('hapticsIntensity', intensity);
};

const triggerHaptics = async (style: ImpactStyle | NotificationType | 'selection') => {
  if (!isHapticsSupported()) return;
  
  // Get user's intensity preference
  const intensity = getHapticsIntensity();
  if (intensity === 'off') return;
  
  try {
    // Always use the lightest possible setting
    if (Capacitor.isPluginAvailable('Haptics')) {
      // Use light impact with minimal duration
      await Haptics.impact({ style: ImpactStyle.Light });
    } else if ('vibrate' in navigator) {
      // Use absolute minimum vibration duration (1ms)
      navigator.vibrate(1);
    }
  } catch (error) {
    console.error("Haptics error:", error);
  }
};

export const hapticFeedback = {
  impactLight: () => triggerHaptics(ImpactStyle.Light),
  impactMedium: () => triggerHaptics(ImpactStyle.Light), // Always Light
  impactHeavy: () => triggerHaptics(ImpactStyle.Light),  // Always Light
  notificationSuccess: () => triggerHaptics(ImpactStyle.Light), // Light for notifications
  notificationWarning: () => triggerHaptics(ImpactStyle.Light), // Light for notifications
  notificationError: () => triggerHaptics(ImpactStyle.Light),   // Light for notifications
  selection: () => triggerHaptics(ImpactStyle.Light), // Light for selection
}; 
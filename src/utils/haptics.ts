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
  if (typeof window === 'undefined') return 'medium';
  
  const savedIntensity = localStorage.getItem('hapticsIntensity');
  if (savedIntensity && ['off', 'light', 'medium', 'heavy'].includes(savedIntensity)) {
    return savedIntensity as 'off' | 'light' | 'medium' | 'heavy';
  }
  
  return 'medium'; // Default intensity
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
    // Adjust the haptic style based on user's intensity preference
    let adjustedStyle = style;
    
    if (Object.values(ImpactStyle).includes(style as ImpactStyle)) {
      // For impact styles, adjust based on intensity
      if (intensity === 'light') {
        adjustedStyle = ImpactStyle.Light;
      } else if (intensity === 'medium') {
        adjustedStyle = ImpactStyle.Medium;
      } else if (intensity === 'heavy') {
        adjustedStyle = ImpactStyle.Heavy;
      }
      
      if (Capacitor.isPluginAvailable('Haptics')) {
        await Haptics.impact({ style: adjustedStyle as ImpactStyle });
      } else if ('vibrate' in navigator) {
        // Fallback to Web Vibration API with duration based on intensity
        const duration = intensity === 'light' ? 5 : intensity === 'medium' ? 15 : 25;
        navigator.vibrate(duration);
      }
    } else if (Object.values(NotificationType).includes(style as NotificationType)) {
      if (Capacitor.isPluginAvailable('Haptics')) {
        await Haptics.notification({ type: style as NotificationType });
      } else if ('vibrate' in navigator) {
        // Pattern for notifications
        const pattern = style === NotificationType.Success ? [10, 40, 10] : 
                        style === NotificationType.Warning ? [30, 20, 30] : [50, 30, 50];
        navigator.vibrate(pattern);
      }
    } else if (style === 'selection') {
      if (Capacitor.isPluginAvailable('Haptics')) {
        await Haptics.impact({ style: ImpactStyle.Light });
      } else if ('vibrate' in navigator) {
        navigator.vibrate(3); // Very short vibration for selection
      }
    }
  } catch (error) {
    console.error("Haptics error:", error);
  }
};

export const hapticFeedback = {
  impactLight: () => triggerHaptics(ImpactStyle.Light),
  impactMedium: () => triggerHaptics(ImpactStyle.Medium),
  impactHeavy: () => triggerHaptics(ImpactStyle.Heavy),
  notificationSuccess: () => triggerHaptics(NotificationType.Success),
  notificationWarning: () => triggerHaptics(NotificationType.Warning),
  notificationError: () => triggerHaptics(NotificationType.Error),
  selection: () => triggerHaptics('selection'),
}; 
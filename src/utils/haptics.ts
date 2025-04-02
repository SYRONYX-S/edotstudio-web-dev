// Haptic feedback utility function
export const hapticFeedback = {
  light: () => {
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(10);
    }
  },
  medium: () => {
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(20);
    }
  },
  heavy: () => {
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(30);
    }
  },
  success: () => {
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate([10, 20, 10]);
    }
  },
  error: () => {
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate([30, 10, 30]);
    }
  }
}; 
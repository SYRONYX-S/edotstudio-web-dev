import { Capacitor } from '@capacitor/core';
import { Haptics, ImpactStyle, NotificationType } from '@capacitor/haptics';

const canUseHaptics = () => Capacitor.isPluginAvailable('Haptics');

const triggerHaptics = async (style: ImpactStyle | NotificationType | 'selection') => {
  if (!canUseHaptics()) return;

  try {
    if (Object.values(ImpactStyle).includes(style as ImpactStyle)) {
      await Haptics.impact({ style: style as ImpactStyle });
    } else if (Object.values(NotificationType).includes(style as NotificationType)) {
      await Haptics.notification({ type: style as NotificationType });
    } else if (style === 'selection') {
      // Capacitor doesn't have a direct 'selection' type, use light impact as a substitute
      await Haptics.impact({ style: ImpactStyle.Light }); 
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
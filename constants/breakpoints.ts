import { useMediaQuery } from '@/hooks/useMediaQuery';
import { BreakpointsType } from '@/types/constants';

export const BREAKPOINTS: Readonly<BreakpointsType> = {
  xs: 320, // For extra small screens
  sm: 480, // For small screens
  md: 768, // For medium screens
  lg: 1024, // For large screens
  xl: 1200, // For extra large screens
  // Add more breakpoints as needed

  widthContainer: 1535,
};

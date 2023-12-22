import { useEffect, useState } from 'react';

/**
 * Convert screen size from rem to pixels
 * this way it respects user's browser font size and/or zoom
 *
 * @param remSize - The desired screen size in rem units
 * @returns {number} - The corresponding value in pixels
 */
function getScreenSize(remSize: number): number {
  const bodyFontSize = +window.getComputedStyle(document.body).getPropertyValue('font-size').slice(0, -2);

  return remSize * bodyFontSize;
}

/**
 * Check if the current screen size is mobile size or not
 *
 * @returns {boolean} - True if mobile screen size, false otherwise
 */
function useIsMobile(): { isMobile: boolean } {
  const tabletScreenSize = getScreenSize(48);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < tabletScreenSize);

  const handleResize = () => {
    setIsMobile(window.innerWidth < tabletScreenSize);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    isMobile,
  };
}

export default useIsMobile;

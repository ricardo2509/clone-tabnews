import { useEffect, useState } from 'react';

function useDeviceDetect() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userAgent = window.navigator.userAgent;
      setIsMobile(userAgent.includes('Mobi') || userAgent.includes('Android') || userAgent.includes('iPhone') || userAgent.includes('iPad'));
    }
  }, []);

  return { isMobile };
}

export default useDeviceDetect;
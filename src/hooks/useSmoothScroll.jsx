// src/hooks/useSmoothScroll.js
import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    let lenis;

    (async () => {
      const LenisModule = await import('@studio-freight/lenis');
      lenis = new LenisModule.default({
        // duration: 1.2,
        duration: 0.9, // 🔥 faster response
        lerp: 0.08, // 🔥 smoother than duration alone
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        direction: 'vertical',
        gestureDirection: 'vertical',
        smoothTouch: true,
        touchMultiplier: 2,
      });

      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
      lenis.on('scroll', () => {
        window.dispatchEvent(new Event('scroll'));
      });
    })();

    return () => lenis?.destroy();
  }, []);
};

export default useSmoothScroll;

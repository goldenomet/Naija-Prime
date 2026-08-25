import { gsap } from 'gsap';

export interface GsapScrollOptions {
  duration?: number;
  offset?: number;
  ease?: string;
  onComplete?: () => void;
}

/**
 * Perform a smooth, elastic-feeling scroll to a numeric position, selector, or element using GSAP.
 */
export function gsapElasticScroll(
  target: number | string | HTMLElement,
  options?: GsapScrollOptions
) {
  if (typeof window === 'undefined') return;

  const {
    duration = 1.05,
    offset = 0,
    ease = 'power4.out',
    onComplete
  } = options || {};

  let targetY = 0;

  if (typeof target === 'number') {
    targetY = target;
  } else if (typeof target === 'string') {
    const el = document.querySelector(target);
    if (el) {
      const rect = el.getBoundingClientRect();
      targetY = (window.pageYOffset || window.scrollY || 0) + rect.top + offset;
    }
  } else if (target instanceof HTMLElement) {
    const rect = target.getBoundingClientRect();
    targetY = (window.pageYOffset || window.scrollY || 0) + rect.top + offset;
  }

  // Constrain targetY to document scroll boundaries
  const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  targetY = Math.min(Math.max(0, targetY), maxScroll);

  const scrollObj = { y: window.pageYOffset || window.scrollY || 0 };

  // Kill existing scroll tweens to avoid competing animations
  gsap.killTweensOf(scrollObj);

  return gsap.to(scrollObj, {
    y: targetY,
    duration,
    ease,
    onUpdate: () => {
      window.scrollTo(0, scrollObj.y);
    },
    onComplete
  });
}

/**
 * Handle navigation between sections with an elastic transition feel.
 */
export function gsapNavigateToSection(
  targetSection: string,
  currentSection: string,
  setActiveSection: (section: string) => void,
  targetElementSelector?: string
) {
  if (currentSection !== targetSection) {
    setActiveSection(targetSection);
    
    // Allow React state update to mount section, then smoothly scroll to target/top
    requestAnimationFrame(() => {
      setTimeout(() => {
        if (targetElementSelector) {
          gsapElasticScroll(targetElementSelector, {
            duration: 1.1,
            offset: -80,
            ease: 'power4.out'
          });
        } else {
          gsapElasticScroll(0, {
            duration: 0.95,
            ease: 'power3.out'
          });
        }
      }, 50);
    });
  } else {
    // Already on the section: smoothly and elastically scroll to element or top
    if (targetElementSelector) {
      gsapElasticScroll(targetElementSelector, {
        duration: 1.0,
        offset: -80,
        ease: 'power4.out'
      });
    } else {
      gsapElasticScroll(0, {
        duration: 0.85,
        ease: 'power3.out'
      });
    }
  }
}

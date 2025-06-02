/**
 * Smooth scroll to element with given id
 */
export const scrollToElement = (id: string): void => {
  const element = document.getElementById(id);
  
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

/**
 * Get scroll position for animation triggers
 */
export const getScrollPosition = (): number => {
  return window.scrollY || document.documentElement.scrollTop;
};

/**
 * Check if element is in viewport
 */
export const isElementInViewport = (el: Element): boolean => {
  const rect = el.getBoundingClientRect();
  
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Check if element is partially visible in viewport
 */
export const isElementPartiallyVisible = (el: Element): boolean => {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
  const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
  const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
  
  return vertInView && horInView;
};
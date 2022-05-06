import { RefObject, useEffect, useState } from 'react';

const useOnScroll = (ref: RefObject<HTMLElement> | null): boolean => {

  const [isScrolled, setScrolled] = useState(false);

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setScrolled(true);
        observer.disconnect();
      }
    }
  );

  useEffect(() => {
    if (ref?.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return isScrolled;
};

export default useOnScroll;

import { useCallback, useEffect, useRef, useState, useTransition } from "react";

const getOrientation = () => (window.innerWidth > window.innerHeight ? "landscape" : "portrait");

const getIsMobile = () =>
  window.innerWidth < 768 || (window.innerWidth < 815 && getOrientation() === "landscape");

const getIsTablet = () => window.innerWidth <= 1200 && !getIsMobile();

interface DeviceSize {
  isMobile: boolean;
  isTablet: boolean;
}

interface UseResponsiveProps {
  callback?: () => void;
  debounceTime?: number;
}

export function useResponsive({ debounceTime = 250, callback }: UseResponsiveProps) {
  const [, startTransition] = useTransition();

  const [deviceSize, setDeviceSize] = useState<DeviceSize>({
    isMobile: getIsMobile(),
    isTablet: getIsTablet(),
  });

  const timeout = useRef<NodeJS.Timeout | null>(null);

  const update = useCallback(() => {
    startTransition(() => {
      setDeviceSize({
        isMobile: getIsMobile(),
        isTablet: getIsTablet(),
      });
    });
    callback && callback();
  }, [callback]);

  const debounceUpdate = useCallback(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => update(), debounceTime);
  }, [debounceTime, update]);

  useEffect(() => {
    window.addEventListener("resize", () => debounceUpdate());

    return () => {
      window.removeEventListener("resize", debounceUpdate);
    };
  }, [debounceUpdate]);

  return {
    isMobile: deviceSize.isMobile,
    isTablet: deviceSize.isTablet,
    isDesktop: !deviceSize.isMobile && !deviceSize.isTablet,
  } as const;
}

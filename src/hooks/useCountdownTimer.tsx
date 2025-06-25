import { useCallback, useEffect, useRef, useState } from "react";

export function useCountdownTimer() {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const timerRef = useRef<number | null>(null); // ✅ Aqui é number

  const progress = totalSeconds === 0 ? 1 : remainingSeconds / totalSeconds;

  const timeFormatted = `${String(Math.floor(remainingSeconds / 60)).padStart(
    2,
    "0",
  )}:${String(remainingSeconds % 60).padStart(2, "0")}`;

  const startCountdown = useCallback(
    (minutes: number) => {
      if (isRunning) return;

      if (remainingSeconds === 0) {
        const seconds = minutes * 60;
        setTotalSeconds(seconds);
        setRemainingSeconds(seconds);
      }

      setIsRunning(true);
    },
    [isRunning, remainingSeconds],
  );

  const pauseCountdown = useCallback(() => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsRunning(false);
  }, []);

  useEffect(() => {
    if (isRunning && remainingSeconds > 0) {
      timerRef.current = setInterval(() => {
        setRemainingSeconds((prev) => {
          if (prev <= 1) {
            if (timerRef.current !== null) {
              clearInterval(timerRef.current);
              timerRef.current = null;
            }
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000) as unknown as number;
    }

    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isRunning]);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return {
    progress,
    timeFormatted,
    isRunning,
    startCountdown,
    pauseCountdown,
    remainingSeconds,
    reset: () => {
      pauseCountdown();
      setTotalSeconds(0);
      setRemainingSeconds(0);
    },
  };
}

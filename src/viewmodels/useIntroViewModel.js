import { useState } from "react";

export function useIntroViewModel() {
  const [introIndex, setIntroIndex] = useState(0);

  const nextIntro = (onFinish) => {
    if (introIndex === 0) {
      setIntroIndex(1);
      return;
    }
    onFinish?.();
  };

  const previousIntro = () => {
    setIntroIndex(0);
  };

  const resetIntro = () => {
    setIntroIndex(0);
  };

  return {
    introIndex,
    setIntroIndex,
    nextIntro,
    previousIntro,
    resetIntro,
  };
}


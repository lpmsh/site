//@ts-nocheck

import React, { useState, useEffect } from "react";
import { useIsVisible } from "@/hooks/useIsVisible";

const useProgressiveImg = (
  lowQualitySrc: any,
  highQualitySrc: any,
  isVisible: any,
  number: any
) => {
  const [src, setSrc] = useState(lowQualitySrc);
  useEffect(() => {
    setSrc(lowQualitySrc);
    const img = new Image();
    if (isVisible) {
      img.src = highQualitySrc;
      img.onload = () => {
        setSrc(highQualitySrc);
      };
    } else {
      img.src = lowQualitySrc;
    }

    if (isVisible) {
      console.log(number, isVisible);
    }
  }, [lowQualitySrc, highQualitySrc, isVisible]);
  return [src, { blur: src === lowQualitySrc }];
};
export default useProgressiveImg;

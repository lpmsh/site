import React, {useState, useEffect} from "react";
import { useIsVisible } from "./isVisibleHook";

const useProgressiveImg = (lowQualitySrc, highQualitySrc, isVisible, number) => {

    const [src, setSrc] = useState(lowQualitySrc);
    useEffect(() => {
        setSrc(lowQualitySrc);
        const img = new Image();
        if (isVisible){
            img.src = highQualitySrc;
            img.onload = () => {
                setSrc(highQualitySrc);
            };
        }else {
            img.src = lowQualitySrc;
        }

        if (isVisible){
            console.log(number, isVisible)
        }
    }, [lowQualitySrc, highQualitySrc, isVisible]);
    return [src, { blur: src === lowQualitySrc }];
};
export default useProgressiveImg;


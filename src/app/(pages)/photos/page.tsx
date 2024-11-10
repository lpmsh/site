"use client";

import React, { useState, useEffect, Suspense } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import LazyLoad from "react-lazy-load";

import image1 from "../(photos)/image1.jpg";
import image1Scaled from "../(photos)/image1-scaled.jpg";
import image2 from "../(photos)/image2.jpg";
import image2Scaled from "../(photos)/image2-scaled.jpg";
import image3 from "../(photos)/image3.jpg";
import image3Scaled from "../(photos)/image3-scaled.jpg";
import image4 from "../(photos)/image4.jpg";
import image4Scaled from "../(photos)/image4-scaled.jpg";
import image5 from "../(photos)/image5.jpg";
import image5Scaled from "../(photos)/image5-scaled.jpg";
import image6 from "../(photos)/image6.jpg";
import image6Scaled from "../(photos)/image6-scaled.jpg";
import image7 from "../(photos)/image7.jpg";
import image7Scaled from "../(photos)/image7-scaled.jpg";
import image8 from "../(photos)/image8.jpg";
import image8Scaled from "../(photos)/image8-scaled.jpg";
import image9 from "../(photos)/image9.jpg";
import image9Scaled from "../(photos)/image9-scaled.jpg";
import image10 from "../(photos)/image10.jpg";
import image10Scaled from "../(photos)/image10-scaled.jpg";
import image11 from "../(photos)/image11.jpg";
import image11Scaled from "../(photos)/image11-scaled.jpg";
import image12 from "../(photos)/image12.jpg";
import image12Scaled from "../(photos)/image12-scaled.jpg";
import image13 from "../(photos)/image13.jpg";
import image13Scaled from "../(photos)/image13-scaled.jpg";
import image14 from "../(photos)/image14.jpg";
import image14Scaled from "../(photos)/image14-scaled.jpg";
import image15 from "../(photos)/image15.jpg";
import image15Scaled from "../(photos)/image15-scaled.jpg";
import image16 from "../(photos)/image16.jpg";
import image16Scaled from "../(photos)/image16-scaled.jpg";
import image17 from "../(photos)/image17.jpg";
import image17Scaled from "../(photos)/image17-scaled.jpg";
import image18 from "../(photos)/image18.jpg";
import image18Scaled from "../(photos)/image18-scaled.jpg";
import { useRef } from "react";
import NextImage, { StaticImageData } from "next/image";

function useIsVisible(ref: any, scrollCounter: any) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref, scrollCounter]);

  return isIntersecting;
}

const useProgressiveImg = (lowQualitySrc: any, highQualitySrc: any, isVisible: any, number: any) => {
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

function Photos() {
  const [scrollCounter, setScrollCounter] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollCounter(scrollCounter + 1);
    });
    window.scroll(0, 0);
  }, []);

  const image1Ref = useRef<any>();
  const image2Ref = useRef<any>();
  const image3Ref = useRef<any>();
  const image4Ref = useRef<any>();
  const image5Ref = useRef<any>();
  const image6Ref = useRef<any>();
  const image7Ref = useRef<any>();
  const image8Ref = useRef<any>();
  const image9Ref = useRef<any>();
  const image10Ref = useRef<any>();
  const image11Ref = useRef<any>();
  const image12Ref = useRef<any>();
  const image13Ref = useRef<any>();
  const image14Ref = useRef<any>();
  const image15Ref = useRef<any>();
  const image16Ref = useRef<any>();
  const image17Ref = useRef<any>();
  const image18Ref = useRef<any>();

  const image1Visible = useIsVisible(image1Ref, scrollCounter);
  const image2Visible = useIsVisible(image2Ref, scrollCounter);
  const image3Visible = useIsVisible(image3Ref, scrollCounter);
  const image4Visible = useIsVisible(image4Ref, scrollCounter);
  const image5Visible = useIsVisible(image5Ref, scrollCounter);
  const image6Visible = useIsVisible(image6Ref, scrollCounter);
  const image7Visible = useIsVisible(image7Ref, scrollCounter);
  const image8Visible = useIsVisible(image8Ref, scrollCounter);
  const image9Visible = useIsVisible(image9Ref, scrollCounter);
  const image10Visible = useIsVisible(image10Ref, scrollCounter);
  const image11Visible = useIsVisible(image11Ref, scrollCounter);
  const image12Visible = useIsVisible(image12Ref, scrollCounter);
  const image13Visible = useIsVisible(image13Ref, scrollCounter);
  const image14Visible = useIsVisible(image14Ref, scrollCounter);
  const image15Visible = useIsVisible(image15Ref, scrollCounter);
  const image16Visible = useIsVisible(image16Ref, scrollCounter);
  const image17Visible = useIsVisible(image17Ref, scrollCounter);
  const image18Visible = useIsVisible(image18Ref, scrollCounter);

  const [image1Output, { image1Blur }] = useProgressiveImg(image1Scaled, image1, image1Visible, 1);
  const [image2Output, { image2Blur }] = useProgressiveImg(image2Scaled, image2, image2Visible, 2);
  const [image3Output, { image3Blur }] = useProgressiveImg(image3Scaled, image3, image3Visible, 3);
  const [image4Output, { image4Blur }] = useProgressiveImg(image4Scaled, image4, image4Visible, 4);
  const [image5Output, { image5Blur }] = useProgressiveImg(image5Scaled, image5, image5Visible, 5);
  const [image6Output, { image6Blur }] = useProgressiveImg(image6Scaled, image6, image6Visible, 6);
  const [image7Output, { image7Blur }] = useProgressiveImg(image7Scaled, image7, image7Visible, 7);
  const [image8Output, { image8Blur }] = useProgressiveImg(image8Scaled, image8, image8Visible, 8);
  const [image9Output, { image9Blur }] = useProgressiveImg(image9Scaled, image9, image9Visible, 9);
  const [image10Output, { image10Blur }] = useProgressiveImg(image10Scaled, image10, image10Visible, 10);
  const [image11Output, { image11Blur }] = useProgressiveImg(image11Scaled, image11, image11Visible, 11);
  const [image12Output, { image12Blur }] = useProgressiveImg(image12Scaled, image12, image12Visible, 12);
  const [image13Output, { image13Blur }] = useProgressiveImg(image13Scaled, image13, image13Visible, 13);
  const [image14Output, { image14Blur }] = useProgressiveImg(image14Scaled, image14, image14Visible, 14);
  const [image15Output, { image15Blur }] = useProgressiveImg(image15Scaled, image15, image15Visible, 15);
  const [image16Output, { image16Blur }] = useProgressiveImg(image16Scaled, image16, image16Visible, 16);
  const [image17Output, { image17Blur }] = useProgressiveImg(image17Scaled, image17, image17Visible, 17);
  const [image18Output, { image18Blur }] = useProgressiveImg(image18Scaled, image18, image18Visible, 18);

  interface ImageData {
    ref: any;
    visible: boolean;
    fullSrc: StaticImageData;
    smallSrc: StaticImageData;
  }

  const images: ImageData[] = [
    {
      ref: image1Ref,
      visible: image1Visible,
      fullSrc: image1,
      smallSrc: image1,
    },
    {
      ref: image2Ref,
      visible: image2Visible,
      fullSrc: image2,
      smallSrc: image2,
    },
    {
      ref: image3Ref,
      visible: image3Visible,
      fullSrc: image3,
      smallSrc: image3,
    },
    {
      ref: image4Ref,
      visible: image4Visible,
      fullSrc: image4,
      smallSrc: image4Scaled,
    },
    {
      ref: image5Ref,
      visible: image5Visible,
      fullSrc: image5,
      smallSrc: image5Scaled,
    },
    {
      ref: image6Ref,
      visible: image6Visible,
      fullSrc: image6,
      smallSrc: image6Scaled,
    },
    {
      ref: image7Ref,
      visible: image7Visible,
      fullSrc: image7,
      smallSrc: image7Scaled,
    },
    {
      ref: image8Ref,
      visible: image8Visible,
      fullSrc: image8,
      smallSrc: image8Scaled,
    },
    {
      ref: image9Ref,
      visible: image9Visible,
      fullSrc: image9,
      smallSrc: image9Scaled,
    },
    {
      ref: image10Ref,
      visible: image10Visible,
      fullSrc: image10,
      smallSrc: image10Scaled,
    },
    {
      ref: image11Ref,
      visible: image11Visible,
      fullSrc: image11,
      smallSrc: image11Scaled,
    },
    {
      ref: image12Ref,
      visible: image12Visible,
      fullSrc: image12,
      smallSrc: image12Scaled,
    },
    {
      ref: image13Ref,
      visible: image13Visible,
      fullSrc: image13,
      smallSrc: image13Scaled,
    },
    {
      ref: image14Ref,
      visible: image14Visible,
      fullSrc: image14,
      smallSrc: image14Scaled,
    },
    {
      ref: image15Ref,
      visible: image15Visible,
      fullSrc: image15,
      smallSrc: image15Scaled,
    },
    {
      ref: image16Ref,
      visible: image16Visible,
      fullSrc: image16,
      smallSrc: image16Scaled,
    },
    {
      ref: image17Ref,
      visible: image17Visible,
      fullSrc: image17,
      smallSrc: image17Scaled,
    },
    {
      ref: image18Ref,
      visible: image18Visible,
      fullSrc: image18,
      smallSrc: image18Scaled,
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      {images.map(({ visible, fullSrc, smallSrc, ref }, index) => (
        <NextImage
          key={index}
          ref={ref}
          src={visible || index <= 3 ? fullSrc : smallSrc}
          // style={{ width: "100%", display: "block" }}

          style={{
            width: "100%",
            display: "block",
            filter: index > 3 && !visible ? "blur(2px)" : "none",
            // transition: image1Blur ? "none" : "filter 0.3s ease-out",
          }}
          alt=""
        />
      ))}
    </div>
  );
}
// <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
//   <Masonry>
//     {/* {renderPhotos} */}
//     {images.map(({ visible, fullSrc, smallSrc, ref }, index) => (
//       <NextImage
//         key={index}
//         ref={ref}
//         src={visible || index <= 3 ? fullSrc : smallSrc}
//         // style={{ width: "100%", display: "block" }}

//         style={{
//           width: "100%",
//           display: "block",
//           filter: index > 3 && !visible ? "blur(2px)" : "none",
//           // transition: image1Blur ? "none" : "filter 0.3s ease-out",
//         }}
//         alt=""
//       />
//     ))}
//   </Masonry>
// </ResponsiveMasonry>

export default Photos;

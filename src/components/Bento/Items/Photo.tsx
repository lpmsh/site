"use client";

import { IconArrowRight, IconCamera } from "@tabler/icons-react";
import React, { useState, useEffect, Suspense } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import LazyLoad from "react-lazy-load";

import image1 from "../../../app/(pages)/(navgroup)/(photos)/image1.jpg";
import image1Scaled from "../../../app/(pages)/(navgroup)/(photos)/image1-scaled.jpg";
import image2 from "../../../app/(pages)/(navgroup)/(photos)/image2.jpg";
import image2Scaled from "../../../app/(pages)/(navgroup)/(photos)/image2-scaled.jpg";
import image3 from "../../../app/(pages)/(navgroup)/(photos)/image3.jpg";
import image3Scaled from "../../../app/(pages)/(navgroup)/(photos)/image3-scaled.jpg";

import { useRef } from "react";
import NextImage, { StaticImageData } from "next/image";

export default function PhotoBento() {
    return (
<>
                <div className="flex justify-between  md:justify-normal md:gap-x-2 gap-x-0  items-center pb-2">
                    <div className="flex items-center gap-x-2">
                        <IconCamera />
                        <div className="text-xl font-bold">Photos</div>
                    </div>
                    <div>
                        <a href="/photos">
                            <IconArrowRight className="text-custom-500" />
                        </a>
                    </div>
                </div>
    
                {/* <div>Photography is a passion of mine. I like to shoot just about anything!</div> */}
                <div className="pt-2">
                    <Photos />
                </div>
    
</>
    );
}

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

    const image1Visible = useIsVisible(image1Ref, scrollCounter);
    const image2Visible = useIsVisible(image2Ref, scrollCounter);
    const image3Visible = useIsVisible(image3Ref, scrollCounter);

    const [image1Output, { image1Blur }] = useProgressiveImg(image1Scaled, image1, image1Visible, 1);
    const [image2Output, { image2Blur }] = useProgressiveImg(image2Scaled, image2, image2Visible, 2);
    const [image3Output, { image3Blur }] = useProgressiveImg(image3Scaled, image3, image3Visible, 3);
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
    ];

    return (
        <div className="grid md:grid-cols-3 gap-2">
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
                    className="rounded-md"
                    alt=""
                />
            ))}
        </div>
    );
}

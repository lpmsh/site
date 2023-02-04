import React, { useState, useEffect, Suspense } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import { IMAGES, IMAGES_ALL } from ".../photoData";
import LazyLoad from "react-lazy-load";
import useProgressiveImg from "../BlurLoadHook.js";

import image1 from "../photos/image1.jpg";
import image1Scaled from "../photos/image1-scaled.jpg";
import image2 from "../photos/image2.jpg";
import image2Scaled from "../photos/image2-scaled.jpg";
import image3 from "../photos/image3.jpg";
import image3Scaled from "../photos/image3-scaled.jpg";
import image4 from "../photos/image4.jpg";
import image4Scaled from "../photos/image4-scaled.jpg";
import image5 from "../photos/image5.jpg";
import image5Scaled from "../photos/image5-scaled.jpg";
import image6 from "../photos/image6.jpg";
import image6Scaled from "../photos/image6-scaled.jpg";
import image7 from "../photos/image7.jpg";
import image7Scaled from "../photos/image7-scaled.jpg";
import image8 from "../photos/image8.jpg";
import image8Scaled from "../photos/image8-scaled.jpg";
import image9 from "../photos/image9.jpg";
import image9Scaled from "../photos/image9-scaled.jpg";
import image10 from "../photos/image10.jpg";
import image10Scaled from "../photos/image10-scaled.jpg";
import image11 from "../photos/image11.jpg";
import image11Scaled from "../photos/image11-scaled.jpg";
import image12 from "../photos/image12.jpg";
import image12Scaled from "../photos/image12-scaled.jpg";
import image13 from "../photos/image13.jpg";
import image13Scaled from "../photos/image13-scaled.jpg";
import image14 from "../photos/image14.jpg";
import image14Scaled from "../photos/image14-scaled.jpg";
import image15 from "../photos/image15.jpg";
import image15Scaled from "../photos/image15-scaled.jpg";
import image16 from "../photos/image16.jpg";
import image16Scaled from "../photos/image16-scaled.jpg";
import image17 from "../photos/image17.jpg";
import image17Scaled from "../photos/image17-scaled.jpg";
import image18 from "../photos/image18.jpg";
import image18Scaled from "../photos/image18-scaled.jpg";
import { useRealShape } from "@nextui-org/react";
import { useRef } from "react";
import { useIsVisible } from "../isVisibleHook.js";

function Photos() {
    const [scrollCounter, setScrollCounter] = useState(0);
    window.addEventListener('scroll', () => {
        setScrollCounter(scrollCounter + 1);
    });

    useEffect(() => {
        window.scroll(0, 0);
    }, []);



    const image1Ref = useRef();
    const image2Ref = useRef();
    const image3Ref = useRef();
    const image4Ref = useRef();
    const image5Ref = useRef();
    const image6Ref = useRef();
    const image7Ref = useRef();
    const image8Ref = useRef();
    const image9Ref = useRef();
    const image10Ref = useRef();
    const image11Ref = useRef();
    const image12Ref = useRef();
    const image13Ref = useRef();
    const image14Ref = useRef();
    const image15Ref = useRef();
    const image16Ref = useRef();
    const image17Ref = useRef();
    const image18Ref = useRef();

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

    const [image1Output, { image1Blur }] = useProgressiveImg(
        image1Scaled,
        image1,
        image1Visible,
        1
    );
    const [image2Output, { image2Blur }] = useProgressiveImg(
        image2Scaled,
        image2,
        image2Visible,
        2
    );
    const [image3Output, { image3Blur }] = useProgressiveImg(
        image3Scaled,
        image3,
        image3Visible,
        3
    );
    const [image4Output, { image4Blur }] = useProgressiveImg(
        image4Scaled,
        image4,
        image4Visible,
        4
    );
    const [image5Output, { image5Blur }] = useProgressiveImg(
        image5Scaled,
        image5,
        image5Visible,
        5
    );
    const [image6Output, { image6Blur }] = useProgressiveImg(
        image6Scaled,
        image6,
        image6Visible,
        6
    );
    const [image7Output, { image7Blur }] = useProgressiveImg(
        image7Scaled,
        image7,
        image7Visible,
        7
    );
    const [image8Output, { image8Blur }] = useProgressiveImg(
        image8Scaled,
        image8,
        image8Visible,
        8
    );
    const [image9Output, { image9Blur }] = useProgressiveImg(
        image9Scaled,
        image9,
        image9Visible,
        9
    );
    const [image10Output, { image10Blur }] = useProgressiveImg(
        image10Scaled,
        image10,
        image10Visible,
        10
    );
    const [image11Output, { image11Blur }] = useProgressiveImg(
        image11Scaled,
        image11,
        image11Visible,
        11
    );
    const [image12Output, { image12Blur }] = useProgressiveImg(
        image12Scaled,
        image12,
        image12Visible,
        12
    );
    const [image13Output, { image13Blur }] = useProgressiveImg(
        image13Scaled,
        image13,
        image13Visible,
        13
    );
    const [image14Output, { image14Blur }] = useProgressiveImg(
        image14Scaled,
        image14,
        image14Visible,
        14
    );
    const [image15Output, { image15Blur }] = useProgressiveImg(
        image15Scaled,
        image15,
        image15Visible,
        15
    );
    const [image16Output, { image16Blur }] = useProgressiveImg(
        image16Scaled,
        image16,
        image16Visible,
        16
    );
    const [image17Output, { image17Blur }] = useProgressiveImg(
        image17Scaled,
        image17,
        image17Visible,
        17
    );
    const [image18Output, { image18Blur }] = useProgressiveImg(
        image18Scaled,
        image18,
        image18Visible,
        18
    );

    // function getAllPhotosToRender() {
    //     let photosToRender = IMAGE_ARRAYS.map((array, i) => (
    //         <img
    //             key={i}
    //             src={array[0]}
    //             // style={{ width: "100%", display: "block" }}
    //             style={{
    //                 width: "100%",
    //                 display: "block",
    //                 filter: array[1].blur ? "blur(20px)" : "none",
    //                 transition: array[1].blur ? "none" : "filter 0.3s ease-out",
    //             }}
    //             alt=""
    //         />
    //     ));

    //     return photosToRender;
    // }
    // let renderPhotos = getAllPhotosToRender();

    return (
        <div className="photos">
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry>
                    {/* {renderPhotos} */}
                    <img
                        ref={image1Ref}
                        src={image1Output}
                        // style={{ width: "100%", display: "block" }}
                        style={{
                            width: "100%",
                            display: "block",
                            filter: image1Blur ? "blur(20px)" : "none",
                            transition: image1Blur
                                ? "none"
                                : "filter 0.3s ease-out",
                        }}
                        alt=""
                    />
                    <img
                        ref={image2Ref}
                        src={image2Output}
                        // style={{ width: "100%", display: "block" }}
                        style={{
                            width: "100%",
                            display: "block",
                            filter: image2Blur ? "blur(20px)" : "none",
                            transition: image2Blur
                                ? "none"
                                : "filter 0.3s ease-out",
                        }}
                        alt=""
                    />
                    <img
                        ref={image3Ref}
                        src={image3Output}
                        // style={{ width: "100%", display: "block" }}
                        style={{
                            width: "100%",
                            display: "block",
                            filter: image3Blur ? "blur(20px)" : "none",
                            transition: image3Blur
                                ? "none"
                                : "filter 0.3s ease-out",
                        }}
                        alt=""
                    />
                    <img
                        ref={image4Ref}
                        src={image4Output}
                        // style={{ width: "100%", display: "block" }}
                        style={{
                            width: "100%",
                            display: "block",
                            filter: image4Blur ? "blur(20px)" : "none",
                            transition: image4Blur
                                ? "none"
                                : "filter 0.3s ease-out",
                        }}
                        alt=""
                    />
                    <img
                        ref={image5Ref}
                        src={image5Output}
                        // style={{ width: "100%", display: "block" }}
                        style={{
                            width: "100%",
                            display: "block",
                            filter: image5Blur ? "blur(20px)" : "none",
                            transition: image5Blur
                                ? "none"
                                : "filter 0.3s ease-out",
                        }}
                        alt=""
                    />
                    <img
                        ref={image6Ref}
                        src={image6Output}
                        // style={{ width: "100%", display: "block" }}
                        style={{
                            width: "100%",
                            display: "block",
                            filter: image6Blur ? "blur(20px)" : "none",
                            transition: image6Blur
                                ? "none"
                                : "filter 0.3s ease-out",
                        }}
                        alt=""
                    />
                    <img
                        ref={image7Ref}
                        src={image7Output}
                        // style={{ width: "100%", display: "block" }}
                        style={{
                            width: "100%",
                            display: "block",
                            filter: image7Blur ? "blur(20px)" : "none",
                            transition: image7Blur
                                ? "none"
                                : "filter 0.3s ease-out",
                        }}
                        alt=""
                    />
                    <img
                        ref={image8Ref}
                        src={image8Output}
                        // style={{ width: "100%", display: "block" }}
                        style={{
                            width: "100%",
                            display: "block",
                            filter: image8Blur ? "blur(20px)" : "none",
                            transition: image8Blur
                                ? "none"
                                : "filter 0.3s ease-out",
                        }}
                        alt=""
                    />

                    <img
                        ref={image9Ref}
                        src={image9Output}
                        // style={{ width: "100%", display: "block" }}
                        style={{
                            width: "100%",
                            display: "block",
                            filter: image9Blur ? "blur(20px)" : "none",
                            transition: image9Blur
                                ? "none"
                                : "filter 0.3s ease-out",
                        }}
                        alt=""
                    />
                    <img
                        ref={image10Ref}
                        src={image10Output}
                        // style={{ width: "100%", display: "block" }}
                        style={{
                            width: "100%",
                            display: "block",
                            filter: image10Blur ? "blur(20px)" : "none",
                            transition: image10Blur
                                ? "none"
                                : "filter 0.3s ease-out",
                        }}
                        alt=""
                    />
                    <img
                        ref={image11Ref}
                        src={image11Output}
                        // style={{ width: "100%", display: "block" }}
                        style={{
                            width: "100%",
                            display: "block",
                            filter: image11Blur ? "blur(20px)" : "none",
                            transition: image11Blur
                                ? "none"
                                : "filter 0.3s ease-out",
                        }}
                        alt=""
                    />
                    <img
                        ref={image12Ref}
                        src={image12Output}
                        // style={{ width: "100%", display: "block" }}
                        style={{
                            width: "100%",
                            display: "block",
                            filter: image12Blur ? "blur(20px)" : "none",
                            transition: image12Blur
                                ? "none"
                                : "filter 0.3s ease-out",
                        }}
                        alt=""
                    />
                    <img
                        ref={image13Ref}
                        src={image13Output}
                        // style={{ width: "100%", display: "block" }}
                        style={{
                            width: "100%",
                            display: "block",
                            filter: image13Blur ? "blur(20px)" : "none",
                            transition: image13Blur
                                ? "none"
                                : "filter 0.3s ease-out",
                        }}
                        alt=""
                    />
                    <img
                        ref={image14Ref}
                        src={image14Output}
                        // style={{ width: "100%", display: "block" }}
                        style={{
                            width: "100%",
                            display: "block",
                            filter: image14Blur ? "blur(20px)" : "none",
                            transition: image14Blur
                                ? "none"
                                : "filter 0.3s ease-out",
                        }}
                        alt=""
                    />
                    <img
                        ref={image15Ref}
                        src={image15Output}
                        // style={{ width: "100%", display: "block" }}
                        style={{
                            width: "100%",
                            display: "block",
                            filter: image15Blur ? "blur(20px)" : "none",
                            transition: image15Blur
                                ? "none"
                                : "filter 0.3s ease-out",
                        }}
                        alt=""
                    />
                    <img
                        ref={image16Ref}
                        src={image16Output}
                        // style={{ width: "100%", display: "block" }}
                        style={{
                            width: "100%",
                            display: "block",
                            filter: image16Blur ? "blur(20px)" : "none",
                            transition: image16Blur
                                ? "none"
                                : "filter 0.3s ease-out",
                        }}
                        alt=""
                    />
                    <img
                        ref={image17Ref}
                        src={image17Output}
                        // style={{ width: "100%", display: "block" }}
                        style={{
                            width: "100%",
                            display: "block",
                            filter: image17Blur ? "blur(20px)" : "none",
                            transition: image17Blur
                                ? "none"
                                : "filter 0.3s ease-out",
                        }}
                        alt=""
                    />
                    <img
                        ref={image18Ref}
                        src={image18Output}
                        // style={{ width: "100%", display: "block" }}
                        style={{
                            width: "100%",
                            display: "block",
                            filter: image18Blur ? "blur(20px)" : "none",
                            transition: image18Blur
                                ? "none"
                                : "filter 0.3s ease-out",
                        }}
                        alt=""
                    />
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
}

export default Photos;

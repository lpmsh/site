import React, { useState, useEffect, Suspense } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import { IMAGES, IMAGES_ALL } from ".../photoData";
import LazyLoad from "react-lazy-load";
import { IMAGES_ALL } from "../photoData.js";



function Photos() {
    function getAllPhotosToRender() {
        let photosToRender = IMAGES_ALL.map((image, i) => (
            <img
                key={i}
                src={image}
                style={{ width: "100%", display: "block" }}
                alt=""
            />
        ));

        return photosToRender;
    }
    let renderPhotos = getAllPhotosToRender();



    



    return (
        <div className="photos">
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry>{renderPhotos}</Masonry>
            </ResponsiveMasonry>
            
        </div>
    );
}

export default Photos;

import React, { useState, useEffect, Suspense } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import { IMAGES, IMAGES_ALL } from ".../photoData";
import { Pagination } from "@nextui-org/react";
import LazyLoad from "react-lazy-load";
import {IMAGES, IMAGES_ALL} from '../photoData.js';



function Photos() {

        const [page, setPage] = useState(1);

        //15 arrays of 6 photos

        function getPhotosToRender(index = 0) {
            let photosToRender = IMAGES[index].map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        style={{ width: "100%", display: "block" }}
                        alt=""
                    />           
            ));

            return photosToRender;
        }

        function getAllPhotosToRender(){
            let photosToRender = IMAGES_ALL.map((image, i) => (
                    <LazyLoad>

                        <img
                            key={i}
                            src={image}
                            style={{ width: "100%", display: "block" }}
                            alt=""
                        />
                    </LazyLoad>
            ));

            return photosToRender
        }

        let renderPhotos = getAllPhotosToRender();

        // useEffect(() => {
        //     renderPhotos = getAllPhotosToRender();
        //     window.scrollTo(0, 0);
        // }, [page]);

    return (
        <div lassName="photos">
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry>{renderPhotos}</Masonry>
            </ResponsiveMasonry>


            <div className="paginationBarParent">
            <Pagination
                shadow
                total={15}
                initialPage={1}
                onChange={function (e) {
                    setPage(e);
                }}
                style={{ margin: "auto" }}
                css={{ color: "black" }}
            />
            </div>
        </div>
    );
}

export default Photos;

import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { IMAGES } from "../photoData";
import { Pagination } from "@nextui-org/react";
import { render } from "@testing-library/react";

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

    let renderPhotos = getPhotosToRender(page - 1);

    useEffect(() => {
        renderPhotos = getPhotosToRender(page - 1);
    }, [page]);

    return (
        <div lassName="photos">
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry>{renderPhotos}</Masonry>
            </ResponsiveMasonry>
            <Pagination
                noMargin
                shadow
                total={15}
                initialPage={1}
                onChange={function (e) {
                    setPage(e);
                }}
            />
        </div>
    );
}

export default Photos;

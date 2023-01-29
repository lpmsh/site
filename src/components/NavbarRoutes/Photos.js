import React, { useState, useEffect } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {IMAGES} from '../photoData';

function Photos() {
   
    return (
        // <div lassName="photos"></div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry>
                {IMAGES.map((image, i) => (
                    <img
                        key={i}
                        src={(image)}
                        style={{ width: "100%", display: "block" }}
                        alt=""
                    />

                ))}
            </Masonry>
        </ResponsiveMasonry>
        
    );
}

export default Photos;
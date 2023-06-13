"use client"
import React, { useEffect } from "react";
import Prism from "prismjs";

function Code({code}: {code: string}) {
    useEffect(() => {
        Prism.highlightAll();
    });
    return (
        <div>
            <p>
                {code}
            </p>{" "}
        </div>
    );
}
export default Code;
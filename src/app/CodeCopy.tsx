"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import {
    IconCheck,
    IconClipboard,
    IconClipboardCheck,
    IconCopy,
} from "@tabler/icons-react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const getNodeText = (node: any): any => {
    if (["string", "number"].includes(typeof node)) return node;
    if (node instanceof Array) return node.map(getNodeText).join("");
    if (typeof node === "object" && node)
        return getNodeText(node.props.children);
};
function CodeCopy({ children }: { children: any }) {
    const [goodCopy, setGoodCopy] = useState<boolean>(false);

    useEffect(() => {
        if (goodCopy) {
            setTimeout(() => {
                setGoodCopy(false);
            }, 2000);
        }
    }, [goodCopy]);
    return (
        <div>
            <button
                data-tooltip-id="my-tooltip"
                data-tooltip-content={goodCopy ? "Copied" : "Copy"}
                data-tooltip-place="top"
                className="absolute top-0 right-0 m-4 p-2 bg-neutral-700 text-white rounded-md"
                onClick={() => {
                    navigator.clipboard.writeText(getNodeText(children));
                    setGoodCopy(true);
                }}
            >
                {goodCopy ? <IconCheck className="text-green-500" /> : <IconCopy />}
            </button>
            <Tooltip id="my-tooltip" />
        </div>
    );
}

export default CodeCopy;

import { IconGhost } from "@tabler/icons-react";
import * as React from "react";

function ItsEmpty() {
    return (
        <div className="text-sm flex justify-center gap-x-2 items-center pt-20 w-full text-neutral-500">
            It&apos;s empty. Spooky. <IconGhost className="w-12 h-12" />
        </div>
    );
}

export default ItsEmpty;

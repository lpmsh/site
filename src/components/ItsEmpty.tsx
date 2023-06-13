import { IconGhost } from "@tabler/icons-react";
import * as React from "react";

function ItsEmpty() {
    return (
        <div className="text-3xl flex justify-center gap-x-2 items-center pt-20 w-full">
            It's empty. Spooky. <IconGhost className="w-12 h-12" />
        </div>
    );
}

export default ItsEmpty;

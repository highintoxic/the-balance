import { MoonIcon } from "@heroicons/react/16/solid";
import React from "react";

const ThemeIcon=()=>{
    return <button className="rounded-md border-1 borer-neutral-400 p-1 absolute right-4 xl:right-12 shadow-md">
        <MoonIcon className="h-6 w-6 cursor-pointer stroke-1 fill-none stroke-neutral-400"/>
    </button>
}

export default ThemeIcon;
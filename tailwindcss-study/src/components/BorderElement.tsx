import React from "react";

interface Props {
    children: React.ReactNode;
}

const BorderElement = ({ children }:Props)=>{
    return(
        <div className="w-screen bg-slate-500">
            <div className="w-80 h-20 bg-gray-300 border-4">
                {
                    children
                }
            </div>
        </div>
    );
}

export default BorderElement;
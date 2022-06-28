import React from "react";
import { BallTriangle } from "react-loader-spinner";
const Loading = () => {
    return (
        <div className="text-center flex justify-center mt-16">
            <BallTriangle height="100" width="100" color="bisque" ariaLabel="loading" />
        </div>
    );
};

export default Loading;

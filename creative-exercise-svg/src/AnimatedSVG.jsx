import React from "react";

const AnimatedSVG = () => {
    return (
        <svg width="200" height="200" viewBox="0 0 200 200">

            <circle cx="50" cy="100" r="20" fill="blue">
                <animate
                    attributeName="cx"
                    from="50"
                    to="150"
                    dur="2s"
                    repeatCount="indefinite"
                />
            </circle>
        </svg>
    );
};

export default AnimatedSVG;
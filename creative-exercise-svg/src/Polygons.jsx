import React, { useState } from "react";

const Polygons = () => {

    let newPoints = "270,270 300,180 350,200 370,270 320,320";
    let originalPoints = "250,250 280,160 320,190 340,250 290,290";

    const [pentagonPoints, setPentagonPoints] = useState(originalPoints);

    const movePentagon = () => {
        setPentagonPoints((prevPoints) =>
            prevPoints === originalPoints ? newPoints : originalPoints
        );
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>SVG Polygons Example</h1>
            <svg width="500" height="400">

                <polygon points="80,200 120,120 180,140 160,240" fill="purple" />

                <polygon points={pentagonPoints} fill="orange" />

                <defs>
                    <radialGradient id="grad2" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" style={{ stopColor: "blue", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "cyan", stopOpacity: 1 }} />
                    </radialGradient>
                </defs>
                <polygon points="400,280 420,210 470,210 490,280 470,350 420,350" fill="url(#grad2)" />
            </svg>

            <button onClick={movePentagon}>Move and Resize the Pentagon</button>
        </div>
    );
};

export default Polygons;
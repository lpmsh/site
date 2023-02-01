import "../../App.css";
import LPM3D from "../LPMText";
import { Canvas } from "@react-three/fiber";
import {
    Html,
    OrbitControls,
    OrthographicCamera,
    PresentationControls,
    useHelper,
} from "@react-three/drei";
import React, { useState, useRef, useEffect } from "react";
import UnderConstruction from "../UnderConstruction";
import { DirectionalLightHelper } from "three";
import { TypeAnimation } from "react-type-animation";

//create your forceUpdate hook
function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue((value) => value + 1); // update state to force render
    // A function that increment 👆🏻 the previous state like here
    // is better than directly setting `setValue(value + 1)`
}

function Home() {
    const forceUpdate = useForceUpdate();
    var width = window.innerWidth;
    var height = window.innerHeight;
    var SCALE_FACTOR = 871160;
    var scale = (width * height) / SCALE_FACTOR;
    // const [windowWidth, setWidth] = useState(window.innerWidth);
    // const [windowHeight, setHeight] = useState(window.innerHeight);
    // const [lastWindowWidth, setLastWindowWidth] = useState(windowWidth);
    const [zoom, setZoom] = useState(window.innerWidth / 21.33);

    // function updateWidthAndHeight(){
    //   setLastWindowWidth(windowWidth);
    //   setWidth(window.innerWidth);
    //   setHeight(window.innerHeight);
    //   setZoom(windowWidth / 21.33);
    //   // console.log(windowWidth);
    //   // console.log(windowWidth);
    // }

    // window.onresize = function(){
    //   updateWidthAndHeight();
    //   forceUpdate();
    // }

    function redirect() {
        window.location.href = "https://lpm.sh";
    }

    useEffect(() => {
        document.body.style.overflow = "hidden";
        if (
            window.location.href ==
            "https://portfolio-site-lpmonaghan06-yahoocom.vercel.app/"
        ) {
            redirect();
        }
    });

    // useEffect(() => {
    //   if (lastWindowWidth != windowWidth){
    //     setTimeout(5000);
    //     if (lastWindowWidth != windowWidth){
    //       window.location.reload();
    //     }
    //   }
    // }, [window.innerWidth]);

    return (
        // <body className="bodyHome">

        <div className="main" style={{ width: "100vw", height: "100vh" }}>
            <div className="canvasDiv">
                <Canvas
                    className="canvas"
                    orthographic
                    camera={{
                        position: [0, 0, 100],
                        zoom: window.innerWidth / 21.33,
                    }}
                >
                    <PresentationControls
                        global
                        snap={true}
                        zoom={1}
                        rotation={[0, 0.2, 0]}
                        polar={[0, Math.PI / 4]}
                        azimuth={[-Math.PI / 4, Math.PI / 10]}
                    >
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[10, 10, 10]} />
                        <LPM3D />
                    </PresentationControls>
                </Canvas>
                <h4>
                    <TypeAnimation
                        sequence={[
                            "Under Construction...", // Types 'One'
                            4000, // Waits 1s
                        
                            () => {
                                // Place optional callbacks anywhere in the array
                            },
                        ]}
                        // wrapper="h1"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: "2em" }}
                        speed={15}
                        deletionSpeed={25}
                        className="constructionText"
                    />
                </h4>
                {/********  show axis helpers and enable obrit controls ************/}
                {/* <axesHelper scale={2} position={[0, 0, 0]} onUpdate={(self) => self.setColors('#ff2080', '#20ff80', '#2080ff')} /> */}
                {/* <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} /> */}
                {/************************************************************ */}
            </div>
        </div>
    );

    const canvas = useRef(null);
}

export default Home;

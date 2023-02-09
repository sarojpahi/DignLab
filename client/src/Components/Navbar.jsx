import React from "react";
import logo from "../assets/data.image.png";
export const Navbar = () => {
  return (
    <div className="nav">
      <div className="name">
        <svg
          width="129"
          height="22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_0_75274)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 0s1.026.319 2.649.808l.436.132.702.21.497.148c1.608.479 3.533 1.043 5.534 1.608l.634.179c.424.119.85.237 1.277.355l.639.175c3.618.988 7.151 1.868 9.213 2.16.201.029.532.099.884.14l.132.013c1.243.112 2.576-.245-.638-4.102l8.958 3.326c1.881.698 3.48 2.054 4.529 3.841L42.789 21.5s-3.576-2.087-7.544-4.366l-.543-.312-.82-.47c-3.012-1.723-6.041-3.434-7.744-4.332a11.719 11.719 0 00-1.23-.554l-.148-.055a7.683 7.683 0 00-.382-.127l-.154-.044c-1.612-.443-3.103-.114.174 4.63L0 0zm57.298 4.717c.167-.01 4.012-.177 4.012 3.125v.053c-.003.333-.1 2.135-1.778 2.653 0 0 2.022.668 2.015 2.864l-.002.806V15.824l.002.07v.036h-3.734V14.06c-.003-.103-.084-1.653-1.912-1.653h-6.503v3.524H45.5V4.717h11.797zm21.187-.004v3.045h-6.096v8.172h-3.845V7.758H62.44V4.713h16.046zm49.921 0v3.045h-6.096v8.172h-3.844V7.758h-6.106V4.713h16.046zm-34.767 0V7.76H83.106v1.635h6.87v2.85h-6.87v3.684h-3.73V4.717h1.644v-.004h12.62zm4.767 0v3.771l6.091-3.771 6.24.02-8.224 5.076 8.955 6.121h-6.213l-6.849-4.7v4.7h-3.875V4.713h3.875zM50.956 7.76h-1.558v1.922h6.972s1.122.117 1.122-1.022c0-.601-.346-.869-1.009-.884-.271-.007-1.506-.01-2.871-.013H52.923l-.46-.001h-.228l-1.08-.001h-.199z"
              fill="#fff"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_0_75274">
              <path fill="#fff" d="M0 0h129v21.5H0z"></path>
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="name">
        <svg
          width="89"
          height="41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.826.322H0v28.464H13.827V17.629H8.001v7.9H5.826V3.58H8v7.9h5.826V.322H5.826zM22.786 25.53h-2.175V.321h-5.826v28.464H28.612V17.629h-5.826v7.9zM35.395.322h-5.826v28.464h13.827V.322h-8.001zM37.57 25.53h-2.175V3.58h2.175v21.95zM64.902 15.793h2.913v-4.544h-2.913V4.866h6.73V.322H59.077v28.464H72.037v-4.543h-7.135v-8.45zM52.276 9.465L50.101.322h-5.826v28.464H50.1V13.624l2.175 14.995v.167h5.826V.322h-5.826v9.143zM88.134 0h-5.289l-1.848 9.42L79.15 0h-5.29v12.004l2.451 2.45-2.45 2.45v12.17h5.21l-.459 3.215.741-1.277c.862-1.483 1.19-1.478 1.189-1.479.112.06.244.614.206 1.377-.11 2.224-.716 8.926-.722 8.994L79.926 41l4.392-6.4a4.479 4.479 0 00.77-2.864l-.205-2.662h3.253V17.108l-2.653-2.653 2.653-2.652V0h-.002zm-.574 11.562l-2.89 2.89 2.89 2.891v11.155h-2.722l-.182-2.381-.462.996c-.606 1.306-.885 1.358-.882 1.363-.073-.039-.16-.252-.257-.634l-.035-.131c-.724-2.504-1.743-9.96-1.753-10.035l-.277-2.04-1.837 12.863h-4.718V17.142l2.689-2.688-2.689-2.688V.574h4.243l2.32 11.831L83.318.574h4.244v10.988h-.002z"
            fill="#fff"
          ></path>
        </svg>
      </div>

      <div className="menu">
        <div>SNEAKERS 👟</div>
        <div>ALL DNA</div>
        <div className="menuImg">
          <img src={logo} alt="1" />
        </div>
      </div>
    </div>
  );
};

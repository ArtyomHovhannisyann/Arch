import React, { useEffect, useState } from "react";

import "react-awesome-slider/dist/styles.css";
import "../../css/Home/home.css";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import Menu from "./Menu";
import { getHomePagePictures, getHomePageVideos } from "../../lib/requests";
import { generalUrl } from "../../lib/constants";

export default function HomePage() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const [showMenu, setShowMenu] = useState(false);
  const [sliderItems, setSliderItems] = useState([]);
  const [sliderVideos, setSliderVideos] = useState([]);

  useEffect(() => {
    getHomePagePictures((data) => {
      setSliderItems(data);
    });
    getHomePageVideos((data) => {
      setSliderVideos([...sliderItems, ...data]);
    });
  }, []);
  return (
    <div className="home-page">
      {showMenu && <Menu closeMenu={setShowMenu} />}
      <div className="home-header">
        <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}></div>
        <div className="header-logo home-header-logo">
          <h3 className="header-logo-text">Anarch</h3>
        </div>
      </div>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={3000}
        fillParent={true}
        organicArrows={false}
        mobileTouch={true}
      >
        {sliderItems.map((el, i) => {
          return (
            <div
              style={{
                backgroundImage: `url(${generalUrl}/${el.path})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              key={i}
            />
          );
        })}
        {/* TODO */}
        {/* {
          sliderVideos.map((el,i)=>{
              <video src={`${generalUrl}/${el.path}`} key = {i}/>
          })
        } */}
      </AutoplaySlider>
    </div>
  );
}

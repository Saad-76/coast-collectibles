import { React, useEffect } from "react";
import SectionInfo from "../SectionInfo/sectionInfo";
import { ListedItemsArtwork1 } from "../../utils/allImgs";
import InfoComponent from "../InfoComponent";
import "./aboutUs.css";
import { useLocation } from "react-router-dom";
// import BackgroundVideoA from "../../assets/img/test-img/BackgroundVideo.mp4"
import Ren55 from "../../assets/img/test-img/ren_55.png";
import Monkey1 from "../../assets/img/test-img/Monkey1.jpg";
import Image from "../../assets/img/test-img/1.jpg";
import WorkImage from "../../assets/img/test-img/WorkImage.png";

import MindSectionInfo from "../mindSectionInfo/mindSectionInfo";

const AboutUs = () => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 4);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);

  return (
    <>
      <div className="work-main-pad">
        <div className="work-top-pad">
          <InfoComponent
            // titleSm='About Us.'
            titleLg=" 	HOW WE WORK
              "
          />
        </div>

        <div className="about-content-pad">
          <MindSectionInfo
            img={<img src={WorkImage} alt="monkey1" />}
            titleSmTwo=" SOURCE "
            contentTwo="We source the most valuable assets and memorabilia around the globe for our wide range of collectors."
            titleSmThree=" SHARE "
            contentThree="Each asset is then digitised into fractionalised NFTs making it easier to own a piece of that asset.
"
            titleSmFour=" SELL "
            contentFour="All pieces are listed on market places such as Opensea.io and available for purchase.
"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;

import { ListedItemsData } from "../../data/data-components/data-ListedItems.js";
// import ListedItemsData from './data.json'
import QuestionMark from "../../assets/img/test-img/QuestionMark.jpg";
import CardNft from "../../assets/img/test-img/CardNft.png";
import JoeMontana from "../../assets/img/test-img/JoeMontana.JPG";
import OldCoin from "../../assets/img/test-img/OldCoin.JPG";
import Gloves from "../../assets/img/test-img/Gloves.jpg";
import InfoComponent from "../InfoComponent";
import opensea from "../../assets/img/test-img/opensea.svg";

import Shirt from "../../assets/img/test-img/Shirt.jpg";
import "./available.css";

const Available = () => {
  return (
    <>
      <section className="features " id="#team">
        <div className="container">
          <div className="team-section-padding-top">
            <InfoComponent titleLg="AVAILABLE FOR SALE" />
          </div>

          <div className="row align-items-center">
            {/* ------------first card-------- */}
            {/* <div className="col-lg-3 col-sm-6 col-xs-12">
              <a
                href="https://opensea.io/collection/shaquille-o-neal"
                target="_blank"
              >
                <div className="pricing-item ">
                  <div className="Available-for-sale  nft-card-outer">
                    <img
                      className="card-nft-image"
                      src={CardNft}
                      alt="cardnft"
                    />
                  </div>
                </div>
              </a>
            </div> */}

            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="pricing-item ">
                <div className="wraper coming-cards-cotent">
                  <img className="card-nft-image" src={CardNft} alt="cardnft" />
                  <a
                    href="https://opensea.io/collection/shaquille-o-neal"
                    target="_blank"
                  >
                    <div className="openSea-outer">
                      <img src={opensea} className="openSea-icon-style" />
                      <p className="openSea-text">OPENSEA</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* ----------------second card---------- */}
            {/* <div className="col-lg-3 col-sm-6 col-xs-12">
                <a href="https://opensea.io/CoastCollectibles" target="_blank">
                  <div className="pricing-item ">
                    <div className="Available-for-sale  nft-card-outer">
                      <img    className="card-nft-image" src={CardNft} alt="cardnft" />
                  
                    </div>
                  </div>
                </a>
              </div> */}

            {/* ---------third card------------------ */}
            {/* <div className="col-lg-3 col-sm-6 col-xs-12">
                <a href="https://opensea.io/CoastCollectibles" target="_blank">
                  <div className="pricing-item  ">
                    <div className="Available-for-sale  nft-card-outer">
                      <img    className="card-nft-image" src={CardNft} alt="cardnft" />
                    </div>
                  </div>
                </a>
              </div> */}

            {/* ------------four card------------------------- */}
            {/* <div className="col-lg-3 col-sm-6 col-xs-12">
                <a href="https://opensea.io/CoastCollectibles" target="_blank">
                  <div className="pricing-item ">
                    <div className="Available-for-sale nft-card-outer">
                      <img    className="card-nft-image" src={CardNft} alt="cardnft" />
                    </div>
                  </div>
                </a>
              </div> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default Available;

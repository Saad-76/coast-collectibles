import { NavLink } from "react-router-dom";

import InfoComponent from "../InfoComponent";
import ListedItemsItem from "../ListedItemsItem";
import Cube from "react-3d-cube";

import { ListedItemsData } from "../../data/data-components/data-ListedItems.js";
// import ListedItemsData from './data.json'
import QuestionMark from "../../assets/img/test-img/QuestionMark.jpg";
import CardNft from "../../assets/img/test-img/CardNft.png";
import JoeMontana from "../../assets/img/test-img/JoeMontana.JPG";
import OldCoin from "../../assets/img/test-img/OldCoin.JPG";
import Gloves from "../../assets/img/test-img/Gloves.jpg"
import Shirt from "../../assets/img/test-img/Shirt.jpg"
import TendGloves from "../../assets/img/test-img/TendGloves.jpg"
import "./listedItems.css";

function ListedItemsContainer() {
  // console.log(ListedItemsData , ListedItemsData[0].imgSm)

  return (
      <section className="features" id="#team">
        <div className="container">
          <div className="team-section-padding-top">
            <InfoComponent titleLg="COMING SOON" />
          </div>

          <div className="row align-items-center">
            {/* ------------first card-------- */}
            <div className="col-lg-3 col-sm-6 col-xs-12">
            
                <div className="pricing-item ">
                  <div className="wraper coming-cards-cotent">
                    <img  className="shirt-images-comingSoon" src={Shirt} alt="shirt" />
                    <p>
                    Giannis Antetokounmpo signed Milwaukee Bucks Jersey. PSA Certified.
                    </p>
                  </div>
                </div>
            
            </div>
            {/* ----------------second card---------- */}
            <div className="col-lg-3 col-sm-6 col-xs-12">
            
                <div className="pricing-item ">
                  <div className="wraper coming-cards-cotent" >
       
                    <img className="gloves-images-comingSoon" src={TendGloves} alt="gloves"  />
                    <p>
                      Sachin Tendulkar game worn batting gloves. India v
                      Australia, 2nd test Oct 9-13 2010.
                    </p>
                  </div>
                </div>
            
            </div>

            {/* ---------third card------------------ */}
            <div className="col-lg-3 col-sm-6 col-xs-12">
            
                <div className="pricing-item ">
                  <div className="wraper coming-cards-cotent" >
                    <img className="joe-montana-comingSoon" src={JoeMontana} alt=""   />
                    <p>Joe Montana 49ers trading card. PSA 10.</p>
                  </div>
                </div>
            
            </div>

            {/* ------------four card------------------------- */}
            <div className="col-lg-3 col-sm-6 col-xs-12">
            
                <div className="pricing-item ">
                  <div className="wraper coming-cards-cotent">
                    <img className="old-coin-comingSoon" src={OldCoin} alt="oldcoin"  />
                    <p>1889-CC Morgan $1. PCGS graded MS63.</p>
                  </div>
                </div>
            
            </div>
          </div>
        </div>
      </section>
  );
}

export default ListedItemsContainer;

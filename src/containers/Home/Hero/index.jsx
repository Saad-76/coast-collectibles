import HomeImage from "../../../assets/img/test-img/HomeImage.png";
import AppleStore from "../../../assets/img/test-img/AppStore.png";
import PlayStore from "../../../assets/img/test-img/PlayStore.png";


const HeroContainer = () => {
  return (
    <>
      {/* <video
    className="Home-video_section-style"
    src={Video}
    loop={true}
    muted={true}
    autoPlay={true}
  />   */}
      {/* <div className="background-image-home-section">
        <section className="hero-section moving section-padding" id="home"> */}
      {/* <div className="moving-bg "></div> */}
      {/* 
          <div className="hero-section-content">
            <div className="container ">
              <div className="row align-items-center home-data-align"></div>

              <div className="col-lg-6 ">
                <div >
                  < img  src={HomeImage} alt="" height="500px" width="500px"/>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-md-12">
                <div className="welcome-content">
                  <div className="promo-section">
                    <h3 className="special-head gradient-text">
                      SNL is a brand.
                    </h3>
                  </div>
                  <h1>
                    A new kind of brand that{" "}
                    <span className="gradient-text">We build together</span>{" "}
                  </h1>
                  <p className="w-text">
                    A collection of 8888 avatars that give you membership access
                    to members-only exclusive benefits and sets up SNL as
                    next-generation fashion leaders.
                  </p>
                  <div className="dream-btn-group">
                    <button className="btn btn-explore more-btn mr-3">
                      Explore More
                    </button>
                    <button className="btn btn-Collect more-btn">
                      Collect NFT{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div> */}
      <div className="display-section-One">

        <div className="col-sm-12 background-image-home-section " >
          <div className="row">
            <div className="col-sm-6">
              <div className="col-sm-12">
                < img src={HomeImage} alt="" className="img-fluid pb-0" />
              </div>
            </div>
            <div className="col-sm-6" >
              <div className="col-sm-12 promo-section" style={{ paddingTop: "35%" }}>
                <h3 className="special-head gradient-text">
                  Coast Collectibles is the future of fractional ownership.
                </h3>
              </div>
              <div className="col-sm-12">
                <h1>
                  A New kind of brand that
                  <span className="gradient-text">We build together</span>{" "}
                </h1>
              </div>
              <div className="col-sm-12">
                <p style={{ color: "white" }}>
                  A collection of high end sports memorabilia, numismatics and trading cards in fractional NFT form that exclusively gives collectors the opportunity to diversify their portfolio.
                </p>
              </div>
              <div className="col-sm-12">
                <hr style={{ color: "white", border: "1px solid white", backgroundColor: "white" }} />
              </div>


              <div className="row ">
                <div className="col-md-4 col-sm-4">
                  <div className="col-md-12 text-center ">
                    <h5 >Coming Soon</h5>
                  </div>
                  <div className="col-md-12 ">
                    <img src={AppleStore} alt="AppleStore" className="img-fluid pl-0" />
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="col-md-12 text-center">
                    <h5 >Coming Soon</h5>
                  </div>
                  <div className="col-md-12 ">
                    <img src={PlayStore} alt="AppleStore" className="img-fluid pl-0" />
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">

                </div>

              </div>




            </div>
          </div>
        </div>


      </div>







      {/* --------------------second--------------------------------- */}








      <div className="display-section-two">
        <div className="col-sm-12 background-image-home-section">
          <div className="row">
            <div className="col-sm-6" >
              <div className="col-sm-12 text-center promo-section" style={{ paddingTop: "35%" }}>
                <h3 className="special-head gradient-text">
                  Coast Collectibles is the future of fractional ownership.
                </h3>
              </div>
              <div className="col-sm-12 text-center">
                <h1>
                  A New kind of brand that
                  <span className="gradient-text">We build together</span>{" "}
                </h1>
              </div>
              <div className="col-sm-12 text-center">
                <p style={{ color: "white" }}>
                  A collection of high end sports memorabilia, numismatics and trading cards in fractional NFT form that exclusively gives collectors the opportunity to diversify their portfolio.
                </p>
              </div>
              <div className="col-sm-12">
                <hr style={{ color: "white", border: "1px solid white", backgroundColor: "white" }} />
              </div>


              <div className="row ">
                <div className="col-sm-4 ">
                  <div className="col-sm-12 text-center ">
                    <h4 >Coming Soon</h4>
                  </div>
                  <div className="col-sm-12 pl-0 text-center">
                    <img src={AppleStore} alt="AppleStore" className="img-fluid pl-0" style={{ width: "80%" }} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="col-sm-12 text-center">
                    <h4 >Coming Soon</h4>
                  </div>
                  <div className="col-sm-12 pl-0 text-center">
                    <img src={PlayStore} alt="AppleStore" className="img-fluid pl-0" style={{ width: "80%" }} />
                  </div>
                </div>
                <div className="col-sm-4">

                </div>

              </div>




            </div>
            <div className="col-sm-6">
              <div className="col-sm-12">
                < img src={HomeImage} alt="" className="img-fluid " />
              </div>
            </div>

          </div>
        </div>


      </div>
    </>
  );
};

export default HeroContainer;

import React from 'react';
import "./comingSoon.css"
// import Image from "../../assets/img/test-img/1.jpg"
import QuestionMark from "../../assets/img/test-img/QuestionMark.jpg"
import Cube from 'react-3d-cube';

const ComingSoon=()=> {
    

  return (
      <>
<div className="col-md-12 comingSoon-main-style">
    <div className="container">
    <div className="col-md-6 comingSoon-content-style">
<h5>COMING SOON...</h5>
    </div>
    <div >
        <div className="image-section-outer-style">
{/* <img  className="image-section-inner-style" src={QuestionMark} alt=""/> */}
<div>
      <center>
            <div>
                <div
                    style={{
                        width: 300,
                        height: 300
                    }}
                >
                <Cube size={300} index="front">
                    <div >
                        <img style={{width: '310px', height: '300px'}}                       src={QuestionMark} alt=""/>

                    </div>
                    <div >
                    <img src={QuestionMark} alt=""/>
                    </div>
                    <div >
                    <img src={QuestionMark} alt=""/>
                    </div>
                    <div >
                        <img src={QuestionMark} alt=""/>
                    </div>
                    <div >
                        <img src={QuestionMark} alt=""/>
                    </div>
                    <div >
                        <img src={QuestionMark} alt=""/>
                    </div>
               
                </Cube>
                </div>
            </div>
        </center>
      </div>
</div>
    </div>
    </div>

</div>
      </>
  );
}

export default ComingSoon;

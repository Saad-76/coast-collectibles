import { NavLink } from "react-router-dom";

function ListedItemsItem({imgBig , imgSm , title , price ,headingOne, bid}){
  return(
         <div className="col-lg-3 col-sm-6 col-xs-12">
  <a href="https://opensea.io/CoastCollectibles" target="_blank">  
        <div className="pricing-item ">
            <div className="wraper">
                <p>{imgBig}</p>
               {/* <img className="listed-image-style" src={imgBig} alt="" /> */}
          

                     <h4>{headingOne}</h4>     
                       <div className="owner-info">
                    <img className="style-image-sm" src={imgSm} width="40" alt="" />
                   <h3>{title}</h3>
                </div>
                <span><span className="g-text">Price</span> {price} ETH <span className="g-text ml-15">1 of 10</span></span> 
                <div className="pricing">Highest Bid : <span className="ml-15">{bid} ETH</span> </div> 
                <div className="admire">
                    <div className="adm"><i className="fa fa-clock-o"></i> 6 Hours Ago</div>
                    <div className="adm"><i className="fa fa-heart-o"></i>134 Like</div>

                </div>
           

            </div>
        </div>
        </a>

    </div>
  )
}

export default ListedItemsItem
import { NavLink } from "react-router-dom";

import InfoComponent from '../InfoComponent'
import ListedItemsItem from '../ListedItemsItem'
import Cube from 'react-3d-cube';

import {ListedItemsData} from '../../data/data-components/data-ListedItems.js'
// import ListedItemsData from './data.json'
import QuestionMark from "../../assets/img/test-img/QuestionMark.jpg"


import './listedItems.css'

function ListedItemsContainer(){

  // console.log(ListedItemsData , ListedItemsData[0].imgSm)

  return(
    <div className="listed-section-padding">
    <section className="features section-padding-0-100 " id="#team">

        <div className="container">
          <div className="team-section-padding-top">
            <InfoComponent
              titleSm='OUR COLLECTION'
              titleLg='COLLECTION'
              text='They’ve 
              worked with Marvel, Titan and Warner Bros among others.'
            />
            </div>

         
 <div className="row align-items-center">

            	{/* {ListedItemsData && ListedItemsData.map((item , i) => (
                <ListedItemsItem
	                	imgBig={item.imgBig}
	                	imgSm={item.imgSm}
	                	title={item.title}
	                	price={item.price}
	                	bid={item.bid}
	                />
            	))} */}

                {/* <div className="col-12 col-lg-12 text-center">
                    <NavLink className="btn more-btn" to="/discover">Load More</NavLink>
                </div> */}
            {/* </div> */}
          

<ListedItemsItem
	                	imgBig={  <div>
                      <center>
                            <div>
                                <div
                                 style={{
                                    width: 200,
                                    height: 200,
                                    margin:20,
                                 
                                }}
                            >
                            <Cube size={200} index="front">
                                    <div >
                                        <img                src={QuestionMark} alt=""/>
                
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
                      </div>}
	                	imgSm={QuestionMark}
                        title="@Coast Collectibles"
              
	                	// title={item.title}
	                	// price={item.price}
	                	// bid={item.bid}
	                />

<ListedItemsItem
	                	imgBig={  <div>
                      <center>
                            <div>
                                <div
                                    style={{
                                        width: 200,
                                        height: 200,
                                        margin:20,
                                     
                                    }}
                                >
                                <Cube size={200} index="front">
                                    <div >
                                        <img                  src={QuestionMark} alt=""/>
                
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
                      </div>}
	                	imgSm={QuestionMark}
                        title="@Coast Collectibles"
              

	                	// title={item.title}
	                	// price={item.price}
	                	// bid={item.bid}
	                />
                           <ListedItemsItem
	                	imgBig={  <div>
                      <center>
                            <div>
                                <div
                                 style={{
                                    width: 200,
                                    height: 200,
                                    margin:20,
                                 
                                }}
                            >
                            <Cube size={200} index="front">
                                    <div >
                                        <img                   src={QuestionMark} alt=""/>
                
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
                      </div>}
	                	imgSm={QuestionMark}
                        title="@Coast Collectibles"
              

	                	// title={item.title}
	                	// price={item.price}
	                	// bid={item.bid}
	                />

            <ListedItemsItem
	                	imgBig={  <div>
                      <center>
                            <div>
                                <div
                                    style={{
                                        width: 200,
                                        height: 200,
                                        margin:20,
                                     
                                    }}
                                >
                                <Cube size={200} index="front">
                                    <div >
                                        <img                      src={QuestionMark} alt=""/>
                
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
                      </div>}
	                	imgSm={QuestionMark}
                        title="@Coast Collectibles"
              

	                	// title="title"
	                	// price={item.price}
	                	// bid={item.bid}
	                />

            
        </div>
        </div>

    </section>
    
    </div>




  )
}

export default ListedItemsContainer
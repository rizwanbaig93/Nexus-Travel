import React from "react";
import "./UmrahPage.css"
import TopBanner from "../Banner/Banner";
import Footer from "../Footer/Footer"
import Logo from "../Assets/Logo/nexuslogo.png"
import TabsDetails from "../TabsDetails/TabsDetails";
import UmrahImage from "../UmrahPage/UmrahImages/umrahimage.jpg"
import BismillahImage from "../UmrahPage/UmrahImages/BismillahImage.png"
import HajjImage from "../UmrahPage/UmrahImages/Hajjimages.jpg"
import ZiarahImage from "../UmrahPage/UmrahImages/Ziarahimage.jpg"
import WelcomeImage from "../UmrahPage/UmrahImages/welcomeimage.PNG"
import WelcomeIcon1 from "../UmrahPage/UmrahImages/welcomeicon1.png"
import WelcomeIcon2 from "../UmrahPage/UmrahImages/welcomeicon2.png"
import WelcomeIcon3 from "../UmrahPage/UmrahImages/welcomeicon3.png"
import WelcomeIcon4 from "../UmrahPage/UmrahImages/welcomeicon4.png"
import OfferIcon1 from "../UmrahPage/UmrahImages/OfferIcon1.png"
import OfferIcon2 from "../UmrahPage/UmrahImages/BudgetFriendly.png"
import OfferIcon3 from "../UmrahPage/UmrahImages/ACU.png"
import OfferIcon4 from "../UmrahPage/UmrahImages/Secure.png"
import OfferIcon5 from "../UmrahPage/UmrahImages/Food Time.png"
import OfferIcon6 from "../UmrahPage/UmrahImages/Cake.png"
import OfferIcon7 from "../UmrahPage/UmrahImages/Food.png"
import OfferIcon8 from "../UmrahPage/UmrahImages/High Material.png"
import LeftImage from "../UmrahPage/UmrahImages/SliderLeftImage.png"
import RightImage from "../UmrahPage/UmrahImages/SliderRightImage.png"
import CenterImage from "../UmrahPage/UmrahImages/SliderCenterImage.png"
import StarIcon from '@mui/icons-material/Star';
import HajjClientImage1 from "./UmrahImages/hajjclientimage1.jpg"
import HajjClientImage2 from "./UmrahImages/hajjclientimage2.jpg"
import HajjClientImage3 from "./UmrahImages/hajjclientimage3.jpg"

const UmrahPage = () => {

        return (
        <div>
           {/* <TopBanner></TopBanner> */}

           <div className="Header umrah-bg">
           <nav class="navbar navbar-expand-lg d-block pt-0">
                <div class="container-fluid ">
              <div className="Logo">
                        <img id="Home" src={Logo} alt="" />
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="Tabs-Button">
                <div className="buttons ps-3">
                <a href="/flightpage" ><button><p>Flights</p></button></a> 
                   <a href="hotels"><button ><p>Hotels</p></button></a>  
                   <a href="cars"><button><p>Cars</p></button></a> 
                   <a href="trains"><button><p>Trains</p></button></a> 
                   <a href="tours"><button><p>Tours</p></button></a> 
                   <a href="umrah"><button><p>Hajj & Umrah</p></button></a>
                   </div>
                   <div className="Form-Header-Button">
                   <form class="header-button" role="search">
                            <button class="btn btn-outline-success" type="submit">Search Bookings</button>
                            <button class="btn btn-outline-success" type="submit">Sign In / Register</button>
                        </form>
                        </div>
            </div> 
            </div>  
                </div>
            </nav> 
            <TabsDetails></TabsDetails>

        </div>

        <div className="Offer-div">
            <div className="container">
                <div className="Custom-container mb-5">
                <div className="row">
                    <div className="col-lg-4 col-md-6" >
                        <div className="Umrah-Offer-section">
                            <div>
                            <img src={UmrahImage} alt="" />
                            <div className="Offer-Main-Div"  >
                            <div className="islamic-icon">
                            <i class="fa-solid fa-mosque mini-icons"></i>
                                </div>
                                <div className="box1"></div>
                               
                                <div className="box2"></div>
                                
                            </div>
                            </div >
                            <div className="Umrah-Offer-Content p-3">
                            <h2 className="text-center pt-3">Hajj Offers</h2>
                             <p>Nexus team understand all muslims the importance of the sacred journey and we put all our efforts</p>
                            </div>
                        
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" >
                        <div className="Umrah-Offer-section">
                            <div>
                            <img src={HajjImage} alt="" />
                            <div className="Offer-Main-Div" >
                            <div className="islamic-icon">
                            <i class="fa-solid fa-kaaba mini-icons" ></i>
                                </div>
                                <div className="box1"></div>
                                <div className="box2"></div>
                            </div>
                          
                            </div >
                            <div className="Umrah-Offer-Content p-3">
                            <h2 className="text-center pt-3">Umrah Offers</h2>
                             <p>Nexus travels providing golden 5 star umrah package, we offer you silver 4 star umrah package</p>
                            </div>
                        
                        </div>
                    </div>
                    
                     <div className="col-lg-4 col-md-6" >
                        <div className="Umrah-Offer-section">
                            <div>
                            <img src={ZiarahImage} alt="" />
                            <div className="Offer-Main-Div" >
                            <div className="islamic-icon">
                            <i class="fa-sharp fa-solid fa-hands-praying mini-icons"></i>
                                </div>
                                <div className="box1"></div>
                                <div className="box2"></div>
                            </div>
                          
                            </div >
                            <div className="Umrah-Offer-Content p-3">
                            <h2 className="text-center pt-3">Ziarah Offers</h2>
                             <p>We will give you full-fiedged support of visa processing , air ticket & booking in cheap hotels</p>
                            </div>
                        
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>

        <div className="Umrah-Section pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6" >
                            <div className="Umrah-Welcome-Section pt-5 ps-5">
                                <img src={BismillahImage} alt=""  className="mt-5"/>
                            <h1 className="pt-2">We are award winning  <span className="Welcome-Span-Text white-color">Hajj <span className="yellow-color">&</span> Umrah Agency</span></h1>
                            <p className="pt-2">We have been worked within the hajj and umrah travel industry for over 7 years and we're confident enough to say that we known our stuff, capability and hospitality.</p>
                            </div>

                            <ul className="Umrah-ul ms-2">
                               <div className="d-flex align-items-center pt-3">
                                <div>
                                <img src={WelcomeIcon1} alt=""/>
                              </div> 
                              <div className="p-tag"><p>Luxurious hotels</p></div>

                              <div className="ms-4 EasyProcess-ms">
                                <img src={WelcomeIcon2} alt="" />
                              </div> 
                              <div className="p-tag"><p>Easy visa process</p></div>
                            </div> 
                             
                            <div className="d-flex align-items-center Flat-Icons-PT pt-4">
                                <div>
                                <img src={WelcomeIcon3} alt="" />
                              </div> 
                              <div className="p-tag"><p>Close to haram</p></div>

                              <div className=" margin-left-icon">
                                <img src={WelcomeIcon4} alt="" />
                              </div> 
                              <div className="p-tag"><p>24/7 guide with tourist</p></div>
                            </div> 
                            </ul>
                        </div>

                        <div className="col-lg-6 Umrah-Card-Image col-md-6">
                            {/* <div className="Umrah-Card-Image"> */}
                                <div className="Welcome-Tour-img pb-4 pt-4">
                                <img src={WelcomeImage} alt="" />
                                </div>
                                {/* </div> */}
                          
                        </div>
                    </div>
                </div>
        </div>

        <div className="Umrah-Offer-Section  pb-5">
            <div className="container">
               
                    <div className="Hotel-Heading text-center pb-3">
                        <h1 class="pt-5">Our Top <span className="Welcome-Span-Text">Facilities</span></h1>
                    </div>

                    <div className="Facilitties-Margin-Left">
                    <div className="row pt-3">
                    <div className="col-lg-3 col-sm-6 col-md-3 col-width" >
                        <div className="Umrah-Content text-center pb-4 pt-4">
                        <div className="Umrah-Offer-Content p-4">
                        <img src={ OfferIcon1} alt="" />
                        <h4 className="pt-3">Luxury Hotels</h4>
                        <h4 className="Umrah-Content-Lineheight">Near Haram</h4>
                        </div>
                        </div>
                    </div> 
                    
                    <div className="col-lg-3 col-sm-6 col-md-3 col-width" >
                        <div className="Umrah-Content text-center pb-4 pt-4">
                        <div className="Umrah-Offer-Content p-4">
                        <img src={ OfferIcon2} alt="" />
                        <h4 className="pt-3">Budget Friendly</h4>
                        <h4 className="Umrah-Content-Lineheight">Package</h4>
                        </div>
                        </div>
                    </div> 

                    <div className="col-lg-3 col-sm-6 col-md-3 col-width" >
                        <div className="Umrah-Content text-center pb-4 pt-4">
                        <div className="Umrah-Offer-Content p-4">
                        <img src={ OfferIcon3} alt="" />
                        <h4 className="pt-3">Air Condition</h4>
                        <h4 className="Umrah-Content-Lineheight">& Comfortable</h4>
                        </div>
                        </div>
                    </div> 

                    <div className="col-lg-3 col-sm-6 col-md-3 col-width" >
                        <div className="Umrah-Content text-center pb-4 pt-4">
                        <div className="Umrah-Offer-Content p-4">
                        <img src={ OfferIcon4} alt="" />
                        <h4 className="pt-3">Keep Your</h4>
                        <h4 className="Umrah-Content-Lineheight">Things Secured</h4>
                        </div>
                        </div>
                    </div> 

                    <div className="col-lg-3 col-sm-6 col-md-3 Padding-Top pt-4 col-width" >
                        <div className="Umrah-Content text-center pb-4 pt-4">
                        <div className="Umrah-Offer-Content p-4">
                        <img src={ OfferIcon5} alt="" />
                        <h4 className="pt-3">Foods Three Times</h4>
                        <h4 className="Umrah-Content-Lineheight">In a Day</h4>
                        </div>
                        </div>
                    </div> 

                    <div className="col-lg-3 col-sm-6 col-md-3 Padding-Top pt-4 col-width" >
                        <div className="Umrah-Content text-center pb-4 pt-4">
                        <div className="Umrah-Offer-Content p-4">
                        <img src={ OfferIcon6} alt="" />
                        <h4 className="pt-3">Celebrate Your</h4>
                        <h4 className="Umrah-Content-Lineheight">Happines</h4>
                        </div>
                        </div>
                    </div> 

                    <div className="col-lg-3 col-sm-6 col-md-3 Padding-Top pt-4 col-width" >
                        <div className="Umrah-Content text-center pb-4 pt-4">
                        <div className="Umrah-Offer-Content p-4">
                        <img src={ OfferIcon7} alt="" />
                        <h4 className="pt-3">Healthy Foods</h4>
                        <h4 className="Umrah-Content-Lineheight">& Recipe</h4>
                        </div>
                        </div>
                    </div> 

                    <div className="col-lg-3 col-sm-6 col-md-3 Padding-Top pt-4 col-width" >
                        <div className="Umrah-Content text-center pb-4 pt-4">
                        <div className="Umrah-Offer-Content p-4">
                        <img src={ OfferIcon8} alt="" />
                        <h4 className="pt-3">High Quality</h4>
                        <h4 className="Umrah-Content-Lineheight">Material</h4>
                        </div>
                        </div>
                    </div> 
                    </div>
                </div>

                
            </div>
        </div>

        <div className="Umrah-Slider pb-5 pt-5">
                        <div className="container umrah-padding-top pt-5">
                            <div className="Umrah-Slider-Heading text-center pt-5">
                                <h1 className="pt-5">Testimonials</h1>
                                <p>Each year hundered of muslims embark on the holy journey</p>
                            </div>
                            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel" >

  <div class="carousel-indicators Umrah-Indictators">
    <button  type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button  type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button  type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
        <div className="row Row-Padding-Top pt-5">
            <div className="Slider-Images d-flex"> 
            <div className="col-lg-1 col-sm-1 col-md-1 d-flex Left-Arrow justify-content-end slider-left-margin">
            <img src={LeftImage} alt="" />
            </div>
            <div className="col-lg-2 col-sm-1 col-md-1 z-index bg-white d-lg-block d-sm-none d-md-block">
                <div className="d-flex">
                <img src={CenterImage} alt="" />
                <div className="Slider-Client-Img d-lg-none d-sm-block d-md-block ps-4">
                        <img src={HajjClientImage2} alt="" />
                    </div>
                </div>
               
            </div>

            <div className="col-lg-8 Custom-width-UmrahImg col-sm-8 col-md-12 bg-white ">
                <div className="d-flex">
                    <div className="Slider-Client-Img display-none-tablet d-lg-block d-sm-none d-md-block  ps-4">
                        <img src={HajjClientImage2} alt="" />
                    </div>
                    <div className="umrah-slider-padding">
                 <div className="Umrah-slider-icons-padding ps-5 pt-4">
                <div className="Umrah-Slider-StarIcon">
            <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <span  className="Umrah-Rating-Icons"> (4.5)</span>
            </div>
            <h3 className="Umrah-slider-heading pt-2">No complain what so ever</h3>
            <p className="Umrah-slider-ptag">Many of us who travel frequently like to deal with timely and responsive travel agents. I have used nexus travel services for the past year</p>
            <h2 className="Client-Name">Raja Hassan</h2>
            </div>
            </div>
                </div>
            </div>

            <div className="col-lg-1 col-md-1 col-sm-1 Right-Arrow slider-left-margin">
            <img src={RightImage} alt="" />
            </div>
            </div>
        </div>
    </div>

    <div class="carousel-item" data-bs-interval="2000">
        <div className="row Row-Padding-Top pt-5">
            <div className="Slider-Images d-flex"> 
            <div className="col-lg-1 col-sm-1 col-md-1 d-flex Left-Arrow justify-content-end slider-left-margin">
            <img src={LeftImage} alt="" />
            </div>
            <div className="col-lg-2 col-sm-1 col-md-1 z-index bg-white d-lg-block d-sm-none d-md-block">
                <div className="d-flex">
                <img src={CenterImage} alt="" />
                <div className="Slider-Client-Img d-lg-none d-sm-block d-md-block ps-4">
                        <img src={HajjClientImage3} alt="" />
                    </div>
                </div>
               
            </div>

            <div className="col-lg-8 Custom-width-UmrahImg col-sm-12 col-md-12 bg-white ">
                <div className="d-flex">
                    <div className="Slider-Client-Img display-none-tablet d-lg-block d-sm-none d-md-block  ps-4">
                        <img src={HajjClientImage3} alt="" />
                    </div>

                    <div className="umrah-slider-padding">
                 <div className="Umrah-slider-icons-padding ps-5 pt-4">
                <div className="Umrah-Slider-StarIcon">
            <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <span  className="Umrah-Rating-Icons"> (4.5)</span>
            </div>
            <h3 className="Umrah-slider-heading pt-2">No complain what so ever</h3>
            <p className="Umrah-slider-ptag">Many of us who travel frequently like to deal with timely and responsive travel agents. I have used nexus travel services for the past year</p>
            <h2 className="Client-Name">Ali Hashmi</h2>
            </div>
            </div>
                </div>
            </div>

            <div className="col-lg-1 col-md-1 Right-Arrow slider-left-margin">
            <img src={RightImage} alt="" />
            </div>
            </div>
        </div>
    </div>

    <div class="carousel-item" data-bs-interval="3000">
        <div className="row Row-Padding-Top pt-5">
            <div className="Slider-Images d-flex"> 
            <div className="col-lg-1 col-sm-1 col-md-1 d-flex Left-Arrow justify-content-end slider-left-margin">
            <img src={LeftImage} alt="" />
            </div>
            <div className="col-lg-2 col-sm-1 col-md-1 z-index bg-white d-lg-block d-sm-none d-md-block">
                <div className="d-flex">
                <img src={CenterImage} alt="" />
                <div className="Slider-Client-Img d-lg-none d-sm-block d-md-block ps-4">
                        <img src={HajjClientImage1} alt="" />
                    </div>
                </div>
               
            </div>

            <div className="col-lg-8 Custom-width-UmrahImg col-sm-12 col-md-12 bg-white ">
                <div className="d-flex">
                    <div className="Slider-Client-Img display-none-tablet d-lg-block d-sm-none d-md-block  ps-4">
                        <img src={HajjClientImage1} alt="" />
                    </div>

                    <div className="umrah-slider-padding">
                 <div className="Umrah-slider-icons-padding ps-5 pt-4">
                <div className="Umrah-Slider-StarIcon">
            <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <span  className="Umrah-Rating-Icons"> (4.5)</span>
            </div>
            <h3 className="Umrah-slider-heading pt-2">No complain what so ever</h3>
            <p className="Umrah-slider-ptag">Many of us who travel frequently like to deal with timely and responsive travel agents. I have used nexus travel services for the past year</p>
            <h2 className="Client-Name">Fazil Khan</h2>
            </div>
            </div>
                </div>
            </div>

            <div className="col-lg-1 col-sm-1 col-md-1 Right-Arrow slider-left-margin">
            <img src={RightImage} alt="" />
            </div>
            </div>
        </div>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
    <span class="visually-hidden">Next</span>
  </button>
</div>
                        </div>
                    </div>

           
          <Footer></Footer>
        </div>
    );
    
}

export default UmrahPage;
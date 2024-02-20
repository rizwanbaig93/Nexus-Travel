import React from "react";
import "./TourPage.css"
import Footer from "../Footer/Footer"
import Logo from "../Assets/Logo/nexuslogo.png"
import OwlCarousel from 'react-owl-carousel';
import TabsDetails from "../TabsDetails/TabsDetails";
import TourImage1 from "./TourImages/tourImage1.jpg"
import CardImage1 from "./TourImages/CardImage1.jpg"
import CardImage2 from "./TourImages/CardImage2.jpg"
import CardImage3 from "./TourImages/CardImage3.jpg"
import CardImage4 from "./TourImages/CardImage4.jpg"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import GalleryImage1 from "./TourImages/galleryimg1.png"
import GalleryImage2 from "./TourImages/galleryimg2.png"
import GalleryImage3 from "./TourImages/galleryimg3.png"
import GalleryImage4 from "./TourImages/galleryimg4.png"
import GalleryImage5 from "./TourImages/galleryimg5.png"
import GalleryImage6 from "./TourImages/galleryimg6.png"
import GalleryImage7 from "./TourImages/galleryimg7.png"
import GalleryImage8 from "./TourImages/galleryimg8.png"
import GalleryImage9 from "./TourImages/galleryimg9.png"
import GalleryImage10 from "./TourImages/galleryimg10.png"
import GalleryImage11 from "./TourImages/galleryimg11.png"
import GalleryImage12 from "./TourImages/galleryimg12.png"
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';

const options = {
  margin: 10,
  responsiveClass: true,
  nav: true,
  dot:true,
  autoplay: false,
  navText: ["<", ">"],
  smartSpeed: 1000,
  responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 2,
      },
      700: {
          items: 3,
      },
      1000: {
          items: 3,
      }
  },
};

const TourPage = () => {

        return (
        <div>

     <div className="Header tour-bg">
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

        <div className="Welcome-Section pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12" data-aos="fade-down">
                                <div className="Welcome-Tour-img pb-4 pt-5">
                                <img src={TourImage1} alt="" />
                                </div>
                          
                        </div>

                        <div className="col-lg-6 col-md-12" data-aos="fade-up">
                            <div className="Tour-Welcome-Section pt-4 ps-5">
                            <h1 className="pt-5 mt-5">We Are Best Tour <span className="yellow-color green-color Tour-Welcome-Spantext">&</span>  <span className="Welcome-Span-Text">Travel Agency In The World</span></h1>
                            <p className="pt-2">Pitchfork selfies master cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt.</p>
                            <p className="">Progressively impact multidisciplinary leadership skills via e-business leadership skills. Holisticly repurpose multifunctional data before turnkey information. Globally restore client-focused potentialities before scalable core competencies.</p>
                            </div>

                            <ul className="Holiday-ul ms-4">
                                <li >Price of additional materials or parts (if needed)</li>
                                <li>Transportation cost for carrying new materials/parts</li>
                            </ul>
                           
                        </div>
                    </div>
                </div>
            </div>

           
            <div className='Holiday-Section pb-5'>
           <div className='container tour-owl'>
            <h1 className='text-center pt-5'>Best Holiday <span className="Holiday-Span-Text"> Packages</span></h1>
       
        <OwlCarousel className='Tourpage-Owl owl-theme custom-owl pt-3' loop margin={10} nav {...options}>

               <div class="Holiday-Card-Section" data-aos="flip-left">
                 <div class="thumbnail">
                   <div className="Holiday-Image">
                   <img src={CardImage1}/>
                   </div>
                 </div>
                 <div class="post-content Holiday-Content">
                   <h2 class="sub-title">Weekdays in Thailand</h2>
                   <p class="Holiday-card-span text-muted">Peelamedu, Cbe, India</p>

                   <div className="Holidaycard-middle-content d-flex">
                <div class="Holiday-card-span text-muted d-flex"><CalendarMonthIcon className="Holdiday-card-Icon  icon-margin-left" /> No Of Days 2</div> 
                <div className="border-right ps-2"></div>
                <div class="Holiday-card-span text-muted ps-2"><PersonIcon className="Holdiday-card-Icon icon-margin-left"/>People: 1</div>
                 </div> <hr />
                  
               <div className="Rental-Card-Button d-flex justify-content-between mt-4">
                <div>
                <h4>$490</h4> 
                </div>
                <div className="Holiday-Card-Button">
                <button type="button" class="btn"  data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
                </div>
              
              </div>
                 </div>
               </div>

               <div class="Holiday-Card-Section" data-aos="zoom-in">
                 <div class="thumbnail">
                   <div className="Holiday-Image">
                   <img src={CardImage4}/>
                   </div>
                 </div>
                 <div class="post-content Holiday-Content">
                   <h2 class="sub-title">The Grand Canyons</h2>
                   <p class="Holiday-card-span text-muted">DPM, CBE, TAMILNADU</p>

                   <div className="Holidaycard-middle-content d-flex">
                <div class="Holiday-card-span text-muted d-flex"><CalendarMonthIcon className="Holdiday-card-Icon  icon-margin-left" /> No Of Days 2</div> 
                <div className="border-right ps-2"></div>
                <div class="Holiday-card-span text-muted ps-2"><PersonIcon className="Holdiday-card-Icon icon-margin-left"/>People: 1</div>
                 </div> <hr />
                  
               <div className="Rental-Card-Button d-flex justify-content-between mt-4">
                <div>
                <h4>$490</h4> 
                </div>
                <div className="Holiday-Card-Button">
                <button type="button" class="btn"  data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
                </div>
              
              </div>
                 </div>
               </div>

               <div class="Holiday-Card-Section" data-aos="flip-right">
                 <div class="thumbnail">
                   <div className="Holiday-Image">
                   <img src={CardImage2}/>
                   </div>
                 </div>
                 <div class="post-content Holiday-Content">
                   <h2 class="sub-title">Peek Mountain View</h2>
                   <p class="Holiday-card-span text-muted">LAS VEGAS, NEVADA</p>

                   <div className="Holidaycard-middle-content d-flex">
                <div class="Holiday-card-span text-muted d-flex"><CalendarMonthIcon className="Holdiday-card-Icon  icon-margin-left" /> No Of Days 2</div> 
                <div className="border-right ps-2"></div>
                <div class="Holiday-card-span text-muted ps-2"><PersonIcon className="Holdiday-card-Icon icon-margin-left"/>People: 1</div>
                 </div> <hr />
                  
               <div className="Rental-Card-Button d-flex justify-content-between mt-4">
                <div>
                <h4>$350</h4> 
                </div>
                <div className="Holiday-Card-Button">
                <button type="button" class="btn"  data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
                </div>
              
              </div>
                 </div>
               </div>

               <div class="Holiday-Card-Section">
                 <div class="thumbnail">
                   <div className="Holiday-Image">
                   <img src={CardImage3}/>
                   </div>
                 </div>
                 <div class="post-content Holiday-Content">
                   <h2 class="sub-title">Sal Panio Estate</h2>
                   <p class="Holiday-card-span text-muted">LAS VEGAS, NEVADA</p>

                   <div className="Holidaycard-middle-content d-flex">
                <div class="Holiday-card-span text-muted d-flex"><CalendarMonthIcon className="Holdiday-card-Icon  icon-margin-left" /> No Of Days 2</div> 
                <div className="border-right ps-2"></div>
                <div class="Holiday-card-span text-muted ps-2"><PersonIcon className="Holdiday-card-Icon icon-margin-left"/>People: 1</div>
                 </div> <hr />
                  
               <div className="Rental-Card-Button d-flex justify-content-between mt-4">
                <div>
                <h4>$490</h4> 
                </div>
                <div className="Holiday-Card-Button">
                <button type="button" class="btn"  data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
                </div>
              
              </div>
                 </div>
               </div>
            </OwlCarousel>
            </div>
            </div>


            <div className="Images-Gallery pb-5 pt-5">
                <div className="container">
                    <h1 className="text-center mt-4">Our Images <span className="gallery-Span-Text">Gallery</span></h1>
                    <div className="row justify-content-center pt-4">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="image-gallery-single position-relative">
                                <div class="image-view"> </div>
                                <CenterFocusStrongIcon  className="hover-icon" data-bs-toggle="modal" data-bs-target="#Gallery" />
                                <img src={GalleryImage1} alt="" data-aos="flip-left"/>
                            </div>
                        </div>

                        <div class="modal fade gallery-modal" id="Gallery" tabindex="-1" aria-labelledby="Gallery" aria-hidden="true">
                   <div class="modal-dialog gallery-modal">
                      <img src={GalleryImage1} alt="" />
                   </div>
                     </div> 
                     <a data-bs-toggle="modal" data-bs-target="#exampleModal" className="d-sm-block d-md-none m-lg-none Gallery-Anchor-tag">Click here to see more images</a>    

               
             
{/* <!-- Modal --> */}
<div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content Gallery-Modal">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <OwlCarousel className='Tourpage-Owl owl-theme custom-owl pt-3' loop margin={10} nav {...options}>
<div class="">
<img class="Gallery-Image-Height" src={GalleryImage2} alt="" />
</div>
<div class="">
<img class="Gallery-Image-Height" src={GalleryImage3} alt="" />
</div>
<div class="">
<img class="Gallery-Image-Height" src={GalleryImage4} alt="" />
</div>
<div class="">
<img class="Gallery-Image-Height" src={GalleryImage5} alt="" />
</div>
<div class="">
<img class="Gallery-Image-Height" src={GalleryImage6} alt="" />
</div>
<div class="">
<img class="Gallery-Image-Height" src={GalleryImage7} alt="" />
</div>
<div class="">
<img class="Gallery-Image-Height" src={GalleryImage8} alt="" />
</div>
<div class="">
<img class="Gallery-Image-Height" src={GalleryImage9} alt="" />
</div>
<div class="">
<img class="Gallery-Image-Height" src={GalleryImage10} alt="" />
</div>

</OwlCarousel>
      </div>
    </div>
  </div>
</div>




                        <div className="col-lg-4 col-md-4 col-sm-4 mobile-image" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <div className="image-gallery-single position-relative">
                                <div class="image-view"></div>
                                <CenterFocusStrongIcon className="hover-icon" data-bs-toggle="modal" data-bs-target="#image2"/>
                                <img src={GalleryImage2} alt="" data-aos="flip-down"/>
                            </div>
                        </div>
                        
                        <div class="modal fade" id="image2" tabindex="-1" aria-labelledby="Gallery" aria-hidden="true">
                   <div class="modal-dialog">
                    <div class="modal-body">
                      <img src={GalleryImage2} alt="" />
                    </div>
                   </div>
                     </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 mobile-image">
                            <div className="image-gallery-single position-relative">
                                <div class="image-view"> </div>
                                <CenterFocusStrongIcon className="hover-icon" data-bs-toggle="modal" data-bs-target="#image3"/>
                                <img src={GalleryImage3} alt="" data-aos="flip-right"/>
                            </div>
                        </div>
                        <div class="modal fade" id="image3" tabindex="-1" aria-labelledby="Gallery" aria-hidden="true">
                   <div class="modal-dialog">
                    <div class="modal-body">
                      <img src={GalleryImage3} alt="" />
                    </div>
                   </div>
                     </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 mobile-image">
                            <div className="image-gallery-single position-relative">
                                <div class="image-view"> </div>
                                <CenterFocusStrongIcon className="hover-icon" data-bs-toggle="modal" data-bs-target="#image4"/>
                                <img src={GalleryImage4} alt="" data-aos="zoom-in-left"/>
                            </div>
                            <div class="modal fade" id="image4" tabindex="-1" aria-labelledby="Gallery" aria-hidden="true">
                   <div class="modal-dialog">
                    <div class="modal-body">
                      <img src={GalleryImage4} alt="" />
                    </div>
                   </div>
                     </div>

                            <div className="image-gallery-single position-relative">
                                <div class="image-view"> </div>
                                <CenterFocusStrongIcon className="hover-icon" data-bs-toggle="modal" data-bs-target="#image7"/>
                                <img src={GalleryImage7} alt="" data-aos="zoom-out-up"/>
                            </div>
                            <div class="modal fade" id="image7" tabindex="-1" aria-labelledby="Gallery" aria-hidden="true">
                   <div class="modal-dialog">
                    <div class="modal-body">
                      <img src={GalleryImage7} alt="" />
                    </div>
                   </div>
                     </div>

                            <div className="image-gallery-single position-relative">
                                <div class="image-view"> </div>
                                <CenterFocusStrongIcon className="hover-icon" data-bs-toggle="modal" data-bs-target="#image10"/>
                                <img src={GalleryImage10} alt="" data-aos="zoom-in"/>
                            </div>
                            <div class="modal fade" id="image10" tabindex="-1" aria-labelledby="Gallery" aria-hidden="true">
                   <div class="modal-dialog">
                    <div class="modal-body">
                      <img src={GalleryImage10} alt="" />
                    </div>
                   </div>
                     </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 mobile-image">
                            <div className="image-gallery-single position-relative">
                                <div class="image-view"> </div>
                                <CenterFocusStrongIcon className="hover-icon" data-bs-toggle="modal" data-bs-target="#image5"/>
                                <img src={GalleryImage5} alt="" data-aos="zoom-in-down"/>
                            </div>
                            <div class="modal fade" id="image5" tabindex="-1" aria-labelledby="Gallery" aria-hidden="true">
                   <div class="modal-dialog">
                    <div class="modal-body">
                      <img src={GalleryImage5} alt="" />
                    </div>
                   </div>
                     </div>


                            <div className="image-gallery-single position-relative">
                                <div class="image-view"> </div>
                                <CenterFocusStrongIcon className="hover-icon" data-bs-toggle="modal" data-bs-target="#image8"/>
                                <img src={GalleryImage8} alt="" data-aos="zoom-out-down"/>
                            </div>
                            <div class="modal fade" id="image8" tabindex="-1" aria-labelledby="Gallery" aria-hidden="true">
                   <div class="modal-dialog">
                    <div class="modal-body">
                      <img src={GalleryImage8} alt="" />
                    </div>
                   </div>
                     </div>


                            <div className="image-gallery-single position-relative">
                                <div class="image-view"> </div>
                                <CenterFocusStrongIcon className="hover-icon" data-bs-toggle="modal" data-bs-target="#image11"/>
                                <img src={GalleryImage11} alt="" data-aos="zoom-out-left"/>
                            </div>
                            <div class="modal fade" id="image11" tabindex="-1" aria-labelledby="Gallery" aria-hidden="true">
                   <div class="modal-dialog">
                    <div class="modal-body">
                      <img src={GalleryImage11} alt="" />
                    </div>
                   </div>
                     </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 mobile-image">
                            <div className="image-gallery-single position-relative">
                                <div class="image-view"> </div>
                                <CenterFocusStrongIcon className="hover-icon" data-bs-toggle="modal" data-bs-target="#image6"/>
                                <img src={GalleryImage6} alt="" data-aos="zoom-in-right"/>
                            </div>
                            <div class="modal fade" id="image6" tabindex="-1" aria-labelledby="Gallery" aria-hidden="true">
                   <div class="modal-dialog">
                    <div class="modal-body">
                      <img src={GalleryImage6} alt="" />
                    </div>
                   </div>
                     </div>


                            <div className="image-gallery-single position-relative">
                                <div class="image-view"> </div>
                                <CenterFocusStrongIcon className="hover-icon" data-bs-toggle="modal" data-bs-target="#image9"/>
                                <img src={GalleryImage9} alt="" data-aos="zoom-out"/>
                            </div>
                            <div class="modal fade" id="image9" tabindex="-1" aria-labelledby="Gallery" aria-hidden="true">
                   <div class="modal-dialog">
                    <div class="modal-body">
                      <img src={GalleryImage9} alt="" />
                    </div>
                   </div>
                     </div>


                            <div className="image-gallery-single position-relative">
                                <div class="image-view"> </div>
                                <CenterFocusStrongIcon className="hover-icon" data-bs-toggle="modal" data-bs-target="#image12"/>
                                <img src={GalleryImage12} alt="" data-aos="zoom-out-right"/>
                            </div>
                            <div class="modal fade" id="image12" tabindex="-1" aria-labelledby="Gallery" aria-hidden="true">
                   <div class="modal-dialog">
                    <div class="modal-body">
                      <img src={GalleryImage12} alt="" />
                    </div>
                   </div>
                     </div>
                        </div>
                    </div>
                </div>
            </div>
        
          <Footer></Footer>
        </div>
    );
    
}

export default TourPage;





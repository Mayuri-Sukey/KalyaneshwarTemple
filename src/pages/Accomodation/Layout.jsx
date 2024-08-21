import React from 'react'
import Accomodation from './Accomodation/accomodation'
import CardFlip from './Accomodation/flipcard'
import Navbar from '../../components/Navbar'
import Social from '../../components/social-icon/Social'
import Footer from '../../components/Footer'
// import pujaImage from "../../assets/images/accomodations-banner.jpg";
import regimg from "../../assets/images/templeimgregulation.jpg";

function Layout({children}) {
  return (
   <>
    <Navbar/>
    <Social/>

    <div
                className="about-background"
                style={{ backgroundImage: `url(${regimg})`,}}
            ></div>
            <div>
                <marquee behavior="" direction="">
                    🚩
                    <span className="about-marquee">
                        Shri Saibaba Sansthan Trust, Shirdi
                    </span>
                    🚩
                </marquee>
                <div className="about-path">
                    <span> Home &#9654;  Online Services   &#9654; Accommodation Booking 
</span>
                </div>
                <div className="places-head">
                    <h1 style={{textAlign:"left", fontSize:"33px"}}>Accommodation Booking 
</h1>
                </div>
            </div>
               
<div className='accomodation'>
<CardFlip/>
<Accomodation/>
{children}
<div class="notice-container">
  <h1 className='General_h1'>Accommodation Rules for Sai Devotees</h1>
  <ol>
    <li class="notice-point">While doing current booking, please fill up the right information of all members (Name, Relation, Age, etc.) and submit ID proofs (PAN Card / Aadhar card / driving license etc.) for all members. If the above information is not correct or true the room will have to be immediately vacated.</li>
    <li class="notice-point">Hall/Room will be allotted for minimum of 24 hours and maximum of 48 hours.</li>
    <li class="notice-point">Room will not be allotted for single person (Male or female). In such cases hall facility is available in Saibaba Bhakta Niwas and Sai Dharmshala Accommodation.</li>
    <li class="notice-point">In case of couple, room will only be allotted, after verifying their marital status on valid documentation basis.</li>
    <li class="notice-point">Sanitation and other charges will be charged as per the time slot written on the receipt. The service charges of the room is fixed as per the time duration mentioned on the receipt. No changes will be charged thereafter on any grounds.</li>
    <li class="notice-point">Keep your valuable articles, cash, mobile etc. in your room, at your own risk.</li>
    <li class="notice-point">Devotees are requested to vacate the room at particular time as mentioned on the receipt and handover the keys to the floor attendant. Otherwise service charges for the next full day will be charged.</li>
    <li class="notice-point">If any kind of abuse or misrule is found in a room, room will have to be immediately vacated.</li>
    <li class="notice-point">For online booking, Rooms will be allotted up to three hours prior to the booking time, only on availability basis.</li>
    <li class="notice-point">In case of spot booking, based on room availability, they will be allotted on “first come first serve” basis.</li>
    <li class="notice-point">The decision of the Administrative Officer/Superintendent will be final in case of any issues related to the allocation.</li>
    <li class="notice-point">Please do not misuse the furniture in the room and do not scribble anything on the walls. In case of damages/loss, a fine will be charged from the occupants and the room will have to be vacated immediately.</li>
    <li class="notice-point">Drinking, Smoking, and Chewing of tobacco or Gutkha is strictly prohibited inside the room as well as in Sansthan premises.</li>
    <li class="notice-point">No service charges (Amount paid) will be returned on any grounds in case even if the room is vacated prior to the fixed schedule.</li>
    <li class="notice-point">Hot water will be available from 3.00 a.m. to the time till hot water is available.</li>
    <li class="notice-point">Sai devotees having any suggestions/complaints regarding this can contact us at email - saibaba@sai.org.in / support@sai.org.in Telephone- 02423-258956/258963.</li>
  </ol>
</div>
</div>
<Footer/>
   </>
  )
}

export default Layout
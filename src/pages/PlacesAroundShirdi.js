import React from 'react'
import Navbar from '../components/Navbar'
import Social from '../components/social-icon/Social'

import shani_shingnapur from "../assets/images/shani-shingnapur2.avif";
import Muktidham from "../assets/images/mukti1.jpg";
import Kalaram from "../assets/images/kalaram1.png";
import ramkund from "../assets/images/ramkund1.jpg";
import pandavleni from "../assets/images/pandavleni1.jpg";
import elloracave from "../assets/images/elloracave.webp";
import  Daulatabad from "../assets/images/daulatabad.jpg"; 
import coin from "../assets/images/coinM.webp";
import Trimbakeshwar from "../assets/images/trimbkeshwar.jpg";
import Alandi from "../assets/images/Alandi2.webp";
import nevasa from "../assets/images/nevasa.jpeg";
import Bhimashankar from "../assets/images/bhimashankar.jpg";
import Shegaon from "../assets/images/shegaon.webp";
import Footer from '../components/Footer';
import {motion} from "framer-motion";
import Places from "../assets/images/placesnearshirdi.jpeg";



const PlacesAroundShirdi = () => {
    const places = [
        {
            id:1,
            title: "Shani Shingnapur",
            subtitle: "(Nevasa - Ahmednagar)",
            description: "Shani the son of Sun (Surya) is famous God in Shinganapur. A specialty of Shinganapur is there are no doors to the houses. Shri Shani Dev protects people from thieves. Shanishinganapur is one more religious place in Ahmednagar-Nagar Dist. Rahuri is 50 Km. from Shirdi, & Shanishinganapur is located at east on Nagar Manmad Road. Shinganapur the Sub verb of Sonai is to the east 16 Kms. from Rahuri. S.T. Buses & private cars are available for journey.",
            image: shani_shingnapur// Replace with actual image URL
        },

        {
            id:2,
            title: "Muktidham",
            subtitle: "(Nashik)",
            description: "The Muktidham Temple is pure white Located near Nashik-Road Station, just 2 Kms, the colour signifying holiness and peace. White Makrana marble was used to build this temple has very unusual architecture. Unique to this temple are the 18 chapters of the Gita written on the walls.",
            image: Muktidham
            // Replace with actual image URL
        },

        {
            id:3,
            title: "Kalaram Temple",
            subtitle: "(Panchavati - Nashik)",
            description: "This temple was built in 1794 and is similar in its architectural design to the nearby Trimbakeshwar Temple. The temple is 70 feet in height and was the brainchild of Gopikabai Peshawa. It was built with black stone from the mines of Ramsej Hill. The temple is surrounded by several smaller temples such as the Vithal Temple, Ganapati Temple, Maruti Temple, etc.",
            image: Kalaram// Replace with actual image URL
        },
        
        {
            id:4,
            title: "Pandavleni Caves",
            subtitle: "(Nashik)",
            description: "The Pandavleni Caves are located on a tableland on Trivashmi Hill. Built by Jain kings these Caves are around 2000 years old. There are some 24 Caves that were home to Jain saints such as Tirthankara Vrishabdeo, Veer Manibhadraji, and Ambikadevi.",
            image: pandavleni// Replace with actual image URL
        },
        
        {
            id:5,
            title: "Ramkund",
            subtitle: "(Panchavati - Nashik)",
            description: "Prabhu Shri Ramchandra stayed in Nasik during his 14 Years VANVASA period. He used to take Bath at this place, thus it is recognised as RAMKUND. The same place is a part of KUMBHMELA, which comes after every 12 Years.",
            image: ramkund// Replace with actual image URL
        },

        {
            id:6,
            title: "Ellora Caves",
            subtitle: "(Aurangabad)",
            description: "Dating back to the 2nd BC and artistically built over a few centuries, the Caves of Maharashtra have an extraordinary appeal and aura. Nestled in the formidable Sahayadri Mountain Range, these caves have been home to monks of different religions. Be it the paintings in the Ajanta caves or the sculpture of the Ellora caves, or the divine presence in the Elephanta caves, the visitors have always and will always continue to be spellbound. These caves offer a visit that is truly unforgettable. A visit that will induce a sense of discovery, a discovery of the self, and of the divine.Getting there : Aurangabad is the gateway to the region, and is generally where you would arrive or depart from. Aurangabad airport is conveniently located, around 10 kms east of the town, and is directly air-linked to Mumbai, Delhi, Jaipur and Udaipur. Aurangabad is well connected to Mumbai and other cities. There are two trains that depart daily from Mumbai. The Tapovan Express leaves Mumbai early morning arriving in Aurangabad by late afternoon, while the Devgiri Express is an overnight train. Daulatabad and Caves can be accessed by private taxi or by the local bus that runs between Aurangabad and Ellora.",
            image: elloracave// Replace with actual image URL
        },
        

        {
            id:7,
            title: "Daulatabad",
            subtitle: "(Panchavati - Nashik)",
            description: "Rising dramatically over 600 ft above the Deccan plain is the arresting sight of Daulatabad. Once known as Devgiri, this fort served as the head quarters of the powerful Yadava rullers. In the 13th century, Mohammed bin Tughlak, the Sultan of Delhi, made it his capital and renamed it Daulatabad, or City of Fortune.One of the world's best preserved forts of medieval times, surviving virtually unaltered, Daulatabad still displays many of the internal contrivances that made it invincible. A series of secret, quizzical subterranean passages lie amidst the fort. Its defense systems comprised fortifications of double and even triple rows of massive walls. A fortress conquered only by treachery!:The most notable structures at Daulatabad are the Chand Minar, Jami Masjid and royal palaces. The tapering 30-metre high tower of the Chand Minar is divided into four storeys, and was faced with glazed tiles and carved motifs. The Minar probably served as a prayer hall or a victory monument in its time. The Jami Masjid was a mosque built by the Khilji ruler of Delhi, Qutubuddin Mubarak. The palaces consist of spacious halls, pavilions and courtyards. The fort is open till 6 pm.",
            image: Daulatabad// Replace with actual image URL
        },

         
        {
            id:8,
            title: "Coin Museum",
            subtitle: "(Anjaneri Village - Nashik)",
            description: "The Indian Institute of Research in Numismatic Studies was established here in 1980. Located in the scenic surroundings of Anjani Hill, the institute is the only one of its kind in Asia. The museum has a well-documented record of the history of Indian numismatics.",
            image: coin// Replace with actual image URL
        },
        

        {
            id:9,
            title: "Trimbakeshwar",
            subtitle: "(Khed - Pune)",
            description: "An association with Saint Dnyaneshwar halos Alandi, a township on the banks of Indrayani River, also called as Devachi Alandi in Pune District. Dnyaneshwar, the author of Dnyaneshwari lived and attained samadhi in Alandi at the tender age of twenty-one. Two melas are held here annually: on Ashadhi and Kartiki Ekadashi, the eleventh days of Ashadh and Kartik (Hindu months). Places of interest and worship are the sacred Samadhi of Dnyaneshwar Siddhabet in Indrayani and the temple of Vithoba-Rakhumai. Recently a Shri Sai Mandir has also constructed in Aalandi.",
            image: Trimbakeshwar// Replace with actual image URL
        },

        {
            id:10,
            title: "Alandi",
            subtitle: "(Panchavati - Nashik)",
            description: "Prabhu Shri Ramchandra stayed in Nasik during his 14 Years VANVASA period. He used to take Bath at this place, thus it is recognised as RAMKUND. The same place is a part of KUMBHMELA, which comes after every 12 Years.",
            image: Alandi// Replace with actual image URL
        },

        {
            id:11,
            title: "Nevasa",
            subtitle: "(Nevasa tehsil - Ahmednagar)",
            description: "Saint Dyaneshwar wrote a Dnyaneshwari in Nevasa beside a pole which is still there. Every year palkhi of Dyaneshwari is taken to Pandharpur during ashadi ekadashi. Mata Laxmi Temple is famous called Varkhedai in village Varkhed, Big Jatra is famous near about 7 to 10 lake people comes there Chaytra vadhy panchami for three days Chabina ceremony held there. This Devi called in south name Laxmi-Chandralamba Devi Sannati, Gulbarga Dist.",
            image: nevasa// Replace with actual image URL
        },

        {
            id:12,
            title: "Bhimashankar",
            subtitle: "(Khed - Pune)",
            description: "Bhimashankar is the temple containing one of the five Jyotirlingas found in Pune Dist. Maharashtra. Nana Fadnis, an eminent statesman of the Peshawa days, constructed the beautiful Shiva Temple at Bhimashankar. The wooden entrance of the temple is beautifully carved. On Mahashivratri day, over 20,000 devotees attend a special religious fair. Bhimashankar is endowed with beautiful scenery and an all-around vibrant atmosphere. Besides the Shiva Temple and the dense forest surrounding it, you can also visit Bombay Point, Gupta Bhimashankar: the origin of Bhima River, Hanuman Tank and Nagphani Point.",
            image: Bhimashankar// Replace with actual image URL
        },
        {
            id:13,
            title: "Shegaon",
            subtitle: "(Buldana)",
            description: "Shegaon, a municipal town in Khamgaon Tehasil is famous for the Samadhi of Shri Gajanan Maharaja mystic saint as popular as Saibaba of Shirdi. You'll see a large number of pilgrims here, some coming from distant parts of Western Maharashtra, Vidarbha. Allegorically, Shegaon can be described as the Pandharpur of Vidarbha. Thousands of devotees pay their respects at the Samadhi every Thursday, which is regarded as a special day. See the temple of Shri Ram, also constructed in the premises of the shrine. If you visit Shegaon on Ram Navami in Chaitra and on Rushi Panchami in Bhadrapada month of the Hindu Calendar, you can also attend the fairs held here on these occasions",
            image: Shegaon// Replace with actual image URL
        },
        
        


    ]
    return (
        <>
            <Navbar />
            <Social />

            <div
                className="about-background"
                style={{ backgroundImage: `url(${Places})` }}
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
                    <span> Home &#9654; Sai Temple &#9654; Place to Visit
</span>
                </div>
                <div className="places-head">
                    <h1>Places Around Shirdi
</h1>
                </div>
            </div>

            {places.map((place, index) => (
  
    <section className="places_section">
      <div className="places_content">
        <motion.div  className="places_text-container"   initial={{
   x:-50,
   opacity:0
            }}
            whileInView={{
              x:0,
              opacity:1
            }}
            transition={{
              duration:1
            }} >
          <h2 className="places_heading">
            {place.title}
          </h2>
          <span>{place.subtitle}</span>

          <p className="places_paragraph">
            {place.description}
          </p>

          {/* <div className="button-container">
            <a
              href="#"
              className="button"
            >
              Get Started Today
            </a>
          </div> */}
        </motion.div>
      </div>
        
      <motion.div initial={{
   x:50,
   opacity:0
            }}
            whileInView={{
              x:0,
              opacity:1
            }}
            transition={{
              duration:1
            }}>
      <img
        alt=""
        src={place.image}
        className="places_image"
      />

</motion.div>
    </section>
 
))}

                  
            

            

<Footer/>


        </>
    )
}

export default PlacesAroundShirdi


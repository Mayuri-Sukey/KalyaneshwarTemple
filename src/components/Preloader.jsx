import React from 'react'
import Logo from '../assets/kalyneshwar/Om_symbol.svg.png'
import Logo1 from '../assets/kalyneshwar/om.avif'

const Preloader = () => {
  return (<>
    <div className='top-effect'><h1> || ॐ नमः शिवाय  ||</h1></div>
    <section id="load">
        <div id="pre-wrapper">
            
            <div id="logos">
                <img src={Logo} alt="" id='log' />
            </div>
            <div  id="text">
            <h1>Shree Kalyaneshwar Mandir, Nagpur</h1>
            </div>
            <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            <div  id="text">
            <h4>Loading...</h4>
            </div>
        </div>



    </section>
  </>
  )
}

export default Preloader

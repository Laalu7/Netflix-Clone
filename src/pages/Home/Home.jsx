import React from 'react'
import'./Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import playicon from '../../assets/play_icon.png'
import infoicon from '../../assets/info_icon.png'
import TitileCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img"/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img"/>
          <p>Discovering his ties to a secret ancient order, a young man living in modern istanbul embarks on a quest to save the city from an immortal enemy.</p>
          <div className="hero-btns">
            <button className='btn'><img src={playicon} alt=''/> Play </button>
            <button className='btn dark-btn'><img src={infoicon} alt=''/> More Info </button>
          </div>
          <TitileCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitileCards title={"Blockbuster Movies"} category={"now_playing"}/>
      <TitileCards title={"Popular on Netflix"} category={"popular"}/>
      <TitileCards title={"Upcoming"} category={"upcoming"}/>
      <TitileCards title={"Top Rated"} category={"top_rated"}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home
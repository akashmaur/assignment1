import React, { useEffect, useState } from 'react'
import Image from './Image/bg-hero.jpg';
import Hero from './Image/hero.png';

function Home() {

  const [headerText, setHeaderText] = useState("Enjoy Our Delicious Meal")
  const [headerContent, setHeaderContent] = useState("Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet")
  const [headerButton, setHeaderButton] = useState("BOOK A TABLE")
  const [headerData, setHeaderData] = useState()


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => { setHeaderData(data.slice(0, 10)) })
  })

  console.log("headerData", headerData)
  
  return (


    <div className='home-container'>
    
      {/* {headerData?.map((item, index) => {


        return (
          <></>
          // <div className='fetch-data' key={index}>
          //   <p>userId: {item.id}</p>
          //   <p>Titel: {item.title}</p>
          //   <p>Body: {item.body}</p>
          //   <button>Show Post</button>
          // </div>

        )
      })} */}
      <div className='image-container'>
        <img src={Image} alt="chiken" />
      </div>

      <div className='main-container'>
        <div className='head-container'>
          <div className='main-content'>
            <h1>{headerText}</h1>
            <p>{headerContent}</p>
            <button>{headerButton}</button>
          </div>
          <div className='circel-container'>
            <img src={Hero} alt="jpg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
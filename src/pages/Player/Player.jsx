import React, { useEffect, useState } from 'react'
import './Player.css'
import back_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();

  const navigate = useNavigate();

  const [apiData, SetApiData]=useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2YxYmMyNTc2ZWJjZTAyZWU1NmM5OGMyMTVkYTU0YiIsInN1YiI6IjY2MzIwOTE2ZGQyNTg5MDEyODJkZTc5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6O6eQTG000QjjwBasFzTGfNew6OOHosm_9cHEkvAtrc'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => SetApiData(response.results[0]))
    .catch(err => console.error(err));
  },[])


  return (
    <div className='player'>
    <img src={back_icon} alt="" onClick={()=>{navigate(-2)}}/>
    <iframe width="90%" height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
    <div className="player-info">
      <p>{apiData.published_at.slice}</p>
      <p>{apiData.name}</p>
      <p>{apiData.typeof}</p>
    </div>
    </div>
  )
}

export default Player
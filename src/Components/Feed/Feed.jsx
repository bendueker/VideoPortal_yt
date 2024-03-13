import React, { useEffect, useState } from 'react'
import './Feed.css'
import { Link } from 'react-router-dom'

import { dataWC } from '../../data-WC' 
import moment from 'moment'

const Feed = () => {

    const [dataWC,setData] = useState([]);

    const fetchData = async ()=>{
        const videoList_url = `https://api.onlinexperiences.com/scripts/Server.nxp?LASCmd=AI:4;F:APIUTILS!50540&APIUserAuthCode=Friakiables1IesladroaspoaxoUth&APIUserCredentials=swiuthoe3tiet0iUcHiarlaFroutho&OpCodeList=EEL&ShowKey=38077&OutputFormat=J`;
        await fetch(videoList_url).then((response)=>response.json()).then((data)=>setData(data.APIResults.OpCodeResults[0].Results[0]))
    }

    useEffect(()=>{
        fetchData();
    },null)
    

    let myData = dataWC;


  return (
   <div className='feed'>
        {myData && myData.map((item, index) => {
            return (
                <Link key={index} to={`video/${item.EventGrouping}/${item.EventKey}`} className="card">
                    <img src={item.IconImage} alt="" crossorigin="anonymous"/>
                    <h2>{item.Description}</h2>
                    <p>{" "+moment(item.CreatedOnDate).fromNow()}</p>
                </Link>
            )
        })}
    </div>

 
  )
}

export default Feed

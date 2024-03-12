import React, { useEffect, useState } from 'react'
import './Feed.css'
import { Link } from 'react-router-dom'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'

const Feed = ({category}) => {

    const [data,setData] = useState([]);

    const fetchData = async ()=>{
        //const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
        const videoList_url = `https://api.onlinexperiences.com/scripts/Server.nxp?LASCmd=AI:4;F:APIUTILS!50540&APIUserAuthCode=Friakiables1IesladroaspoaxoUth&APIUserCredentials=swiuthoe3tiet0iUcHiarlaFroutho&OpCodeList=EEL&ShowKey=38077&OutputFormat=J`;
        await fetch(videoList_url,{mode: 'no-cors'}).then((response)=>response.json()).then((data)=>setData(data.APIResults.OpCodeResults[0].Results[0]))
    }

    useEffect(()=>{
        fetchData();
    },[category])

  return (
   <div className='feed'>
        {data.map((item,index)=>{
            console.log(item.snippet)
            return <Link key={index} to={`video/${item.EventGrouping}/${item.EventKey}`} className="card">
                        <img src={item.IconImage} alt="" />
                        <h2>{item.Description}</h2>
                         <p>{" "+moment(item.CreatedOnDate).fromNow()}</p>
                     </Link>
        })} 
    </div>

 
  )
}

export default Feed

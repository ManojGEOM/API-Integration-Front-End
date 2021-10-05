import React, { useEffect, useState } from 'react';
import Websearch from '../components/Websearch';
import jsondata from "./OpenDay.json";


const Frontend = () => {
     const [wsearch, setsearch] = useState(jsondata.topics);
    // const [filter, setfilters] = useState({
        
    // });
    useEffect(()=>{
        console.log(jsondata.topics)


    },[]);
  
    return (
    <Websearch wsearch = {wsearch}  />
    );
};
export default Frontend;
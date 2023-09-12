import { useState } from 'react';
import './counsty.css'
const Counsty = ({countrys,hendlevisitedcountry,visitedflag}) => {


    const {name,flags,population,area,cca3}=countrys
    const [visited,setvisited] = useState(false);
    const hendlevisited=()=>{
         setvisited(!visited) }

    return (
        <div className={`counsty ${visited?'visited':'non-visited'}`}>
            <h5 style={{color: visited?'orange':'black'}}>Name: {name?.common}</h5>
            <img src={flags?.png} alt="" />
            <h5>Population: {population}</h5>
            <h5>Area: {area}</h5>
            <h5>Code: {cca3}</h5>
            <button onClick={()=>hendlevisitedcountry(countrys)}>Mark Visited</button>
            <br />
            <button onClick={()=>visitedflag(countrys.flags.png)}>Mark flag</button>
            <br />
            <button onClick={hendlevisited}>{visited?"Visited":"Go Countey"}</button>
            {visited?'i have visited counsty':'i want to go counsty'}
        </div>
    );
};

export default Counsty;
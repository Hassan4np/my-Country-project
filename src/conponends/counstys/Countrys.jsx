import { useEffect, useState } from "react";
import './Counrys.css'
import Counsty from "../Country/Counsty";
import './Counrys.css'
const Countrys = () => {
const [counstys,setcounstys]=useState([]);

useEffect(()=>{
    const getApi=async()=>{
const res = await fetch('https://restcountries.com/v3.1/all');
const Countrys = await res.json();

setcounstys(Countrys)
    }
    getApi()
},[])

const [visitedcounstys,setvisitedcounstys] = useState([])
const hendlevisitedcountry=(countrys)=>{

const newarrayCountey = [...visitedcounstys,countrys]
setvisitedcounstys(newarrayCountey)
}
 const [visitedcountryflag,setvisitedcountryflag] = useState([]);
 const visitedflag=(flag)=>{
//   console.log(flag)
 const newflag = [...visitedcountryflag,flag]
 setvisitedcountryflag(newflag)
 }

    return (
        <div>
            <h4>Countrys: {counstys.length} </h4>
            <div>
                <h3>Mark Counstys {visitedcounstys.length}</h3>
               {
                visitedcounstys.map(country=><li key={country.cca3}>{country.name.common}</li>)
               }
            </div>
            <div style={{display:'inline'}}>
                {
                    visitedcountryflag.map((flag,index)=><img style={{width:'100px'}} src={flag} key={index}></img>)
                }
            </div>
           <div className="Counsty-containar">
           {
                counstys.map(counsty=><Counsty
                     key={counsty.cca3}
                     hendlevisitedcountry = {hendlevisitedcountry}
                     visitedflag={visitedflag}
                      countrys={counsty}></Counsty>)
            }
           </div>
        </div>
    );
};

export default Countrys;
import { useEffect, useState } from 'react';
import './style.css';
import datajson from '../../../../public/data.json'


const Graphic = () => {

    const [chart, setChart] = useState(null)
    useEffect(() => {
        setChart(datajson)
    },[]);

    return (
        <div className="graphicContainer">
            {chart?.map(({day, amount}, index) => (
                 <div index = {index}>
                 <div className="Stats">
                     <div className="StatsContainer">
                         <span>{amount}</span>
                     </div>
                     <div className="day">
                         <div className="monBarFill bar" style={{height:amount*3}}></div>
                         <small>{day}</small>
                     </div>
                 </div>
             </div>
            ))}
        </div>
    )
}

export default Graphic
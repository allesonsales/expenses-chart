import './style.css'
import Graphic from './graphic/graphic'

const Card = () => {

    return (
        <div className="card">
            <div className="cardTop">
                <span>Spending - Last 7 Days</span>
            </div>
            <div className="cardContent">
                <Graphic/>
            </div>
            <div className="cardFooter">
                <div className="cardFooterTotal">
                    <small>Total this month</small>
                    <span>$478.33</span>
                </div>
                <div className="cardFooterPercent">
                    <span>+2.4%</span>
                    <small>from last month</small>
                </div>
            </div>
        </div>
    )
}

export default Card
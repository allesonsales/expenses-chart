import './style.css'

const Top = () => {
    return (
        <div className="top">
            <div className="topText">
                <small>My balance</small>
                <span>$921.48</span>
            </div>
            <div className="topCircle">
                <div className="circleOutline"></div>
                <div className="circleFill"></div>
            </div>
        </div>
    )
}

export default Top
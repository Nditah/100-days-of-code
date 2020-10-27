import React from 'react'

const WeekForecast = ({days}) => {
    return (
        <section className="weekForecast">
            <div className="forecast forecast-1">{days}</div>
            <div className="forecast forecast-2">Hello World</div>
            <div className="forecast forecast-3">Hello World</div>
            <div className="forecast forecast-4">Hello World</div>
            <div className="forecast forecast-5">Hello World</div>
        </section>
    )
}

export default WeekForecast

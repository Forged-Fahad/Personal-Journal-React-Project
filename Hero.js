import React from "react"

export default function Hero(props){
    console.log(props)
    return(
       <div className = "main">
            <img className = "journal--pic" src = {props.imageUrl} />
            <div className = "second">
                <div className = "third">
                    <img className="maps" src = "maps.svg"/>
                    <p className ="country">{`${props.location}`.toUpperCase()}</p>
                    <a className = "google" href = {props.googleMapsUrl}>{`View on Google Maps`.toUpperCase()}</a>
                </div>

                <div className = "fourth">
                    <h1>{props.title}</h1>
                    <h2 className = "fourth--date">{props.startDate + " - " + props.endDate}</h2>
                    <p className = "tito">{props.description}</p>
                </div>
            </div>
       </div> 
    )
}
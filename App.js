import React from "react"
import data from "./data"
import Hero from "./Hero"
import Bugger from "./Bugger"
export default function App(){
    console.log(data)
    const p1 = data.map(x => {
        return <Hero 
            key = {x.id}
            {...x}
        />
    })
    
    return(
        <div>
            <Bugger />
            {p1}
        </div>
            
    )
}
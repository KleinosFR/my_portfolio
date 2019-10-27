import React from "react"
import {Carousel} from "react-materialize"

import AboutPhoto from "./aboutComponents/AboutPhoto"


const CarouselTest = () =>{
    return(
<Carousel options={{fullWidth: true,indicators: true}} className="black-text center">
<div className="red">
<h2>
First Panel
</h2>
<p>
<AboutPhoto />
</p>
</div>
<div className="amber">
<h2>
Second Panel
</h2>
<p>
This is your second panel
</p>
</div>
<div className="green">
<h2>
Third Panel
</h2>
<p>
This is your third panel
</p>
</div>
<div className="blue">
<h2>
Fourth Panel
</h2>
<p>
This is your fourth panel
</p>
</div>
</Carousel>

    )}


export default CarouselTest
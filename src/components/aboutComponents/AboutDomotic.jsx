import React from "react";
import {Row, Col} from "react-materialize";


const AboutDomotics = () => {

    return (

        <article>
            <Row>

                <Col l={12} className="left-align z-depth-1" offset={"l0"}>
                    <p>
                    Since I've bought my house, I haven't stopped improving its comfort and adapting it to our way of life.
                    <br/>
                    I started 6 years ago using the Vera Lite box from Vera Control Ltd.
                    <br/>
                    As I was expending my network, I needed a more flexible and customizable solution, and found the open source project
                        <a  href="https://www.jeedom.com/site/en/index.html" 
                            target="_blank" rel="noopener noreferrer nofollow" 
                            style={{color : "black",
                                    fontWeight :"bold"}}
                                    > Jeedom </a>.
                    <br/>
                    After running it several years on a RaspberryPi, I adcquired a professional server to run it.
                    <br/>
                    </p>
                </Col>
                <Col l={12}>
                    <Row>
                        <Col l={6} className="left-align aboutItems">
                            <p className="left-align">Current system I deployed :</p>
                            <ul style={{fontStyle:"italic"}}>
                                <li key="domSystem1">Jeedom system running on a Debian virtual machine hosted by a Fujitsu Primergy server</li>
                                <li key="domSystem2">>Z-Wave sensors : Door / Window sensors, Switch controllers</li>
                                <li key="domSystem3">>433Mhz devices : Oregon temperature sensors, Smoke and CO detectors, OWL power usage monitoring system, non critical plugs</li>
                                <li key="domSystem4">>ESPeasy modules : all DIY modules (powered by NodeMCU), including temperature / humidity sensors, and watering valve control  </li>
                                <li key="domSystem5">>Xiaomi : Door / Window sensors, temperature / humidity sensors, flooding detector, lighting, scale</li>
                                <li key="domSystem6">>Ikea Home Smart : lighting, and plugs </li>
                                <li key="domSystem7">>Broadlink Mini, Telegram bot</li>
                            </ul>
                        </Col>
                        <Col l={6} className="left-align aboutItems">
                            <p className="left-align">Main Features :</p>
                            <ul style={{fontStyle:"italic"}} >
                                <li key="domFeat1">>Management of the presence in the house using wifi ping, bluethooth and geofencing</li>
                                <li key="domFeat2">PID heating control, linked to the house presence (decrease energy comsumption by 60%)</li>
                                <li key="domFeat3">Watering of the garden depending on the forecast via Meteo France API</li>
                                <li key="domFeat4">Total control of the house via Google assitant and telegram bot</li>
                                <li key="domFeat5">Security control of the house with live alerts</li>
                                <li key="domFeat6">Safety monitoring of smoke, fire, flooding with live alerts</li>
                                <li key="domFeat7">State of the house and of the weather alerts using a dot matrix display</li>
                                <li key="domFeat8">Control of the mechanical ventilation system</li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </article>




    )


}

export default AboutDomotics;
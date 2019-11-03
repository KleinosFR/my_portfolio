import React from "react";
import {Row, Col} from "react-materialize"

const AboutDomotics = () => {

    return (

        <article>
            <Row>

                <Col l={6} className="left-align z-depth-1" offset={"l3"}>
                    <p>
                    Since I've bought my house, I haven't stopped improving its comfort and addapting it to way of life.
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
                        <Col l={6} className="left-align">
                            <p className="center-align">I'm actually running a system with :</p>
                            <ul style={{fontStyle:"italic"}}>
                                <li>Jeedom system running on a Debian virtual machine hosted by a Fujitsu Primergy server</li>
                                <li>Z-Wave sensors : Door / Window sensors, Switch controllers</li>
                                <li>433Mhz devices : Oregon temperature sensors, Smoke and CO detectors, OWL power usage monitoring system, non critical plugs</li>
                                <li>ESPeasy modules : all DIY modules (powered by NodeMCU), including temperature / humidity sensors, and watering valve control  </li>
                                <li>Xiaomi : Door / Window sensors, temperature / humidity sensors, flooding detector, lighting, scale</li>
                                <li>Ikea Home Smart : lighting, and plugs </li>
                                <li>Broadlink Mini, Telegram bot</li>
                                <li></li>
                            </ul>
                        </Col>
                        <Col l={6} className="left-align">
                            <p className="center-align">Main Features :</p>
                            <ul style={{fontStyle:"italic"}} >
                                <li>Management of the presence in the house using wifi ping, bluethooth and geofencing</li>
                                <li>PID heating control, linked to the house presence (decrease energy comsumption by 60%)</li>
                                <li>Watering of the garden depending on the forecast via Meteo France API</li>
                                <li>Total control of the house via Google assitant and telegram bot</li>
                                <li>Security control of the house with live alerts</li>
                                <li>Safety monitoring of smoke, fire, flooding with live alerts</li>
                                <li>State of the house and of the weather alerts using a dot matrix display</li>
                                <li>Control of the mechanical ventilation system</li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </article>




    )


}

export default AboutDomotics;
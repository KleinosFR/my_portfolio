import React, {useState, useContext} from "react";
import Switch from "react-switch";
import Row from "react-materialize/lib/Row";
import {LangContext} from "./LangContext"


function LangSwitch () {

    const [checked, setChecked] = useState(false)


    const handleChange =() => setChecked(!checked)

    return (
        <LangContext.Consumer>
            <Switch
            onChange={handleChange}
            checked={checked}
            uncheckedIcon ={<Row>FR</Row>}
            checkedIcon ={<Row>EN</Row>}
            offColor="#00F"
            onColor="#F00"
            />
        </LangContext.Consumer>

    )



}


export default LangSwitch
import React from "react";
import {TextInput, Row, Col, Textarea, Icon, Toast, Button } from 'react-materialize'



const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    }

    class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  name: "",
                        email: "",
                        message: "",
                        isSubmited : false, 
                        isError : false };

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
        e.preventDefault();
        fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
        })
        .then((res) => {
            const status = res.status;
            console.log(status)
        })
        .catch(error => console.log(error));

    
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, message, isSubmited, isError } = this.state;
        return (
        <>
            <form id="contact" onSubmit={this.handleSubmit} className="white">
                <Row>
                    <h3  className="col s12" >Contact Me</h3>
                </Row>
                <Row>
                    {isSubmited ? 
                    {isError} ? <Col s={6} offset={"s3"} className="red-text"> There was a problem sending your message</Col> :
                    <Col s={6} offset={"s3"} className="green-color"> Your message was duly sent. Thank you !</Col>
                    : <Col s={6} offset={"s3"}> Send me a message </Col>
                    }
                </Row>
                <Row>
                    <Col s={12} l={3} className="offset-l2">
                        <TextInput s={12} label ="Your Name" type="text" name="name" value={name} onChange={this.handleChange} />
                    </Col>
                    <Col s={12} l={3} className="offset-l2">
                        <TextInput s={12} label ="Your Email" type="email" name="email" value={email} onChange={this.handleChange} />
                    </Col>
                </Row>
                <Row>
                    <Col s={12} l={8} className="offset-l2">
                        <Textarea  s={12}  label="Your Message" name="message" value={message} onChange={this.handleChange} />
                    </Col>
                </Row>
                
                <Row>
                    <Button className="blue lighten-4 black-text"  type="submit">
                    Send
                        <Icon right >
                            send
                        </Icon>                     
                    </Button>
                </Row>
            </form>
        </>    
        );
        }
    }



export default Contact
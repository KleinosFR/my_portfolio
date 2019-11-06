import React from "react";
import {TextInput, Row, Col, Textarea, Button, Icon } from 'react-materialize'



const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    }

    class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "" };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
        fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
        })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, message } = this.state;
        return (
            <form id="contact" onSubmit={this.handleSubmit} className="white">
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
                <Button className="blue lighten-4 black-text" type="submit">
                    Send
                    <Icon right >
                        send
                    </Icon>
                </Button>
            </Row>
            </form>
        );
        }
    }



export default Contact
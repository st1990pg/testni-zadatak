import React, { Component } from 'react'
import ButtonGr from '../Elements/ButtonGr';
import { ReCaptcha } from 'react-recaptcha-google'

const formValuid = ({formErrors, ...rest}) => {
    let valid = true;
 
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });
    Object.values(rest).forEach(val =>{
        val === null && (valid = false);
        }
    );
    return valid;
 };
 const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;



class ContactForm extends Component {

    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            subject: '',
            body: '',
            sendMess: false,
            formErrors: {
                name: '',
                email: '',
                subject: '',
                body: ''
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.messageReq = this.messageReq.bind(this);
        this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
    }

    

    handleChange(e){
        const {name, value} = e.target;

        this.setState({[name]: value})
    }
    
    validation(){
        const state = this.state;
        let formErrors = this.state.formErrors;


        if (state.name.length < 3){
            formErrors.name = 'minimum 3 caracters required';
        }else{
            formErrors.name = ''
        }

        if (!emailRegex.test(state.email)){
            formErrors.email = 'Invalid email address';
            this.state.email = ""
        }else{
            formErrors.email = ''
        }

        if (state.subject.length < 3){
            formErrors.subject = 'minimum 3 caracters required';
        }else{
            formErrors.subject = ''
        }

        if (state.body.length > 1000){
            formErrors.body = 'max 1000 caracters required';
        }else{
            formErrors.body = ''
        }


        this.setState({formErrors});
    }

    messageReq(data){
        fetch("http://localhost:3000/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(response => console.log(response), this.setState({sendMess: true}))
        .catch(error => console.error('Error:', error));
    }

    onLoadRecaptcha(){
        if (this.captchaDemo) {
            this.captchaDemo.reset();
        }
    }


    componentDidMount() {
        if (this.captchaDemo) {
            console.log("started, just a second...")
            this.captchaDemo.reset();
        }
    }
    verifyCallback(recaptchaToken) {
        // Here you will get the final recaptchaToken!!!  
        console.log(recaptchaToken, "<= your recaptcha token")
      }

    handleSubmit(e){
        const {name, email, subject, body, formErrors} = this.state;
        const data = {
            name: name,
            email: email,
            subject: subject,
            body: body
        }
        e.preventDefault();

        this.validation();
        console.log(data);
        if(formErrors.name.length == '' && formErrors.email.length == '' && formErrors.subject.length == '' && formErrors.body.length == ''){
            this.messageReq(data);
        }
        
    }        
     
  render() {

    const styleForm = {
        display: this.state.sendMess === false ? "block" : "none"
    }
    const styleMess = {
        display: this.state.sendMess === true ? "block" : "none"
    }
    const { formErrors } = this.state;
    return (
      <div className="contac-form">
        <form style={styleForm} onSubmit={this.handleSubmit} noValidate>
        
            <input  type="text"
                name="name"
                className={formErrors.name.length > 0 ? "error" : null}
                placeholder="Name"
                value={this.state.name}
                onChange={ this.handleChange}
                 />{formErrors.name.length > 0 && (
                        <span className='errorMessage'>{formErrors.name}</span>
                    )}
            <input  type="email"
                name="email"
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email Address"
                value={this.state.email}
                onChange={ this.handleChange}
                 />{formErrors.email.length > 0 && (
                        <span className='errorMessage'>{formErrors.email}</span>
                    )}
            <input  type="text"
                name="subject"
                className={formErrors.subject.length > 0 ? "error" : null}
                placeholder="Subject"
                value={this.state.subject}
                onChange={ this.handleChange}
                 />{formErrors.subject.length > 0 && (
                        <span className='errorMessage'>{formErrors.subject}</span>
                    )}
            <br />
            <textarea
                name="body"
                className={formErrors.body.length > 0 ? "error" : null}
                value={this.state.body}
                onChange={ this.handleChange} ></textarea>
                 {formErrors.body.length > 0 && (
                        <span className='errorMessage'>{formErrors.body}</span>
                    )}

            <div className="createAccount">
                <ButtonGr title="SEND MESSAGE" />
            </div>
            <ReCaptcha
                ref = {(el) => {this.captchaDemo = el}}
                size="normal"
                render="explicit"
                data-theme="dark"  
                sitekey='6LeU4JMUAAAAABgWxMFl8L2BvSGq9z9xkX9LeBoP'
                onloadCallback={this.onLoadRecaptcha}
                verifyCallback={this.verifyCallback}
            />
        </form>
            <div style={styleMess}>
                <h2 style={{color:"#2ecc71"}}>Poruka je uspjesno poslata!!!</h2>
            </div>
      </div>
    )
  }
}
export default ContactForm;
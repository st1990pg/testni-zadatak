import React, { Component } from 'react'
import ButtonGr from '../Elements/ButtonGr';


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
    }

    

    handleChange(e){
        const {name, value} = e.target;

        this.setState({[name]: value})
    }
    
    validation(){
        const state = this.state;
        let formErrors = this.state.formErrors;


        if (state.name.length < 3 && state.name.length > 0){
            formErrors.name = 'minimum 3 caracters required';
        }else{
            formErrors.name = ''
        }

        if (!emailRegex.test(state.email)){
            formErrors.email = 'Invalid email address';
        }else{
            formErrors.email = ''
        }

        if (state.subject.length < 3 && state.subject.length > 0){
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

    handleSubmit(e){
        const {name, email, subject, body} = this.state;
        const data = {
            name: name,
            email: email,
            subject: subject,
            body: body
        }
        e.preventDefault();

        this.validation();
        console.log(data)

    
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
            
        </form>
            <div style={styleMess}>
                <h2 style={{color:"#2ecc71"}}>Poruka je uspjesno poslata!!!</h2>
            </div>
      </div>
    )
  }
}
export default ContactForm;
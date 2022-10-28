import React from "react";

class Form extends React.Component  {
    state = {
        firstName: "",
        email: "",
        message:"",
        select:"",
        subscr: false,
        race: "",
    }

    handleCheckboxChange = (e) => {
        this.setState({[e.target.name]: e.target.checked})
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    validateName = () => {
        if(this.state.firstName.length < 5) {
            alert("Your firstName can't be less than 5 letter")
        }
    }

    validateEmail = () => {
       if (!(
            /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
          ).test(this.state.email)) { 
            alert("Your email is not valid")
          }
    }
    render() {
        const {firstName, email, message, select, subscr, race} = this.state
        
        return(
            <div>
                <h1> Pisya Popa </h1>
                <input 
                type="text" 
                name = "firstName"
                placeholder="firstName"
                value = {firstName}
                onChange = {this.handleChange}
                onBlur = {this.validateName}
                />

                <input 
                type="email" 
                name = "email"
                placeholder="email"
                value = {email}
                onChange = {this.handleChange}
                onBlur = {this.validateEmail}
                />
                <br />  
                <textarea name="message" value={message} onChange={this.handleChange}/>
                <br />
                <select name="select" value={select} onChange={this.handleChange}>
                    <option value="" disabled>choose</option>
                    <option value="1">Uno</option>
                    <option value="2">Dos</option>
                    <option value="3">Tres</option>
                    <option value="4">Quarto</option>
                    <option value="5">Cinco</option>
                </select>
                <br />
                <input 
                    type="checkbox" name = "subscr" id = "subscr" 
                    checked = {subscr} onChange = {this.handleCheckboxChange}
                    onClick = {() => alert("Subscribe, motherfucker")} />
                <label htmlFor="subscr">Subscribe</label>
                <br />
                <input type="radio" name="race" value="male"
                onChange={this.handleChange} checked={race === "male"} /> Male
                <input type="radio" name="race" value="female"
                onChange={this.handleChange} checked={race === "female"} /> Female
            </div>
        )
    }
}

export default Form
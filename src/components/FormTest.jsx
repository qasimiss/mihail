import React from "react"

class FormTest extends React.Component {
    state = {
        email: "",
        isChecked: false
    }
    hadleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleCheck = (e) => {
        this.setState({[e.target.name]: e.target.checked})
    }
    handleClick = (e) => {
        e.preventDefault()
        if (!(
            /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
          ).test(this.state.email)) { 
            alert("Your email is not valid")
          } else if (!this.state.isChecked) {
            alert("You should accept all agreements")
          } else {
            this.setState({email:"", isChecked: false})
            alert("Thank you for you subscription")
          }
        
    }
    render() {
        const {email, isChecked} = this.state
        return(
            <form>
                <input 
                    type="text" 
                    name ="email"
                    placeholder="email"
                    value = {email} 
                    onChange = {this.hadleChange}
                />
                <br />
                <input 
                    type="checkbox" 
                    name = "isChecked"
                    id = "check"
                    value = {isChecked}
                    onChange = {this.handleCheck}
                    checked = {isChecked}
                />
                <label htmlFor="check">
                    I agree with terms and conditions
                </label>
                <br />
                <button onClick={this.handleClick}>Send</button>
            </form>
        )
    }
}

export default FormTest
import React from "react";
import "../App.css"

class Timer extends React.Component {
    state = {
      count: 0,
      start: true,
      btnName: "start"
    };
  
  componentDidMount() {
    const userCount = +localStorage.getItem("timer")
    if (userCount) {
      this.setState({count: userCount})
    }
  }

  componentDidUpdate() {
    localStorage.setItem("timer", this.state.count)
  }

  play = () => {
    if (this.state.start) {
      this.timer = setInterval(() => {
        this.setState({count: this.state.count + 1})
        // localStorage.setItem("timer", this.state.count + 1 )
      }, 1000)
      this.setState({btnName:"stop"})
      this.state.start = !this.state.start
    } else {
      this.setState({btnName:"start"})
      clearInterval(this.timer)
      this.state.start = !this.state.start
    }
    
    
  }
  reset = () => {
    clearInterval(this.timer)
    // localStorage.setItem("timer", 0 )
    this.setState({count: this.state.count = 0}) 
     
  }


  render () {
    return (
      <div className="App">
        <h1>
          React Timer
        </h1>
        <h1 className='score'>
          {this.state.count}
        </h1>
        <div className="buts">
          <button onClick={this.play} className='but'>{this.state.btnName}</button>
          <button onClick={this.reset} className='but'>reset</button>
        </div>
        {console.log(this.state.count)}
      </div>
    );
  }
  
}

export default Timer;

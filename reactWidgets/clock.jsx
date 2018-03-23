import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {time: new Date()};
    this.tick = this.tick.bind(this);

  }
  tick() {
    // const newDate = new Date();
    this.setState({time: new Date()});
  }
  render() {
    let date = this.state.time.toDateString();
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    if(minutes < 10) {
      minutes = `0${minutes}`;
    }
    if(hours < 10) {
      hours = `0${hours}`;
    }
    if(seconds < 10) {
      seconds = `0${seconds}`;
    }

    let time = `${hours}:${minutes}:${seconds}`;

    // console.log(date);
    return (
      <div className='clock'>
        <h1>{time}</h1>
        <h1>{date}</h1>
      </div>
    );
  }
  componentDidMount() {
    this.handle = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.handle);
  }
}


export default Clock;
//clearInterval(handle);

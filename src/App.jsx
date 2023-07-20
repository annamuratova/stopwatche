import React from 'react'
import './App.css'

class App extends React.Component{
  state = {
    second:0,
    minute:0,
    hour:0,
    disabled:false,
    interval:"",
    intervalsStorage:[],
  };

  startClick =() =>{
    this.setState({
      disabled:true,
    })
   let timer = setInterval(()=>{
      const {second, minute, hour} = this.state;
      if(second === 59){
        if(minute === 59){
          this.setState({
            second:0,
            minute:0,
            hour:hour + 1,
          });
        } else{
          this.setState({
            second:0,
            minute:minute + 1,
          });
        } 
      }else{
          this.setState({
            second: second + 1,
          });
        }
    },1000);
    this.setState({
      interval:timer,
    });
  }

  stopClick = ()=>{
    clearInterval(this.state.interval);
    this.setState({
      disabled:false,
    });
  }

 intervalClick = ()=>{
  const {second, minute, hour, intervalsStorage} = this.state;
  intervalsStorage.push(`${hour}: ${minute}: ${second}`);
  this.setState({
    intervalsStorage,
  });
 }

 clearClick =  ()=>{
  const { second, minute, hour, intervalsStorage} = this.state;
  this.stopClick();
  this.setState({
   second:0,
   minute:0,
   hour:0,
   intervalsStorage:[],
  })
 }
  render(){
    const {second, minute, hour, disabled, intervalsStorage} = this.state;
    return(
      <div>
        <div className='timer-container'>
        <h1><span>Online</span> StopWatch</h1>
        <div className='timer-col'>
        <p className='timer-hours'>{hour}</p>
        <p className='timer-label'>hour</p>
        </div>
        <div className='timer-col'>
        <p className='timer-minut'>{minute}</p>
        <p className='timer-label'>minutes</p>
        </div>
        <div className='timer-col'>
        <p className='timer-second'>{second}</p>
        <p className='timer-label'>seconds</p>
        </div>
        </div>
        <div className='timer-container'>
        <div className='timer-btn'>
          <button className='btn-success' onClick={this.startClick} disabled = {disabled}>Start</button>
        </div>
        <div className='timer-btn'>
          <button className='btn-danger' onClick={this.stopClick}>Stop</button>
        </div>
        <div className='timer-btn'>
          <button className='btn-secondary' onClick={this.intervalClick}>Interval</button>
        </div>
        <div className='timer-btn'>
          <button className='btn-warning' onClick={this.clearClick}>Clear</button>
        </div>
        </div>
        <div className='timer-container intervals'>
          {
            intervalsStorage.map((item, index) => <p>{`${index +1}=>${item}`}</p>)
          }
        </div>
      </div>
    )
  }
}
     


export default App

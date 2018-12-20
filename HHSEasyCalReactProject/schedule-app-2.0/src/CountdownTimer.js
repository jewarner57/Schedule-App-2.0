import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Timer from './Timer.js'

class CountdownTimer extends React.Component {
      
    constructor(props) {
        super(props);
        
        this.state = {
            slideIndex: 0,
						value: "classes",
            blockTimeInfo: {
                
                Title: {
                    highlighted:"",
                    regular:""
                },
                remainingHours: "",
                remainingMinutes: "",
                remainingSeconds: "",
            },
            
            lunchTimeInfo: {
                Title: {
                    highlighted:"",
                    regular:""
                },
                remainingHours: "",
                remainingMinutes: "",
                remainingSeconds: "",
            },
        };
				console.log(this.props)
        this.getRemainingBlockTime = this.getRemainingBlockTime.bind(this);
        this.getDaySched = this.getDaySched.bind(this);
    }
    
    componentDidMount() {
      this.getRemainingBlockTime();
      this.interval = setInterval(this.getRemainingBlockTime, 1000);
    }
    componentWillUnmount() {
      clearInterval(this.interval);
    }
    
    getDaySched() {
        
        const date = new Date();
        const today = date.getDay();
        let dayInfo = [];
        
        if(today === 1 || today === 2) {
            //advisory/elt day
            dayInfo[0] = this.props.blockSchedules[5];
            dayInfo[1] = this.props.blockSchedules[4];
            dayInfo[2] = this.props.blockSchedules[3];
            
            dayInfo[3] = this.props.lunchSchedules[5];
            dayInfo[4] = this.props.lunchSchedules[4];
            dayInfo[5] = this.props.lunchSchedules[3];
        }
        else if(today === 3 || today === 4 || today === 5) {
            //regular day
            dayInfo[0] = this.props.blockSchedules[2];
            dayInfo[1] = this.props.blockSchedules[1];
            dayInfo[2] = this.props.blockSchedules[0];
            
            dayInfo[3] = this.props.lunchSchedules[2];
            dayInfo[4] = this.props.lunchSchedules[1];
            dayInfo[5] = this.props.lunchSchedules[0];
				}
        else {
            dayInfo[0] = "weekend"; 
            dayInfo[3] = "weekend";
        }
        
        return dayInfo;
			  console.log(dayInfo);
    }
    
    getRemainingBlockTime() {
        
        const date = new Date();
        
        let timeInfo = this.state.blockTimeInfo;
        
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds()
        
        let dayInfo = this.getDaySched();
        let todaySched = dayInfo[0];
        let todayNames = dayInfo[1];
        let todayNamesHighlighted = dayInfo[2];
        
        if(todaySched === "weekend") {
            timeInfo.Title = "";
            timeInfo.remainingHours = "No ";
            timeInfo.remainingMinutes = " School ";
            timeInfo.remainingSeconds = "Today";
        }
        else if(hours*100+minutes > 1435) {
            timeInfo.Title = "";
            timeInfo.remainingHours = "Classes";
            timeInfo.remainingMinutes = " Are";
            timeInfo.remainingSeconds = " Over";
        }
        else {
            for(let i = 0; i < todaySched.length; i++) {

                if(hours*100+minutes < todaySched[i]) {
                    
                    timeInfo.remainingHours= ((todaySched[i]-todaySched[i]%100-hours*100)/100);
                    timeInfo.remainingMinutes = (todaySched[i]%100-minutes);
                    timeInfo.remainingSeconds = 59-seconds;
                    
                    if(timeInfo.remainingMinutes > 60) {
                        timeInfo.remainingMinutes -= 60;
                        timeInfo.remainingHours += 1;
                    }
                    else if(timeInfo.remainingMinutes < 0) {
                        timeInfo.remainingMinutes = 60-Math.abs(timeInfo.remainingMinutes);
                        timeInfo.remainingHours -= 1;
                    }
                    
                    if(timeInfo.remainingSeconds < 10) {
                        timeInfo.remainingSeconds = ":0" + timeInfo.remainingSeconds; 
                    }
                    else {
                        timeInfo.remainingSeconds = ":" + timeInfo.remainingSeconds; 
                    }
                    
                    if(timeInfo.remainingMinutes < 10) {
                        timeInfo.remainingMinutes = ":0" + timeInfo.remainingMinutes; 
                    }
                    else { 
                        timeInfo.remainingMinutes = ":" + timeInfo.remainingMinutes; 
                    }            
                    
                    timeInfo.Title.regular = todayNames[i];
                    timeInfo.Title.highlighted = todayNamesHighlighted[i];
                    
                    
                    i = todaySched.length;
                }
            }
        }
        
        let lunchTimeInfo = this.state.lunchTimeInfo;
        todaySched = dayInfo[3];
        todayNames = dayInfo[4];
        todayNamesHighlighted = dayInfo[5];
        
        if(todaySched === "weekend") {
            lunchTimeInfo.Title = "";
            lunchTimeInfo.remainingHours = "No";
            lunchTimeInfo.remainingMinutes = " School ";
            lunchTimeInfo.remainingSeconds = " Today";
        }
        else if(hours*100+minutes > todaySched[todaySched.length-1]) {
            lunchTimeInfo.Title = "";
            lunchTimeInfo.remainingHours = "Lunch";
            lunchTimeInfo.remainingMinutes = " is ";
            lunchTimeInfo.remainingSeconds = " Over";
        }
        else {
            for(let i = 0; i < todaySched.length; i++) {

                if(hours*100+minutes < todaySched[i]) {
                    
                    lunchTimeInfo.remainingHours= ((todaySched[i]-todaySched[i]%100-hours*100)/100);
                    lunchTimeInfo.remainingMinutes = (todaySched[i]%100-minutes);
                    lunchTimeInfo.remainingSeconds = 59-seconds;
                    
                    if(lunchTimeInfo.remainingMinutes > 60) {
                        lunchTimeInfo.remainingMinutes -= 60;
                        lunchTimeInfo.remainingHours += 1;
                    }
                    else if(lunchTimeInfo.remainingMinutes < 0) {
                        lunchTimeInfo.remainingMinutes = 60-Math.abs(lunchTimeInfo.remainingMinutes);
                        lunchTimeInfo.remainingHours -= 1;
                    }
                    
                    if(lunchTimeInfo.remainingSeconds < 10) {
                        lunchTimeInfo.remainingSeconds = ":0" + lunchTimeInfo.remainingSeconds; 
                    }
                    else {
                        lunchTimeInfo.remainingSeconds = ":" + lunchTimeInfo.remainingSeconds; 
                    }
                    
                    if(lunchTimeInfo.remainingMinutes < 10) {
                        lunchTimeInfo.remainingMinutes = ":0" + lunchTimeInfo.remainingMinutes; 
                    }
                    else { 
                        lunchTimeInfo.remainingMinutes = ":" + lunchTimeInfo.remainingMinutes; 
                    }            
                    
                    lunchTimeInfo.Title.regular = todayNames[i];
                    lunchTimeInfo.Title.highlighted = todayNamesHighlighted[i];
                    
                    
                    i = todaySched.length;
                }
            }
        }
        
        this.setState({blockTimeInfo: timeInfo, lunchTimeInfo: lunchTimeInfo}); 
    }
    
    handleChange = (event, value) => {
        this.setState({value});
    };
    
    render() {
        
        return (
            
          <div>
							<Tabs
								value={this.state.value}
								onChange={this.handleChange}
								indicatorColor="secondary"
								fullWidth="true"
								className="Tabs"
								textColor="white"
								centered
							>
								<Tab label="Classes" value="classes" className="countdownTab" inkbarstyle={{background: 'blue'}} />
								<Tab label="Lunches" value="lunches" className="countdownTab" inkbarstyle={{background: 'blue'}} />	
							</Tabs>
					
					{this.state.value === "lunches" && 
					<div className="tabSection">
						<Timer timeInfo = {this.state.lunchTimeInfo} ></Timer>
					</div>}
					
        	{this.state.value === "classes" && 
					<div className="tabSection">
						<Timer timeInfo = {this.state.blockTimeInfo} ></Timer>
					</div>}
					
        </div>    
            
        )
    }
}

export default CountdownTimer;
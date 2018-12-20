import React, { Component } from 'react';
import ScheduleListItem from './ScheduleListItem'

export default class SchedulePicker extends React.Component {
    
    constructor(props) {
        super(props);
        this.convertFrom24HourTime = this.convertFrom24HourTime.bind(this);
    }
    
    convertFrom24HourTime(timeToChange) {
        let time = timeToChange;
        let minute = time%100;
        let hour = (time-minute)/100;
        
        if(minute < 10) {
            minute = "0" + minute;
        }
        
        if(hour > 12) {
            hour -= 12;
        }
        
        let changeTime = hour + ":" + minute;
        return changeTime;
    }
    
    render() {
        
        return (
            <div className="scheduleListContainer">
                <div className="scheduleList">
            
                    <p className="grayText">Block Schedule</p>
            
                    {this.props.blockSelectedSchedule.map((schedule , index) => (  
            
                        <ScheduleListItem 
                            highlight={schedule.highlight} 
                            type="Block :"
                            startTime={this.convertFrom24HourTime(schedule.startTime)} 
                            endTime={this.convertFrom24HourTime(schedule.endTime)}
                        >
                        </ScheduleListItem>

                    ))} 

                </div>
                <div className="scheduleList">
                    <p className="grayText">{this.props.lunchDisplayTitle}</p>
                    
                    {this.props.lunchSelectedSchedule.map((schedule , index) => (  
            
                        <ScheduleListItem 
                            highlight={schedule.highlight} 
                            type="Lunch :"
                            startTime={this.convertFrom24HourTime(schedule.startTime)} 
                            endTime={this.convertFrom24HourTime(schedule.endTime)}
                        >
                        </ScheduleListItem>

                    ))}
                    
                </div>
            </div>
            
        )
    }
}
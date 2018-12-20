import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ScheduleList from './ScheduleList'

export default class SchedulePicker extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            slideIndex: 0,
            blockSelectedSchedule: [],
            lunchSelectedSchedule: [],
            values: 0,
						lunchDisplayTitle: "Lunch Schedule",
        };
        this.handleChange = this.handleChange.bind(this);
        this.getSchedule = this.getSchedule.bind(this);
        this.addItemsToSchedule = this.addItemsToSchedule.bind(this);
    }
    
    componentWillMount() {
        this.getSchedule(this.state.values);
    }
    
    getSchedule(values) {
        const value=values*3;
        
        let blockSelectedSchedule = [];
        let highlightTitle = this.props.blockSchedules[value];
        let title = this.props.blockSchedules[value+1];
        let time = this.props.blockSchedules[value+2];
        
        this.addItemsToSchedule(blockSelectedSchedule, highlightTitle, title, time, true);
       
				
				let lunchSelectedSchedule = [];
        if(values != 4) {//if early release is selected dont display lunches
					highlightTitle = this.props.lunchSchedules[value];
					title = this.props.lunchSchedules[value+1];
					time = this.props.lunchSchedules[value+2];

					this.setState({lunchDisplayTitle: "Lunch Schedule"});
					this.addItemsToSchedule(lunchSelectedSchedule, highlightTitle, title, time);
				}
				else {
					this.setState({lunchDisplayTitle: "No Lunches On Early Release"});
				}
        this.setState({blockSelectedSchedule: blockSelectedSchedule, lunchSelectedSchedule: lunchSelectedSchedule});
				
    }
    
    addItemsToSchedule(selectedSchedule, highlightTitle, title, time) {
         let countSpeed = 2;
        
         for(let i = 1; i < highlightTitle.length; i+=countSpeed) { 
            selectedSchedule.push({
                highlight: highlightTitle[i],
                title: title[i],
                startTime: time[i-1],
                endTime: time[i],
            })
        }
        
        return selectedSchedule;
        
    }
    
    handleChange = event => {
			this.setState({values: event.target.value});
      this.getSchedule(event.target.value);
  	};
    

    render() {
        
        return (
                
          <div className = "schedulePicker">
                 <p className="scheduleTitle">SCHEDULE DISPLAY</p>
                 <Select
                    className="schedulePickerField"
                    underlinestyle = {{width:'200px'}}
                    style={{width: '200px'}}
                    hinttext="Schedule"
                    labelstyle={{color: '#303030'}}
                    inputstyle={{width: '200px', textAlign: 'center'}}
                    value={this.state.values}
                    onChange={this.handleChange}
                 >
                    <MenuItem value={0}>Full / Regular</MenuItem>
										<MenuItem value={1}>ADV / ELT</MenuItem>
										<MenuItem value={2}>One Hour Delay</MenuItem>
										<MenuItem value={3}>Two Hour Delay</MenuItem>
										<MenuItem value={4}>Early Release</MenuItem>
										<MenuItem value={5}>Pep Rally</MenuItem>
										<MenuItem value={6}>Assembly</MenuItem>
                </Select>
                <div className="scheduleListSection">
            
                    <ScheduleList blockSelectedSchedule={this.state.blockSelectedSchedule} lunchSelectedSchedule={this.state.lunchSelectedSchedule} lunchDisplayTitle={this.state.lunchDisplayTitle}></ScheduleList>
            
                </div>
          </div>    
            
        )
    }
}
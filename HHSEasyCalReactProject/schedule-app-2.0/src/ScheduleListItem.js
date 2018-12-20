import React, { Component } from 'react';

export default class ScheduleListItem extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        
        return (
            
            <div>            
                
                <p><span className='amberText'>{this.props.highlight}</span> <span className = "grayText">{this.props.type}</span> <span className="noBreakText">{this.props.startTime} - {this.props.endTime}</span></p>   
                    
            </div>
            
        )
    }
}
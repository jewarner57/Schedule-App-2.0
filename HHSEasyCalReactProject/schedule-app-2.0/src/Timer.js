import React, { Component } from 'react';

export default class Timer extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            slideIndex: 0,
        };
        
    }
    
    render() {
        
        return (
                
          <div>
            <h2><span className='amberText'>{this.props.timeInfo.Title.highlighted}</span>{this.props.timeInfo.Title.regular}</h2>
            <h1>{this.props.timeInfo.remainingHours}{this.props.timeInfo.remainingMinutes}{this.props.timeInfo.remainingSeconds}</h1>
          </div>    
            
        )
    }
}
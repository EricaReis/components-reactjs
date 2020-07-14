import React, { Component } from 'react';

class Time extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: 0
        }
    //a cada 1 seg a atualização 
    setInterval(() => {
        this.setState((state, props)=>{
            return{
                time: state.time +1
            }
        })
    }, 1000)
    }

    render(){
        const  { state } = this;
    return <div>{this.state.time}</div>
    }
}

export default Time;
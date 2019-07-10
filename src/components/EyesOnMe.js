// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class Keypad extends Component{

    focusEvent(evt){
       console.log('Good!')
    }
    blurEvent(evt){
        console.log('Hey! Eyes on me!')
    }


    render(){
        return(
            <button onFocus={this.focusEvent} onBlur={this.blurEvent}> </button>
        )
    }
}
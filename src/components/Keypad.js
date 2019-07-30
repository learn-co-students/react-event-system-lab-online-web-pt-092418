import React, {Component} from 'react'

export default class Keypad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: " "
    }
  }


  typing = () => {
    console.log('Entering password...')
  };

  render() {
    return (
      <form>
        <input type="password" onKeyUp={this.typing}/>
      </form>
    );
  }
}// Code Keypad Component Here

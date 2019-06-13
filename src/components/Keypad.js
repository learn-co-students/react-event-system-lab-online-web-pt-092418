import React from "react";

export default class Keypad extends React.Component {

  enterPass = () => {
    console.log('Enter password...')
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.enterPass}></input>
      </div>
    )
  }
}

import React, {Component} from 'react'

export default class EyesOnMe extends Component {

  whenfocused = () => {
    console.log('Good!')
  };
  whenblur = () => {
    console.log('Hey! Eyes on me!')
  };

  render() {
    return(
      <div>
        <form>
          <button onFocus={this.whenfocused} onBlur={this.whenblur}/>
        </form>
      </div>
    )
  }
}// Code EyesOnMe Component Here

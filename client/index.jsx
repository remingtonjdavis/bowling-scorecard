import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFrame: 1,
      topOfFrame: true,
      tenthFrame: false,
      runOnFrames: [],

    }
    this.bowlBall = this.bowlBall.bind(this);
  }
  bowlBall (e) {
    if (this.state.topOfFrame) {
      this.state.topOfFrame = !this.state.topOfFrame;
      console.log('Frame' + this.state.currentFrame);
      let temp = document.getElementsByClassName('Frame' + this.state.currentFrame);
      console.log(temp);
    } else {

    }
    console.log(e.target.id)
  }
  render () {
    return (
      <div className="scoreboard">
        <div className="frame1">
          <div className="frame-cn1"></div>
          <div className="frame-cn2"></div>
          <div className="frame-total"></div>
        </div>
        <div className="frame2">
          <div className="frame-cn1"></div>
          <div className="frame-cn2"></div>
          <div className="frame-total"></div>
        </div>
        <div className="frame3">
          <div className="frame-cn1"></div>
          <div className="frame-cn2"></div>
          <div className="frame-total"></div>
        </div>
        <div className="frame4">
          <div className="frame-cn1"></div>
          <div className="frame-cn2"></div>
          <div className="frame-total"></div>
        </div>
        <div className="frame5">
          <div className="frame-cn1"></div>
          <div className="frame-cn2"></div>
          <div className="frame-total"></div>
        </div>
        <div className="frame6">
          <div className="frame-cn1"></div>
          <div className="frame-cn2"></div>
          <div className="frame-total"></div>
        </div>
        <div className="frame7">
          <div className="frame-cn1"></div>
          <div className="frame-cn2"></div>
          <div className="frame-total"></div>
        </div>
        <div className="frame8">
          <div className="frame-cn1"></div>
          <div className="frame-cn2"></div>
          <div className="frame-total"></div>
        </div>
        <div className="frame9">
          <div className="frame-cn1"></div>
          <div className="frame-cn2"></div>
          <div className="frame-total"></div>
        </div>
        <div className="frame10">
          <div className="frame-cn1"></div>
          <div className="frame-cn2"></div>
          <div className="frame-cn3"></div>
          <div className="frame10-total"></div>
        </div>
        <div className="keypad">
          <div className="keypad-button" id="1" onClick={this.bowlBall}>1</div>
          <div className="keypad-button" id="2" onClick={this.bowlBall}>2</div>
          <div className="keypad-button" id="3" onClick={this.bowlBall}>3</div>
          <div className="keypad-button" id="4" onClick={this.bowlBall}>4</div>
          <div className="keypad-button" id="5" onClick={this.bowlBall}>5</div>
          <div className="keypad-button" id="6" onClick={this.bowlBall}>6</div>
          <div className="keypad-button" id="7" onClick={this.bowlBall}>7</div>
          <div className="keypad-button" id="8" onClick={this.bowlBall}>8</div>
          <div className="keypad-button" id="9" onClick={this.bowlBall}>9</div>
          <div className="keypad-button-lg" id="Strike" onClick={this.bowlBall}>Strike/Spare</div>
          <div className="keypad-button-lg" id="Gutter" onClick={this.bowlBall}>GutterBall</div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
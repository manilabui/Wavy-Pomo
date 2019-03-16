import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Control extends Component {
	playIcon = <span aria-label='Play Button'>▶︎</span>
	stopIcon = <span aria-label='Stop Button'>◼</span>
  getIcon = () => this.props.playButton ? this.playIcon : this.stopIcon

  render() {
    return (
      <div>
    		<button onClick={this.props.playOrStop} className="f5-ns f6 dim br-100 ph3 pv3 white b--red bg-red pointer outline-transparent">
    			{ this.getIcon() }
    		</button>
    	</div>
    );
  }
}

Control.propTypes = {
	playButton: PropTypes.bool.isRequired,
	playOrStop: PropTypes.func.isRequired
}

export default Control;
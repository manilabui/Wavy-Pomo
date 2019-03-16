import React, { Component } from 'react';

class Control extends Component {
  getIcon = () => this.props.playButton ? '▶︎' : '◼';

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

export default Control;
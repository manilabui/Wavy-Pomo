import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
    	<div>
    		<blockquote className="f7 f6-ns i measure-narrow measure-ns center red tr">
			    <p className="fw3 lh-copy lh-title-ns measure-narrow-ns light-red">
			    	Ye has something else to tell you, but only if you do some work, because <span className = 'red'>our work is never over.</span>
			    </p>
			    <br />
			    <p className="fw9 lh-copy measure-ns lh-title-ns">
			    	"My greatest award is what I’m about to do."
			    </p>
			    <cite className="f6-ns f7 ttu tracked fs-normal light-red">―Ye</cite>
			</blockquote>
    	</div>
    );
  }
}

export default Header;
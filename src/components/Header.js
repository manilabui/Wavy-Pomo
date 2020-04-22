import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
    	<div>
    		<blockquote className="f7 f6-ns i measure-narrow measure-ns center red tr">
			    <p className="fw3 lh-copy lh-title-ns measure-narrow-ns light-red">
			    	Ye has something else to tell you, but only if you do some work, because <span className = 'red'>our work is never over.</span>
			    </p><br />
			    <p className="fw9 lh-copy measure-ns lh-title-ns">
			    	"{ this.props.quote }"
			    </p>
			    <cite className="f6-ns f7 ttu tracked fs-normal light-red">―Ye</cite>
			</blockquote>
    	</div>
    );
  }
}

Header.propTypes = {
	quote: PropTypes.string.isRequired
}

export default Header;
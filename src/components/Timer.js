import React, { Component } from 'react';

class Timer extends Component {
  render() {
    return (
      <div className='c-container relative center mw5-ns w-50 mv4 mv5-ns'>
      	<div className='c-text absolute w-100 f2-ns f3 fw2 tc pa5-ns pa3 mv4-ns mv5 '>00:00</div>
        <svg className='w-100' id='c-graphic' viewBox='0 0 100 100'>
	        <path id='bg' strokeLinecap='round' strokeWidth='4' stroke='#212b37' fill='none' d='M50 2 
	           a 48 48 0 0 1 0 96 
	           a 48 48 0 0 1 0 -96'>
	        </path>
	        <path id='progress' strokeLinecap='round' strokeWidth='2' stroke='#7bdccd' fill='none' d='M50 2 
	           a 48 48 0 0 1 0 96 
	           a 48 48 0 0 1 0 -96'>
	        </path>
	    </svg>
      </div>
    );
  }
}

export default Timer;
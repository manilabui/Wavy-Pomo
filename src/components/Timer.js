import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Timer extends Component {
  render() {
    return (
      <div className='c-container relative center mw5-ns w-50 mv3'>
      	<div className='c-text absolute w-100 tc tracked f2-ns f3 fw2 pa5 mv4-ns mv3 white'>{ this.props.display }</div>
      	<small className='absolute w-100 tc i f5-ns f6 mv5 pa2 mt6-ns gray'>minutes</small>
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

Timer.propTypes = {
  minutes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  seconds: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
}

export default Timer;

/*
class Util {
    static convertMS(ms) {
        var d, h, m, s;

        s = Math.floor(ms / 1000);
        m = Math.floor(s / 60);
        s = s % 60;
        h = Math.floor(m / 60);
        m = m % 60;
        d = Math.floor(h / 24);
        h = h % 24;
        return {
            d: d,
            h: h,
            m: m,
            s: s
        };
    };

    static addZ(n) {
        if (!n) return "00";
        return (n < 10 ? '0' : '') + n;
    }

    static formatTime(obj) {
        if (obj.d > 0) {
            return Util.addZ(obj.d) + "D " + Util.addZ(obj.h) + "H";
        }
        if (obj.h > 0) {
            return Util.addZ(obj.h) + "H " + Util.addZ(obj.m) + "M";
        }
        return Util.addZ(obj.m) + "M " + Util.addZ(obj.s) + "S";
    }
}

class Countdown {
    constructor(endTime, $element) {
        this.now = moment();
        this.end = moment().add(endTime);
        this.diff = this.end.diff(this.now);
        this.$el = $element;
        this.svg = Snap(this.$el.find("svg")[0]);
        this.progress = this.svg.select("#progress");
        this.$txt = this.$el.find(".c-text");
        this.initCircle();
        this.initTimer();
    }
    
    initCircle() {
        var self = this;
        self.progress.attr({
            strokeDasharray: '0, 301.44'
        });
        Snap.animate(0, 301.44, function(value) {
            self.progress.attr({
                'stroke-dasharray': value + ', 301.44'
            });
        }, self.diff);
    }
    
    initTimer() {
        var self = this;
        self.timer = setInterval(function() {
            self.now = moment();
            self.diff = self.end.diff(self.now);
            if (self.diff > 0) {
                self.$txt.text(Util.formatTime(Util.convertMS(self.diff)));
            } else {
                self.$txt.text("Time's up!!!");
                clearInterval(self.timer);
            }
        }, 200);
    }
}

$(function() {
    var yeah = new Countdown({minutes: 0, seconds: 30}, $(".c-container"));
})

*/
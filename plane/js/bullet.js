"use strict";"user strict";function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),Father=function e(){_classCallCheck(this,e),this.ele=document.createElement("div"),this.key=parseInt(1e8*Math.random())+""},Bullet=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return _inherits(t,Father),_createClass(t,[{key:"init",value:function(){return gameEngine.allBullet[this.key]=this,gameEngine.ele.appendChild(this.ele),this.ele.className="bullet",this.ele.style.left=myPlane.ele.offsetLeft+myPlane.ele.offsetWidth/2-this.ele.offsetWidth/2+"px",this.ele.style.top=myPlane.ele.offsetTop-this.ele.offsetHeight+"px",this}},{key:"move",value:function(){var e=this;this.timer=setInterval(function(){var t=e.ele.offsetTop-8;t<-18?(clearInterval(e.timer),gameEngine.ele.removeChild(e.ele),delete gameEngine.allBullet[e.key]):e.ele.style.top=t+"px"},30)}},{key:"boom",value:function(){clearInterval(this.timer),this.ele.className="bullet-die";var e=["images/die1.png","images/die2.png"],t=0,n=this,l=setInterval(function(){t>=1?(clearInterval(l),gameEngine.ele.removeChild(n.ele)):n.ele.style.background="url("+e[++t]+") no-repeat"},100)}}]),t}();
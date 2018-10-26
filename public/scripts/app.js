(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var button = document.querySelector('#nav-icon3');
var scroll = document.getElementsByClassName('scroll');

var toggleDropdown = function toggleDropdown() {
    button.onclick = function () {
        button.classList.toggle('open');
        if (nav.style.display === "flex") {
            nav.style.display = "none";
        } else {
            nav.style.display = "flex";
        }
    };
};

window.onscroll = function () {
    var pageBottom = document.body.scrollTop + window.innerHeight;
    for (var i = 0; i < scroll.length; i++) {
        var elem = scroll[i].getBoundingClientRect();
        if (elem.top < pageBottom * .9) {
            scroll[i].style.opacity = 1;
            scroll[i].style.transform = 'translateY(0px)';
        } else {
            scroll[i].style.opacity = 0;
            scroll[i].style.transform = 'translateY(50px)';
        }
    }
};

toggleDropdown();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBZjtBQUNBLElBQU0sU0FBUyxTQUFTLHNCQUFULENBQWdDLFFBQWhDLENBQWY7O0FBRUEsSUFBTSxpQkFBaUIsU0FBakIsY0FBaUIsR0FBTTtBQUN6QixXQUFPLE9BQVAsR0FBaUIsWUFBVztBQUN0QixlQUFPLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0IsTUFBeEI7QUFDQyxZQUFJLElBQUksS0FBSixDQUFVLE9BQVYsS0FBc0IsTUFBMUIsRUFBa0M7QUFDakMsZ0JBQUksS0FBSixDQUFVLE9BQVYsR0FBb0IsTUFBcEI7QUFDSCxTQUZFLE1BRUk7QUFDSCxnQkFBSSxLQUFKLENBQVUsT0FBVixHQUFvQixNQUFwQjtBQUNIO0FBQ0osS0FQRDtBQVFILENBVEQ7O0FBV0EsT0FBTyxRQUFQLEdBQWtCLFlBQVc7QUFDekIsUUFBSSxhQUFhLFNBQVMsSUFBVCxDQUFjLFNBQWQsR0FBMEIsT0FBTyxXQUFsRDtBQUNBLFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxPQUFPLE1BQTNCLEVBQW1DLEdBQW5DLEVBQXdDO0FBQ3BDLFlBQUksT0FBTyxPQUFPLENBQVAsRUFBVSxxQkFBVixFQUFYO0FBQ0EsWUFBSSxLQUFLLEdBQUwsR0FBWSxhQUFhLEVBQTdCLEVBQWtDO0FBQzlCLG1CQUFPLENBQVAsRUFBVSxLQUFWLENBQWdCLE9BQWhCLEdBQTBCLENBQTFCO0FBQ0EsbUJBQU8sQ0FBUCxFQUFVLEtBQVYsQ0FBZ0IsU0FBaEIsR0FBNEIsaUJBQTVCO0FBQ0gsU0FIRCxNQUdPO0FBQ0gsbUJBQU8sQ0FBUCxFQUFVLEtBQVYsQ0FBZ0IsT0FBaEIsR0FBMEIsQ0FBMUI7QUFDQSxtQkFBTyxDQUFQLEVBQVUsS0FBVixDQUFnQixTQUFoQixHQUE0QixrQkFBNUI7QUFFSDtBQUNKO0FBQ0osQ0FiRDs7QUFlQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXYtaWNvbjMnKTtcbmNvbnN0IHNjcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Njcm9sbCcpO1xuXG5jb25zdCB0b2dnbGVEcm9wZG93biA9ICgpID0+IHtcbiAgICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG4gICAgICAgICAgIGlmIChuYXYuc3R5bGUuZGlzcGxheSA9PT0gXCJmbGV4XCIpIHtcbiAgICAgICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICB9XG4gICAgfVxufVxuXG53aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgcGFnZUJvdHRvbSA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICsgd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBlbGVtID0gc2Nyb2xsW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAoZWxlbS50b3AgPCAocGFnZUJvdHRvbSAqIC45KSkge1xuICAgICAgICAgICAgc2Nyb2xsW2ldLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgc2Nyb2xsW2ldLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDBweCknO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Nyb2xsW2ldLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgc2Nyb2xsW2ldLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDUwcHgpJztcblxuICAgICAgICB9XG4gICAgfVxufVxuXG50b2dnbGVEcm9wZG93bigpOyJdfQ==

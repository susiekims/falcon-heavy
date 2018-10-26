(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var button = document.querySelector('#nav-icon3');
var scroll = document.getElementsByClassName('scroll');
var rocket = document.getElementById('rockets');

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

setInterval(function () {
    for (var i = 1; i <= 5; i++) {
        console.log(i);
        rocket.src = 'public/assets/rockets' + i + '.png';
    }
}, 1000);

toggleDropdown();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBZjtBQUNBLElBQU0sU0FBUyxTQUFTLHNCQUFULENBQWdDLFFBQWhDLENBQWY7QUFDQSxJQUFNLFNBQVMsU0FBUyxjQUFULENBQXdCLFNBQXhCLENBQWY7O0FBRUEsSUFBTSxpQkFBaUIsU0FBakIsY0FBaUIsR0FBTTtBQUN6QixXQUFPLE9BQVAsR0FBaUIsWUFBVztBQUN0QixlQUFPLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0IsTUFBeEI7QUFDQyxZQUFJLElBQUksS0FBSixDQUFVLE9BQVYsS0FBc0IsTUFBMUIsRUFBa0M7QUFDakMsZ0JBQUksS0FBSixDQUFVLE9BQVYsR0FBb0IsTUFBcEI7QUFDSCxTQUZFLE1BRUk7QUFDSCxnQkFBSSxLQUFKLENBQVUsT0FBVixHQUFvQixNQUFwQjtBQUNIO0FBQ0osS0FQRDtBQVFILENBVEQ7O0FBV0EsT0FBTyxRQUFQLEdBQWtCLFlBQVc7QUFDekIsUUFBSSxhQUFhLFNBQVMsSUFBVCxDQUFjLFNBQWQsR0FBMEIsT0FBTyxXQUFsRDtBQUNBLFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxPQUFPLE1BQTNCLEVBQW1DLEdBQW5DLEVBQXdDO0FBQ3BDLFlBQUksT0FBTyxPQUFPLENBQVAsRUFBVSxxQkFBVixFQUFYO0FBQ0EsWUFBSSxLQUFLLEdBQUwsR0FBWSxhQUFhLEVBQTdCLEVBQWtDO0FBQzlCLG1CQUFPLENBQVAsRUFBVSxLQUFWLENBQWdCLE9BQWhCLEdBQTBCLENBQTFCO0FBQ0EsbUJBQU8sQ0FBUCxFQUFVLEtBQVYsQ0FBZ0IsU0FBaEIsR0FBNEIsaUJBQTVCO0FBQ0gsU0FIRCxNQUdPO0FBQ0gsbUJBQU8sQ0FBUCxFQUFVLEtBQVYsQ0FBZ0IsT0FBaEIsR0FBMEIsQ0FBMUI7QUFDQSxtQkFBTyxDQUFQLEVBQVUsS0FBVixDQUFnQixTQUFoQixHQUE0QixrQkFBNUI7QUFFSDtBQUNKO0FBQ0osQ0FiRDs7QUFpQkEsWUFBWSxZQUFVO0FBQ2xCLFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsS0FBSyxDQUFyQixFQUF3QixHQUF4QixFQUE2QjtBQUN6QixnQkFBUSxHQUFSLENBQVksQ0FBWjtBQUNBLGVBQU8sR0FBUCw2QkFBcUMsQ0FBckM7QUFDSDtBQUNKLENBTEQsRUFLRyxJQUxIOztBQVNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1pY29uMycpO1xuY29uc3Qgc2Nyb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2Nyb2xsJyk7XG5jb25zdCByb2NrZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9ja2V0cycpXG5cbmNvbnN0IHRvZ2dsZURyb3Bkb3duID0gKCkgPT4ge1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgICAgICAgICAgaWYgKG5hdi5zdHlsZS5kaXNwbGF5ID09PSBcImZsZXhcIikge1xuICAgICAgICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbndpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBwYWdlQm90dG9tID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY3JvbGwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGVsZW0gPSBzY3JvbGxbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmIChlbGVtLnRvcCA8IChwYWdlQm90dG9tICogLjkpKSB7XG4gICAgICAgICAgICBzY3JvbGxbaV0uc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICBzY3JvbGxbaV0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoMHB4KSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzY3JvbGxbaV0uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICBzY3JvbGxbaV0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoNTBweCknO1xuXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5zZXRJbnRlcnZhbChmdW5jdGlvbigpeyBcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA1OyBpKyspIHtcbiAgICAgICAgY29uc29sZS5sb2coaSk7XG4gICAgICAgIHJvY2tldC5zcmMgPSBgcHVibGljL2Fzc2V0cy9yb2NrZXRzJHtpfS5wbmdgO1xuICAgIH1cbn0sIDEwMDApO1xuXG5cblxudG9nZ2xlRHJvcGRvd24oKTsiXX0=

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

toggleDropdown();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBZjtBQUNBLElBQU0sU0FBUyxTQUFTLHNCQUFULENBQWdDLFFBQWhDLENBQWY7QUFDQSxJQUFNLFNBQVMsU0FBUyxjQUFULENBQXdCLFNBQXhCLENBQWY7O0FBRUEsSUFBTSxpQkFBaUIsU0FBakIsY0FBaUIsR0FBTTtBQUN6QixXQUFPLE9BQVAsR0FBaUIsWUFBVztBQUN0QixlQUFPLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0IsTUFBeEI7QUFDQyxZQUFJLElBQUksS0FBSixDQUFVLE9BQVYsS0FBc0IsTUFBMUIsRUFBa0M7QUFDakMsZ0JBQUksS0FBSixDQUFVLE9BQVYsR0FBb0IsTUFBcEI7QUFDSCxTQUZFLE1BRUk7QUFDSCxnQkFBSSxLQUFKLENBQVUsT0FBVixHQUFvQixNQUFwQjtBQUNIO0FBQ0osS0FQRDtBQVFILENBVEQ7O0FBV0EsT0FBTyxRQUFQLEdBQWtCLFlBQVc7QUFDekIsUUFBSSxhQUFhLFNBQVMsSUFBVCxDQUFjLFNBQWQsR0FBMEIsT0FBTyxXQUFsRDtBQUNBLFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxPQUFPLE1BQTNCLEVBQW1DLEdBQW5DLEVBQXdDO0FBQ3BDLFlBQUksT0FBTyxPQUFPLENBQVAsRUFBVSxxQkFBVixFQUFYO0FBQ0EsWUFBSSxLQUFLLEdBQUwsR0FBWSxhQUFhLEVBQTdCLEVBQWtDO0FBQzlCLG1CQUFPLENBQVAsRUFBVSxLQUFWLENBQWdCLE9BQWhCLEdBQTBCLENBQTFCO0FBQ0EsbUJBQU8sQ0FBUCxFQUFVLEtBQVYsQ0FBZ0IsU0FBaEIsR0FBNEIsaUJBQTVCO0FBQ0gsU0FIRCxNQUdPO0FBQ0gsbUJBQU8sQ0FBUCxFQUFVLEtBQVYsQ0FBZ0IsT0FBaEIsR0FBMEIsQ0FBMUI7QUFDQSxtQkFBTyxDQUFQLEVBQVUsS0FBVixDQUFnQixTQUFoQixHQUE0QixrQkFBNUI7QUFFSDtBQUNKO0FBQ0osQ0FiRDs7QUFnQkEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LWljb24zJyk7XG5jb25zdCBzY3JvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzY3JvbGwnKTtcbmNvbnN0IHJvY2tldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb2NrZXRzJylcblxuY29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICAgICAgICAgICBpZiAobmF2LnN0eWxlLmRpc3BsYXkgPT09IFwiZmxleFwiKSB7XG4gICAgICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxud2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHBhZ2VCb3R0b20gPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCArIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZWxlbSA9IHNjcm9sbFtpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKGVsZW0udG9wIDwgKHBhZ2VCb3R0b20gKiAuOSkpIHtcbiAgICAgICAgICAgIHNjcm9sbFtpXS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgIHNjcm9sbFtpXS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgwcHgpJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNjcm9sbFtpXS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIHNjcm9sbFtpXS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSg1MHB4KSc7XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG50b2dnbGVEcm9wZG93bigpOyJdfQ==

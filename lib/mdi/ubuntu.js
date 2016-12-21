'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdiUbuntu = function (_React$Component) {
    _inherits(MdiUbuntu, _React$Component);

    function MdiUbuntu() {
        _classCallCheck(this, MdiUbuntu);

        return _possibleConstructorReturn(this, (MdiUbuntu.__proto__ || Object.getPrototypeOf(MdiUbuntu)).apply(this, arguments));
    }

    _createClass(MdiUbuntu, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 22.0002,12.0011C 22.0002,17.5221 17.5223,22 12,22C 6.47799,22 1.99984,17.5221 1.99984,12.0011C 1.99984,6.47655 6.47799,1.99998 12,1.99998C 17.5223,1.99998 22.0002,6.47655 22.0002,12.0011 Z M 14.3415,7.73864C 14.916,8.06937 15.6506,7.87346 15.9819,7.29829C 16.3142,6.72565 16.117,5.98984 15.5422,5.65848C 14.9677,5.32711 14.2331,5.52398 13.9018,6.0982C 13.5713,6.67273 13.7666,7.40728 14.3415,7.73864 Z M 11.8824,15.5071C 11.3548,15.5071 10.854,15.3912 10.4051,15.1814L 9.5707,16.6767C 10.2668,17.0235 11.0521,17.2169 11.8824,17.2169C 12.3656,17.2169 12.833,17.1517 13.2771,17.0282C 13.3552,16.5447 13.6425,16.1018 14.098,15.8366C 14.5557,15.5726 15.082,15.5478 15.54,15.7219C 16.4276,14.8463 17.0056,13.6585 17.0903,12.3343L 15.3781,12.3107C 15.22,14.1032 13.7165,15.5071 11.8824,15.5071 Z M 11.8824,8.48799C 13.7165,8.48799 15.22,9.89377 15.3781,11.6889L 17.0903,11.6612C 17.0056,10.3382 16.4276,9.14978 15.54,8.27663C 15.082,8.44799 14.5544,8.42373 14.098,8.15914C 13.6425,7.8952 13.3552,7.45232 13.2771,6.96881C 12.833,6.8466 12.3656,6.77888 11.8824,6.77888C 11.0521,6.77888 10.2668,6.97417 9.5707,7.31972L 10.4051,8.81526C 10.854,8.6058 11.3548,8.48799 11.8824,8.48799 Z M 8.37407,11.9998C 8.37407,10.8116 8.96153,9.76179 9.86458,9.12709L 8.98735,7.65454C 7.93593,8.35696 7.15288,9.43137 6.8275,10.6894C 7.20831,10.9994 7.44928,11.47 7.44928,11.9998C 7.44928,12.5255 7.20831,12.9964 6.8275,13.3076C 7.15288,14.5647 7.93593,15.6385 8.98735,16.3412L 9.86458,14.8693C 8.96153,14.2352 8.37407,13.1866 8.37407,11.9998 Z M 14.3415,16.259C 13.7666,16.5882 13.5713,17.3243 13.9018,17.8972C 14.2331,18.4727 14.9677,18.6689 15.5422,18.3382C 16.117,18.0065 16.3149,17.2726 15.9832,16.6975C 15.6506,16.1229 14.916,15.9264 14.3415,16.259 Z M 5.76285,10.7975C 5.09886,10.7975 4.56276,11.3355 4.56276,11.9998C 4.56276,12.6612 5.09886,13.2002 5.76285,13.2002C 6.42747,13.2002 6.9642,12.6612 6.9642,11.9998C 6.9642,11.3355 6.42747,10.7975 5.76285,10.7975 Z ' })
                )
            );
        }
    }]);

    return MdiUbuntu;
}(React.Component);

exports.default = MdiUbuntu;
module.exports = exports['default'];
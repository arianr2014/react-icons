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

var MdiPuzzle = function (_React$Component) {
    _inherits(MdiPuzzle, _React$Component);

    function MdiPuzzle() {
        _classCallCheck(this, MdiPuzzle);

        return _possibleConstructorReturn(this, (MdiPuzzle.__proto__ || Object.getPrototypeOf(MdiPuzzle)).apply(this, arguments));
    }

    _createClass(MdiPuzzle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 20.4994,10.998L 18.9994,10.998L 18.9994,6.99805C 18.9994,5.89404 18.1034,4.99805 16.9994,4.99805L 12.9994,4.99805L 12.9994,3.49805C 12.9994,2.11707 11.8804,0.998047 10.4994,0.998047C 9.11838,0.998047 7.99939,2.11707 7.99939,3.49805L 7.99939,4.99805L 3.99939,4.99805C 2.89539,4.99805 2.0094,5.89404 2.0094,6.99805L 2.00638,10.798L 3.49939,10.798C 4.99039,10.798 6.1994,12.007 6.1994,13.498C 6.1994,14.9891 4.99039,16.1981 3.49939,16.1981L 2.00238,16.1981L 1.99939,19.998C 1.99939,21.1021 2.89539,21.998 3.99939,21.998L 7.79938,21.998L 7.79938,20.498C 7.79938,19.007 9.00839,17.798 10.4994,17.798C 11.9904,17.798 13.1994,19.007 13.1994,20.498L 13.1994,21.998L 16.9994,21.998C 18.1034,21.998 18.9994,21.1021 18.9994,19.998L 18.9994,15.998L 20.4994,15.998C 21.8804,15.998 22.9994,14.879 22.9994,13.498C 22.9994,12.1171 21.8804,10.998 20.4994,10.998 Z ' })
                )
            );
        }
    }]);

    return MdiPuzzle;
}(React.Component);

exports.default = MdiPuzzle;
module.exports = exports['default'];
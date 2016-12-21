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

var MdiWii = function (_React$Component) {
    _inherits(MdiWii, _React$Component);

    function MdiWii() {
        _classCallCheck(this, MdiWii);

        return _possibleConstructorReturn(this, (MdiWii.__proto__ || Object.getPrototypeOf(MdiWii)).apply(this, arguments));
    }

    _createClass(MdiWii, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 17.8446,16.9391L 15.9653,16.9391L 15.9653,10.7943L 17.8446,10.7943L 17.8446,16.9391 Z M 18.0222,8.5767C 18.0222,9.19378 17.5221,9.69403 16.9048,9.69403C 16.2881,9.69403 15.7876,9.19378 15.7876,8.5767C 15.7876,7.95988 16.2881,7.4594 16.9048,7.4594C 17.5221,7.4594 18.0222,7.95988 18.0222,8.5767 Z M 21.8223,16.9391L 19.9433,16.9391L 19.9433,10.7943L 21.8223,10.7943L 21.8223,16.9391 Z M 22,8.5767C 22,9.19378 21.4998,9.69403 20.8828,9.69403C 20.2658,9.69403 19.7657,9.19378 19.7657,8.5767C 19.7657,7.95988 20.2658,7.4594 20.8828,7.4594C 21.4998,7.4594 22,7.95988 22,8.5767 Z M 12.9014,8.0519L 14.899,8.0519L 12.783,15.5C 12.783,15.5 12.4952,17.0406 11.2848,17.0406C 10.0744,17.0406 9.78683,15.5 9.78683,15.5L 8.44935,10.6418L 7.11239,15.5C 7.11239,15.5 6.82456,17.0406 5.61418,17.0406C 4.4038,17.0406 4.11597,15.5 4.11597,15.5L 2.00001,8.0519L 3.9976,8.0519L 5.72407,14.6708L 7.11239,9.30462C 7.43385,7.95035 8.44935,7.9674 8.44935,7.9674C 8.44935,7.9674 9.46511,7.95035 9.78683,9.30462L 11.1749,14.6708L 12.9014,8.0519 Z ' })
                )
            );
        }
    }]);

    return MdiWii;
}(React.Component);

exports.default = MdiWii;
module.exports = exports['default'];
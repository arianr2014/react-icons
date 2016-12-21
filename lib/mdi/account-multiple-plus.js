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

var MdiAccountMultiplePlus = function (_React$Component) {
    _inherits(MdiAccountMultiplePlus, _React$Component);

    function MdiAccountMultiplePlus() {
        _classCallCheck(this, MdiAccountMultiplePlus);

        return _possibleConstructorReturn(this, (MdiAccountMultiplePlus.__proto__ || Object.getPrototypeOf(MdiAccountMultiplePlus)).apply(this, arguments));
    }

    _createClass(MdiAccountMultiplePlus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12.9997,12.9981C 10.9997,12.9981 6.9997,13.9991 6.9997,15.9981L 6.9997,17.9981L 18.9997,17.9981L 18.9997,15.9981C 18.9997,13.9991 14.9997,12.9981 12.9997,12.9981 Z M 19.6207,13.1582C 20.4497,13.8831 20.9997,14.8161 20.9997,15.9981L 20.9997,17.9981L 23.9997,17.9981L 23.9997,15.9981C 23.9997,14.4571 21.6257,13.5117 19.6207,13.1582 Z M 12.9997,10.9981C 14.6567,10.9981 15.9897,9.65407 15.9897,7.99807C 15.9897,6.34207 14.6567,4.99807 12.9997,4.99807C 11.3427,4.99807 9.99971,6.34207 9.99971,7.99807C 9.99971,9.65407 11.3427,10.9981 12.9997,10.9981 Z M 17.9997,10.9981C 19.6567,10.9981 20.9897,9.65407 20.9897,7.99807C 20.9897,6.34207 19.6567,4.99807 17.9997,4.99807C 17.6807,4.99807 17.3737,5.04907 17.0847,5.14207C 17.6517,5.95307 17.9897,6.93506 17.9897,7.99807C 17.9897,9.06107 17.6517,10.0431 17.0847,10.8541C 17.3737,10.9471 17.6807,10.9981 17.9997,10.9981 Z M 7.9997,9.99807L 4.9997,9.99807L 4.9997,6.99807L 2.99971,6.99807L 2.99971,9.99807L -0.000295003,9.99807L -0.000295003,11.9981L 2.99971,11.9981L 2.99971,14.9981L 4.9997,14.9981L 4.9997,11.9981L 7.9997,11.9981L 7.9997,9.99807 Z ' })
                )
            );
        }
    }]);

    return MdiAccountMultiplePlus;
}(React.Component);

exports.default = MdiAccountMultiplePlus;
module.exports = exports['default'];
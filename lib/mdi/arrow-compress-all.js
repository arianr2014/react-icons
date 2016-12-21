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

var MdiArrowCompressAll = function (_React$Component) {
    _inherits(MdiArrowCompressAll, _React$Component);

    function MdiArrowCompressAll() {
        _classCallCheck(this, MdiArrowCompressAll);

        return _possibleConstructorReturn(this, (MdiArrowCompressAll.__proto__ || Object.getPrototypeOf(MdiArrowCompressAll)).apply(this, arguments));
    }

    _createClass(MdiArrowCompressAll, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19.4926,3.09314L 20.9068,4.50735L 16.4142,9L 20,9L 20,11L 13,11L 13,4L 15,4L 15,7.58579L 19.4926,3.09314 Z M 20.9069,19.4927L 19.4926,20.9069L 15,16.4142L 15,20L 13,20L 13,13L 20,13L 20,15L 16.4142,15L 20.9069,19.4927 Z M 4.50737,3.09314L 9,7.58579L 9,4.00001L 11,4.00001L 11,11L 4,11L 4,9L 7.58579,9L 3.09316,4.50735L 4.50737,3.09314 Z M 3.09314,19.4927L 7.58578,15L 4,15L 4,13L 11,13L 11,20L 9,20L 9,16.4142L 4.50735,20.9069L 3.09314,19.4927 Z ' })
                )
            );
        }
    }]);

    return MdiArrowCompressAll;
}(React.Component);

exports.default = MdiArrowCompressAll;
module.exports = exports['default'];
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

var MdiRibbon = function (_React$Component) {
    _inherits(MdiRibbon, _React$Component);

    function MdiRibbon() {
        _classCallCheck(this, MdiRibbon);

        return _possibleConstructorReturn(this, (MdiRibbon.__proto__ || Object.getPrototypeOf(MdiRibbon)).apply(this, arguments));
    }

    _createClass(MdiRibbon, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 13.414,19.3115L 16.585,22.4824L 17.999,21.0684L 14.828,17.8975M 15.535,11.5334L 15.534,11.5344L 11.999,15.0684L 8.465,11.5344L 8.46399,11.5334L 8.46399,11.5334C 7.55899,10.6284 6.99899,9.37842 6.99899,7.99847C 6.99899,5.23645 9.23799,2.99847 11.999,2.99847C 14.761,2.99847 16.999,5.23645 16.999,7.99847C 16.999,9.37842 16.44,10.6284 15.535,11.5334 Z M 16.898,12.9985C 18.195,11.7274 18.999,9.95642 18.999,7.99847C 18.999,4.13245 15.865,0.998474 11.999,0.998474C 8.133,0.998474 4.99899,4.13245 4.99899,7.99847C 4.99899,9.95642 5.80598,11.7255 7.10199,12.9954L 7.09999,12.9985L 10.585,16.4835L 5.99899,21.0684L 7.41299,22.4824L 16.898,12.9985 Z ' })
                )
            );
        }
    }]);

    return MdiRibbon;
}(React.Component);

exports.default = MdiRibbon;
module.exports = exports['default'];
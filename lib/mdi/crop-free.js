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

var MdiCropFree = function (_React$Component) {
    _inherits(MdiCropFree, _React$Component);

    function MdiCropFree() {
        _classCallCheck(this, MdiCropFree);

        return _possibleConstructorReturn(this, (MdiCropFree.__proto__ || Object.getPrototypeOf(MdiCropFree)).apply(this, arguments));
    }

    _createClass(MdiCropFree, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.9994,2.99807L 14.9994,2.99807L 14.9994,4.99807L 18.9994,4.99807L 18.9994,8.99807L 20.9994,8.99807L 20.9994,4.99807C 20.9994,3.89406 20.1044,2.99807 18.9994,2.99807 Z M 18.9994,18.9981L 14.9994,18.9981L 14.9994,20.9981L 18.9994,20.9981C 20.1044,20.9981 20.9994,20.1031 20.9994,18.9981L 20.9994,14.9981L 18.9994,14.9981M 4.9994,14.9981L 2.9994,14.9981L 2.9994,18.9981C 2.9994,20.1031 3.8954,20.9981 4.9994,20.9981L 8.9994,20.9981L 8.9994,18.9981L 4.9994,18.9981M 2.9994,4.99807L 2.9994,8.99807L 4.9994,8.99807L 4.9994,4.99807L 8.9994,4.99807L 8.9994,2.99807L 4.9994,2.99807C 3.8954,2.99807 2.9994,3.89406 2.9994,4.99807 Z ' })
                )
            );
        }
    }]);

    return MdiCropFree;
}(React.Component);

exports.default = MdiCropFree;
module.exports = exports['default'];
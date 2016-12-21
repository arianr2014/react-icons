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

var MdiFolderAccount = function (_React$Component) {
    _inherits(MdiFolderAccount, _React$Component);

    function MdiFolderAccount() {
        _classCallCheck(this, MdiFolderAccount);

        return _possibleConstructorReturn(this, (MdiFolderAccount.__proto__ || Object.getPrototypeOf(MdiFolderAccount)).apply(this, arguments));
    }

    _createClass(MdiFolderAccount, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.9994,16.9981L 10.9994,16.9981L 10.9994,15.9981C 10.9994,14.6661 13.6664,13.9981 14.9994,13.9981C 16.3324,13.9981 18.9994,14.6661 18.9994,15.9981M 14.9994,8.99807C 16.1029,8.99807 16.9994,9.89406 16.9994,10.9981C 16.9994,12.1011 16.1029,12.9981 14.9994,12.9981C 13.8959,12.9981 12.9994,12.1011 12.9994,10.9981C 12.9994,9.89406 13.8959,8.99807 14.9994,8.99807 Z M 19.9994,5.99807L 11.9994,5.99807L 9.9994,3.99807L 3.9994,3.99807C 2.8944,3.99807 2.00917,4.89406 2.00917,5.99807L 1.9994,17.9981C 1.9994,19.1021 2.8944,19.9981 3.9994,19.9981L 19.9994,19.9981C 21.1029,19.9981 21.9994,19.1021 21.9994,17.9981L 21.9994,7.99807C 21.9994,6.89406 21.1029,5.99807 19.9994,5.99807 Z ' })
                )
            );
        }
    }]);

    return MdiFolderAccount;
}(React.Component);

exports.default = MdiFolderAccount;
module.exports = exports['default'];
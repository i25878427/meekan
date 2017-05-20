'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = require('react-redux');

var _app = require('../../components/app/app');

var _app2 = _interopRequireDefault(_app);

var _app3 = require('../../redux/actions/app');

var _app4 = _interopRequireDefault(_app3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return _extends({}, state);
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  var allAppActions = (0, _app4.default)(dispatch);
  var init = function init() {
    allAppActions.init();
  };
  return {
    init: init
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_app2.default);
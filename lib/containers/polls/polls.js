'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = require('react-redux');

var _polls = require('../../components/polls/polls');

var _polls2 = _interopRequireDefault(_polls);

var _polls3 = require('../../redux/actions/polls');

var _polls4 = _interopRequireDefault(_polls3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return _extends({}, state);
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  var allPollsActions = (0, _polls4.default)(dispatch);
  var init = function init() {
    allPollsActions.init();
  };
  return {
    init: init
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_polls2.default);
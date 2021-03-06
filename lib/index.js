"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = exports.history = exports.RouterPro = undefined;

var _router = require("./router");

var _router2 = _interopRequireDefault(_router);

var _history = require("./public/history");

var _history2 = _interopRequireDefault(_history);

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.RouterPro = _router2.default;
exports.history = _history2.default;
exports.Link = _reactRouterDom.Link;
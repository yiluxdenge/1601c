'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _checkUser = require('../routes/checkUser');

var _checkUser2 = _interopRequireDefault(_checkUser);

var _getAccountList = require('../routes/getAccountList');

var _getAccountList2 = _interopRequireDefault(_getAccountList);

var _getShopCart = require('../routes/getShopCart');

var _getShopCart2 = _interopRequireDefault(_getShopCart);

var _getPage = require('../routes/getPage');

var _getPage2 = _interopRequireDefault(_getPage);

var _getDatum = require('../routes/getDatum');

var _getDatum2 = _interopRequireDefault(_getDatum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
    app.post('/api/checkUser', _checkUser2.default);
    app.get('/api/getAccountList', _getAccountList2.default);
    app.get('/api/getShopCart', _getShopCart2.default);
    app.get('/api/getPage', _getPage2.default);
    app.get("/api/getDatum", _getDatum2.default);
};
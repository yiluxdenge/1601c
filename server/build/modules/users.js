'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pushData = exports.getAccountList = exports.checkUser = undefined;

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkUser = function checkUser(userInfo, cb) {
    _config2.default.query('select * from users where username=?', userInfo.username, function (err, result) {
        console.log(result);
        var check = result && result.some(function (item) {
            return item.password == userInfo.password;
        });
        if (check) {
            cb(1);
        } else {
            cb(0);
        }
    });
};
var getAccountList = function getAccountList(cb) {
    _config2.default.query('select * from users', function (err, result) {
        if (!err) {
            ck(result);
        } else {
            ck({
                code: 0,
                msg: 'fail'
            });
        }
    });
};
var pushData = function pushData(username, password) {
    _config2.default.query('insert into users(username, password) values(' + username + ',' + password + ')', function (err) {
        if (err) {
            return 0;
        } else {
            return 1;
        }
        //    if(){
        //       return 0
        //    }
        //     else{
        //       return 1
        //     }
    });
};
exports.checkUser = checkUser;
exports.getAccountList = getAccountList;
exports.pushData = pushData;
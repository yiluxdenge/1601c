"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _url = require("url");

var _url2 = _interopRequireDefault(_url);

var _page = require("../modules/page.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.get("/api/getPage", function (req, res) {
    var par = _url2.default.parse(req.url, true).query;
    var index = par.pageIndex;
    var num = par.pageNum;
    (0, _page.getPage)(function (result, index, num) {
        console.log(req.body);
        res.send({
            code: 1,
            msg: "请求成功",
            data: result
        });
    });
});
exports.default = router;
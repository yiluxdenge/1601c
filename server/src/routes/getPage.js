import express from "express";
import Url from 'url'
import { getPage } from "../modules/page.js";
const router = express.Router();
router.get("/api/getPage", (req, res) => {
    let par = Url.parse(req.url, true).query
    let index = par.pageIndex;
    let num = par.pageNum;
    getPage(function(result, index, num) {
        console.log(req.body);
        res.send({
            code: 1,
            msg: "请求成功",
            data: result
        })
    })
})
export default router;
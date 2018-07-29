import express from 'express';
import Url from "url"
import { pushData } from '../modules/users';
import { getDeAesUtf } from '../utils/crypto';
const router = express.Router();
router.get('/api/getAccountList', function(req, res) {
    const { token } = req.headers;
    console.log("9999999");
    console.log(req.url)
    let par = Url.parse(req.url, true).query
    let username = par.username;
    let password = par.password;
    try {
        let result = pushData(username, password);
        getDeAesUtf(token, '1601B') &&
            result
        res.send({
                code: 1,
                msg: '注册成功'
            }) ||
            res.send({
                code: 0,
                msg: '注册失败'
            });

    } catch (e) {
        res.send({
            code: 0,
            msg: '服务器异常'
        });
    }
});
export default router;
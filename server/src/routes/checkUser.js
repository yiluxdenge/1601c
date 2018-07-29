import express from 'express';
import { checkUser } from '../modules/users';
import { getAesHex } from '../utils/crypto.js';
const router = express.Router();
router.post('/api/checkUser', function(req, res) {
    console.log("666666")
    console.log(getAesHex('zhangsan', '1601B'));
    checkUser(req.body, function(result) {
        console.log(result);
        if (result) {
            res.send({
                code: result,
                msg: '登录成功',
                username: req.body.username,
                token: getAesHex(req.body.username, '1601B')
            });
        } else {
            res.send({
                code: result,
                msg: '登录失败'
            });
        }
    });
});


export default router;
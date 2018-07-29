import express from 'express';
import {  getDatum } from '../modules/users';
const router = express.Router();
router.get('/api/getDatum', function (req, res) {
     getDatum(function (result) {
         console.log(result);
        res.send({
            code: 1,
            msg: '获取成功',
            data: result || []
        });
    });
});
export default router;
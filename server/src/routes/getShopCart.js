import express from 'express';
import { getAllCart } from '../modules/shopcar';
const router = express.Router();
router.get('/api/getShopCart', function (req, res) {
    getAllCart(function (result) {
        res.send({
            code: 1,
            msg: '获取成功',
            data: result || []
        });
    });
});
export default router;
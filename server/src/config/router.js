import checkUser from '../routes/checkUser';
import getAccountList from '../routes/getAccountList';
import getShopCart from '../routes/getShopCart';
import getPage from '../routes/getPage';
import getDatum from "../routes/getDatum"
export default (app) => {
    app.post('/api/checkUser', checkUser);
    app.get('/api/getAccountList', getAccountList);
    app.get('/api/getShopCart', getShopCart);
    app.get('/api/getPage', getPage);
    app.get("/api/getDatum",getDatum)
};
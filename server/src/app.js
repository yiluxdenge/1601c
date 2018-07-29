import express from "express";
import router from "./config/router.js";
import bodyParser from "body-parser";
import proof from "./utils/proof.js"
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,content-Type,Accept,token,sysCode");
    res.header("Access-Control-Allow-Methods", "POST,GET");
    res.header("X-Powered-By", '3.2.1');
    res.header("Content-Type", "application/plain;charset=utf-8");
    next()
})
app.use(proof)
router(app);
app.listen(8080, function() {
    console.log("listen to 8080")
});
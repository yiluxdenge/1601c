import connection from "./config.js"
const getAllCart = (cb) => {
    connection.query('select * from shopcart', function(err, result) {
        cb(result)
    })
}
const addCart = (pid, cb) => {
    connection.query(`insert into shopcart(id, name, price, msg, num) values (${pid},商品,100,原价100限价100,1)`, function(err, result) {
        if (err) throw Error("出错")
        cb(1)
    })
}
const removeCart = (pid, cb) => {

}
export {
    getAllCart,
    addCart,
    removeCart
}
import connection from "./config.js"
const getPage = (cb, index, num) => {
    console.log('2222');
    connection.query(`select * from pagination`, function(err, result) {
        console.log(result)
        cb(result)
    })
}
export {
    getPage
}
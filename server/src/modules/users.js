import connection from "./config";
const checkUser = (userInfo, cb) => {
    connection.query('select * from users where username=?', userInfo.username, function(err, result) {
        console.log(result)
        let check = result && result.some(function(item) {
            return item.password == userInfo.password;
        });
        if (check) {
            cb(1)
        } else {
            cb(0)
        }
    })
}
const getAccountList = (cb) => {
    connection.query('select * from users', function(err, result) {
        if (!err) {
            ck(result)
        } else {
            ck({
                code: 0,
                msg: 'fail'
            })
        }
    })
}
const pushData = (username, password) => {
    connection.query(`insert into users(username, password) values(${username},${password})`, function(err) {
        if (err) {
            return 0
        } else {
            return 1
        }
        //    if(){
        //       return 0
        //    }
        //     else{
        //       return 1
        //     }

    })
}
export {
    checkUser,
    getAccountList,
    pushData
}
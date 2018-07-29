import mysql from "mysql";
const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "114614",
    database: '1601',
    insecureAuth: true
});
connection.connect();
export default connection;
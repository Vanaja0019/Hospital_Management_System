const {Pool}=require ("pg");

const pool=new Pool({
    user:'postgres',
    host:'localhost',
    database:'Hospital_management_system_db',
    password:'system',
    port:5432,
    idleTimeoutMillis:600000
})

module.exports=pool
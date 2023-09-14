const express = require('express')
const pool=require('./dbConnection')
const { log } = require('console')
const app = express()
const bodyParser=require('body-parser')
const port = 8000
const cors=require('cors')

app.use(cors({
    credentials:true
}))
app.use(express.json());
app.use(bodyParser.urlencoded({ 
    extended:true
}))


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/getuser',async (req, res) => {
    const result=await pool.query(`select * from tbl_users`)
     res.send(result.rows)
})
  app.post('/adduser',async (req, res) => {
    const result=await pool.query(`insert into tbl_users(user_id,role,email_id,user_name,password) 
    values('${req.body.user_id}','${req.body.role}','${req.body.email_id}','${req.body.user_name}',
    '${req.body.password}')`)

    res.send(result.rows)
  })
  app.post('/checkuser',async (req, res) => {
    const result=await pool.query(`select * from tbl_users where
     email_id='${req.body.email_id}' and
     password='${req.body.password}'`)
     
 
    res.send(result.rows)
  })
  app.post('/addpatient',async (req, res) => {
  
    const result=await pool.query(`insert into tbl_patients_info(patient_id,user_id,
        patient_name,patient_age,
        patient_sex,patient_contact,patient_address) 
    values('${req.body.patient_id}','${req.body.user_id}','${req.body.patient_name}',
    '${req.body.patient_age}','${req.body.patient_sex}','${req.body.patient_contact}',
    '${req.body.patient_address}')`)

    res.send(result.rows)
  })

  app.post('/adddoctor',async (req, res) => {
    
    const result=await pool.query(`insert into tbl_doctors_info(doctor_id,user_id,
    doctor_name,doctor_sex,doctor_contact,doctor_specialization)
    values('${req.body.doctor_id}','${req.body.user_id}','${req.body.doctor_name}',
    '${req.body.doctor_sex}',
    '${req.body.doctor_contact}','${req.body.doctor_specialization}')`)

    res.send(result.rows)
  })
  

app.listen(port, () => {
    pool.connect().then((client)=>{
        console.log('dbconnected');
        console.log(`app listening on port ${port}`)
    })
  
})
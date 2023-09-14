import React,{useEffect,useState} from 'react';
import axios from 'axios';

function Login({handleFormSubmit}) {
    const [backendData,setBackendData]=useState([{}]);

useEffect(()=>{
  axios.get("/getuser").then(
    response=>response
    
  ).then(
    data=>{
      setBackendData(data.backendData)
      console.log(data);
    }
    
  )
},[])

    const [emailid,setemailid]=useState("");
    const [password,setpassword]=useState("");
    const [errors, setErrors] = useState({ email: '', password: '' });

function submitHandler(event)  {
    event.preventDefault();
    const { name, value } = event.target;
    //setFormData({ ...formData, [name]: value });
     
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailRegex.test(value);

      setErrors({ ...errors, email: isValid ? '' : 'Please enter a valid email' });
    }

    if (name === 'password') {
      setErrors({ ...errors, password: value.trim() !== '' ? '' : 'Please enter a password' });
    }

    let data={email_id:emailid,password:password};
    axios({
      method: 'post',
      url: '/checkuser',
      data: {
        email_id: emailid,
        password: password
      }
    }).then(
      response=>response
    ).then(
      data=>{
        console.log(data.data);
        if(data.data.length>0 && data.data[0].role){
              console.log("sucess");
             handleFormSubmit(data.data);


        }
        else{
              console.log("fail");
              alert('Invalid Credentials ')
             // handleFormSubmit(data.data[]);

        }
      }
    )
  };
    
   function emailidHandler(event){
        event.preventDefault();
        setemailid(event.target.value)
      
      }
      function passwordHandler(event){
        event.preventDefault();
        setpassword(event.target.value);
      
    }
  return (
    <form className="inside_form" onSubmit={submitHandler}>
    
        <div className="frm_grp">
            <label>Email</label>
            <input 
                className="frm_fld"
                type="email"
                name="email"
                value={emailid}
                onChange={(event)=>{emailidHandler(event)}}
            />
            <span className={`error ${errors.email ? 'invalid' : ''}`}>{errors.email}</span>
        </div>
        <div className="frm_grp">
            <label>Password</label>
            <input
                className="frm_fld"
                type="password"
                name="password"
                value={password}
                onChange={(event)=>{passwordHandler(event)}}
            />
            <span className={`error ${errors.password ? 'invalid' : ''}`}>{errors.password}</span>
        </div>
        <button className="sbmt_btn" type="submit">Submit</button>
    </form>
    
  );
}

export default Login;

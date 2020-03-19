import React ,{Component} from 'react';
import './login.css';

import axios from '../axios/base';
class Login extends Component{

    usernameInput=null;
    passInput=null;

    onSubmit= (e)=> {
        e.preventDefault();
        let email= this.usernameInput.value;
        let password= this.passInput.value;
        let data = {email , password};
        
        if(email == 'eve.holt@reqres.in' && password == 'cityslicka'){

            // ** console.log(data);
          //  let p =new Promise((ok, nok) => {
              //  ok({token: 'dasdasda'});
                // nok({message: 'nashod'});
           // });



           
            axios.post('https://reqres.in/api/login', data)
                  .then((respons)=>{
                    this.saveLoginData(respons.data);
                    console.log(respons);


                })
              .catch((err)=>{console.log(err);
                });

       }
        else{
            alert('اطلاعات وارد شده اشتباه است')
        }
       
    }

     saveLoginData =(userData)=>{
        //console.log(userData);

        let data1 ={
             token: userData.token,
          //  name: userData.name,
            //pantone_value : userData. pantone_value,
       };
        localStorage.setItem('users' , JSON.stringify(data1));
        this.props.history.push('/panelAdmin');
    }
 


    render(){
        return(
            <div className="Login">
                <form>
                    <div>
                        <label>نام کاربری:</label>
                        <input 
                            defaultValue="eve.holt@reqres.in"
                            ref={el=> this.usernameInput=el} type="text" placeholder="نام کاربری را وارد نمایید" className="inputn"/>

                    </div><br/>
                    <div>
                        <label>رمز عبور:</label>
                        <input 
                            defaultValue="cityslicka"
                            ref={el=> this.passInput=el} type="password" placeholder="رمز عبور را وارد کنید" className="inputp"/>

                    </div><br/>
                    <div>
                        
                        <button className="button" onClick={this.onSubmit}>ورود</button>

                    </div>
                </form>
            </div>

        );
    }

}
export default Login;
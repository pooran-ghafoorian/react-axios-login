import axios from 'axios';
 
let loginUser = localStorage.getItem('users');
if(loginUser){
    loginUser=JSON.parse(loginUser);
    console.log(loginUser);
}
else{
    loginUser = {id : null};
}
console.log(loginUser); 
const instance = axios.create({
    baseURL: "",
    timeout :2000,
    headers:{
        'Accept' : 'application/json' ,
        'content-Type': 'application/json',
        'Authorization': 'Bearer' + loginUser.name

    }
});
export default instance;

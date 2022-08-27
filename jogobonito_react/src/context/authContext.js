import { createContext,useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate} from 'react-router-dom'
import axios from "../constants/constants"

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children})=>{
    const navigate = useNavigate()
    const [phone_number, setPhone_number] = useState('')
    let [authTokens, setAuthTokens] = useState(()=>localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(()=>localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
  

    const [message,setMessage]= useState('')
    const [error,setErr]= useState('')       
const userLogin= async (email,password)=>{
    // console.log(email)
    // console.log(password)
    await axios.post('account/login/', {email:email,password:password}).then((response)=>{
       
        console.log(response.data,'LLLL')
        setAuthTokens(response.data.token)
        setErr(response.data.message) 
        console.log(response.data.message,'dfdfffddfdf')
        if(response.data.token){
            localStorage.setItem('authTokens',JSON.stringify(response.data))
            localStorage.setItem('user',JSON.stringify(jwt_decode(response.data.token)))
            navigate('/Home')

        }
       
        
       if(response.data.message){
        console.log('dfdfffddfdf')
       }

     
     
    })

console.log(authTokens)

  }
const logoutUser = async()=>{
    await axios.post('account/logout/',).then((response)=>{
        console.log(response.data)
      }) 
    setAuthTokens(null)           
    setUser(null)
    localStorage.removeItem('authTokens')
    navigate('/')
}
let userLogout = () => {
    setAuthTokens(null);
    setUser(null)
    localStorage.removeItem('authTokens')
    localStorage.removeItem('user')
    navigate( '/' )   
}
  
console.log(error)
    let contextData={
        user:user,
        phone_number:phone_number,
        setPhone_number:setPhone_number,
        userLogin:userLogin,
        logoutUser:logoutUser,
        userLogout:userLogout,
        message:message,
        setMessage:setMessage,
        error:error,


    }
    return(
        <AuthContext.Provider value={contextData}>,
            {children}
        </AuthContext.Provider>
    )
}
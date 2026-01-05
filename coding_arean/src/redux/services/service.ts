import axios from "axios";
export const signupAPi = async (data : any)=>{

  const response = await axios.post(
    "http://localhost:8000/api/account/register/",
    data
  ) 
  return response.data;

}
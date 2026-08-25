import api from "./axios";

export const loginUser = async (credentials) => {
  const response = await api.post(
    "/auth/login",
    credentials,
    {
        withCredentials:true
    }
  );

  return response;
};


export const registerUser = async (credentials) => {
    const response = await api.post(
        "/auth/register",
        credentials,{
            withCredentials:true
        }
    );
    return response;
}


export const getUser = async ()=>{
    const token = sessionStorage.getItem("token");
    const response = await api.get(
        "/auth/me",
        {
            withCredentials:true,
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }
    )

    return response;
}
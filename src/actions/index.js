// export const setUserData = (userdata) => {
//     console.log({userdata})
//     return {
//         type: "SET_USER_DATA",
//         payload:{
//             id:new Date().getTime().toString(),
//             data:userdata
//         }
//     }
// }
export const setUserData = (data) =>{
    return{
        type:"SET_USER_DATA",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
       
  
}
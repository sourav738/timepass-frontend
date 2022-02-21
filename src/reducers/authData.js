const initialData ={
   
}
const authData= (state=initialData,action) =>{
    console.log({state,action})
    switch(action.type){
        case "SET_USER_DATA":
            const {id,data} =action.payload;
            return{
                data:data
              
            }
            default: return state
    }
}
export default authData


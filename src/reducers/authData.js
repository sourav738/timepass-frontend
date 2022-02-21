const initialUserData={
    id:1,
    name:"sourav"
}
const authData= (state=initialUserData,action) =>{
    switch(action.type){
        case "SET_USER_DATA":
            return{
                state 
            }
            default: return state
    }

}
export default authData
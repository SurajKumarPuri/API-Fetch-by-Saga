import { RECEIVE_API_DATA ,DELETE_API_DATA} from "./Action";
let initialstate={
    dataarray:[],
}
const reducerData=(state=initialstate,action)=>{
    switch(action.type){
        case RECEIVE_API_DATA:
            return {
                dataarray:action.data,
            }
            case DELETE_API_DATA:
                const Left=state.dataarray.slice(0,action.data)
                const Right=state.dataarray.slice(action.data+1)
                return {
                    dataarray:Left.concat(Right)
                }
        default: return state
    }
}
export default reducerData;

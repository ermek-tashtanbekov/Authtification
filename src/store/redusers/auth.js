const intialState = true

export default (state = intialState, action ) =>{
    if(!action.type == "TOGLE"){
        return !state
    }
    return state
}
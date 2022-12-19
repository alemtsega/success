export const Fname = (state ='yalemtsega' ,action) => {
   switch(action.type){
    case "NAME": 
    return action.payload
    default:
        return state
   }
}
export const Lname = (state ='Getachew' ,action) => {
   switch(action.type){
    case "LNAME": 
    return action.payload
    default:
        return state
   }
}
export const MyGender = (state ='adultmale' ,action) => {
   switch(action.type){
    case "myGender": 
    return action.payload
    default:
        return state
   }
}
export const Age = (state = 23 ,action) => {
   switch(action.type){
    case "AGE": 
    return action.payload
    default:
        return state
   }
}
export const Profession = (state ='Student' ,action) => {
   switch(action.type){
    case "PROFESSION": 
    return action.payload
    default:
        return state
   }
}
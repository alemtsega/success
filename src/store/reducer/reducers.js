import { combineReducers } from "redux";

import { Age, Fname, Lname, MyGender, Profession } from "./reducer";

export const reducers = combineReducers({
    firstName: Fname,
    lastName: Lname,
    Gender: MyGender ,
    age: Age,
    profession: Profession,
})
import { ANIMAL_LIST_FAIL, ANIMAL_LIST_REQUEST, ANIMAL_LIST_SUCCESS } from "../constrants/animalConstrans";

export const animalListReducer = (state ={animalData:[]}, action)=>{
    switch(action.type){
        case ANIMAL_LIST_REQUEST:
            return {loading:false};
        case ANIMAL_LIST_SUCCESS:
            return {loading: false, animalData: action.payload};
        case ANIMAL_LIST_FAIL:
            return {loading: true, error: action.payload};
            default:
      return state;
    }}
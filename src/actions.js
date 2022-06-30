import { CHANGE_SEARCHFIELD } from "./constants";

export const setSearchFiled = (text) => ({
    type: CHANGE_SEARCHFIELD,
    payload: text
})
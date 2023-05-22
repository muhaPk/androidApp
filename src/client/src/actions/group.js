import axios from "axios"
import {setGroup} from "../reducers/groupReducer"

import { HTTPS, URL } from "../../consts";
import { uploadFile } from "./file";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const createGroup = (name, description, file) => {
    return async dispatch => {
        try {

            const token = await AsyncStorage.getItem('secure_token');

            const {data} = await axios.post(`${HTTPS}${URL}/api/group/createGroup`, {
                name,
                description,
            }, {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            })

            dispatch(setGroup(data.groupResult))
            dispatch(uploadFile(data.groupResult._id, file.assets))

        } catch (error) {
            console.log("group.js createGroup catch", error, error.response)
        }
    }

}

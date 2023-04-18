import axios from "axios"
import {setGroupMessage} from "../reducers/groupMessgeReducer"

import {URL} from "../../consts"
import AsyncStorage from "@react-native-async-storage/async-storage";

export const createGroupMessage = (user_id, group_id, message) => {

    console.log("user_id, group_id, message", user_id, group_id, message);
    
    return async dispatch => {
        try {

            const token = await AsyncStorage.getItem('secure_token');

            const {data} = await axios.post(`${URL}/api/message/groupMessage`, {
                user_id,
                group_id,
                message,
            }, {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            })

            console.log("data.messageResult", data.messageResult);
            dispatch(setGroupMessage(data.messageResult))

        } catch (error) {
            console.log("message.js createGroupMessage catch", error, error.response)
        }
    }

}

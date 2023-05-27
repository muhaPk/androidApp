import axios from "axios"
import {setGroupMessage, addGroupMessage} from "../reducers/groupMessgeReducer"

import {HTTPS, URL} from "../../consts"
import AsyncStorage from "@react-native-async-storage/async-storage";

export const createGroupMessage = (
  user_id: string,
  group_id: string,
  message: string) => {

    return async (dispatch: any) => {
        try {

            const token = await AsyncStorage.getItem('secure_token');

            const {data} = await axios.post(`${HTTPS}${URL}/api/message/groupMessage`, {
                user_id,
                group_id,
                message,
            }, {
                headers: {
                    Authorization:`Bearer ${token}`,
                }
            })

            dispatch(setGroupMessage(data.messages))

        } catch (error) {
            console.log("message.js createGroupMessage catch", error, error.response)
        }
    }

}


export const getLastGroupMessages = (group_id: string) => {

    return async (dispatch: any) => {
        try {

            const token = await AsyncStorage.getItem('secure_token');

            const {data} = await axios.post(`${HTTPS}${URL}/api/message/getLastGroupMessages`, {
                group_id
            }, {
                headers: {
                    Authorization:`Bearer ${token}`,
                }
            })

            dispatch(addGroupMessage(data.messages));

        } catch (error) {
            console.log("message.js getLastGroupMessages catch", error, error.response)
        }
    }

}

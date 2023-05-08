import React, {FC} from 'react';
import axios from "axios"
import {setGroupMessage} from "../reducers/groupMessgeReducer"

import {URL} from "../../consts"
import AsyncStorage from "@react-native-async-storage/async-storage";

export const createGroupMessage: FC = (
  user_id: string,
  group_id: string,
  message: string) => {
    
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

            dispatch(setGroupMessage(data.messages))

        } catch (error) {
            console.log("message.js createGroupMessage catch", error, error.response)
        }
    }

}

import React, {FC} from 'react';
import axios from "axios"
import {setGroupMessage, addGroupMessage} from "../reducers/groupMessgeReducer"

import {HTTPS, URL} from "../../consts"
import AsyncStorage from "@react-native-async-storage/async-storage";

export const createGroupMessage: FC = (
  user_id: string,
  group_id: string,
  message: string) => {

    return async dispatch => {
        try {

            const token = await AsyncStorage.getItem('secure_token');

            const {data} = await axios.post(`${HTTPS}${URL}/api/message/groupMessage`, {
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


export const getLastGroupMessages: FC = (
  group_id: string,
  date: any) => {

    return async dispatch => {
        try {

            const token = await AsyncStorage.getItem('secure_token');

            const {data} = await axios.post(`${HTTPS}${URL}/api/message/getLastGroupMessages`, {
                group_id, date,
            }, {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            })

            if (date !== data.messages[0].date) {
                console.log("addGroupMessage", data.messages[0].message);
                dispatch(addGroupMessage(data.messages[0]))
            }


        } catch (error) {
            console.log("message.js getLastGroupMessages catch", error, error.response)
        }
    }

}

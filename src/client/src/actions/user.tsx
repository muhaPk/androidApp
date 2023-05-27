import axios from "axios"
import {setUser, setUsers} from "../reducers/usersReducer"
import {setGroups} from "../reducers/groupReducer"
import {HTTPS, URL} from "../../consts"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setFiles } from "../reducers/fileReducer";
import { setGroupMessage } from "../reducers/groupMessgeReducer";

export const registration = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${HTTPS}${URL}/api/auth/registration`, {
            email,
            password
        })
        console.log("user.js registration", response.data.message)
    } catch (error) {
        console.log("user.js registration catch", error, error.response)
    }
}

export const login = (email: string, password: string) => {
    return async (dispatch: any) => {
        try {
            const {data} = await axios.post(`${HTTPS}${URL}/api/auth/login`, {
                email,
                password
            })
            dispatch(setUser(data.user))
            dispatch(setUsers(data.users))
            dispatch(setGroups(data.groups))
            dispatch(setFiles(data.files))
            dispatch(setGroupMessage(data.groupMessages))
            await AsyncStorage.setItem('secure_token', data.token)

        } catch (error) {
            console.log("user.js login catch", error, error.response)
        }
    }

}
// export const auth = () => {
//
//     return async dispatch => {
//         try {
//
//             const token = await AsyncStorage.getItem('secure_token');
//
//             const response = await axios.get(`${HTTPS}${URL}/api/auth/auth`, {
//                 headers:{Authorization:`Bearer ${token}`}
//             })
//             dispatch(setUser(response.data.user))
//
//             await AsyncStorage.setItem('secure_token', response.data.token);
//
//
//         } catch (error) {
//             console.log("user.js auth catch", error, error.response)
//         }
//     }
//
// }

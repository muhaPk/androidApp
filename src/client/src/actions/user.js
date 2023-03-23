import axios from "axios"
import {setUser} from "../reducers/userReducer"
import {setGroups} from "../reducers/groupReducer"
import {URL} from "../../consts"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setFiles } from "../reducers/fileReducer";

export const registration = async (email, password) => {
    try {
        const response = await axios.post(`${URL}/api/auth/registration`, {
            email,
            password
        })
        console.log("user.js registration", response.data.message)
    } catch (error) {
        console.log("user.js registration catch", error, error.response)
    }
}

export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${URL}/api/auth/login`, {
                email,
                password
            })
            console.log("user.js login response", response.data)
            dispatch(setUser(response.data.user))
            dispatch(setGroups(response.data.groups))
            dispatch(setFiles(response.data.files))
            await AsyncStorage.setItem('secure_token', response.data.token)

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
//             const response = await axios.get(`${URL}/api/auth/auth`, {
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

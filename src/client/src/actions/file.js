import axios from "axios"
import {setFile} from "../reducers/fileReducer"
import AsyncStorage from '@react-native-async-storage/async-storage';

import {HTTPS, URL} from "../../consts"

export const uploadFile = (host_id, file) => {
    return async dispatch => {
        try {

            const token = await AsyncStorage.getItem('secure_token');

            const formData = new FormData()
            formData.append('file', {
                uri: file[0].uri,
                type: file[0].type,
                name: file[0].fileName,
            })
            formData.append('host_id', host_id)

            const response = await axios.post(`${HTTPS}${URL}/api/file/upload`, formData, {
                headers: {
                    Authorization:`Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: (ProgressEvent) => {
                    console.log("load", (ProgressEvent.loaded / ProgressEvent.total) * 100);
                }
            })
            dispatch(setFile(response.data))
            console.log("file.js upload", response)

        } catch (error) {
            console.log("file.js upload catch", error, error.response)
        }
    }

}

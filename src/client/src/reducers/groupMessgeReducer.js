import { createSlice } from "@reduxjs/toolkit";

const groupMessageReducer = createSlice( {
    name: 'groupMessage',
    initialState: {
        groupMessages: [],
    },
    reducers: {
        setGroupMessage(state, action) {
            state.groupMessages = action.payload
        },
        resetGroupMessage(state) {
            state.groupMessages = []
        }
    }
})

export default groupMessageReducer.reducer
export const {setGroupMessage, resetGroupMessage} = groupMessageReducer.actions

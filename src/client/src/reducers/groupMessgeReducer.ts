import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const groupMessageReducer = createSlice( {
    name: 'groupMessage',
    initialState: {
        groupMessages: [],
    },
    reducers: {
        setGroupMessage(state, action: PayloadAction<any>) {
            state.groupMessages = action.payload
        },
        addGroupMessage(state, action: PayloadAction<any>) {
            state.groupMessages.push(action.payload)
        },
        clearMessages(state) {
            state.groupMessages = []
        }
    }
})

export default groupMessageReducer.reducer
export const {setGroupMessage, addGroupMessage, clearMessages} = groupMessageReducer.actions

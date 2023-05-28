import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type groupMessagesType = {
    _id: string;
    user_id: string,
    group_id: string,
    message: string,
    date: string,
}

type InitialState = {
    groupMessages: groupMessagesType[],
}

const initialState: InitialState = {
    groupMessages: [],
}

const groupMessageReducer = createSlice( {
    name: 'groupMessage',
    initialState,
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

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const groupReducer = createSlice( {
    name: 'groups',
    initialState: {
        groups: [],
    },
    reducers: {
        setGroups(state, action: PayloadAction<any>) {
            state.groups = action.payload
        },
        setGroup(state, action: PayloadAction<any>) {
            state.groups.push(action.payload)
        },
        clearGroups(state) {
            state.groups = []
        }
    }
})

export default groupReducer.reducer
export const {setGroups, setGroup, clearGroups} = groupReducer.actions

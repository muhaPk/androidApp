import { createSlice } from "@reduxjs/toolkit";

const groupReducer = createSlice( {
    name: 'groups',
    initialState: {
        groups: [],
    },
    reducers: {
        setGroups(state, action) {
            state.groups = action.payload
        },
        setGroup(state, action) {
            state.groups.push(action.payload)
        },
        resetGroups(state) {
            state.groups = []
        }
    }
})

export default groupReducer.reducer
export const {setGroups, setGroup, resetGroups} = groupReducer.actions

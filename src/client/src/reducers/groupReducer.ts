import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type groupsType = {
    _id: string;
    name: string;
    description: string;
    followers_count: number;
    coordX: number;
    coordY: number;
    avatar: string;
}

type InitialState = {
    groups: groupsType[],
}

const initialState: InitialState = {
    groups: [],
}

const groupReducer = createSlice( {
    name: 'groups',
    initialState,
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

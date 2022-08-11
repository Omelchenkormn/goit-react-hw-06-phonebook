import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid/non-secure';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        filter: '',
    },
    reducers: {
        addContact(state, action) {
            state.items.push({
                id: nanoid(),
                name: action.payload.name,
                number: action.payload.number,
            });
        },
        deleteContact(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload)
         },
        changeFilter(state, {payload}) {
            state.filter = payload
        },
    },
});

export const { addContact, deleteContact, changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
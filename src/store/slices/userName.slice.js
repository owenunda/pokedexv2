import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userNameSlice = createSlice({
		name: 'userNameSlice',
    initialState: "",
    reducers: {
        nameUSer: (state, actions) => {
            // en el return esta el nombrel de usuario
            return actions.payload
        }
    }
})

export const { nameUSer } = userNameSlice.actions;

export default userNameSlice.reducer;
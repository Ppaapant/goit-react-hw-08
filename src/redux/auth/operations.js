import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const setAuthHeader = (value) => {
    axios.defaults.headers.common.Authorization = value;
}


export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post('/users/signup', credentials);
            setAuthHeader(`Bearer ${response.data.token}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
        
    }
)

export const logIn = createAsyncThunk(
    'auth/login',
    async (credetials, thunkAPI) => {
        try{
            const response = await axios.post('/users/login', credetials);
            setAuthHeader(`Bearer ${response.data.token}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const logOut = createAsyncThunk('auth/logout', async () => {
    await axios.post('/users/logout')
})
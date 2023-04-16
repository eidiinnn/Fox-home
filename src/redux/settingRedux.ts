import { settingsSlice } from './settings'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

const reducer = combineReducers({
   settings: settingsSlice.reducer,
})

export const store = configureStore({
   reducer,
})

type RootState = ReturnType<typeof reducer>
export const stateSelector = useSelector<RootState>

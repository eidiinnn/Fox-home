import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { initialState } from '../types/settings'
import { saveOnDatabase } from '../indexDB/indexDbFunctions'

export const settingsSlice = createSlice({
   name: 'settings',
   initialState: {
      bookmarkLinks: [
         'https://discord.com/channels/@me',
         'https://github.com/',
         'https://www.reddit.com/',
         'https://www.linkedin.com/',
         'https://web.whatsapp.com/',
         'https://www.notion.so/',
      ],
      AmPmTimerFormat: false,
      backgroundColor: '#000F16',
      textIconColor: '#96b1b0',
      backgroundColorOpacity: 0.1,
      backdropFilterBlur: 25,
      blurLevel: 2,
      borderRadius: 50,
      imagesFromDB: null,
      timezone: '',
      savingANewSetting: false,
      searchingForSettingsInDB: false,
      saveError: undefined,
   } as initialState,
   reducers: {},
   extraReducers(builder) {
      builder
         .addCase(saveSettings.pending, (state) => {
            state.savingANewSetting = true
            state.saveError = undefined
         })
         .addCase(saveSettings.rejected, (state, playload) => {
            state.savingANewSetting = false
            state.saveError = playload.error.message
         })
         .addCase(saveSettings.fulfilled, (state) => {
            state.savingANewSetting = false
         })
   },
})

export const saveSettings = createAsyncThunk(
   'settings/save',
   async (_state, thunkApi) => {
      // saveOnDatabase(ImageDocument, state.customIcons)
      localStorage.setItem('settings', JSON.stringify(thunkApi.getState()))
   }
)

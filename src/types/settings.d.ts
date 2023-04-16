export interface settings {
   bookmarkLinks: string[]
   AmPmTimerFormat: boolean
   backgroundColor: string
   textIconColor: string
   backgroundColorOpacity: number
   backdropFilterBlur: number
   blurLevel: number
   borderRadius: number
   imagesFromDB: string | null
   timezone: string
   image: string
}

export interface initialState extends settings {
   searchingForSettingsInDB: boolean
   savingANewSetting: boolean
   saveError: string | undefined
}

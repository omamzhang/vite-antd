/*
 * @Author: zyl omamzhange@gmail.com
 * @Date: 2024-03-12 12:01:15
 * @LastEditors: zyl omamzhange@gmail.com
 * @LastEditTime: 2024-03-13 22:08:20
 * @FilePath: /vite-antd/src/stores/global.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { create } from 'zustand'

type ThemeState =  {
  primaryColor?: string,
  linkColor?: string,
}
interface GlobalState extends ThemeState  {
  themeKey: string
}

interface GlobalActions {
  changeTheme: (themeKey: string) => void
}


const themeMap = {
  normal: {
    primaryColor: '#f69',
  },
  custom: {
    linkColor: 'red',
    primaryColor: '#3f3'
  }
}

const themeKeyInitial =  'normal';
const themeInitial:GlobalState = { themeKey: themeKeyInitial, ...themeMap[themeKeyInitial] }
const useGlobalStore = create<GlobalState & GlobalActions>()((set) => ({
  ...themeInitial,
  changeTheme: (themeKeyNew:string) => {
    // const a = themeMap[themeKeyNew??'normal'] ?? {};
    set({ themeKey: themeKeyNew });
  },
}))

export default useGlobalStore
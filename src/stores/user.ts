/*
 * @Author: zyl omamzhange@gmail.com
 * @Date: 2024-03-13 19:40:48
 * @LastEditors: zyl omamzhange@gmail.com
 * @LastEditTime: 2024-03-13 22:12:38
 * @FilePath: /vite-antd/src/stores/userInfo.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { create } from 'zustand'

export type UserInfo = {
    copyright?: string,
    token?: string,
    urls?: string[]
}

interface UserState extends UserInfo{
    
}

interface UserActions {
    setUserInfo: (info: object) => void
}

const userInitial: UserState | null | undefined =  {
    token: '',
    copyright: '',
    urls: []
};

const useCounterStore = create<UserState & UserActions>()((set, get) => ({
    ...userInitial,
    setUserInfo: (info) => {
        const infoNew = { ...get(), ...info };
        set(infoNew);
    },
}))

export default useCounterStore
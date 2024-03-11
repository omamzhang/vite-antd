import { create } from 'zustand'

interface GlobalState {
  themeKey: string
  primaryColor: string
  changeTheme: (themeKey: string) => void
}


const themeMap = {
  custome: {
    linkColor: 'red',
    primaryColor: '#3f3'
  }
}
const useGlobalStore = create<GlobalState>()((set) => ({
  themeKey: 'normal',
  primaryColor: '#f69',
  changeTheme: (themeKey) => set((state) => ({ ...themeMap[themeKey], themeKey  })),
}))

export default useGlobalStore
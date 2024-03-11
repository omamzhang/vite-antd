import { useState } from 'react'

import { RouterProvider } from 'react-router-dom'
import router from './router'
import useCounterStore from '@/stores/counter'
import useGlobalStore from './stores/global'

import { ConfigProvider, Calendar, Space } from 'antd'
import dayjs from 'dayjs'
import zhCN from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn'
import 'antd/dist/reset.css'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.less'

dayjs.locale('zh-cn');

function App() {
  const [count, setCount] = useState(0)

  const primaryColor = useGlobalStore((state) => state.primaryColor);
  const themeKey = useGlobalStore((state) => state.themeKey);
  const changeTheme = useGlobalStore((state) => state.changeTheme);

  const counter = useCounterStore((state) => state.counter)
  const increase = useCounterStore((state) => state.increase)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hi, Vite + React</h1>
      {/* <Calendar fullscreen={false} /> */}
      <div className="card">
        <button onClick={() => changeTheme('custome')}> changeTheme: {themeKey} </button>
        <button onClick={() => increase(1)}> global counter: {counter} </button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ConfigProvider
        locale={zhCN}
        theme={{
          token: {
            colorPrimary: primaryColor,
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </>
  )
}

export default App

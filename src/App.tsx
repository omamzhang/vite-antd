/*
 * @Author: zyl omamzhange@gmail.com
 * @Date: 2024-03-12 12:01:15
 * @LastEditors: zyl omamzhange@gmail.com
 * @LastEditTime: 2024-03-13 22:12:54
 * @FilePath: /vite-antd/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useEffect, useState } from 'react'

import { RouterProvider } from 'react-router-dom'
import router from '@/router'
import useCounterStore from '@/stores/counter'
import useGlobalStore from '@/stores/global'

import UserRequest from '@/api/UserRequest';
import useUserStore from '@/stores/user'

import { ConfigProvider } from 'antd'
import dayjs from 'dayjs'
import zhCN from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn'
import 'antd/dist/reset.css'

import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import './App.less'

dayjs.locale('zh-cn');

function App(props:object) {
  const [count, setCount] = useState(0)

  const primaryColor = useGlobalStore((state) => state.primaryColor);
  const themeKey = useGlobalStore((state) => state.themeKey);
  const changeTheme = useGlobalStore((state) => state.changeTheme);
  const setUserInfo = useUserStore((state) => state.setUserInfo)
  const userInfo = useUserStore((state) => state)
  // const userInfoCopy = useUserStore((state) => state?.copyright)
  console.log('props', props);
  
  const counter = useCounterStore((state) => state.counter)
  const increase = useCounterStore((state) => state.increase)
  const UserApi = new UserRequest();
  
   useEffect(()=> {
     UserApi.getUserInfo(`1`).then((res) => {
      console.log('res', res?.data?.copyright);
      setUserInfo(res?.data ?? {});
    });
  }, []);
  return (
    <div >
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
      <p> API DATA <br/> list length: {userInfo?.urls?.length} <br/> content: {userInfo?.copyright}</p>
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
    </div>
  )
}

export default App

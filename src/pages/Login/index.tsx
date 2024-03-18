/*
 * @Author: zyl omamzhange@gmail.com
 * @Date: 2024-03-12 12:01:15
 * @LastEditors: zyl omamzhange@gmail.com
 * @LastEditTime: 2024-03-15 22:02:02
 * @FilePath: /vite-antd/src/pages/Login/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// src/pages/Login/index.tsx
import { Link } from "react-router-dom";
import { Space, Calendar } from 'antd';
import useCounterStore from '@/stores/counter'
import { BusinessBaseHomePath } from '@/router'



const Login = () => {
  const counter = useCounterStore((state) => state.counter)
  const increase = useCounterStore((state) => state.increase)

  return <>
    <Space>
      <h2>Login Page</h2>
      <div>
        <button onClick={() => increase(1)}>global counter: {counter} </button>
        <Link to={BusinessBaseHomePath}>To Home</Link>
      </div>
      </Space>
      <Calendar  fullscreen={false} />
  </>
}

export default Login
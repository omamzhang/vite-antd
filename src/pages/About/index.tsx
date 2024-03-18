/*
 * @Author: zyl omamzhange@gmail.com
 * @Date: 2024-03-12 12:01:15
 * @LastEditors: zyl omamzhange@gmail.com
 * @LastEditTime: 2024-03-13 22:09:52
 * @FilePath: /vite-antd/src/pages/About/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// src/pages/About/index.tsx
import { Button, Space } from 'antd';
import useCounterStore from '@/stores/counter'


const About = () => {
  const counter = useCounterStore((state) => state.counter)
  const increase = useCounterStore((state) => state.increase)

  return  <Space>
      <div>About Page</div>
    <button onClick={() => increase(1)}> counter: {counter} </button>
    <Button type="primary">Primary</Button>
  </Space>
}

export default About
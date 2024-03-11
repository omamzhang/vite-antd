// src/pages/About/index.tsx
import { Button, ConfigProvider, Space } from 'antd';
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
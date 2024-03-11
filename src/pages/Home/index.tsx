// src/pages/Home/index.tsx
import { Button, ConfigProvider, Space } from 'antd';
import useCounterStore from '@/stores/counter'


const Home = () => {
  const counter = useCounterStore((state) => state.counter)
  const increase = useCounterStore((state) => state.increase)

  return  <Space>
      <div>Home Page</div>
    <button onClick={() => increase(1)}> counter: {counter} </button>
    <Button type="primary">Primary</Button>
  </Space>
}

export default Home
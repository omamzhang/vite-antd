// src/pages/Home/index.tsx
import { Button, ConfigProvider, Space, Calendar } from 'antd';
import useCounterStore from '@/stores/counter'


const Home = () => {
  const counter = useCounterStore((state) => state.counter)
  const increase = useCounterStore((state) => state.increase)

  return <>
    <Space>
      <h2>Home Page</h2>
      <div>
        <button onClick={() => increase(1)}>global counter: {counter} </button>
        <Button type="primary">Primary</Button>
      </div>
      </Space>
      <Calendar  fullscreen={false} />
  </>
}

export default Home
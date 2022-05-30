import { useState, useEffect, useRef } from 'react';
import { Button } from 'antd';
import Nav from '../../nav/index';

export default function (props: any) {
  const [count, setCount] = useState<number>(0);
  const ref = useRef(count);

  useEffect(() => {
    console.log(2233);
    ref.current = count;
  });

  function handleClk1() {
    setCount(count + 1);
    // console.log(count, 1)
  }

  function handleClk2() {
    setTimeout(() => {
      console.log(ref.current, 2);
    }, 3000);
  }

  return (
    <div>
      <Nav {...props} />
      <div>one</div>
      <p>you clicked {count} times</p>
      <div>
        <Button onClick={handleClk1}>click me</Button>
        <Button onClick={handleClk2}>async</Button>
      </div>
    </div>
  );
}

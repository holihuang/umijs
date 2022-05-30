import React, { useRef, useEffect } from 'react';
import { Button } from 'antd';
import { connect } from 'umi';

function List(props: any) {
  const { dispatch, list } = props;
  const { list: arr } = list;

  const ref1 = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // ref.current?.addEventListener('input', (e: any) => {
    //     console.log(e.target.value, 222)
    // })
    ref1.current?.addEventListener('click', (e) => {
      console.log(e.currentTarget, 555);
    });
  }, []);

  function handleClk() {
    dispatch({
      type: 'list/add',
    });
  }
  return (
    <div ref={ref1}>
      list
      <input ref={ref} />
      <Button type="primary" onClick={handleClk}>
        添加
      </Button>
      {arr.map((item: any, index: number) => {
        return <div key={index}>{item.name}</div>;
      })}
    </div>
  );
}

function mapStateToProps(state: any) {
  const { list } = state;
  return { list };
}

export default connect(mapStateToProps)(List);

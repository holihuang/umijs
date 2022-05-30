import React, { useEffect } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import http from '../../utils/http';

interface Props {
  dispatch: Function;
  detail: any;
}

function Detail(props: Props) {
  console.log(props, 112233);
  const { dispatch, detail } = props;
  useEffect(() => {
    http({
      method: 'get',
      url: '/a',
    }).then((res) => {
      console.log(res.data);
    });
  }, []);

  function handleClk() {
    console.log(1122);
    dispatch({
      type: 'detail/add',
    });
  }

  return (
    <div>
      detail
      <div>{detail.count}</div>
      <Button onClick={handleClk}>+</Button>
    </div>
  );
}

interface State {
  detail: Object;
}

export default connect((state: State) => {
  const { detail } = state;
  return { detail };
})(Detail);

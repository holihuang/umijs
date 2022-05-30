import { useEffect } from 'react';
import { Button } from 'antd';
import { connect } from 'dva';
import Nav from '../nav/index';

function Tom(props: any) {
  const {
    tom: { count },
    dispatch,
  } = props;

  useEffect(() => {
    return function () {
      dispatch({
        type: 'tom/reset',
      });
    };
  }, []);

  function handleClk() {
    dispatch({
      type: 'tom/add',
    });
  }

  return (
    <div>
      <Nav {...props} />
      tom {count}
      <Button onClick={handleClk}>+</Button>
    </div>
  );
}

function mapStateToProps(state: any) {
  const { tom } = state;
  return { tom };
}

export default connect(mapStateToProps)(Tom);

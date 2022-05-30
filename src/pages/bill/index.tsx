import { useEffect, useState, lazy, Suspense } from 'react';
import {
  useRequest,
  useMount,
  useUnmount,
  useTimeout,
  useEventListener,
  useSetState,
} from 'ahooks';
import http from '../../utils/http';
// import Nav from '../nav/index'
import { Button, DatePicker, Dropdown, Menu, Drawer } from 'antd';

interface State {
  hello: string;
  [key: string]: any;
  count: number;
}

export default function (props: any) {
  const { data, error, loading, run, cancel, refresh } = useRequest(
    (opt: any) => getUser(opt),
    {
      manual: true,
      onBefore: function (params) {
        console.log(params, 'before...');
      },
      onSuccess: function (...args) {
        console.log(args, 'success...');
      },
      onError: function (...args) {
        console.log(args, 'error...');
      },
      onFinally: function (...args) {
        console.log(args, 'finally...');
      },
    },
  );

  const [code, setCode] = useState<string>('');
  const [state, setState] = useSetState<State>({
    hello: '',
    count: 0,
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMount(() => {});

  useEventListener('keydown', (e) => {
    console.log(e.code);
    setCode(e.code);
  });

  useTimeout(() => {
    run({ a: 1, b: 2 });
  }, 3000);

  useUnmount(() => {
    console.log(555);
  });

  const Nav = lazy(() => import('../nav/index'));

  // useEffect(() => {
  // http({
  //     method: 'get',
  //     url: '/a',
  //     params: {id: 1}
  // }).then(res => {
  //     console.log(res.data.data, 555)
  // })
  // run({a: 1, b: 2})
  // }, [])

  function getUser(opt: any): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        http({
          method: 'get',
          url: '/a',
          params: { id: 1 },
        }).then((res) => {
          const {
            data: { data },
          } = res || {};
          // const { wendu } = data
          resolve(data);
        });
      }, 5000);
    });
  }

  function handleEdit() {
    refresh();
  }

  function handleCancel() {
    cancel();
  }

  function handleHello() {
    setState({
      hello: 'world',
    });
  }

  function handleFoo() {
    setState({
      foo: 'bar',
    });
  }

  function handleName() {
    setState({
      name: 'huang',
    });
  }

  function handleCount() {
    setState({
      count: state.count + 1,
    });
  }

  function handleChange(e: any) {
    const time = e ? e.format('YYYY-MM-DD') : '';
    console.log(time, 123456);
  }

  function handleOpen() {
    setVisible(true);
  }

  function onClose() {
    setVisible(false);
  }

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: <a href="http://www.baidu.com">1st menu item</a>,
        },
        {
          key: '2',
          label: <a href="http://www.baidu.com">2nd menu item</a>,
        },
      ]}
    />
  );

  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <Nav {...props} />
      </Suspense>
      <DatePicker onChange={handleChange} />
      <div>bill</div>
      <div>{code}</div>
      <div>{JSON.stringify(state, null, 2)}</div>
      <Button onClick={handleHello}>set hello</Button>
      <Button onClick={handleFoo}>set foo</Button>
      <Button onClick={handleName}>set name</Button>
      <Button onClick={handleCount}>set count</Button>
      <br />
      <Button onClick={handleEdit}>edit</Button>
      <Button onClick={handleCancel}>cancel</Button>
      <br />
      <Dropdown overlay={menu}>
        <a>hover me</a>
      </Dropdown>
      <br />
      <Button type="primary" onClick={handleOpen}>
        open
      </Button>
      <Drawer
        title="basic drawer"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <p>this is some sentecnes</p>
        <p>this is some sentecnes</p>
        <p>this is some sentecnes</p>
      </Drawer>
      <div>
        {error ? <div>{error.message}</div> : null}
        {loading ? <div>loading</div> : null}
        {data && !loading ? <div>温度是 {data.wendu}℃</div> : null}
      </div>
    </div>
  );
}

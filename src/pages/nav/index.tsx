import { Breadcrumb } from 'antd';

export default function (props: any) {
  return (
    <Breadcrumb style={{ margin: '10px 0' }}>
      {props.route.path
        .slice(1)
        .split('/')
        .map((item: string, index: number) => {
          return <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>;
        })}
    </Breadcrumb>
  );
}

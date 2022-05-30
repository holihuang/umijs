import Nav from '../nav/index';
import usePosition from '@/hooks/usePosition';

export default function (props: any) {
  const position = usePosition();
  console.log(position, 2233);
  return (
    <div>
      <Nav {...props} />
      <div>alex</div>
      <div>
        x的位置{position.x}
        y的位置{position.y}
      </div>
    </div>
  );
}

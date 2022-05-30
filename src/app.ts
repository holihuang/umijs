import { history } from 'umi';

export function render(oldRender: any) {
  if (Math.random() > 0.5) {
    history.push('/team');
    oldRender();
  } else {
    history.push('/login');
    oldRender();
  }
}

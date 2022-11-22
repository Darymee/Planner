import css from './TaskCounter.module.css';
import { useSelector } from 'react-redux';

import { selectTaskCount } from 'redux/selectors';

export const TaskCounter = () => {
  const count = useSelector(selectTaskCount);
  return (
    <div>
      <p className={css.text}>{count.active}</p>
      <p className={css.text}>{count.completed}</p>
    </div>
  );
};

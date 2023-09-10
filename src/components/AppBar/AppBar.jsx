import { StatusFilter } from 'components/StatusFilter/StatusFilter';
import { TaskCounter } from 'components/TaskCounter/TaskCounter';
import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <>
      <span className={css.logo}>Planner 📒</span>
      <header className={css.wrapper}>
        <section className={css.section}>
          <h2 className={css.title}>Tasks</h2>
          <TaskCounter />
        </section>
        <section className={css.section}>
          <h2 className={css.title}>Filter by status</h2>
          <StatusFilter />
        </section>
      </header>
    </>
  );
};

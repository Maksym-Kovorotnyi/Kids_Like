import CardList from 'components/CardList/CardList';
import CurrentDay from 'components/CurrentDay/CurrentDay';
import CurrentWeekRange from 'components/CurrentWeekRange/CurrentWeekRange';
import NoTasks from 'components/NoTasks/NoTasks';
import ProgressBar from 'components/ProgressBar/ProgressBar';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/Auth/AuthSelectors';

const WeekTabContent = ({ selectedDate }) => {
  const tasks = useSelector(selectTasks);
  // const tasks = {};

  let data = null;

  if (!tasks) {
    data = <div>Loader</div>;
  } else {
    data = tasks.length ? (
      <div>
        <CardList tasks={tasks} />
      </div>
    ) : (
      <NoTasks />
    );
  }
  return (
    <>
      <CurrentWeekRange />
      <CurrentDay selectedDate={selectedDate} />
      <ProgressBar />
      <div>{data}</div>
    </>
  );
};

export default WeekTabContent;
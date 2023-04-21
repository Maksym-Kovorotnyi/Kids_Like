import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tasksArray } from 'redux/Planinning/PlanningSelectors';
import { ReactComponent as AddTask } from '../../images/addTask.svg';
import { addWeekdayCheck } from 'redux/Planinning/PlanningSlice';
import { refreshTaskDay } from 'redux/Planinning/PlanningOperations';

function PlanningList() {
  const taskArray = useSelector(tasksArray);
  const dispatch = useDispatch();
  const [addTaskClick, setaddTaskClick] = useState(false);
  const [taskId, settaskId] = useState(null);

  useEffect(() => {
    // dispatch(addWeekdayCheck());
  });

  const handleAddTask = e => {
    setaddTaskClick(true);
    settaskId(e.currentTarget.parentNode.id);
  };

  const handleCheckBox = e => {
    const { name, checked } = e.target;
    switch (name) {
      case 'MO':
        dispatch(addWeekdayCheck([0, 1, checked]));
        break;
      case 'TU':
        dispatch(addWeekdayCheck([1, 1, checked]));
        break;
      case 'WE':
        dispatch(addWeekdayCheck([2, 1, checked]));
        break;
      case 'TH':
        dispatch(addWeekdayCheck([3, 1, checked]));
        break;
      case 'FR':
        dispatch(addWeekdayCheck([4, 1, checked]));
        break;
      case 'SA':
        dispatch(addWeekdayCheck([5, 1, checked]));
        break;
      case 'SU':
        dispatch(addWeekdayCheck([6, 1, checked]));
        break;
      default:
        return;
    }
    dispatch(refreshTaskDay(taskId));
  };
  return (
    <>
      <ul>
        {taskArray?.map(({ _id, title, reward, imageUrl }) => {
          return (
            <li key={_id} id={_id}>
              <img src={imageUrl} alt="" />
              <h2>{title}</h2>
              <p>{reward}</p>
              <AddTask onClick={handleAddTask} />
              {addTaskClick ? (
                <form onChange={handleCheckBox}>
                  <input type="checkbox" name="MO" />
                  <p>Mo</p>
                  <input type="checkbox" name="TU" />
                  <span></span>
                  <p>Tu</p>
                  <input type="checkbox" name="WE" />
                  <span></span>
                  <p>We</p>
                  <input type="checkbox" name="TH" />
                  <span></span>
                  <p>Th</p>
                  <input type="checkbox" name="FR" />
                  <span></span>
                  <p>Fr</p>
                  <input type="checkbox" name="SA" />
                  <span></span>
                  <p>Sa</p>
                  <input type="checkbox" name="SU" />
                  <span></span>
                  <p>Su</p>
                </form>
              ) : (
                ''
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default PlanningList;

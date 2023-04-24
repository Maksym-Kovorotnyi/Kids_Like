import Card from 'components/Card/Card';
import React from 'react';

const CardList = ({ tasks }) => {
  return (
    <>
      <ul>
        {tasks?.map(task => {
          return (
            <li key={task.id || task._id}>
              <Card {...task} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CardList;

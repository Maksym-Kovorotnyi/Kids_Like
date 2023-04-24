import CardBody from 'components/CardBody/CardBody';
import CardFooter from 'components/CardFooter/CardFooter';
import React from 'react';

const Card = ({ ...task }) => {
  const { imageUrl, ...taskInfo } = task;
  const { title } = taskInfo;
  return (
    <>
      <article>
        <CardBody img={imageUrl} alt={title} />
        <CardFooter {...taskInfo} />
      </article>
    </>
  );
};

export default Card;

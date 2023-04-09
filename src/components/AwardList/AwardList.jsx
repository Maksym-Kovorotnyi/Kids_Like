import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGifts } from 'redux/Award/AwardOperations';
import { allGifts } from 'redux/Award/AwardSelectors';

export default function AwardList() {
  const gifts = useSelector(allGifts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGifts());
  }, [dispatch]);
  return (
    <div>
      <ul>
        {gifts.map(({ title, price, imageUrl, id, isSelected }) => {
          return (
            <li key={id}>
              <img src={imageUrl} alt="" />
              <h2>{title}</h2>
              <p>{price}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGifts } from 'redux/Award/AwardOperations';
import { allGifts, giftIds } from 'redux/Award/AwardSelectors';
import { ReactComponent as Selected } from '../../images/Selected.svg';
import { ReactComponent as Unselected } from '../../images/Unselected.svg';
import { addGiftId } from 'redux/Award/AwardSlice';

export default function AwardList() {
  const gifts = useSelector(allGifts);
  const ids = useSelector(giftIds);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGifts());
  }, [dispatch]);

  const handleTogleSelected = e => {
    if (e.target.nodeName === 'rect') {
      ids.forEach(id => {
        if (Number(id) === Number(e.currentTarget.id)) {
          return;
          gifts.forEach(({ isSelected }) => (isSelected = true));
          dispatch(addGiftId(Number(e.currentTarget.id)));
        }
      });
    }
    console.log(gifts);
  };

  return (
    <div>
      <ul>
        {gifts.map(({ title, price, imageUrl, id, isSelected }) => {
          return (
            <li onClick={handleTogleSelected} key={id} id={id}>
              <img src={imageUrl} alt="" />
              <h2>{title}</h2>
              <p>{price}</p>
              {isSelected ? <Selected /> : <Unselected />}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

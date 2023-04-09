import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGifts } from 'redux/Award/AwardOperations';
import { allGifts } from 'redux/Award/AwardSelectors';
import { ReactComponent as Selected } from '../../images/Selected.svg';
import { ReactComponent as Unselected } from '../../images/Unselected.svg';
import { addGiftId } from 'redux/Award/AwardSlice';

export default function AwardList() {
  const gifts = useSelector(allGifts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGifts());
  }, [dispatch]);

  const handleTogleSelected = e => {
    dispatch(addGiftId());
    if (e.target.nodeName === 'rect') {
      console.dir(e.currentTarget.id);
    }
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

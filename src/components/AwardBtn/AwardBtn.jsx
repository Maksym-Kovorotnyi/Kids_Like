import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyGifts } from 'redux/Award/AwardOperations';

export default function AwardBtn() {
  const stateBody = useSelector(state => state.award);
  const dispatch = useDispatch();

  const handleConfirmBtn = () => {
    dispatch(buyGifts(stateBody));
  };

  return (
    <div>
      <button onClick={handleConfirmBtn} type="button">
        confirm
      </button>
    </div>
  );
}

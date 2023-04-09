import React from 'react';
import { ReactComponent as GiftBox } from '../../images/giftBox.svg';

export default function AwardTitles() {
  return (
    <div>
      <span>
        <GiftBox />
        <h1>MY PRIZES</h1>
      </span>
      <p>Points earned this week:</p>
      <p>Planned points for this week:</p>
    </div>
  );
}

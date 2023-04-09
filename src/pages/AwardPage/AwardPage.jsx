import AwardBtn from 'components/AwardBtn/AwardBtn';
import AwardList from 'components/AwardList/AwardList';
import AwardTitles from 'components/AwardTitles/AwardTitles';
import React from 'react';

const AwardPage = () => {
  return (
    <div>
      <AwardTitles />
      <AwardList />
      <AwardBtn />
    </div>
  );
};

export default AwardPage;

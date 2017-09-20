import React from 'react';
import Sticky from './Sticky';

const StickyList = ({ stickyList, deleteStickyFunction }) => {
  
  const displayStickies = stickyList.map( sticky => {
    return(
      <Sticky 
        stickyObject={ sticky } 
        deleteStickyFunction={ deleteStickyFunction }
      />
    )
  })

  return(
    <div>
      { displayStickies }
    </div>
  )
}
  


export default StickyList;
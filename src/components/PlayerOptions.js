import React from 'react'

export default function (props) {

  const {className, classNameButtons, onClickScissors, onClickPaper, onClickRock, titleMessage} = props;

  return(
    <div className={className}>
      <div>
        {titleMessage}
      </div>
      <div>
        <button className={classNameButtons} onClick={onClickScissors}>Scissors</button>
      </div>
      <div>
        <button className={classNameButtons} onClick={onClickPaper}>Paper</button>
      </div>
      <div>
        <button className={classNameButtons} onClick={onClickRock}>Rock</button>
      </div>
    </div>
  );
}

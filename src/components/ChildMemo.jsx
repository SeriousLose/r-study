import React from 'react';

function ChildMemo({ seconds }) {
  console.log('I am rendering');
  return <div>I am update every {seconds} seconds</div>;
}

function areEqual(prevProps, nextProps) {
  if (prevProps.seconds === nextProps.seconds) {
    return true;
  } else {
    return false;
  }
}
export default React.memo(ChildMemo, areEqual);
// export default React.memo(ChildMemo);
// export default ChildMemo;

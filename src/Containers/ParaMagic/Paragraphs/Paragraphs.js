import React from 'react';
import Books from './Books/Books';
const Paragraphs = props => {
  const Number = props.counter;
  var arr = new Array();
  for (var i = 0; i < Number; i++) {
    arr[i] = i;
  }

  return (
    <>
      {arr.map(Element => {
        return <Books key={Element} />;
      })}
    </>
  );
};

export default Paragraphs;

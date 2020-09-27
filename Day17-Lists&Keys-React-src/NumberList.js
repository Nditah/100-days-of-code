// LIST AND KEYS

// import React from 'react';

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((n)=><li key={n.toString()}>{n}</li>);
//   console.log(listItems);

//   return (
//   <ul>{listItems}</ul>
//   );
// }

// export default NumberList;

// ======================================================================

// EXTRACTING COMPONENTS WITH KEYS

// import React from 'react'
// function ListItem(props) {
// return <li>{props.value}</li>
// }

// export default function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map(n=> 
//   <ListItem key={n.toString()} value={n}/>
//   );
//   return (
//     <ul>
//       {listItems}
//     </ul>
//   )
// }

// ======================================================================

// EMBEDDING MAP() IN JSX

import React from 'react'
function ListItem(props) {
return <li>{props.value}</li>
}

export default function NumberList(props) {
  const numbers = props.numbers;
  return (
    <div className="section">
      <ul>
      {numbers.map((number) => 
    <ListItem key={number.toString()} value={number*2} />
  )}
  </ul>
    </div>
  )
}








import React from 'react';

const Hello = () => {
// return (
//     <div>
//         <h1>Hello Pranjal Srivastav
//             without JSX
//         </h1>
//     </div>
// )
return React.createElement('div', null, <h1>Hello with JSX</h1>)
}

export default Hello;
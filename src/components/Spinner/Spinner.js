import React, { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

import { isLoading } from '../../redux/global/global-selectors';
import { useSelector } from 'react-redux';

// export default function Spinner() {
//   const stateIsLoading = useSelector(isLoading);
//   return (
//     <>
//       {stateIsLoading && (
//         <Loader
//           type="Puff"
//           color="#00BFFF"
//           height={100}
//           width={100}
//           timeout={3000} //3 secs
//         />
//       )}
//     </>
//   );
// }

export default class Spinner extends React.Component {
  //other logic
  render() {
    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={200}
        width={200}
        timeout={3000} //3 secs
      />
    );
  }
}

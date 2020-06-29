import React from 'react';
import { inject, observer } from 'mobx-react';
import { RouterStore } from 'mobx-react-router';

import LandingPage from './pages/LandingPage'
import logo from './logo.svg';
import './App.less';

interface IAppProps{
  routing?: RouterStore
}
@inject('routing')
@observer
export default class App extends React.Component<IAppProps> {
  render() {
    const { location, push, goBack } = this.props.routing!;

    return (
      <div>
        <span>Current pathname: {location.pathname}</span>
        <button onClick={() => push('/test')}>Change url</button>
        <button onClick={() => goBack()}>Go Back</button>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div >
//       <LandingPage />
//     </div>
//   );
// }


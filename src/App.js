import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';

const App = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="App" className='app-container'>
      <header className="App-header">
        <h2>Hello world with Phuc &amp; Minh Phuc</h2>

        {/* Render component đầu tiên của bạn ở đây */}
        <MyComponent />

        <hr style={{ width: '100%', margin: '20px 0' }} />

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>Count = {count}</div>
        <div style={{ marginTop: '10px' }}>
          <button onClick={() => dispatch(increaseCounter())}>Increase</button>
          <button onClick={() => dispatch(decreaseCounter())} style={{ marginLeft: '10px' }}>Decrease</button>
        </div>
      </header>
    </div>
  );
}

export default App;
import { useSelector, useDispatch } from 'react-redux';
import { counterSelector, incremented, decremented } from './store/slices/counterSlices';
import style from './App.module.css';

function App() {
  const count = useSelector(counterSelector.getCounter);
  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      <h1>{count}</h1>
      <button className={style.increment} onClick={() => dispatch(incremented())}>Increment</button>
      <button className={style.decrement} onClick={() => dispatch(decremented())}>Decrement</button>
    </div>
  );
}

export default App;

import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks';
import { incremented, amountAdded } from './features/counter/counter-slice';
import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice';

function App() {
  const [value, setValue] = useState<number>(0)
  const [numDogs, setNumDogs] = useState<number>(10);
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

  const handleIncrementCounter = () => {
    dispatch(incremented());
  }

  const handleAmountAdded = (num: number) => {
    dispatch(amountAdded(num))
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>Dogs to fetch:</p>
          <select value={numDogs} onChange={(e) => { setNumDogs(+e.target.value) }}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
        </div>
        <div>
          <p>Number of dogs fetched {data.length}</p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {data.map((breed) => (
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td>
                    <img src={breed.image.url} alt={breed.name} height={250} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          <button onClick={handleIncrementCounter}>
            count is: {count}
          </button>
        </p>
        <p>
          <input type="number" onChange={(e) => {
            setValue(+e.target.value);
          }} />
          <button onClick={() => handleAmountAdded(value)}>
            Add amount
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App

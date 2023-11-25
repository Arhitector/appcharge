import Bundles from './containers/bundles';
import useFetchWithDelay from './lib/fetch';
import { data } from './data';
import { IBundle } from './types/bundle';

const url = 'https://cors-anywhere.herokuapp.com/https://pastebin.com/raw/DMnfphQ7';

function App() {
  const {
    // data,
    loading,
    // error,
  } = useFetchWithDelay<IBundle[]>(url);

  if (loading) return <div>Loading...</div>;

//   if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="App">
      	{ data?.length && <Bundles elements={data} /> }
    </div>
  );
}

export default App;

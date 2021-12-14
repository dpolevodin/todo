import { Provider } from "react-redux";
import { store } from "./store";
import { Table } from "./Components/Table/Table";

function App() {
  return (
    <Provider store={store}>
      <Table />
    </Provider>
  );
}

export default App;

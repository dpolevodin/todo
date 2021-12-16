import { Provider } from "react-redux";
import { store } from "./store";
import { Table } from "./Components/Table/Table";
import "./style/style.css";
import { SvgSprite } from "./Components/Common/Icons/Sprite/SVGsprite";

function App() {
  return (
    <Provider store={store}>
      <Table />
      <SvgSprite />
    </Provider>
  );
}

export default App;

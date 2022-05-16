
import './App.css';
import DesktopTable from "./components/DesktopTable";
import MobileTable from "./components/MobileTable";
import Table from "./components/Table";

import Popup from "./components/Popup";
import Modal from "./components/Modal";
import DropdownList from "./components/DropdownList";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import CollapsedList from "./components/collapsed-list/collapsed-list";


function App() {



    return (
    <div className="App">
        {/*<Header />*/}
        {/*<Table />*/}
        {/*<Modal />*/}
        {/*<ListItem />*/}
        <CollapsedList/>
    </div>
  );
}

export default App;

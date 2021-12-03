// Essential imports
import { Route } from "react-router-dom";

// Components
import Navbar from "./components/og -oldnavbar";
import Edit from "./components/edit";
import Create from "./components/og -create";
import RecordList from "./components/recordList";

const ogApp = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <RecordList />
      </Route>
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create">
        <Create />
      </Route>
    </div>
  );
};

export default ogApp;

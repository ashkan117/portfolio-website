import './App.css';
import {
    Switch,
    Route
} from 'react-router-dom';
import Home from "./components/Home.js";
import WorkExperience from "./components/WorkExperience.js";
import ProjectExperience from "./components/ProjectExperience.js";

export default function App() {
  return (
        <Switch>
      <Route exact path="/" component={Home}/>
            <Route path="/work-experience" component={WorkExperience }/>
            <Route path="/project-experience" component={ProjectExperience }/>
      </Switch>
  );
}

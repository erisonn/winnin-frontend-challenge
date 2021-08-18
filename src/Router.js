import { Switch, Route } from "react-router-dom";
import Feed from "./pages/feed";

const Router = () => {
    return ( 
        <Switch>
            <Route exact path ="/r/:sub?" component={Feed}/>  
            <Route exact path ="/r/:sub?/:sort?" component={Feed}/>
            <Route exact path ="/" component={Feed}/>
            <Route exact path ="/:sort?" component={Feed}/>
        </Switch>
    );
}
 
export default Router;
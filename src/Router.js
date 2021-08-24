import { Switch, Route } from "react-router-dom";
import FeedWrapper from "./pages/feedWrapper";

const Router = () => {
    return ( 
        <Switch>
            <Route exact path ="/r/:sub?" component={FeedWrapper}/>  
            <Route exact path ="/r/:sub?/:sort?" component={FeedWrapper}/>
            <Route exact path ="/" component={FeedWrapper}/>
            <Route exact path ="/:sort?" component={FeedWrapper}/>
        </Switch>
    );
}
 
export default Router;
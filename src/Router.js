import { Switch, Route } from "react-router-dom";
import PostList from './components/PostList'

const Router = () => {
    return ( 
        <Switch>
            <Route path ="/r/:sub?/:sort?" component={PostList}/>
            <Route path ="/r/:sub?" component={PostList}/>
            <Route path ="/:sort?" component={PostList}/>
        </Switch>
    );
}
 
export default Router;
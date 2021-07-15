import { Switch, Route } from "react-router-dom";
import PostList from './components/PostList'

const Router = () => {
    return ( 
        <Switch>
            <Route path ="/r/:sub?/:feed?" component={PostList}/>
            <Route path ="/r/:sub?" component={PostList}/>
            <Route path ="/:feed?" component={PostList}/>
        </Switch>
    );
}
 
export default Router;
import { Switch, Route } from "react-router-dom";
import PostList from './components/PostList'

const Router = () => {
    return ( 
        <Switch>
            <Route path ="/reactjs/:feed?" component={PostList}/>
        </Switch>
    );
}
 
export default Router;
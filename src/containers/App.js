import React, { Component,PropTypes } from 'react';
import '../App.css';
import {BrowserRouter,Route,Redirect} from 'react-router-dom';
import TabMenu from '../components/TabMenu';
import stringArray from '../components/dummyTable';
class App extends Component {
    static propTypes = {
        tabsArray: PropTypes.array.isRequired
    };
reorderData () {
this.props.tabsArray.sort(
function(a,b) {
if (a.order > b.order) return 1;
else if (a.order < b.order) return -1;
else return 0
}
)
 };
render() {
this.reorderData();
    return (
        <BrowserRouter>
        <div>
            <TabMenu tabsArray={this.props.tabsArray}/>
            <Redirect exact from="/" to={`/${this.props.tabsArray[0].id}`}/>
                { this.props.tabsArray.map((item,index)=>
                    <div key={item.id}>
                        <Route path={`/${item.id}`} component={stringArray[index]}/>
                    </div>
                )
                }
        </div>
        </BrowserRouter>
    );
  }
}

export default App;

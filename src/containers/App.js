import React, { Component,PropTypes } from 'react';
import '../App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import TabMenu from '../components/TabMenu';
import compArray from '../components/dummyTable';
class App extends Component {
    static propTypes = {
        tabsArray: PropTypes.array.isRequired
    };

  render() {
    return (
        <BrowserRouter>
        <div>
            <TabMenu tabsArray={this.props.tabsArray}/>
            <Route exact path="/" component={compArray[0]}/>
                { this.props.tabsArray.map((item,index)=>
                    <div key={item.id}>
                        <Route path={`/${item.id}`} component={compArray[index]}/>
                    </div>
                )
                }
        </div>
        </BrowserRouter>
    );
  }
}

export default App;

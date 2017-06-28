/**
 * Created by Михаил on 22.06.2017.
 */
import React,{Component,PropTypes} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
export default class TabMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabValue: 0
        }
    }
 static PropTypes = {
 tabsArray: PropTypes.array.isRequired
 };
handleChange = (value) => {
this.setState({
tabValue: value,

});

};
 render() {
     if (this.props.tabsArray)
     return (
         <div className="container">
             {this.props.tabsArray.map(
                     (item,index) =>
                         <div key={item.order}>
                               <Link
                                   className={this.state.tabValue===item.order?'menu-elem-active':'menu-elem'}
                                   to={`/${item.id}`} onClick={()=>this.handleChange(item.order)}>
                                 { item.title}
                               </Link>
                         </div>
                 ) }
         </div>
     );
     else return (<div>...</div>)
 }
}
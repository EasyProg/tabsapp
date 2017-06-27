/**
 * Created by Михаил on 20.06.2017.
 */
import React, { Component, PropTypes } from 'react';
import tabs from '../tabs.json';
function Mapping (tabsArray) {
    var Arr = [];
    tabsArray.map((item,index)=>
       Arr.push(require('../'+item.path).default)
    );
return Arr;
}
var stringArray = Mapping(tabs);
// class DummyTable extends Component {
//   render() {
//       return кугe
//           <table><tr><td>Dummy</td><td>DummyTable</td></tr></table>
//       )
// }
// }
// class DummyChart extends Component {
//     render() {
//         return (
//             <table><tr><td>Title</td><td>DummyChart</td></tr></table>
//         )
//     }
// }
// class DummyList extends Component {
//     render() {
//         return (
//             <table><tr><td>Title</td><td>DummyList</td></tr></table>
//         )
//     }
// }
// class LastFolder extends Component {
//     render() {
//         return (
//             <table><tr><td>Title</td><td>LastFolder</td></tr></table>
//         )
//     }
// }
// const compArray = [DummyList,DummyTable,DummyChart,LastFolder];
export default stringArray


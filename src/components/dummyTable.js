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
export default stringArray


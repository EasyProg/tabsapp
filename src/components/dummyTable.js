/**
 * Created by Михаил on 20.06.2017.
 */
import React, { Component, PropTypes } from 'react';
import tabs from '../tabs.json';
function Mapping (tabsArray) {
    var Arr = [];
    tabsArray.sort(
        function(a,b) {
            if (a.order > b.order) return 1;
            else if (a.order < b.order) return -1;
            else return 0
        });
    tabsArray.map((item,index)=>
       Arr.push(require('../'+item.path).default)
    );
return Arr;
}
var stringArray = Mapping(tabs);
export default stringArray


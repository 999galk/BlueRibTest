import { render } from 'react-dom';
import React, { Component, PropTypes } from 'react';
import SortableTable from 'react-sortable-table';
import { withRouter } from 'react-router-dom';
import {Data} from '../Data';

window.React = require('react');

function getFlightDest(to) {
	console.log('get dest');
  return to.split(' ').slice(-1)[0]
}
 
const flightDestSorter = {
desc: (data, key) => {
	console.log('data', data);
	console.log('key', key);
    var result = data.sort(function (_a, _b) {
      const a = getFlightDest(_a[key]);
      const b = getFlightDest(_b[key]);
      if ( a <= b ) {
        return 1;
      } else if ( a > b) {
        return -1;
      }
    });
    return result;
  },
 
  asc: (data, key) => {
    return data.sort(function (_a, _b) {
      const a = getFlightDest(_a[key]);
      const b = getFlightDest(_b[key]);
      if ( a >= b ) {
        return 1;
      } else if ( a < b) {
        return -1;
      }
    })
  }
};
 
class Flights extends Component {
  constructor() {
    super()
    this.state = {
      data: {Data}
    };
  }
 
 render(){
    const columns = [
      {
        header: 'ID',
        key: 'id',
        defaultSorting: 'ASC',
        headerStyle: { fontSize: '15px', backgroundColor: '#FFDAB9', width: '100px' },
        dataStyle: { fontSize: '15px', backgroundColor: '#FFDAB9'},
        dataProps: { className: 'align-right' },
      },
      {
        header: 'FROM',
        key: 'from',
        headerStyle: { fontSize: '15px' },
        headerProps: { className: 'align-center' },
        descSortFunction: flightDestSorter.desc,
        ascSortFunction: flightDestSorter.asc
      },
      {
        header: 'TO',
        key: 'to',
        headerStyle: { fontSize: '15px' },
        headerProps: { className: 'align-center' },
        descSortFunction: flightDestSorter.desc,
        ascSortFunction: flightDestSorter.asc
      },
      {
        header: 'DEPARTURE',
        key: 'departure',
        headerStyle: { fontSize: '15px' },
        headerProps: { className: 'align-center' },
      },
      {
        header: 'LANDING',
        key: 'landing',
        headerStyle: { fontSize: '15px' },
        headerProps: { className: 'align-center' },
      },
      {
        header: 'PRICE',
        key: 'price',
        headerStyle: { fontSize: '15px' },
        headerProps: { className: 'align-center' },
      }
    ];
 
    const style = {
      backgroundColor: '#eee',
      width:'85%',
      marginLeft: 'auto',
      marginRight:'auto',
      marginTop:'10%',
      height: '350px',
      textAlign: 'center',
      borderRadius:'8px'
    };
 
    const iconStyle = {
      color: '#aaa',
      paddingLeft: '5px',
      paddingRight: '5px',
      paddingTop:'10px'
    };
 
	return (
		<div className='flex flex-column'>
			<button className="f6 link dim ba bw2 ph3 pv2 mb2 dib dark-blue w4 pointer" onClick={() => this.props.history.push('/newFlight')}>Add New Flight</button>
		      <SortableTable
		        data={Data}
		        columns={columns}
		        style={style}
		        iconStyle={iconStyle} />
        </div>
	);   
  }
}

export default Flights;
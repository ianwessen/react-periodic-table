import React, { Component } from 'react';
import './Table.scss';
import Element from '../Element';
import _ from 'lodash';
import periodicTable from '../../periodicTable.json';

class Table extends Component {
  
  render() {

    return (
      <section className="table">
        { periodicTable.elements.map( function(element,index) {
          return(
            <Element
              key={index}
              element={element}
            />
          )
        })}
      </section>
      
    );
  }
}

export default Table;

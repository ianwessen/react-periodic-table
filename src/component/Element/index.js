import React, { Component } from 'react';
import classNames from 'classnames';
import './Element.scss';

class Element extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selected: false
    }
  }
  
  toggleSelectElement() {
    this.setState({
      selected: !this.state.selected
    });
  }
  
  render() {    
    const element = this.props.element
    
    const elementClassNames = classNames(
      'element',
      element.name.toLowerCase(),
      element.category.toLowerCase(),
      {'selected': this.state.selected}
    );
    
    const elementPosition = {
      top: (element.ypos - 1) * 48 + 'px',
      left: (element.xpos - 1) * 48 + 'px'
    }
        
    return (
      <section style={elementPosition} onClick={this.toggleSelectElement.bind(this)} className={elementClassNames}>
        <span className="symbol">{ element.symbol }</span>
        <div className="element-summary">
          <span className="number">{ element.number }</span>
          <span className="symbol">{ element.symbol }</span>
          <span className="name">{ element.name }</span>
          <span className="summary">{ element.summary }</span>
          <div className="row">
            <span>Atomic mass</span>
            <span>{ element.atomic_mass ? element.atomic_mass + " amu" : "Unknown" }</span>
          </div>
          <div className="row">
            <span>Density</span>
            <span>{ element.density ? element.density + " kg/m3" : "Unknown" }</span>
          </div>
          <div className="row">
            <span>Melting point</span>
            <span>{ element.melt ? element.melt + " K" : "Unknown" }</span>
          </div>
        </div>
      </section>
    );
  }
}

export default Element;

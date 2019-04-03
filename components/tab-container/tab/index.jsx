import React from 'react';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';


autobind
export default class Tab extends React.Component {

    constructor(props) {
      super(props);
      this.state = {}
    }

    static propTypes = {
      children: PropTypes.object,
      active: PropTypes.bool
    } 

    render() {
      const {active, children} = this.props;

      return (
        <div className={"tab " + (active ? "active" : "inactive")}>
          {children}
        </div>
      );
    }
}

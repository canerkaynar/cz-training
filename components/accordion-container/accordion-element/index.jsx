import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { autobind } from 'core-decorators';




autobind
export default class AccordionElement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            class: "section"
        }
    }

    handleClick = () => {
        if(this.state.open) {
          this.setState({
            open: false,
            class: "section"
          });
        }else{
          this.setState({
            open: true,
            class: "section open"
          });
        }
      }

  render() {
    const { children } = this.props;

    return (
        <div className={this.state.class}>
            <div className={`sectionhead ${this.state.open ? "open" : ""}`} onClick={this.handleClick}>{this.props.title}</div>
            <div className="articlewrap">
                <div className="article">
                    {children}
                </div>
            </div>
        </div>
    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';
import styled from "styled-components";

const Style = styled.div`
    display: block;
    position: relative;
    width: 100%;
    float: left;
    margin-top: ${props => props.theme.SPACE*2.5}px;
    @media (min-width: ${props => props.theme.TABLET}px) {
        margin-top: ${props => props.theme.SPACE*3}px;
    }
    @media (min-width: ${props => props.theme.LAPTOP}px) {
        position: absolute;
        width: 570px;
        margin-left: ${props => props.theme.SPACE*4}px;
        margin-top: 0;
    }
.tooltip {
    transition: all 0.3s;
    position: absolute;
    padding: ${props => props.theme.SPACE*2}px;
    background: white;
    visibility: hidden;
    opacity: 0;
    box-shadow: ${props => props.theme.BS};
    border-radius: ${props => props.theme.RADIUS / 1.6}px;
    border: 1px solid ${props => props.theme.GREY};
    z-index: 20;
    color: #A3A4A5;
    font-size: 12px;
    line-height: 21px;

}
.tooltip.open {
    visibility: visible;
    opacity: 1;
}
.arrow {
    position: absolute;
    width: 12px;
    height: 12px;
    display: block;
    background: white;
    border: 1px solid ${props => props.theme.GREY};
    border-right: none;
    border-top: none;
    transform: translateY(-50%) rotate(45deg);
    left: -6px;
    top: 50%;
}
.arrow.right {
    transform: translate(0%, -50%);
    top: 50%;
    left: 130px;
}

`;

autobind
export default class Tooltip extends React.Component {

    constructor(props) {
      super(props);
      this.state = {}
    }

    static propTypes = {
      children: PropTypes.array
    } 

    render() {
      const {top, children, innerWidth} = this.props;
      return (
        <Style style={{ top: innerWidth < 1440 ? 0 : top + 70 }}>
            <div className="tooltip right open">
                <span style={{ top: innerWidth < 1440 ? 0 : top - 50, left: innerWidth < 1440 && "50%" }} className="arrow"/>
                {children}
            </div>
        </Style>
      );
    }
}
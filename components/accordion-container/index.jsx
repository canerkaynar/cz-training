import React from 'react';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';
import styled from "styled-components";
import { RWD, SPACE, COLORS, FONT } from "./../../util/constants";


const ContainerStyle = styled.div`

  .title {
    color: ${props => props.theme.WHITE};
    background: ${props => props.theme.GREEN};
    text-align: left;
    font-size: 16px;
    line-height: 1.2em;
    padding: 1em;
    border: 1px solid ${props => props.theme.GREEN};
    border-radius: 6px 6px 0px 0px;
  }

.section {
    position: relative;
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.GREY};
    border-left: 1px solid ${props => props.theme.GREY};  
    border-right: 1px solid ${props => props.theme.GREY};
  }
  
  .section.open {
    button {
      &:before, &:after {
        height: 14px;
      }
      &:before {
        transform: translate(0%, -50%) rotate(-45deg);
      }
      &:after {
        transform: translate(0%, -50%) rotate(45deg);
      }
    }
    .articlewrap {
      height: 112px;
    }
  }
  
  .articlewrap {
    height: 0;
    overflow: hidden;
    transition: all .2s ease-in;
    background: ${props => props.theme.WHITE};
  }
  
  .sectionhead {
    width: 100%;
    overflow: hidden;
    background: white;
    cursor: pointer;
    font-size: ${FONT.REGULAR}px;
    color: ${props => props.theme.BLACK};
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: ${SPACE*2}px ${SPACE*4.4}px;
    &:before {
      content: '+';
      width: 18px;
      height: 18px;
      display: block;
      position: absolute;
      left: 16px;
      padding-left: 4px;
      color: ${props => props.theme.GREEN};
      background: ${props => props.theme.GREY_LIGHT};
      border-radius: 50%;
      font-size: 16px;
      line-height: 20px;
    }
  }


  .sectionhead.open {
      background-color: ${props => props.theme.GREY_LIGHT};
      color: ${props => props.theme.GREEN};
      &:before {
        content: '-';
        width: 18px;
        height: 18px;
        display: block;
        position: absolute;
        left: 16px;
        padding-left: 4px;
        margin-bottom: 12px;
        color: ${props => props.theme.WHITE};
        background: ${props => props.theme.GREEN};
        font-size: 20px;
        line-height: 17px;
      }
  }
  .article {
    /* padding: ${props => props.theme.SPACE*1.6}; */
  }
`;


autobind
export default class AccordionContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeIndex: props.activeIndex
    };
  }

  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.array
  };

  render() {
    const { children, title } = this.props;

    return (
        <ContainerStyle>
        <div className="main">
            <div className="title">{title}</div>
            {children}
        </div>
        </ContainerStyle>
    );
  }
}


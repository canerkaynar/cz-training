import React from 'react';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';
import styled from "styled-components";
import Tab from './tab'
import { RWD, SPACE, COLORS, FONT } from "./../../util/constants";



const ContainerStyle = styled.div`
.tab-collection {
  background-color: #fff;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  max-width: 960px;
  margin: 0 auto;
}
.tab-panes {
  
}
.tab {
  padding: ${SPACE*2}px 0 0 0;
  h1 {
    margin-top: 0;
  }
}
.tab-nav {
  background-color: ${COLORS.GREY_LIGHT};
  ul {
    list-style-type: none;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    li {
      display: inline-block;
      border-right: 1px solid ${COLORS.GREY};
      span {
        display: inline-block;
        text-decoration: none;
        padding: ${SPACE * 1.3}px ${SPACE * 1.6}px;
        color: ${COLORS.FONT};
        font-size: ${FONT.SMALL}px;
        transition: background-color 0.25s;
        &:hover {
          cursor: pointer;
          color: ${props => props.theme.FONT_DARK};
          transition: all 0.3s;
          font-weight: 400;
        }
        &.active {
          color: ${props => props.theme.GREEN};
        }
        &.active:hover {
          color: ${props => props.theme.GREEN};
          transition: all 0.3s;
        }

      }
    }
  }
}

.tab-panes {
  .active {
    display: block;
  }
  .inactive {
    display: none;
  }
}`;

autobind
export default class TabContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: props.defaultIndex || 0
        }
    }

    changeTab = (index, event) => {
        this.setState({ activeTab: index });
      }
    
      render() {
        let labels = null;
        if (this.props.children) {
          labels = this.props.children.map((child, index) => {
            if (child.type === Tab) {
              return (
                <li key={index}>
                  <span className={"test " + (this.state.activeTab == index ? "active" : "inactive")}
                    onClick={(e) => this.changeTab(index, e)}
                  >
                    {child.props.label}
                  </span>
                </li>
              );
            }
          });
        }
        const childrenWithProps = React.Children.map(
          this.props.children,
          (child, index) =>
            React.cloneElement(child, {
              active: index == this.state.activeTab
            })
        );
        return (
            <ContainerStyle>
          <div className="tab-collection">
            <div className="tab-nav">
              <ul>
                {labels}
              </ul>
            </div>
            <div className="tab-panes">
              {childrenWithProps}
            </div>
          </div>
          </ContainerStyle>
        );
      }
  }


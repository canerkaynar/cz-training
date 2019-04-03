import React from 'react'
import { connect } from 'react-redux'

import styled, { ThemeProvider } from 'styled-components'; 
import Div100vh from "react-div-100vh";
import GlobalStyle from './../components/styles/GlobalStyle';

import Page from "../components/Page";
import Container from "../components/Container";
import { RWD, SPACE, COLORS, FONT } from "../util/constants";

import AccordionContainer from '../components/accordion-container';
import AccordionElement from '../components/accordion-container/accordion-element';
import TabContainer from '../components/tab-container';
import Tab from '../components/tab-container/tab'
import Tooltip from '../components/tooltip';

const theme = {
  PRIMARY: "#387F85",
  PRIMARY_DARK: "#2e666b",
  SECONDARY: "#767474",
  BLACK: "#081611",
  GREEN: "#00C45A",
  GREEN_DARK: "#00AB41",
  GREY: "#F4F4F4",
  GREY_LIGHT: "#F9F9FA",
  GREY_MIDLIGHT: "#E0E0E1",
  FONT: "#C0C3C8",
  FONT_DARK: "#A7AAAF",
  WHITE: "#FFFFFF",
  BS: "0px 21px 17px 0px rgba(0,0,0,0.03)",
  SPACE: 10,
  RADIUS: 16,
  RADIUS_SEMI: 6,
  LAPTOP: RWD.LAPTOP,
  TABLET: RWD.TABLET,
  BIGGER_PHONE: RWD.BIGGER_PHONE
};


const PageContainer = styled(Div100vh)({
  display: "flex",
  alignItems: "start",
  height: "100vh"
});

const Header = styled.h1`
  color: ${props => props.theme.BLACK};
  margin: 0 0 2px;
  font-size: 28px;
  font-weight: 200;
`;

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: ${props => props.theme.RADIUS_SEMI}px ${props => props.theme.RADIUS_SEMI}px 0px 0px;
  margin-top: ${SPACE * 2}px;
`;

const Application = styled.div`
  float: left;
  padding: ${SPACE * 2}px;
  background-color: #FFF;
  width: 100%;
  border-radius: ${props => props.theme.RADIUS / 1.6}px;
  box-shadow: ${props => props.theme.BS};
  border: 1px solid ${COLORS.GREY};
  color: ${COLORS.FONT};
  font-size: ${FONT.SMALL}px;

  @media (min-width: ${props => props.theme.LAPTOP}px) {
    max-width: 570px;
  }
`;

const Address = styled.div`
  display: block;
  @media (min-width: ${props => props.theme.TABLET}px) {
      display: flex;
  }
  .image {
    float: left;
  }
  .information {
    float: left;
    text-align: left;
    width: 100%;
    display: block;
    margin-top: ${props => props.theme.SPACE * 2}px;
    @media (min-width: ${props => props.theme.TABLET}px) {
      margin: 0 0 0 ${SPACE*6}px;
      width: 325px;
    }
  }
  .line {
    color: ${COLORS.BLACK};
    padding: ${SPACE*1.3}px 0 ${SPACE*1.2}px;
    border-bottom: 1px solid ${COLORS.GREY_LIGHT};
    width: 100%;
  }
  .line:first-child {
    padding-top: 0px;
  }

  .address-change-btn {
    margin-top: ${props => props.theme.SPACE}px;
  }
`;

const Subscribe = styled.div`
  .subscribe-btn {
    display: inline-block;
    margin-left: -${props => props.theme.SPACE * 9.6}px;
    border-radius: ${props => props.theme.RADIUS}px;
  }
  input {
    width: 100%;
    background-color: ${props => props.theme.GREY_LIGHT};
    border-radius: ${props => props.theme.RADIUS * 2}px;
    display: inline-block;
    border: none;
    padding: 15px 100px 15px 15px;
    font-size: 11px;
    color: ${props => props.theme.BLACK};
    &:focus, &:active {
      background-color: ${props => props.theme.BLACK};
      transition: all 0.3s;
      color: ${props => props.theme.WHITE}

      placeholder {
        color: ${props => props.theme.WHITE};
      }
      & + button {
        background-color: ${props => props.theme.WHITE};
        border: 1px solid ${props => props.theme.WHITE};
        color: ${props => props.theme.GREEN};
      }

    }
    @media (min-width: ${props => props.theme.TABLET}px) {
      width: 364px;
    }
  }
`;

const Personal = styled.div`
  min-height: 112px;
  padding: ${props => props.theme.SPACE*1.6}px;

  .details {
    color: ${props => props.theme.BLACK};
    display: inline-block;
    vertical-align: middle;
    margin-left: ${props => props.theme.SPACE}px;
    line-height: 19px;
  }

  .avatar {
    display: inline-block;
    vertical-align: middle;
  }
`;

const TooltipContainer = styled.div`
  @media (min-width: ${props => props.theme.LAPTOP}px) {
    float: left;
  }
  .title {
    color: ${props => props.theme.GREEN};
    font-size: 18px;
    margin-bottom: 10px;
  }

  .details {
    margin-bottom: ${props => props.theme.SPACE*1.5}px
  }
`;

class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cardPosition: 0,
      innerWidth: 0
    }
  }

  componentDidMount () {
    this.setState({
      cardPosition: window.document.getElementById('personal-card').offsetTop,
      innerWidth: window.innerWidth
    });
  }

  render () {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
        <GlobalStyle/>
        <Page>
          <PageContainer>
            <Container>
            <Application>
              <Header id="personal-card">Personal Card</Header>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
              <Wrapper>
                <AccordionContainer title="Personal Information">
                  <AccordionElement title="Diego Morata">
                    <Personal>
                      <img className="avatar" src="/static/oval.png" srcSet="/static/oval.png 1x, /static/oval@2x.png 2x" width="80" height="80"/>
                      <div className="details">
                        <div>25.10.1985</div>
                        <div>diego.morata@domain.co.uk</div>
                      </div>
                    </Personal>
                  </AccordionElement>
                  <AccordionElement title="Family">
                    <div style={{ padding: 10 }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
                    </div>
                  </AccordionElement>
                </AccordionContainer>

                <TabContainer defaultIndex={0}>
                  <Tab label="Address">
                    <Address>
                      <img className="image" src="/static/house.png" srcSet="/static/house.png 1x, /static/house@2x.png 2x" width="127" height="112"/>
                      <div className="information">
                        <div className="line">3309 Franecki Dam Apt. 701</div>
                        <div className="line">London - United Kingdom</div>
                        <button className="btn btn-primary address-change-btn">Change</button> 
                      </div>
                    </Address>
                  </Tab>
                  <Tab label="Subscribe">
                    <Subscribe>
                      <input className="subscribe-input" type="text" placeholder="Email address"/>
                      <button className="btn btn-primary subscribe-btn">Subscribe</button>
                    </Subscribe>

                  </Tab>
                </TabContainer>

              </Wrapper>
            </Application>
            <TooltipContainer>
              <Tooltip top={this.state.cardPosition} innerWidth={this.state.innerWidth}>
              <div className="title">Notes</div>
              <div className="details">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis sit amet sem eget gravida. Duis tellus est, pharetra ac bibendum eu, consequat sed dolor. Duis mollis, augue a dignissim congue, mi felis interdum sapien, nec pellentesque eros erat sed diam. Sed pharetra lobortis interdum. 
              </div>
              </Tooltip>
            </TooltipContainer>
            </Container>
          </PageContainer>
    </Page>
  </React.Fragment>

  </ThemeProvider>
    )
  }
}

// export default connect()(Index)
export default Index;
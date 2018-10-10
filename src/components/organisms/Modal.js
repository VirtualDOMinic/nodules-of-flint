import React, { Component } from "react";
import Nodule from "../molecules/Nodule";
import styled from "styled-components";
import _ from "lodash";

const ModalContainer = styled.div`
  box-sizing: content-box;

  display: grid;
  place-content: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000000aa;
`;

const ModalPane = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  border: 1px solid #666;
`

const CloseBtn = styled.button`
  --btn-wh: calc(var(--icon-wh) - 2px);

  all: unset;

  overflow: hidden;
  position: absolute;
  right: 10px;
  top: 10px;
  display: block;
  width: var(--icon-wh);
  height: var(--icon-wh);
  cursor: pointer;

  &::before {
    transition: 0.5s color;

    content: "×";
    display: block;
    width: var(--btn-wh);
    height: var(--btn-wh);
    line-height: var(--btn-wh);
    text-align: center;
    border: 1px solid currentColor;
    color: #666;
  }

  &:hover::before,
  &:focus::before {
    color: #fff;
  }
`

class Modal extends Component {
  render() {

    if(this.props.image.length === 0) {
      return null;
    }

    return (
      <ModalContainer>
        <ModalPane>
          <img src={this.props.image}/>
          <CloseBtn onClick={this.props.onCloseClick}>close</CloseBtn>
        </ModalPane>
      </ModalContainer>
    );
  }
}

export default Modal;

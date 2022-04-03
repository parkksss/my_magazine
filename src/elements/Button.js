import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const { text, _onClick, width, bg, color, border, borderRadius, margin } = props;
  const styles = {
    width: width,
    bg: bg,
    color: color,
    border: border,
    borderRadius: borderRadius,
    margin: margin,
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>{text}</ElButton>
    </React.Fragment>
  );
}

Button.defaultProps = {
  text: '텍스트',
  _onClick: () => {},
  width: '100%',
  bg: 'transparent',
  color: '#212121',
  border: false,
  borderRadius: false,
  margin: false,
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  height: 45px;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  outline: none;
  box-sizing: border-box;
  // text-align: center;
  ${(props) => (props.border ? `border: ${props.border};` : '')}
  ${(props) => (props.borderRadius ? `border-radius: ${props.borderRadius};` : '')}
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')} 
  ${(props) => (props.padding ? `padding: ${props.padding};` : '')} 
`;

export default Button;
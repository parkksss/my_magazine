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
      <ElButton onClick={_onClick} {...styles}>{text}</ElButton>
    </React.Fragment>
  );
}

Button.defaultProps = {
  text: '텍스트',
  _onClick: () => {},
  width: '100%',
  bg: 'transparent',
  color: '#212121',
  border: '1px solid #212121',
  borderRadius: false,
  margin: false,
};

const ElButton = styled.button`
  height: 45px;
  width: ${(props) => props.width};
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  outline: none;
  box-sizing: border-box;
  border: ${(props) => props.border};
  ${(props) => (props.borderRadius ? `border-radius: ${props.borderRadius};` : '')}
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')} 
`;

export default Button;
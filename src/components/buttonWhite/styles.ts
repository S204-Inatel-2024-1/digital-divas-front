import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.neutral_00};
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme.neutral_10};
  color: ${(props) => props.theme.blue_100};
  font-size: 14px;
  font-weight: bold;
  transition: 0.2s all;
  height: 50px;

  text-wrap: nowrap;

  outline: 0;

  cursor: pointer;
  text-decoration: none;

  padding: 12px 24px;

  div {
    display: flex;
    gap: 8px;
    margin: 0px 22px;
  }

  &:hover {
    background-color: ${(props) => props.theme.blue_70};
    color: ${(props) => props.theme.neutral_00};
    border-color: ${(props) => props.theme.blue_70};
  }
`

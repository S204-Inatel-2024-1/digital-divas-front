import styled from 'styled-components'

export const LoginHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${(props) => props.theme.blue_100};
  margin-bottom: 30px;

  span:nth-child(1) {
    font-size: 40px;
    font-weight: 700;
  }

  span:nth-child(2) {
    font-size: 16px;
    font-weight: 400;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    font-weight: bold;
    color: ${(props) => props.theme.blue_100};
    margin-top: 10px;
  }

  input {
    padding: 12px 16px;
    border: 1px solid ${(props) => props.theme.neutral_20};
    border-radius: 10px;
    margin: 10px 0px 5px 0px;
  }
`

export const FormFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px;

  a {
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.neutral_60};
    text-decoration: underline;
  }
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid ${(props) => props.theme.neutral_10};
  margin-bottom: 20px;
`

export const LoginNotice = styled.div`
  padding: 20px;
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.neutral_10};

  display: flex;
  flex-direction: column;
  gap: 8px;

  span:nth-child(1) {
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => props.theme.blue_100};
  }

  span:nth-child(2) {
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.neutral_60};
  }
`
export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.blue_70};
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme.blue_70};
  color: ${(props) => props.theme.neutral_00};
  font-size: 14px;
  font-weight: bold;
  transition: 0.2s all;

  text-wrap: nowrap;

  cursor: pointer;
  text-decoration: none;

  padding: 12px 24px;

  div {
    display: flex;
    gap: 8px;
    margin: 0px 22px;
  }

  &:hover {
    background-color: ${(props) => props.theme.neutral_00};
    color: ${(props) => props.theme.blue_100};
    border-color: ${(props) => props.theme.neutral_10};
  }
`

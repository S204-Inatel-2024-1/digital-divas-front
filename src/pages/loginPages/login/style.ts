import styled from 'styled-components'

export const LoginHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${(props) => props.theme.blue95};
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
    color: ${(props) => props.theme.blue95};
    margin-top: 10px;
  }

  input {
    padding: 12px 16px;
    border: 1px solid ${(props) => props.theme.neutral20};
    border-radius: 10px;
    margin: 10px 0px 5px 0px;
  }
`

export const FormFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0px;

  a {
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.neutral60};
    text-decoration: underline;
  }

  button {
    border-radius: 100px;
    border: 1px solid;
    background-color: ${(props) => props.theme.blue75};
    color: ${(props) => props.theme.neutral00};
    border-color: ${(props) => props.theme.blue75};

    font-size: 14px;
    font-weight: bold;

    padding: 16px 30px;

    div {
      display: flex;
      gap: 8px;
    }
  }
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid ${(props) => props.theme.neutral10};
`

export const LoginNotice = styled.div`
  padding: 20px;
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.neutral10};

  display: flex;
  flex-direction: column;
  gap: 8px;

  span:nth-child(1) {
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => props.theme.blue95};
  }

  span:nth-child(2) {
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.neutral60};
  }
`
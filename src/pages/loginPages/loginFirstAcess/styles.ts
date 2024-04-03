import { styled } from 'styled-components'

export const LoginHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #1e293b;
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
    color: #1e293b;
    margin-top: 10px;
  }

  input {
    padding: 12px 16px;
    border: 1px solid #dcdcdc;
    border-radius: 10px;
    margin: 10px 0px 5px 0px;
  }
`

export const FormFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 30px 0px;

  button {
    border-radius: 100px;
    border: 1px solid;
    background-color: #306bff;
    color: #fff;
    border-color: #306bff;
    cursor: pointer;

    font-size: 14px;
    font-weight: bold;

    padding: 16px 30px;

    div {
      display: flex;
      gap: 8px;
    }
  }
`

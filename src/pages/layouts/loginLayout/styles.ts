import styled from 'styled-components'
import loginImg from '../../../assets/imgs/loginImg.svg'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`

export const LoginImg = styled.div`
  display: flex;
  width: 60%;
  background-image: url(${loginImg});
  background-size: cover;
  justify-self: flex-end;
`

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: space-between;

  margin: 30px 80px;

  img:nth-child(1) {
    width: 123px;
    height: auto;
    margin-bottom: 20px;
  }
`

export const LoginFooter = styled.div`
  display: flex;
`

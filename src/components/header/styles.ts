import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 74px;
  border-bottom: 1px solid #94a3b8;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 995;
  background-color: #fff;
`

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-right: 25px;
`

export const HeaderUser = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;

  span:nth-child(1) {
    font-size: 16px;
    color: #1e293b;
    font-weight: bold;
  }

  span:nth-child(2) {
    font-size: 12px;
    color: #656565;
    font-weight: 500;
  }
`

export const HeaderIcon = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  background-color: #0159ea;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 10px;
`

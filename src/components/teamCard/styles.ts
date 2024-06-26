import styled from 'styled-components'

export const AdvisorCardContent = styled.div`
  padding: 24px;
  border: 1px solid ${(props) => props.theme.neutral_10};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 10px 0px;
  justify-content: space-between;
  align-items: center;
`

export const AdvisorCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;

  span:last-child {
    font-size: 20px;
    color: ${(props) => props.theme.blue_100};
    font-weight: bold;
  }
`

export const Role = styled.span`
  color: ${(props) => props.theme.neutral_40};
  font-size: 14px;
  font-weight: bold;
  width: fit-content;
`

export const AdvisorCardBody = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  span {
    color: ${(props) => props.theme.neutral_60};
    font-size: 14px;
    font-weight: 500;
  }
`

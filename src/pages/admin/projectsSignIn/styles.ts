import { styled } from 'styled-components'

export const ProjectsContainer = styled.div`
  margin: 122px 48px 48px 298px;
`

export const ProjectsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  span {
    font-size: 40px;
    color: ${(props) => props.theme.blue95};
    font-weight: bold;
  }
`

export const Breadcrumbs = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.neutral40};
  margin-bottom: 20px;
`
export const ProjectFormContainer = styled.div`
  margin-top: 48px;

  form {
    label {
      font-size: 14px;
      font-weight: bold;
      color: ${(props) => props.theme.blue95};
    }
  }
`

export const FormsTitle = styled.span`
  margin: 48px 0px 0px 0px;
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.blue95};
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.neutral10};
  margin: 12px 0px;
`

interface WidthProps {
  width?: string
}

export const StyledInput = styled.input<WidthProps>`
  width: ${(props) => (props.width ? props.width : '100%')};
  padding: 12px 16px;
  border: 1px solid ${(props) => props.theme.neutral20};
  border-radius: 10px;
  margin: 10px 0px 5px 0px;
`
export const GeneralInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-top: 20px;

  span {
    font-size: 14px;
    font-weight: 500;
    color: ${(props) => props.theme.neutral60};
    margin-bottom: 20px;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const StudentInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  gap: 16px;
`
export const Divider2 = styled.div`
  width: 100%;
  height: 1px;
  border: 1px dashed ${(props) => props.theme.neutral20};
`
export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-top: 30px;
  align-items: center;

  button {
    border-radius: 100px;
    border: 1px solid;
    background-color: ${(props) => props.theme.neutral00};
    color: ${(props) => props.theme.blue95};
    border-color: ${(props) => props.theme.neutral10};

    font-size: 14px;
    font-weight: bold;

    div {
      display: flex;
      gap: 8px;
      padding: 16px 40px;
    }
  }
`
export const FormsFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 48px;

  button {
    border-radius: 100px;
    border: 1px solid;
    background-color: ${(props) => props.theme.neutral00};
    color: ${(props) => props.theme.blue95};
    border-color: ${(props) => props.theme.neutral10};

    font-size: 14px;
    font-weight: bold;

    div {
      display: flex;
      gap: 8px;
      padding: 16px 20px;
    }
  }

  button:nth-child(1) {
    background-color: ${(props) => props.theme.neutral00};
    color: ${(props) => props.theme.blue95};
    border-color: ${(props) => props.theme.neutral10};
  }

  button:nth-child(2) {
    ${(props) => props.theme.blue75};
    color: ${(props) => props.theme.neutral00};
    ${(props) => props.theme.blue75};
  }
`

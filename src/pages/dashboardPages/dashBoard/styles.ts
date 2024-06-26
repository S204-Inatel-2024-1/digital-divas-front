import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const ProjectsContainer = styled.div`
  margin: 122px 48px 48px 298px;
`
export const ProjectsHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  span:nth-child(1) {
    font-size: 40px;
    color: ${(props) => props.theme.blue_100};
    font-weight: bold;
  }

  span:nth-child(2) {
    font-size: 16px;
    color: ${(props) => props.theme.blue_100};
    font-weight: 500;
  }
`

export const Breadcrumbs = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.neutral_40};
  margin-bottom: 20px;
`

export const ProjectsHeaderButtons = styled.div`
  display: flex;
  gap: 16px;
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
`

export const ListHead = styled.div`
  display: flex;
  flex-direction: row;

  button {
    background-color: ${(props) => props.theme.neutral_00};
    border: none;
    font-size: 14px;
    font-weight: bold;
    padding: 12px 24px;
    z-index: 1;
    border-bottom: 1px solid ${(props) => props.theme.neutral_40};
  }

  button.active {
    border-bottom: 1px solid ${(props) => props.theme.blue_70};
    color: ${(props) => props.theme.blue_100};
  }

  gap: 4px;
  button:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue_70};
    background-color: ${(props) => props.theme.neutral_05};
  }
`
export const Divider = styled.div`
  position: relative;
  border-bottom: 1px solid ${(props) => props.theme.neutral_40};
  top: -1px;
  z-index: 0;
`

export const ListContent = styled.div`
  flex: 1;
  overflow: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    padding: 10px;

    th {
      font-size: 12px;
      font-weight: bold;
      color: ${(props) => props.theme.blue_100};
      text-align: left;
      padding: 12px 16px;
    }

    tr {
      border-bottom: 1px solid ${(props) => props.theme.neutral_60};
      padding: 12px 6px;
    }

    td {
      font-size: 12px;
      color: #000;
      padding: 12px 16px;
    }
  }
`

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding: 10px 0px;
  border-bottom: 1px solid ${(props) => props.theme.neutral_60};
`

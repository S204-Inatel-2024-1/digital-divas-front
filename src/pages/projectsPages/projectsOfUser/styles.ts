import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  margin: 122px 48px 48px 298px;
`

export const Breadcrumbs = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.neutral_40};
`

export const ProjectsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  span {
    font-size: 40px;
    color: ${(props) => props.theme.blue_100};
    font-weight: bold;
  }
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
      font-size: 15px;
      font-weight: bold;
      color: ${(props) => props.theme.blue_100};
      text-align: left;
      padding: 12px 16px;
    }

    tr {
      border-bottom: 1px solid #dddddd;
      padding: 12px 6px;
    }

    td {
      font-size: 14px;
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
  border-bottom: 1px solid #dddddd;
`

export const TeamContainer = styled.div`
  display: flex;
`

export const CircleInitial = styled.div`
  background-color: #0159ea;
  color: #fff;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 1px solid #fff;
`

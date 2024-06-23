import { Header } from '../../components/header'
import { SideBar } from '../../components/sideBar'
import { ContentContainer, PageContainer } from './styles'
import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <PageContainer>
      <SideBar></SideBar>
      <ContentContainer>
        <Header />
        <Outlet />
      </ContentContainer>
    </PageContainer>
  )
}

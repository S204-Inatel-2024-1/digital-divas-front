import { Route, Routes } from 'react-router-dom'
import { LoginLayout } from '../pages/layouts/loginLayout'
import { LoginFirstAccess } from '../pages/loginPages/loginFirstAcess'
import { LoginPage } from '../pages/loginPages/login'
import { LoginPasswordCode } from '../pages/loginPages/loginCode'
import { LoginPasswordRefactor } from '../pages/loginPages/loginPasswordRefactor'
import { LoginPasswordChange } from '../pages/loginPages/loginPasswordChange'
import { Layout } from '../pages/layouts/appLayout'
import { AdminProjectsList } from '../pages/projectsPages//projectsList'
import { AdminProjectsSignIn } from '../pages/projectsPages/projectsSignIn'
import { AdminUsersList } from '../pages/usersPages/usersList'
import { AdminProjectsEdit } from '../pages/projectsPages/projectsEdit'
import { AdminStagesList } from '../pages/stagesPages/stageList'
import { Dashboard } from '../pages/dashboardPages/dashBoard'
import { StagesSignIn } from '../pages/stagesPages/stageSignIn'
import { UsersSignIn } from '../pages/usersPages/usersSignIn'
import { UserUpdate } from '../pages/usersPages/userUpdate'
import { ProjectsOfUser } from '../pages/projectsPages/projectsOfUser'
import { ProjectPage } from '../pages/projectsPages/projectPage'
import { ProjectUpdate } from '../pages/projectsPages/projectEdit'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginLayout />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login/firstAccess" element={<LoginFirstAccess />} />
        <Route
          path="/login/passwordRefactor"
          element={<LoginPasswordRefactor />}
        />
        <Route path="/login/passwordCode" element={<LoginPasswordCode />} />
        <Route path="/login/passwordChange" element={<LoginPasswordChange />} />
      </Route>
      <Route path="/app" element={<Layout />}>
        <Route path="/app/projectsList" element={<AdminProjectsList />} />
        <Route
          path="/app/projectsList/projectsSignIn"
          element={<AdminProjectsSignIn />}
        />
        <Route path="/app/usersList" element={<AdminUsersList />} />
        <Route
          path="/app/admin/projectsList/projectEdit"
          element={<AdminProjectsEdit />}
        />
        <Route path="/app/stagesList" element={<AdminStagesList />} />
        <Route path="/app/dashboard" element={<Dashboard />} />
        <Route path="/app/userSignIn" element={<UsersSignIn />} />
        <Route path="/app/stagesSignIn" element={<StagesSignIn />} />
        <Route path="/app/userUpdate" element={<UserUpdate />} />
        <Route path="/app/projectsOfUser" element={<ProjectsOfUser />} />
        <Route path="/app/projectPage/:id" element={<ProjectPage />} />
        <Route path="/app/projectUpdate/:id" element={<ProjectUpdate />} />
      </Route>
    </Routes>
  )
}

import { Route, Routes } from 'react-router-dom'
import { LoginLayout } from '../pages/loginLayout'
import { LoginFirstAccess } from '../pages/loginPages/loginFirstAcess'
import { LoginPage } from '../pages/loginPages/login'
import { LoginPasswordCode } from '../pages/loginPages/loginCode'
import { LoginPasswordRefactor } from '../pages/loginPages/loginPasswordRefactor'
import { LoginPasswordChange } from '../pages/loginPages/loginPasswordChange'
import { Layout } from '../pages/appLayout'
import { AdminProjectsList } from '../pages/admin/projectsList'
import { AdminProjectsSignIn } from '../pages/admin/projectsSignIn'
import { AdminUsersList } from '../pages/admin/usersList'
import { AdminProjectsEdit } from '../pages/admin/projectsEdit'
import { AdminStagesList } from '../pages/admin/stageList'
import { Dashboard } from '../pages/user/dashBoard'

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
        <Route path="/app/admin/projectsList" element={<AdminProjectsList />} />
        <Route
          path="/app/admin/projectsList/projectsSignIn"
          element={<AdminProjectsSignIn />}
        />
        <Route path="/app/admin/usersList" element={<AdminUsersList />} />
        <Route
          path="/app/admin/projectsList/projectEdit"
          element={<AdminProjectsEdit />}
        />
        <Route path="/app/admin/stagesList" element={<AdminStagesList />} />
        <Route path="/app/admin/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

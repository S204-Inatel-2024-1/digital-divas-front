import {
  FormFooter,
  InputContainer,
  LoginHeader,
  LoginNotice,
  StyledButton,
} from './style'

import { Link } from 'react-router-dom'
import { useState } from 'react'

export function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    const response = await fetch(
      `https://digital-divas-back.onrender.com/auth`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include',
      },
    )

    const data = await response.json()

    if (response.status === 200 && data.firstAccess) {
      window.location.href = '/login/firstAccess'
    } else if (response.status === 200 && !data.firstAccess) {
      window.location.href = '/admin/projectsList'
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target

    setFormData({ ...formData, [name]: value })
  }

  return (
    <div>
      <LoginHeader>
        <span>Boas vindas!</span>
        <span>
          Insira seus dados para acessar <b>Fetin App</b>.
        </span>
      </LoginHeader>
      <div>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <label>Email *</label>
            <input
              name="email"
              type="email"
              placeholder="Insira seu e-mail..."
              value={formData.email}
              onChange={handleChange}
            ></input>
          </InputContainer>
          <InputContainer>
            <label>Senha *</label>
            <input
              name="password"
              type="password"
              placeholder="Insira sua senha..."
              value={formData.password}
              onChange={handleChange}
            ></input>
          </InputContainer>
          <FormFooter>
            <Link to={'/login/passwordRefactor'}>Esqueci minha senha</Link>
            <StyledButton>
              <div>Entrar</div>
            </StyledButton>
          </FormFooter>
        </form>
      </div>
      <LoginNotice>
        <span>Ainda não possui cadastro?</span>
        <span>
          Mande um e-mail para fetin@inatel.br solicitando suas credenciais de
          acesso.
        </span>
      </LoginNotice>
    </div>
  )
}

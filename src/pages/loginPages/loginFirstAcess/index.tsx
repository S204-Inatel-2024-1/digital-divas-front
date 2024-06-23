import { FormFooter, InputContainer, LoginHeader } from './styles'
import { useState } from 'react'
import { StyledButton } from '../login/style'

export function LoginFirstAccess() {
  const [formData, setFormData] = useState({
    password: '',
    confirmation: '',
  })

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    if (formData.password !== formData.confirmation) {
      alert('As senhas não coincidem')
      return
    }

    const response = await fetch(
      `https://digital-divas-back.onrender.com/auth/firstAccess`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include',
      },
    )

    console.log(response)

    if (response.status === 204) {
      window.location.href = '/admin/projectsList'
    } else {
      alert('Erro ao atualizar a senha')
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target

    setFormData({ ...formData, [name]: value })
  }
  return (
    <div>
      <LoginHeader>
        <span>Primeiro acesso</span>
        <span>Crie uma nova senha.</span>
      </LoginHeader>
      <div>
        <form onSubmit={handleSubmit}>
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
          <InputContainer>
            <label>Confirmação *</label>
            <input
              name="confirmation"
              type="password"
              placeholder="Insira sua senha novamente..."
              value={formData.confirmation}
              onChange={handleChange}
            ></input>
          </InputContainer>
          <FormFooter>
            <StyledButton>
              <div>Entrar</div>
            </StyledButton>
          </FormFooter>
        </form>
      </div>
    </div>
  )
}

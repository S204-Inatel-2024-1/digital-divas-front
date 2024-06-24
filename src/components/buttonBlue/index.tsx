import { Link } from 'react-router-dom'
import { StyledButton } from './styles'
import { MouseEventHandler } from 'react'

interface ButtonProps {
  text: string
  to?: string
  type?: 'button' | 'submit' | 'reset'
  OnClick?: MouseEventHandler<HTMLButtonElement>
}
export function ButtonBlue(props: ButtonProps) {
  const buttonContent = (
    <StyledButton onClick={props.OnClick} type={props.type}>
      <div>{props.text}</div>
    </StyledButton>
  )

  return props.to ? (
    <Link to={props.to} style={{ textDecoration: 'none', color: 'inherit' }}>
      {buttonContent}
    </Link>
  ) : (
    buttonContent
  )
}

import { Avatar } from './styles'
import { User } from '../../models/UserModel'

interface UserAvatarProps {
  user: User
}

export function UserAvatar({ user }: UserAvatarProps) {
  return (
    <Avatar>
      <span>{user.firstName[0] + user.lastName[0]}</span>
    </Avatar>
  )
}

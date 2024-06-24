import { UserAvatar } from '../userAvatar'
import { User } from '../../models/UserModel'
import { AvatarStack } from './styles'

interface UserAvatarStackProps {
  users: User[]
}

export function UserAvatarStack({ users }: UserAvatarStackProps) {
  return (
    <AvatarStack>
      {users.map((user: User) => (
        <UserAvatar key={user.id} user={user} />
      ))}
    </AvatarStack>
  )
}

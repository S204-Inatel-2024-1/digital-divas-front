import { UserAvatar } from '../userAvatar'
import { UserModel } from '../../models/UserModel'
import { AvatarStack } from './styles'

interface UserAvatarStackProps {
  users: UserModel[]
}

export function UserAvatarStack({ users }: UserAvatarStackProps) {
  return (
    <AvatarStack>
      {users.map((user: UserModel) => (
        <UserAvatar key={user.id} user={user} />
      ))}
    </AvatarStack>
  )
}

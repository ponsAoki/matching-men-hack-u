import { useUser } from "@/hooks/useUser"
import { UserCard } from "./UserCard";

export const UserList = () => {
  const { users } = useUser();
  console.log(users)
  return (
    <>
      <div className="grid mx-20 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {users.map((user) => {
          return (
            <UserCard
              uid={user.uid}
              name={user.name}
              university={user.university}
              programingSkills={user.programingSkills}
            />
          )
        })}
      </div>
    </>
  )
}

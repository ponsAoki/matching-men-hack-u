import Image from "next/image"
import Link from "next/link";

type Props = {
  uid: string
  name?: string;
  university?: string
  programingSkills?: string[];
  github?: string;
  graduateYear?: string;
}
export const UserCard = ({uid, name, university, programingSkills, github, graduateYear}: Props) => {

  return (
    <>
      <div className="font-caveat group group relative mb-2 h-full w-100 border overflow-hidden rounded-3xl bg-white lg:mb-3">
        <div className="flex justify-center">
          <Image src="/avatar.gif" width={50} height={50} alt="avatar" />
        </div>
        <div className="flex flex-col justify-center ">
          <p className="m-auto p-1">{name ? name : "No Name"}</p>
          <p className="m-auto p-1">{university ? university : "No Univercity"}</p>
          { programingSkills ? <div className="flex justify-center">
            {
              programingSkills?.map((skill) => {
                return (
                  <p className="bg-red-50 rounded-3xl table m-1 ">{skill}</p>
                )
              })
            }
          </div> : <p className="m-auto">No Slill..</p>}
        </div>
        <div className="flex justify-end mr-3">
          <Link href={`/corpolation/user/${uid}`}>
            詳細ページ
          </Link>
        </div>
      </div>
    </>
  )
}

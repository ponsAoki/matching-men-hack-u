import { authRepository } from "@/modules/auth.repository"

export const SignIn = () => {
  const onSignInClick = () => {
    authRepository.signIn("ccc1111@icloud.com", "aaaaaa")
  }

  return (
    <>
      <p>ログイン</p>
      <button onClick={onSignInClick}>サインイン</button>
    </>
  )
}

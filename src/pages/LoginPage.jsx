import useInputValue from "@/hooks/use-input"
import { useLogin } from "@/hooks/use-login"
import { useTranslation } from "../hooks/use-translation";

export default function LoginPage() {
  const [email, onEmailChange] = useInputValue('')
  const [password, onPasswordChange] = useInputValue('')
  const { mutate: loginUser, isError, error } = useLogin();
  const t = useTranslation();
  
  const handleSubmit = (event) => {
    event.preventDefault()
  
    loginUser({
      email: email,
      password: password,
    });
  }

  return (
    <section className="login-page">
      <h2>{t.AUTH.LOGINHEADER}</h2>
      <form className="input-login" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          minLength="6"
          maxLength="255"
          onChange={onEmailChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          minLength="6"
          maxLength="255"
          onChange={onPasswordChange}
          required
        />
         {isError && (
            <div className="mt-4 text-xs text-red-600">{error.message}</div>
          )}

        <button type="submit">{t.AUTH.LOGIN}</button>
      </form>
      <p>Belum punya akun? <a href="/register">Daftar di sini</a></p>
    </section>
  )
}
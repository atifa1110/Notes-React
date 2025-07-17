import useInputValue from "@/hooks/use-input"
import { useRegister } from "../hooks/use-register"

export default function RegisterPage() {
    const [name, onNameChange] = useInputValue('')
    const [email, onEmailChange] = useInputValue('')
    const [password, onPasswordChange] = useInputValue('')
    const [confirmPassword, onConfirmPasswordChange] = useInputValue('')
    const { mutate: registerUser, isError, error } = useRegister();
 
    const handleSubmit = (event) => {
     event.preventDefault()

    let valid = true;

    if (password !== confirmPassword) {
        alert('Password and Confirm Password must be same');
        valid = false;
    }


    if (valid) {
        registerUser({
          name: name,
          email: email,
          password: password,
        });
    }
  }

    return (
        <section className="register-page">
        <h2>Isi form untuk mendaftar akun.</h2>
        <form className="input-register" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onNameChange}
          minLength="6"
          maxLength="255"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={onEmailChange}
          minLength="6"
          maxLength="255"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={onPasswordChange}
          minLength="6"
          maxLength="255"
          required
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={onConfirmPasswordChange}
          minLength="6"
          maxLength="255"
          required
        />
        {isError && (
            <div className="mt-4 text-xs text-red-600">{error.message}</div>
          )}
        <button type="submit">Register</button>
      </form>
      <p>Sudah punya akun? <a href="/">Login di sini</a></p>
    </section>
  )
}
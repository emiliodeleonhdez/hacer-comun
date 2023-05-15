import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Login = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleLogin = e => {
  e.preventDefault();
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  axios.post(`${apiUrl}/users/auth`, formData)
    .then(res => {
      const currentDomain = window.location.hostname
      Cookies.set("token", res.data.token, {domain: currentDomain})
      router.push("/")
    })
    .catch(err => console.log(err));
};

  return (
    <div className="grid place-items-center h-full">
      <div className="border border-solid border-zinc-300 p-10">
        <img src="/logo.png" width="280" className=""></img>
        <form onSubmit={handleLogin}>
          <article className="flex flex-col mb-5 mt-10 pt-10 border-t border-solid border-zinc-300">
            <input
              placeholder="Correo electrónico"
              className="border border-solid border-zinc-300 py-2 px-2"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </article>
          <article className="flex flex-col mb-3">
            <input
              placeholder="Contraseña"
              className="border border-solid border-zinc-300 py-2 px-2"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </article>
          <span className="text-zinc-500 text-sm mb-5 inline-block">
            ¿Olvidaste tu contraseña?
          </span>
          <button className="block bg-zinc-300 px-4 py-2 mx-auto mb-4 w-full hover:bg-footer hover:text-white transition ease-in-out">
            Iniciar Sesión
          </button>
        </form>
        <div className="block bg-zinc-300 px-4 py-2 mx-auto w-full text-center">
          ¿No tienes una cuenta?
          <Link className="ml-2 hover:underline" href="/signup">
            Regístrate
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

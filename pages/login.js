import Link from "next/link"

const Login = () => {
    return (
      <div className="grid place-items-center h-full">
        <div className="border border-solid border-zinc-300 p-10">
            <img src="/logo.png" width='280' className=""></img>
            <article className="flex flex-col mb-5 mt-10 pt-10 border-t border-solid border-zinc-300">
                <input placeholder="Correo electrónico" className="border border-solid border-zinc-300 py-2 px-2"/>
            </article>
            <article className="flex flex-col mb-3">
                <input placeholder="Contraseña" className="border border-solid border-zinc-300 py-2 px-2"/>
            </article>
            <span className="text-zinc-500 text-sm mb-5 inline-block">¿Olvidaste tu contraseña?</span>
            <button className="block bg-zinc-300 px-4 py-2 mx-auto mb-4 w-full hover:bg-footer hover:text-white transition ease-in-out">Iniciar Sesión</button>
            <div className="block bg-zinc-300 px-4 py-2 mx-auto w-full text-center">¿No tienes una cuenta?<Link className="ml-2 hover:underline" href="/signup">Regístrate</Link></div>
        </div>
      </div>
    )
}

export default Login
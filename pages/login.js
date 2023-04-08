const Login = () => {
    return (
      <div className="grid place-items-center h-full">
        <div className="border border-solid border-zinc-400 rounded-2xl p-10">
            <img src="/logo.png" width='280'></img>
            <article className="flex flex-col mb-5 mt-10">
                <span className="text-xs mb-2 ml-2">Correo</span>
                <input placeholder="example@gmail.com" className="rounded-full border border-solid border-zinc-400 rounded-full py-2 px-2"/>
            </article>
            <article className="flex flex-col mb-8">
                <span className="text-xs mb-2 ml-2">Contraseña</span>
                <input placeholder="example@gmail.com" className="rounded-full border border-solid border-zinc-400 rounded-full py-2 px-2"/>
            </article>
            <button className="block bg-zinc-200 px-4 py-2 mx-auto rounded-full mb-4 w-full">Iniciar Sesión</button>
            <button className="block bg-zinc-200 px-4 py-2 mx-auto rounded-full w-full">Crear una cuenta</button>
        </div>
      </div>
    )
}

export default Login
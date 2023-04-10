import Link from "next/link"

const SignUp = () => {
    return (
      <div className="grid place-items-center h-full">
        <div className="border border-solid border-zinc-300 p-10">
            <img src="/logo.png" width='280' className=""></img>
            <article className="flex flex-col mb-4 mt-10 pt-10 border-t border-solid border-zinc-300">
                <input placeholder="Nombre" className="border border-solid border-zinc-300 py-2 px-2"/>
            </article>
            <article className="flex flex-col mb-4">
                <input placeholder="Apellidos" className="border border-solid border-zinc-300 py-2 px-2"/>
            </article>
            <article className="flex flex-col mb-4">
                <input placeholder="Correo" className="border border-solid border-zinc-300 py-2 px-2"/>
            </article>
            <article className="flex flex-col mb-4">
                <input placeholder="Contraseña" className="border border-solid border-zinc-300 py-2 px-2"/>
            </article>
            <article className="flex flex-col mb-8">
                <input placeholder="Confirmar contraseña" className="border border-solid border-zinc-300 py-2 px-2"/>
            </article>
            <button className="block bg-zinc-300 px-4 py-2 mx-auto mb-4 w-full hover:bg-footer hover:text-white transition ease-in-out">Crear cuenta</button>
            <span className="text-zinc-500 text-sm mb-5 inline-block w-full text-center">¿Ya tienes una cuenta?</span>
        </div>
      </div>
    )
}

export default SignUp
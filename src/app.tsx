import logo from './assets/logo-in-orbit.svg'
import letStart from './assets/lets-start.svg'
import { Plus } from 'lucide-react'
import { Button } from './components/ui/button'

export function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit logo" />
      <img src={letStart} alt="in.orbit logo" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <Button>
        <Plus className="size-4" />
        Cadastrar meta
      </Button>

      {/* <button
        className="px-4 py-2.5 rounded-lg bg-violet-500 text-violet-50 flex items-center gap-2 text-sm font-medium tracking-tight hover:bg-violet-600 transition duration-250"
        type="button"
      >
        <Plus className="size-4" />
        Cadastrar meta
      </button> */}
    </div>
  )
}

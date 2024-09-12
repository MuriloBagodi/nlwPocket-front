import logo from './assets/logo-in-orbit.svg'
import letStart from './assets/lets-start.svg'
import { Plus, X } from 'lucide-react'
import { Button } from './components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './components/ui/dialog'
import { Label } from './components/ui/label'
import { Input } from './components/ui/input'
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from './components/ui/radio-group'
import { CreateGoal } from './components/create-goal'

export function App() {
  return (
    <Dialog>
      <div className="h-screen flex flex-col items-center justify-center gap-8">
        <img src={logo} alt="in.orbit logo" />
        <img src={letStart} alt="in.orbit logo" />
        <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
          Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora
          mesmo?
        </p>

        <DialogTrigger asChild>
          <Button>
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <CreateGoal />
    </Dialog>
  )
}

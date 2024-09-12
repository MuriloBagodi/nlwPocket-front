import { Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import { InOrbitLogo } from './in-orbit-logo'

export function Summary() {
  return (
    <div className="py-10 px-5 max-auto flex flex-col items-center">
      <div className="flex max-w-[460px] items-center justify-between w-available">
        <div className="flex items-center gap-3">
          <InOrbitLogo />
          <span className="text-lg font-semibold">05 a 10 de Agosto</span>
        </div>

        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>
    </div>
  )
}

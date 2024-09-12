import { CheckCircle2, Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import { InOrbitLogo } from './in-orbit-logo'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'
import { OutlineButton } from './ui/outline-button'

export function Summary() {
  return (
    <div className="py-10 px-5 mx-auto gap-6 flex flex-col max-w-[460px]">
      <div className="flex items-center justify-between">
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

      <div className="flex flex-col gap-3">
        <Progress value={8} max={15}>
          <ProgressIndicator style={{ width: 200 }} />
        </Progress>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Você completou <span className="text-zinc-100">8</span> de{' '}
            <span className="text-zinc-100">15</span> metas nessa semana
          </span>
          <span className="text-zinc-100">58%</span>
        </div>

        <Separator />

        <div className="flex flex-wrap p-3">
          <OutlineButton>
            <Plus className="size-4 text-zinc-400" />
            Meditar
          </OutlineButton>
          <OutlineButton>
            <Plus className="size-4 text-zinc-400" />
            Nadar
          </OutlineButton>
          <OutlineButton>
            <Plus className="size-4 text-zinc-400" />
            Estudar
          </OutlineButton>
          <OutlineButton>
            <Plus className="size-4 text-zinc-400" />
            Dormir cedo
          </OutlineButton>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-medium">Sua Semana</h2>

          <div className="flex flex-col gap-4">
            <h3 className="font-medium">
              Domingo
              <span className="text-zinc-400">(10 de agosto)</span>
            </h3>
            {/* TODO: Fazer btn de Desfazer que consta no Figma */}
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-zinc-400 text-sm">
                  Você completou{' '}
                  <span className="text-zinc-100">"Acordar cedo"</span> às{' '}
                  <span className="text-zinc-100">08:13h</span>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-zinc-400 text-sm">
                  Você completou{' '}
                  <span className="text-zinc-100">"Acordar cedo"</span> às{' '}
                  <span className="text-zinc-100">08:13h</span>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-zinc-400 text-sm">
                  Você completou{' '}
                  <span className="text-zinc-100">"Acordar cedo"</span> às{' '}
                  <span className="text-zinc-100">08:13h</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

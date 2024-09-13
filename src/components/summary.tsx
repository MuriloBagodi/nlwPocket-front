import { CheckCircle2, Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import { InOrbitLogo } from './in-orbit-logo'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'
import { OutlineButton } from './ui/outline-button'
import { getSummary } from '../http/get-summary'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import ptbr from 'dayjs/locale/pt-br'
import { PendingGoals } from './pending-goals'

dayjs.locale(ptbr)

export function Summary() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, // 60 seconds
  })

  if (!data) {
    return null
  }

  const firsDayOfWeek = dayjs().startOf('week').format('D MMM')
  const lastDayOfWeek = dayjs().endOf('week').format('D MMM')

  const completedPercentage = Math.round((data?.completed * 100) / data?.total)

  return (
    <div className="py-10 px-5 mx-auto gap-6 flex flex-col max-w-[460px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitLogo />
          <span className="text-lg font-semibold capitalize">
            {firsDayOfWeek} - {lastDayOfWeek}
          </span>
        </div>

        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={data?.completed} max={data?.total}>
          <ProgressIndicator style={{ width: `${completedPercentage}%` }} />
        </Progress>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Você completou{' '}
            <span className="text-zinc-100">{data?.completed}</span> de{' '}
            <span className="text-zinc-100">{data?.total}</span> metas nessa
            semana
          </span>
          <span className="text-zinc-100">{completedPercentage}%</span>
        </div>

        <Separator />

        <PendingGoals />

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-medium">Sua Semana</h2>

          {Object.entries(data.goalsPerDay).map(([date, goals]) => {
            const weekDay = dayjs(date).format('dddd')
            const formattedDate = dayjs(date).format('D[ de ]MMM')
            return (
              <div key={date} className="flex flex-col gap-4">
                <h3 className="font-medium">
                  <span className="capitalize">{weekDay}</span>
                  <span className="text-zinc-400"> ({formattedDate})</span>
                </h3>
                {/* TODO: Fazer btn de Desfazer que consta no Figma */}
                <ul className="flex flex-col gap-3">
                  {goals.map(goal => {
                    const completedAtParsedHour = dayjs(
                      goal.completedAt
                    ).format('HH:mm')

                    return (
                      <li key={goal.id} className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-pink-500" />
                        <span className="text-zinc-400 text-sm">
                          Você completou{' '}
                          <span className="text-zinc-100">"{goal.title}"</span>{' '}
                          às{' '}
                          <span className="text-zinc-100">
                            {completedAtParsedHour}
                          </span>
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

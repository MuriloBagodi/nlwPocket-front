import { Plus } from 'lucide-react'
import { OutlineButton } from './ui/outline-button'
import { useQuery } from '@tanstack/react-query'
import { getPendingGoals } from '../http/get-pending-goals'

export function PendingGoals() {
  const { data } = useQuery({
    queryKey: ['pending-goals'],
    queryFn: getPendingGoals,
    staleTime: 1000 * 60, // 60 seconds
  })

  if (!data) {
    return null
  }

  function handleCompleteGoal(goalId: string) {
    // implement logic to complete goal
  }

  return (
    <div className="flex flex-wrap p-3">
      {Object.entries(data).map(([completionCount, goal]) => {
        return (
          <OutlineButton
            key={goal.id}
            disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
          >
            <Plus className="size-4 text-zinc-400" />
            {goal.title}
          </OutlineButton>
        )
      })}
    </div>
  )
}

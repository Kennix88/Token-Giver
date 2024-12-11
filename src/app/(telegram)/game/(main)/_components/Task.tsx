import { task } from '@app/app/(telegram)/_types/task.interface'
import TaskItem from '@app/app/(telegram)/game/(main)/_components/TaskItem'

type props = {
  item: task
  isComplete: boolean
}

export default function Task({ task }: { category: string; task: props[] }) {
  return (
    <div className="flex flex-col gap-3 mt-5">
      {task.map((item: props) => (
        <TaskItem key={item.item._id} task={item} />
      ))}
    </div>
  )
}

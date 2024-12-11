import { task } from '@app/app/(telegram)/_types/task.interface'
import { FaFacebook, FaTelegramPlane, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { GiArrowCursor } from 'react-icons/gi'
import { HiMiniCursorArrowRays } from 'react-icons/hi2'

type props = {
  item: task
  isComplete: boolean
}

export default function TaskItem({ task }: { task: props }) {
  const getCoin = (
    value: 'telegram' | 'facebook' | 'youtube' | 'x' | 'visit',
  ) => {
    switch (value) {
      case 'telegram':
        return <FaTelegramPlane className="text-3x1" />

      case 'x':
        return <FaXTwitter className="text-3x1" />

      case 'visit':
        return <GiArrowCursor className="text-3x1" />

      case 'youtube':
        return <FaYoutube className="text-3x1" />

      case 'facebook':
        return <FaFacebook className="text-3x1" />

      default:
        return <HiMiniCursorArrowRays className="text-3x1" />
    }
  }
  return (
    <div>
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-row gap-4 items-center ">
          <div className="bg-white bg-opacity-10 p-2 text-white rounded-full">
            {getCoin(task?.item?.category)}
          </div>
          <div className="">
            <p className="line-clamp-2 font-montserrat font-medium text-white text-sm">
              {task?.item?.title}
            </p>
            <p className="font-montserrat font-bold text-white text-s text-opacity-50">
              + {task?.item?.point} {process.env.TOKEN_SYMBOL}
            </p>
          </div>
        </div>
        <button className="font-montserrat px-4 rounded-full font-medium bg-white text-white text-md py-2 bg-opacity-10">
          Start
        </button>
      </div>
    </div>
  )
}

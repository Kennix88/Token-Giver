import { GiGrowth } from 'react-icons/gi'

export default function RewardCard() {
  return (
    <div className="flex items-center gap-2 my-2">
      <div className="bg-white text-white rounded-full p-3 bg-opacity-10">
        <GiGrowth className="text-sm" />
      </div>
      <div className="flex justify-between items-center w-full">
        <p className="font-montserrat font-medium text-white">Age reward</p>
        <p className="font-montserrat text-xs font-medium text-white text-opacity-40">
          + 7528 RATS
        </p>
      </div>
    </div>
  )
}

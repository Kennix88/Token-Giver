'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import { CiHome } from 'react-icons/ci'
import { FaUserFriends } from 'react-icons/fa'
import { MdLeaderboard } from 'react-icons/md'

export default function BottomNavigation() {
  const location = usePathname()

  return (
    <div className="grid grid-cols-4 gap-4 sticky bottom-0 bg-black py-2">
      <Link href={'/game'}>
        <div className="text-white flex justify-center items-center flex-col gap-1 cursor-pointer">
          <CiHome className="text-xl" />
          <p
            className={`px-2 font-montserrat font-medium rounded-full  ${location !== '/game' ? 'bg-transparent text-white' : 'bg-white text-black'}  text-xs`}>
            Home
          </p>
        </div>
      </Link>
      <Link href={'/game/collaboration'}>
        <div className="text-white flex justify-center items-center flex-col gap-1 cursor-pointer">
          <AiOutlineThunderbolt className="text-xl" />
          <p
            className={`px-2 font-montserrat font-medium rounded-full  ${location !== '/game/collaboration' ? 'bg-transparent text-white' : 'bg-white text-black'}  text-xs`}>
            Collab
          </p>
        </div>
      </Link>
      <Link href={'/game/leaderboard'}>
        <div className="text-white flex justify-center items-center flex-col gap-1 cursor-pointer">
          <MdLeaderboard className="text-xl" />
          <p
            className={`px-2 font-montserrat font-medium rounded-full  ${location !== '/game/leaderboard' ? 'bg-transparent text-white' : 'bg-white text-black'}  text-xs`}>
            Leaderboard
          </p>
        </div>
      </Link>
      <Link href={'/game/friends'}>
        <div className="text-white flex justify-center items-center flex-col gap-1 cursor-pointer">
          <FaUserFriends className="text-xl" />
          <p
            className={`px-2 font-montserrat font-medium rounded-full  ${location !== '/game/friends' ? 'bg-transparent text-white' : 'bg-white text-black'}  text-xs`}>
            Friends
          </p>
        </div>
      </Link>
    </div>
  )
}

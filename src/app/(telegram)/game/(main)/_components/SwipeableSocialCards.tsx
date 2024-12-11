import SocialCardItem from '@app/app/(telegram)/game/(main)/_components/SocialCardItem'
import { useRef } from 'react'
import { SwipeableHandlers, useSwipeable } from 'react-swipeable'

export default function SwipeableSocialCards() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Swipe handlers
  const handlers: SwipeableHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 1000
      }
    },
    onSwipedRight: () => {
      if (containerRef.current) {
        containerRef.current.scrollLeft -= 1000
      }
    },
    trackMouse: true,
  })

  return (
    <div
      {...handlers}
      ref={containerRef}
      className="w-full flex gap-3 overflow-x-auto scrollbar-hide">
      <SocialCardItem />
      <SocialCardItem />
    </div>
  )
}

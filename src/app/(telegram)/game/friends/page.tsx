import Bonuses from '@/app/(telegram)/game/friends/_components/Bonuses.tsx'
import Title from '@/app/(telegram)/game/friends/_components/Title.tsx'
import { Page } from '@/components/Page'

export default function Friends() {
  return (
    <Page back={false}>
      <div className="flex flex-col gap-4">
        <Title />
        <Bonuses />
      </div>
    </Page>
  )
}

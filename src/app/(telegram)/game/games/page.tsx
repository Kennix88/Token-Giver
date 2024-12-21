import GamesCard from '@/app/(telegram)/game/_components/GamesCard'
import { Page } from '@/components/Page'

export default function Games() {
  return (
    <Page back={true}>
      <div className="flex flex-col gap-4">
        <GamesCard />
      </div>
    </Page>
  )
}

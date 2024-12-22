import GamesList from '@/app/(telegram)/game/_components/GamesList.tsx'
import { Page } from '@/components/Page'

export default function Games() {
  return (
    <Page back={false}>
      <div className="flex flex-col gap-4">
        <GamesList />
      </div>
    </Page>
  )
}

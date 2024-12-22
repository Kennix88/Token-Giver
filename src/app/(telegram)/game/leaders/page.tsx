import KingTheHill from '@/app/(telegram)/game/leaders/_components/KingTheHill.tsx'
import Statistics from '@/app/(telegram)/game/leaders/_components/Statistics.tsx'
import { Page } from '@/components/Page'

export default function Leaders() {
  return (
    <Page back={false}>
      <div className="flex flex-col gap-4">
        <Statistics />
        <KingTheHill />
      </div>
    </Page>
  )
}

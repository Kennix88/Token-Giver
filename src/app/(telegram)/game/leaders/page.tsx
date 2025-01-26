import BoostButton from '@/app/(telegram)/game/_components/BoostButton.tsx'
import KingTheHill from '@/app/(telegram)/game/leaders/_components/KingTheHill.tsx'
import Statistics from '@/app/(telegram)/game/leaders/_components/Statistics.tsx'
import TabsLeaders from '@/app/(telegram)/game/leaders/_components/TabsLeaders.tsx'
import Title from '@/app/(telegram)/game/leaders/_components/Title.tsx'
import { Page } from '@/components/Page'

export default function Leaders() {
  return (
    <Page back={false}>
      <div className="flex flex-col gap-4">
        <Title />
        <Statistics />
        <KingTheHill />
        <BoostButton />
        <TabsLeaders />
      </div>
    </Page>
  )
}

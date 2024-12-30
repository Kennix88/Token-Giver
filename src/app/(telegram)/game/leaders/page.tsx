import BoostButton from '@/app/(telegram)/game/_components/BoostButton.tsx'
import KingTheHill from '@/app/(telegram)/game/leaders/_components/KingTheHill.tsx'
import LeadersList from '@/app/(telegram)/game/leaders/_components/LeadersList.tsx'
import Statistics from '@/app/(telegram)/game/leaders/_components/Statistics.tsx'
import { Page } from '@/components/Page'
import { LeadersTypeEnum } from '@/types/leadersType.enum.ts'

export default function Leaders() {
  return (
    <Page back={false}>
      <div className="flex flex-col gap-4">
        <Statistics />
        <KingTheHill />
        <BoostButton />
        <LeadersList type={LeadersTypeEnum.TOKEN} />
      </div>
    </Page>
  )
}

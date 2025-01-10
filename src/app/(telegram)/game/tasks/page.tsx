import TabsTasks from '@/app/(telegram)/game/tasks/_components/TabsTasks.tsx'
import Title from '@/app/(telegram)/game/tasks/_components/Title.tsx'
import { Page } from '@/components/Page'

export default function Tasks() {
  return (
    <Page back={false}>
      <div className="flex flex-col gap-4">
        <Title />
        <TabsTasks />
      </div>
    </Page>
  )
}

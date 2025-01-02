import TabsTasks from '@/app/(telegram)/game/tasks/_components/TabsTasks.tsx'
import { Page } from '@/components/Page'

export default function Tasks() {
  return (
    <Page back={false}>
      <div className="flex flex-col gap-4">
        <TabsTasks />
      </div>
    </Page>
  )
}

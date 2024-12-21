import Deily from '@/app/(telegram)/game/_components/Deily'
import Profile from '@/app/(telegram)/game/_components/Profile'
import TasksBanner from '@/app/(telegram)/game/_components/TasksBanner'
import { Page } from '@/components/Page'

export default function Home() {
  return (
    <Page back={false}>
      <div className="flex flex-col gap-4">
        <Profile />
        <Deily />
        <TasksBanner />
      </div>
    </Page>
  )
}

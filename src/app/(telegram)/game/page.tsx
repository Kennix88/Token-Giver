import Profile from '@/app/(telegram)/game/_components/Profile'
import { Page } from '@/components/Page'

export default function Home() {
  return (
    <Page back={false}>
      <div className="flex flex-col gap-4">
        <Profile />
      </div>
    </Page>
  )
}

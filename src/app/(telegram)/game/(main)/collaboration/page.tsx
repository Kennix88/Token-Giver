import CollaborationItem from '@app/app/(telegram)/game/(main)/collaboration/_components/CollaborationItem'

export default function CollaborationPage() {
  return (
    <div className="min-h-screen">
      <p className="text-2xl font-montserrat font-bold text-white">
        Collaboration
      </p>
      <p className="text-sm text-opacity-50 font-montserrat font-medium text-white">
        Complete tasks from our collaborators to get more{' '}
        {process.env.TOKEN_SYMBOL}!
      </p>

      <div className="flex flex-col gap-3 mt-5">
        <CollaborationItem />
        <CollaborationItem />
        <CollaborationItem />
        <CollaborationItem />
      </div>
    </div>
  )
}

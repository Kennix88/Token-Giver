'use client'
import BalanceCard from '@app/app/(telegram)/game/(main)/_components/BalanceCard'

export default function Home() {
  // const [tabValue, setTabValue] = useState('socials')
  // const [trigger] = useMarkAsOldMutation()
  // const user = useContext(MagicCP)
  // console.log(user?.user)
  // useEffect(() => {
  //   if (user?.user?.is_newcomer) {
  //     trigger(undefined)
  //   }
  // }, [user?.user])
  // const { data } = useTaskListQuery(undefined)
  // console.log(data)
  //
  // const socials = data?.data?.filter((item: props) =>
  //   item?.item?.type === 'social' ? item : null,
  // )
  // const special = data?.data?.filter((item: props) =>
  //   item?.item?.type === 'special' ? item : null,
  // )
  // const Friend = data?.data?.filter((item: props) =>
  //   item?.item?.type === 'friend' ? item : null,
  // )

  return (
    <div className="min-h-screen">
      <BalanceCard balance={5000} />
      {/*<div className="mt-4">*/}
      {/*  <SwipeableSocialCards />*/}
      {/*</div>*/}
      {/*<p className="font-montserrat text-xl font-bold text-white">Tasks</p>*/}
      {/*<div className="bg-white bg-opacity-10 rounded-xl p-2 flex items-center gap-2">*/}
      {/*  <button*/}
      {/*    onClick={() => setTabValue('socials')}*/}
      {/*    className={`${tabValue === 'socials' ? 'text-black flex-1 font-bold font-montserrat bg-yellow-500 px-2 rounded-md' : 'text-white'} `}>*/}
      {/*    Socials*/}
      {/*  </button>*/}
      {/*  <button*/}
      {/*    onClick={() => setTabValue('friends')}*/}
      {/*    className={`${tabValue === 'friends' ? 'text-black flex-1 font-bold font-montserrat bg-yellow-500 px-2 rounded-md' : 'text-white'} `}>*/}
      {/*    Friends*/}
      {/*  </button>*/}
      {/*  <button*/}
      {/*    onClick={() => setTabValue('specials')}*/}
      {/*    className={`${tabValue === 'specials' ? 'text-black flex-1 font-bold font-montserrat bg-yellow-500 px-2 rounded-md' : 'text-white'} `}>*/}
      {/*    Specials*/}
      {/*  </button>*/}
      {/*</div>*/}
      {/*<Task*/}
      {/*  category={tabValue}*/}
      {/*  task={*/}
      {/*    tabValue === 'socials'*/}
      {/*      ? socials*/}
      {/*      : tabValue === 'friends'*/}
      {/*        ? Friend*/}
      {/*        : tabValue === 'specials' && special*/}
      {/*  }*/}
      {/*/>*/}

      {/*<p className="font-montserrat text-xl font-bold text-white my-2">*/}
      {/*  Your rewards*/}
      {/*</p>*/}
      {/*<RewardsCards />*/}
      {/*<RewardsCards />*/}
      {/*<RewardsCards />*/}
      {/*<RewardsCards />*/}
    </div>
  )
}

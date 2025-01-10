'use client'

export default function HiRiskDisclaimer() {
  return (
    <div className="flex flex-col gap-1 font-bold">
      <div className="px-4 uppercase text-warning">Warning</div>
      <div className="flex flex-col gap-4 items-center justify-center bg-warning-container text-on-warning-container p-4 rounded-md bg-opacity-70 font-medium">
        HI-Risk tasks, belong to the categories: betting (betting, bookmakers,
        etc.) gambling (poker, casinos, lotteries/sweepstakes, etc.),
        investments and loans/microloans. Their use may harm your well-being. We
        are not responsible for your funds!
      </div>
    </div>
  )
}

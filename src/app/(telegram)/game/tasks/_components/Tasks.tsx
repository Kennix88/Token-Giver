'use client'

export default function Tasks() {
  const data = {
    list: [
      {
        id: 1,
        title: 'title',
        description: 'description',
        token: 100,
        deamond: 1,
        category: 'game',
        link: '',
        isPremium: false,
        icon: 'x',
        partnerIconUrl: null,
        experedAt: new Date('2023-01-01'),
      },
    ],
  }

  return <div>tasks</div>
}

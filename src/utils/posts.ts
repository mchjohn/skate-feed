const posts = [
  {
    id: '1',
    author: {
      avatar_url: 'https://github.com/mchjohn.png',
      name: 'Michel John',
      role: 'AM 1'
    },
    publishedAt: new Date(),
    comment: [
      { type: 'paragraph', content: 'Fala galera 🛹' },
      { type: 'paragraph', content: 'Sora Shirai destruiu nas classificatórias para o SLS no skatepark da Primitive' },
      { type: 'link', content: 'streetleague.com' },
    ]
  },
  {
    id: '2',
    author: {
      avatar_url: 'https://skateparkoftampa.com/spot/headshots/3973.jpg',
      name: 'Thiago Lemos',
      role: 'Primitive - Pro'
    },
    publishedAt: new Date('2022-06-01 21:33:00'),
    comment: [
      { type: 'paragraph', content: 'Fala galera 🛹' },
      { type: 'paragraph', content: 'Foi muito top o evento.' },
      { type: 'link', content: 'streetleague.com' },
    ]
  },
  {
    id: '3',
    author: {
      avatar_url: 'https://skateparkoftampa.com/spot/headshots/6588.jpg',
      name: 'Yuto Horigome',
      role: 'April - Pro'
    },
    publishedAt: new Date('2022-06-07 20:33:00'),
    comment: [
      { type: 'paragraph', content: 'Fala galera 🛹' },
      { type: 'paragraph', content: 'Esse skatepark da Primitive é top mano.' },
      { type: 'link', content: 'streetleague.com' },
    ]
  },
  {
    id: '4',
    author: {
      avatar_url: 'https://skateparkoftampa.com/spot/headshots/2685.jpg',
      name: 'Luan Oliveira',
      role: 'Flip - Pro'
    },
    publishedAt: new Date('2022-06-13 21:33:00'),
    comment: [
      { type: 'paragraph', content: 'Fala galera 🛹' },
      { type: 'paragraph', content: 'REAL' },
      { type: 'link', content: 'streetleague.com' },
    ]
  },
  {
    id: '5',
    author: {
      avatar_url: 'https://skateparkoftampa.com/spot/headshots/8340.jpg',
      name: 'Aori Nishimura',
      role: 'Deathwish - AM'
    },
    publishedAt: new Date('2022-05-01 14:33:00'),
    comment: [
      { type: 'paragraph', content: 'Fala galera 🛹' },
      { type: 'paragraph', content: 'Quando rola no Rio?' },
      { type: 'link', content: 'streetleague.com' },
    ]
  },
]

export { posts };
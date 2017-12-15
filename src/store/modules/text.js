const state = {
  // website general
  zoneName: 'COSMOS_ZONE',
  zoneTagline: 'A super-awesome tagline for this zone. It\'s one of the best.',
  siteTitle: 'COSMOS_ZONE - A Cosmos Zone',
  siteDescription: 'A description of this Cosmos Zone. This description is for use on the website (below the fold). Its also used for web search metadata. This text should be of a decent length, roughly 280 characters. More characters is okay. (REPLACEME)',

  // SECTION: Cover

  // if coverIcon not set, the app will use the image located at
  // ./src/assets/images/logo-zone.png
  // image must have a transparent bg and square dimensions
  coverIcon: 'crop_free', // default: crop_free

  // coverBtn is link and label for the primary action on the homepage
  coverBtn: {
    icon: 'code',
    value: 'View on GitHub',
    href: 'https://github.com/REPLACEME'
  },

  // SECTION: What
  whatTitle: 'What is this Zone?',
  whatDiagrams: [
    {
      icon: 'lightbulb_outline',
      title: 'Description label for this diagram (REPLACEME)'
    },
    {
      icon: 'lightbulb_outline',
      title: 'Description label for this diagram (REPLACEME)'
    },
    {
      icon: 'lightbulb_outline',
      title: 'Description label for this diagram (REPLACEME)'
    },
    {
      icon: 'lightbulb_outline',
      title: 'Description label for this diagram (REPLACEME)'
    }
  ],

  // SECTION: Benefits
  benefitsTitle: 'Benefits of this Zone',
  benefits: [
    {
      icon: 'mood',
      title: 'Benefit 1 (REPLACEME)',
      body: 'This is a really awesome benefit of this zone. (REPLACEME)'
    },
    {
      icon: 'mood',
      title: 'Benefit 2 (REPLACEME)',
      body: 'This is a really awesome benefit of this zone. (REPLACEME)'
    },
    {
      icon: 'mood',
      title: 'Benefit 3 (REPLACEME)',
      body: 'This is a really awesome benefit of this zone. (REPLACEME)'
    }
  ],

  // SECTION: Community
  communityTitle: 'Join the REPLACEME network!',
  communityUrlsTitle: 'Discuss & Chat',
  // community urls should be deleted if you don't use it
  communityUrls: [
    { title: 'Telegram', href: 'https://REPLACEME', icon: 'telegram' },
    { title: 'Riot', href: 'https://REPLACEME', icon: 'comments-o' },
    { title: 'Slack', href: 'https://REPLACEME.slack.com', icon: 'slick' }
  ],
  socialMediaUrlsTitle: 'Social Media',
  // social media urls should be deleted if you don't use it
  socialMediaUrls: [
    { title: 'Facebook', href: 'https://facebook.com/REPLACEME', icon: 'footbook' },
    { title: 'Twitter', href: 'https://twitter.com/REPLACEME', icon: 'twatter' },
    { title: 'Reddit', href: 'https://reddit.com/r/REPLACEME', icon: 'raddit' }
  ]
}

export default {
  state
}

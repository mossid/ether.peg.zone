const state = {
  // SECTION: Links
  zoneGithub: 'https://github.com/REPLACEME',
  zoneWebsiteGithub: 'https://github.com/REPLACEME',

  // SECTION: Site
  zoneName: 'COSMOS_ZONE',
  zoneTagline: 'A super-awesome tagline for this zone. It\'s one of the best.',
  siteTitle: 'COSMOS_ZONE - A Cosmos Zone',
  siteDescription: 'A description of this Cosmos Zone. This description is for use on the website (below the fold). Its also used for web search metadata. This text should be of a decent length, roughly 280 characters. More characters is okay. (REPLACEME)',

  // SECTION: Cover
  coverIcon: 'crop_free',
  // if coverIcon not set, the app will use the image located at
  // ./src/assets/images/logo-zone.png

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
    /* {
      icon: 'mood',
      title: 'Benefit 4 (REPLACEME)',
      body: 'This is a really awesome benefit of this zone. (REPLACEME)'
    } */
    // you may add more benefits -- the site layout looks best with multiples of 3
  ]
}

export default {
  state
}

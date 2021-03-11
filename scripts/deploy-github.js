const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'public',
    repo: 'https://github.com/engage-agency/portfolio.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '601fd396a96f4cf4f717c474',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-y3hbjbbq',
                  apiId: 'eca087d3-97c6-4bbf-99ef-3863098e6cb5'
                },
                {
                  buildHookId: '601fd3960aa75dfbe294c907',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-etrjz4fa',
                  apiId: '5e6c36c3-593f-4424-99c1-ee292ac7eab9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gamergemparq/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-etrjz4fa.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

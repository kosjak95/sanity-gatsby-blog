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
                  buildHookId: '5ee09bfddeb15112c93d337b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-aqmkkn74',
                  apiId: 'ca8d200f-3a94-423b-bdae-4b9ae2a8a4da'
                },
                {
                  buildHookId: '5ee09bfd2096b0ac3c571bda',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-17of4umj',
                  apiId: '806c46b5-d22f-4a67-a36c-083bf4613de5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kosjak95/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-17of4umj.netlify.app', category: 'apps' }
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

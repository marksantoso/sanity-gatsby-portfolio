export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d694c170809821b30d46267',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ooyfixig',
                  apiId: 'a58b98b6-3a91-4d59-acb0-08c6d4bc9cfb'
                },
                {
                  buildHookId: '5d694c17a558790e02801037',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-pmefpi33',
                  apiId: 'fc6fd691-f335-4743-9395-17766b6b3046'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marksantoso/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-pmefpi33.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}

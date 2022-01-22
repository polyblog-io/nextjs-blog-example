import { getArticles } from '@polyblog/polyblog-js-client'

export async function getStaticPaths({locales}) {
  
  let articles = await getArticles({
    blogId: '4217f90b8eaa86551e7f7d55',
    published: true,
  })
  
  articles = articles.filter(({locale}) => locales.includes(locale))

  const paths = articles.map((article) => ({
    locale: article.locale,
    params: { slug: article.slugLocalized },
  }))

  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({locale, params}) {

  // console.log('getStaticProps', params)

  const { slug } = params
  const articles = await getArticles({
    blogId: '4217f90b8eaa86551e7f7d55',
    locale, 
    slugLocalized: slug,
  })

  return {
    props: {
      article: articles[0], 
    }
  }

}

export default function Article({article}) {

  return (
    <div>
      {article && (
        <div>
          <h1>{article.title}</h1>
          <div>{article.subtitle}</div>
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
      )}
    </div>
  )

}
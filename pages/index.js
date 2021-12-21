import Link from 'next/link'
import { getArticles } from '@polyblog/polyblog-js-client'

export async function getStaticProps({locale}) {

  const articles = await getArticles({
    organizationId: 'c398463407b5c12f27f9aed4',
    project: 'polyblog',
    locale, 
    published: true,
    sortDirection: 'DESC',
  })

  return {
    props: {
      articles
    }
  }

}

export default function Blog({articles}) {
  
  return (
    <div>
      <h1>Blog</h1>
      {articles?.map(article => (
        <Link key={article._id} href={article.slugLocalized}>
          <a>
            <div>{article.title}</div>
            <div>{article.subtitle}</div>
          </a>
        </Link>
      ))}
    </div>
  )

}
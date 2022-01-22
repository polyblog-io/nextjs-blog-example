import Link from 'next/link'
import { getArticles } from '@polyblog/polyblog-js-client'

export async function getStaticProps({locale}) {

  const articles = await getArticles({
    locale, 
    published: true,
    sortDirection: 'DESC',
    blogId: '4217f90b8eaa86551e7f7d55',
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
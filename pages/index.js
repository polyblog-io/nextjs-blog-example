import Link from 'next/link'
import { useRouter } from 'next/router'
import getArticles from '@polyblog/polyblog-js-client/getArticles'

export async function getStaticProps({locale}) {

  const articles = await getArticles({
    blog: 'polyblog',
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
  
  const router = useRouter()

  return (
    <div>
      <h1>Blog</h1>
      <p>locale {router.locale}</p>
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
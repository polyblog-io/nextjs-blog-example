import { useRouter } from 'next/router'

export default function Article() {

  const router = useRouter()

  return (
    <div>
      <h1>Article</h1>
      <p>locale {router.locale}</p>
      <p>article id {router.query.id}</p>
    </div>
  )

}
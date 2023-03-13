import { PageInfo } from './../typings.d'

export const fetchPageInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getPageInfo`
  )
  const data = await res.json()
  const pageInfo: PageInfo = data.pageInfo
  // console.log("fetching", pageInfo)
  return pageInfo
}

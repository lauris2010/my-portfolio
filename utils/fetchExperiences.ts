import { Experience } from './../typings.d'

export const fetchExperiences = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getExperience`
  )
  const data = await res.json()
  const experiences: Experience[] = data.experiences
  // console.log("fetching", experiences)
  return experiences
}

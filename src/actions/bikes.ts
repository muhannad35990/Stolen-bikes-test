import { SEARCH } from "@/config/endpoints"

export const getAllBikes = async (page, per_page, query) => {
  const response = await fetch(SEARCH)
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`)
  }

  const json = await response.json()
  return json?.bikes
}

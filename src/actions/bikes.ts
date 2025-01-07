import { SEARCH, SEARCH_COUNT } from "@/config/endpoints"

export const getAllBikes = async (
  page: number,
  per_page: number,
  query: string
) => {
  const params = `?stolenness=stolen&page=${page}&per_page=${per_page}&query=${query}`
  const response = await fetch(SEARCH + params)
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`)
  }
  const counts = await getAllBikesCount(params)

  const json = await response.json()
  return { data: json?.bikes, counts }
}

export const getAllBikesCount = async (params: string) => {
  const response = await fetch(SEARCH_COUNT + params)
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`)
  }

  const json = await response.json()
  return json
}

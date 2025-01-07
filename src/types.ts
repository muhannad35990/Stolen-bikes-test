export interface BikeProps {
  id: number
  title: string
  desc: string
  theftDate: number
  reportDate: string
  location: string
  image: string
}

export interface SearchProps {
  onChange: (v: string) => void
}

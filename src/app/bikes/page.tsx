"use client"
import { getAllBikes } from "@/actions/bikes"
import { Pagination } from "@mui/material"
import { useEffect, useState } from "react"
import Bike from "../components/Bike/Bike"
import Loader from "../components/Loader/Loader"
import { Styles } from "./Styles"
import Search from "../components/Search/Search"
import NoData from "../components/NoData/NoData"
function Bikes() {
  const per_page = 10
  const [page, setPage] = useState(1)
  const [allBikes, setAllBikes] = useState<any>({})
  const [isLoading, setIsLoading] = useState(false)
  const [searchText, setSearchText] = useState("")
  useEffect(() => {
    const readBikes = async () => {
      setIsLoading(true)
      const resp: any = await getAllBikes(page, per_page, searchText)
      setAllBikes(resp)
      setIsLoading(false)
    }
    if (!isLoading) readBikes()
  }, [page, per_page, searchText])

  return (
    <Styles>
      <Search onChange={setSearchText} />
      {isLoading && <Loader />}
      {!isLoading && allBikes?.counts?.stolen === 0 && <NoData />}
      {!isLoading && allBikes?.counts?.stolen > 0 && (
        <div className="content">
          <div className="bikes__container">
            <div className="total__container">
              <h4>Total:</h4> <h4>{allBikes?.counts?.stolen}</h4>
            </div>
            {allBikes?.data?.map((bike: any, index: number) => (
              <Bike
                id={bike?.id}
                title={bike?.title}
                desc={bike?.description}
                theftDate={bike?.date_stolen}
                reportDate={""}
                location={bike?.stolen_location}
                image={bike?.thumb}
                key={index}
              />
            ))}
          </div>

          <Pagination
            count={allBikes?.counts?.stolen / per_page}
            showFirstButton
            showLastButton
            page={page}
            onChange={(event: React.ChangeEvent<unknown>, value: number) => {
              setPage(value)
            }}
          />
        </div>
      )}
    </Styles>
  )
}

export default Bikes

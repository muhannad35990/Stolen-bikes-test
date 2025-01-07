"use client"
import { getBikeById } from "@/actions/bikes"
import { Styles } from "../Styles"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Card, Grid2 } from "@mui/material"
import Image from "next/image"
import dayjs from "dayjs"
import Loader from "@/app/components/Loader/Loader"

function page() {
  const params = useParams()
  const [Bike, setBike] = useState<any>({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const readData = async () => {
      setIsLoading(true)
      const data = await getBikeById(Number(params?.id))
      setBike(data.bike)
      setIsLoading(false)
    }
    if (params?.id) readData()
  }, [params])

  if (isLoading) return <Loader />
  return (
    <Styles>
      <div className="details__container">
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Image
              width={300}
              height={300}
              alt={Bike.title ?? "bike"}
              src={Bike.large_img ?? "/images/no-image1.png"}
            />
            <p>Serial: {Bike?.serial}</p>
            <p>Frame Model: {Bike?.frame_model}</p>
            {Bike?.front_tire_narrow && (
              <p>front_tire_narrow: {Bike?.front_tire_narrow}</p>
            )}
            {Bike?.front_wheel_size_iso_bsd && (
              <p>front_wheel_size_iso_bsd: {Bike?.front_wheel_size_iso_bsd}</p>
            )}
          </Grid2>
          <Grid2 size={{ xs: 12, md: 8, lg: 5 }}>
            <h1>{Bike?.title}</h1>
            <p> {dayjs.unix(Bike?.date_stolen).format("D.M.YYYY")}</p>
            <p>{Bike?.description}</p>
            <div>
              {Bike?.frame_colors?.map((color: string, index: number) => (
                <div
                  className="Badge"
                  style={{ backgroundColor: color, color: "#ccc" }}
                  key={index}
                >
                  {color}
                </div>
              ))}
            </div>
          </Grid2>
          <Grid2 size={{ xs: 12, lg: 3 }}>
            <Grid2 container spacing={4}>
              <Grid2 size={{ xs: 12, md: 6, lg: 12 }}>
                {" "}
                <Card className="card__container">
                  <h4 className="card__header">Stolen location</h4>
                  <div className="card__content">
                    <p>{Bike?.stolen_location}</p>
                    <p>
                      lat:
                      {Bike?.stolen_coordinates
                        ? Bike?.stolen_coordinates[0]
                        : ""}
                    </p>
                    <p>
                      long:
                      {Bike?.stolen_coordinates
                        ? Bike?.stolen_coordinates[1]
                        : ""}
                    </p>
                  </div>
                </Card>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6, lg: 12 }}>
                <Card className="card__container">
                  <div className="">
                    <h4 className="card__header">Stolen record</h4>
                    <div className="card__content">
                      <p>Location: {Bike?.stolen_record?.location}</p>
                      <p>lat: {Bike?.stolen_record?.latitude}</p>
                      <p>long: {Bike?.stolen_record?.longitude}</p>
                      <p>
                        Created at:{" "}
                        {dayjs
                          .unix(Bike?.stolen_record?.created_at)
                          .format("D.M.YYYY")}
                      </p>
                      <p>{Bike?.stolen_record?.police_report_department}</p>
                      {Bike?.stolen_record?.theft_description}
                    </div>
                  </div>
                </Card>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </div>
    </Styles>
  )
}

export default page

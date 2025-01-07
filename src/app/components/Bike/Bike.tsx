import { FC, ReactElement } from "react"
import Styles from "./Styles"
import { BikeProps } from "@/types"
import Link from "next/link"
import Image from "next/image"
import dayjs from "dayjs"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
const Bike: FC<BikeProps> = ({
  id,
  title,
  desc,
  theftDate,
  reportDate,
  location,
  image
}): ReactElement => {
  return (
    <Styles>
      <Link href={`/bikes/${id}`} className="bike">
        <Image
          alt={title}
          src={image ?? "/images/no-image1.png"}
          width={300}
          height={300}
          className="thumb__image"
        />
        <div className="bike__content__container">
          <div>
            <h3>{title}</h3>

            <p className="date">
              <CalendarMonthIcon />
              {dayjs.unix(theftDate).format("D.M.YYYY")}
            </p>
            <p className="desc">{desc}</p>
          </div>
          {location && (
            <h4 className="location">
              <LocationOnIcon />
              {location}
            </h4>
          )}
        </div>
      </Link>
    </Styles>
  )
}

export default Bike

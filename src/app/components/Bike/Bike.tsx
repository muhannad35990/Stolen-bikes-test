import { FC, ReactElement } from "react"
import Styles from "./Styles"
import { BikeProps } from "@/types"
import Link from "next/link"
import Image from "next/image"

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
      <Link href={`/${id}`} className="bike">
        <Image
          alt={title}
          src={image ?? "/images/no-image.png"}
          width={300}
          height={300}
        />
        <div>
          <h1>{title}</h1>
        </div>
      </Link>
    </Styles>
  )
}

export default Bike

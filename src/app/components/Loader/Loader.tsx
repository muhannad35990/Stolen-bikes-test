import React from "react"
import { Styles } from "./Styles"
import { CircularProgress } from "@mui/material"

function Loader() {
  return (
    <Styles>
      {" "}
      <CircularProgress />
    </Styles>
  )
}

export default Loader

import FileUpload from "../components/FileUpload"
import ScheduleTable from "../components/ScheduleTable"

function Hero() {
  return (
    <div className="flex flex-col justify-start items-center gap-10">
      <FileUpload/>
      <ScheduleTable/>
    </div>
  )
}

export default Hero

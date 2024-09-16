import FileUpload from "../components/FileUpload"
import ScheduleTable from "../components/ScheduleTable"

function Hero() {
  return (
    <div className="flex flex-col justify-arround items-center gap-20">
      <FileUpload/>
      <ScheduleTable/>
    </div>
  )
}

export default Hero

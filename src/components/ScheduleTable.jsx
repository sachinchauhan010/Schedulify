import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table.jsx";

function ScheduleTable() {
  const scheduleData = [
    {
      period: "I",
      time: "9:30AM - 11:10AM",
      subject: "Computer Network",
      course: "MCA",
      year: "II",
      batch: "P2",
      classType: "Lab",
      attended: "Yes",
    },
    {
      period: "II",
      time: "11:20AM - 12:50PM",
      subject: "Data Structures",
      course: "MCA",
      year: "II",
      batch: "P2",
      classType: "Theory",
      attended: "No",
    },
    {
      period: "III",
      time: "1:30PM - 3:00PM",
      subject: "Database Systems",
      course: "MCA",
      year: "II",
      batch: "P2",
      classType: "Lecture",
      attended: "Yes",
    },
    {
      period: "IV",
      time: "3:10PM - 4:40PM",
      subject: "Operating Systems",
      course: "MCA",
      year: "II",
      batch: "P2",
      classType: "Theory",
      attended: "No",
    },
  ];

  return (
    <div className="w-full px-10">
      <div className="text-2xl text-center w-full">Today's Schedule</div>
      <div className="text-xl font-medium p-2">Day: Monday</div>
      <Table>
        <TableCaption>Your schedule for the day</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Period</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Course</TableHead>
            <TableHead>Year</TableHead>
            <TableHead>Batch</TableHead>
            <TableHead>Class Type</TableHead>
            <TableHead>Attended</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {scheduleData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.period}</TableCell>
              <TableCell>{item.time}</TableCell>
              <TableCell>{item.subject}</TableCell>
              <TableCell>{item.course}</TableCell>
              <TableCell>{item.year}</TableCell>
              <TableCell>{item.batch}</TableCell>
              <TableCell>{item.classType}</TableCell>
              <TableCell>{item.attended}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ScheduleTable;

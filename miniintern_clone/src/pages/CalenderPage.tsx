import CalenderHead from "../components/Calender/CalenderHead";
import CalenderBody from "../components/Calender/CalenderBody";
import { useState } from "react";

function Calender() {
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    date: new Date().getDate(),
    day: new Date().getDay(),
  };

  const week = ["일", "월", "화", "수", "목", "금", "토"];

  const [selectedYear, setSelectedYear] = useState(today.year);
  const [selectedMonth, setSelectedMonth] = useState(today.month);
  const [selectedDate, setSelectedDate] = useState(today.date);
  const lastDate = new Date(selectedYear, selectedMonth, 0).getDate(); //말일
  const firstDay = new Date(selectedYear, selectedMonth, 1).getDay(); //첫일의 요일
  console.log(today, lastDate, firstDay);

  return (
    <>
      <CalenderHead></CalenderHead>
      <CalenderBody lastDate={lastDate} firstDay={firstDay}></CalenderBody>
    </>
  );
}
export default Calender;

import CalenderHead from "../components/Calender/CalenderHead";
import CalenderBody from "../components/Calender/CalenderBody";
import { useEffect, useState } from "react";
import * as S from "../styles/calenderStyle";

interface MonthType {
  month: number;
  dates: DateType[];
}
interface DateType {
  date: number;
  day: number;
}

function Calender() {
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    date: new Date().getDate(),
    day: new Date().getDay(),
  };

  const week = ["일", "월", "화", "수", "목", "금", "토"];

  const [selectedYear, setSelectedYear] = useState(today.year);
  const [selectedMonth, setSelectedMonth] = useState(today.month + 1);
  const [selectedDate, setSelectedDate] = useState(today.date);
  const lastDate = new Date(selectedYear, selectedMonth, 0).getDate(); //말일
  const firstDay = new Date(selectedYear, selectedMonth, 1).getDay(); //첫일의 요일
  //   console.log(today, lastDate, firstDay);

  let monthArry: MonthType = { month: selectedMonth, dates: [] };
  const [thisMonthArry, setThisMonthArray] = useState(monthArry);

  const makeCalender = () => {
    let i = 1;
    let n = firstDay;
    while (n <= 7) {
      let dateArry: DateType = { date: i, day: n };
      monthArry.dates.push(dateArry);
      //   setThisMonthArray( monthArry.dates.push(dateArry))
      i++;
      n++;
      if (n >= 7) {
        n = 0;
      }
      if (i > lastDate) break;
    }
  };

  useEffect(() => {
    makeCalender();

    console.log(monthArry);
    console.log(monthArry.dates[0]);

    monthArry.dates.map((v) => console.log("날짜", v.date));
  }, [selectedMonth]);

  return (
    <>
      <S.Calender>
        <div className="calender_head">
          <h1>Calender</h1>
          <span>{selectedYear}년</span>
          <span>{selectedMonth}월</span>
          <p></p>
          <button onClick={() => setSelectedMonth(selectedMonth - 1)}>
            전 달
          </button>
          <p></p>
          <button onClick={() => setSelectedMonth(selectedMonth + 1)}>
            다음 달
          </button>
        </div>
        <div className="calender_body">
          <div className="week">
            <span>일</span>
            <span>월</span>
            <span>화</span>
            <span>수</span>
            <span>목</span>
            <span>금</span>
            <span>토</span>
          </div>

          <div className="date_container">
            {monthArry.dates.map((v) => (
              <div>{v.date}</div>
            ))}
          </div>
        </div>
        <CalenderHead></CalenderHead>
        <CalenderBody lastDate={lastDate} firstDay={firstDay}></CalenderBody>
      </S.Calender>
    </>
  );
}
export default Calender;

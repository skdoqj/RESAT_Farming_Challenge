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
  //오늘 날짜
  const nowDate: Date = new Date();

  const today = {
    year: nowDate.getFullYear(),
    month: nowDate.getMonth() + 1,
    date: nowDate.getDate(),
    day: nowDate.getDay(),
  };

  console.log("현재 날짜", today.year, today.month, today.date, today.day);

  const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];

  // 오늘 날짜를 기본으로
  const [selectedYear, setSelectedYear] = useState(today.year);
  const [selectedMonth, setSelectedMonth] = useState(today.month);
  const [selectedDate, setSelectedDate] = useState(today.date);
  const lastDate = new Date(selectedYear, selectedMonth, 0).getDate(); //말일
  const firstDay = new Date(selectedYear, selectedMonth - 1, 1).getDay(); //첫일의 요일
  console.log(
    "월:",
    today.month,
    ", 마지막 날짜:",
    lastDate,
    ", 첫날 요일:",
    firstDay
  );

  let monthArry: MonthType = { month: selectedMonth, dates: [] };
  const [thisMonthArry, setThisMonthArray] = useState<DateType[]>([]);

  const makeCalender = () => {
    let i = 1;
    let n = firstDay;
    while (n <= 7) {
      let dateArry: DateType = { date: i, day: n };
      monthArry.dates.push(dateArry);
      i++;
      n++;
      if (n >= 7) {
        n = 0;
      }
      if (i > lastDate) break;
    }
    setThisMonthArray(monthArry.dates);
  };

  console.log(thisMonthArry);

  const moveMonth = (num: number) => {
    if (num == -1) {
      //이전 달
      if (selectedMonth == 1) {
        setSelectedYear((val) => val - 1);
        setSelectedMonth(12);
      } else {
        setSelectedMonth((val) => val - 1);
      }
    } else if (num == +1) {
      //다음 달
      if (selectedMonth == 12) {
        setSelectedYear((val) => val + 1);
        setSelectedMonth(1);
      } else {
        setSelectedMonth((val) => val + 1);
      }
    } else if (num == 0) {
      //오늘
      setSelectedYear(today.year);
      setSelectedMonth(today.month);
      setSelectedDate(today.date);
    }
  };

  //전달 날짜
  const lastMonthDate = new Date(selectedYear, selectedMonth - 1, 0).getDate();

  const [lastMonthArray, setLastMonthArray] = useState<number[]>([]);
  const frontDays = () => {
    const array: number[] = [];
    for (let i = 0; i < firstDay; i++) {
      array.unshift(lastMonthDate - i);
    }
    setLastMonthArray(array);
  };
  console.log("지난 달", lastMonthArray);

  useEffect(() => {
    frontDays();
    makeCalender();

    // console.log(monthArry);
    // console.log(monthArry.dates[0]);
    // monthArry.dates.map((v) => console.log("날짜", v.date));
  }, [selectedMonth]);

  return (
    <>
      <S.Calender>
        <h1>Calender</h1>
        <div className="calender_head">
          <div className="year_month">
            <span>{selectedYear}년</span>
            <span>{selectedMonth}월</span>
          </div>

          <div className="move_month_btn">
            <button onClick={() => moveMonth(-1)}>전 달</button>

            <button onClick={() => moveMonth(0)}>오늘</button>

            <button onClick={() => moveMonth(+1)}>다음 달</button>
          </div>
        </div>
        <div className="calender_body">
          {/* 요일 */}

          <div className="date_container">
            {WEEKDAY.map((v) => (
              <div className="date_box week_box">
                <span className="week">{v}</span>
              </div>
            ))}

            {/* 지난달 */}
            {lastMonthArray.map((v) => (
              <div className="date_box">
                <div className="last_month_date date" key={v}>
                  {v}
                </div>
              </div>
            ))}
            {/* 이번 달 */}
            {thisMonthArry.map((v) => (
              <div className="date_box">
                <div
                  className={
                    v.date == selectedDate ? "slected_date date" : "date"
                  }
                  key={v.date}
                >
                  {v.date}
                </div>
              </div>
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

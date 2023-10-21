import CalenderHead from "../components/Calender/CalenderHead";
import CalenderBody from "../components/Calender/CalenderBody";
import { useEffect, useState } from "react";
import * as S from "../styles/calenderStyle";

interface MonthType {
  year: number;
  month: number;
  dates: DateType[];
}
interface DateType {
  date: number;
  day: number;
}
interface SelectedDate {
  year: number;
  month: number;
  date: number;
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
  const lastDate = new Date(selectedYear, selectedMonth, 0).getDate(); //말일
  const firstDay = new Date(selectedYear, selectedMonth - 1, 1).getDay(); //첫일의 요일
  const [selectedDate, setSelectedDate] = useState<SelectedDate>({
    year: today.year,
    month: today.month,
    date: today.date,
  });

  const [monthArry, setMonthArray] = useState<MonthType>({
    year: selectedYear,
    month: selectedMonth,
    dates: [],
  });

  const [thisMonthArry, setThisMonthArray] = useState<DateType[]>([]);

  const makeCalender = () => {
    const array = [];
    let i = 1;
    let n = firstDay;
    while (n <= 7) {
      let dateArry: DateType = { date: i, day: n };
      // monthArry.dates.push(dateArry);
      array.push(dateArry);
      i++;
      n++;
      if (n >= 7) {
        n = 0;
      }
      if (i > lastDate) break;
    }
    setMonthArray({ ...monthArry, dates: array });
    // setThisMonthArray(monthArry.dates);
  };

  console.log(monthArry);

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
      setSelectedDate({ ...selectedDate, date: today.date });
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
  // console.log("지난 달", lastMonthArray);

  //모달
  const [modal, setModal] = useState<boolean>(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    frontDays();
    makeCalender();
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
            {monthArry.dates.map((v) => (
              <div
                onClick={() => {
                  toggleModal();
                  setSelectedDate({ ...selectedDate, date: v.date });
                }}
                className="date_box"
              >
                <div
                  className={
                    v.date == selectedDate.date ? "slected_date date" : "date"
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

      {modal && (
        <S.Modal className="modal">
          <div className="overlay"></div>
          <div className="madal_content">
            <button onClick={toggleModal}>닫기</button>
            <h2>hello</h2>
            <div>{selectedYear}년</div>
            <div>{selectedMonth}월</div>
            <div>{selectedDate.date}일</div>
            <input type="string"></input>
          </div>
        </S.Modal>
      )}
    </>
  );
}
export default Calender;

import CalenderDate from "../components/Calender/CalenderDate";
import CalenderBody from "../components/Calender/CalenderBody";
import { useEffect, useState } from "react";
import * as S from "../styles/calenderStyle";
import * as T from "../types/calenderTypes";
import { useLocal } from "../components/Hooks/useLocal";

function Calender() {
  //오늘 날짜
  const nowDate: Date = new Date();

  const today = {
    year: nowDate.getFullYear(),
    month: nowDate.getMonth() + 1,
    date: nowDate.getDate(),
    day: nowDate.getDay(),
  };

  // console.log("현재 날짜", today.year, today.month, today.date, today.day);

  const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];

  // 오늘 날짜를 기본으로
  const [selectedYear, setSelectedYear] = useState(today.year);
  const [selectedMonth, setSelectedMonth] = useState(today.month);
  const lastDate = new Date(selectedYear, selectedMonth, 0).getDate(); //말일
  const firstDay = new Date(selectedYear, selectedMonth - 1, 1).getDay(); //첫일의 요일
  const [selectedDate, setSelectedDate] = useState<T.SelectedDate>({
    year: today.year,
    month: today.month,
    date: today.date,
  });

  const [monthArry, setMonthArray] = useState<T.MonthType>({
    year: selectedYear,
    month: selectedMonth,
    dates: [],
  });

  const [thisMonthArry, setThisMonthArray] = useState<T.DateType[]>([]);

  const makeCalender = () => {
    const array = [];
    let i = 1;
    let n = firstDay;
    while (n <= 7) {
      let dateArry: T.DateType = { date: i, day: n };
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

  //메모
  const KEY = "calenderMemo";
  const [inputMemo, setInputMemo] = useState("");

  //hook으로 보낼 state
  const [action, setAction] = useState("");
  const [inputValue, setInputValue] = useState({});
  const [itemKey, setItemKey] = useState(0);

  //hook
  const [getLocalArray] = useLocal(KEY, action, inputValue, itemKey);

  //수정
  const [modifying, setModifying] = useState(false);
  const [enterModifyValue, setEnterModifyValue] = useState("");

  useEffect(() => {
    setAction("read");
  }, [action]);

  const activeEnterMemo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === "Enter" &&
      inputMemo != "" &&
      e.nativeEvent.isComposing === false
    ) {
      //기존 코드
      const memoArray = {
        key: Math.random(),
        year: selectedYear,
        month: selectedMonth,
        date: selectedDate.date,
        value: inputMemo,
      };
      //create
      setAction("create");
      setInputValue(memoArray);

      //input창 초기화
      setInputMemo("");
    }
  };

  //delete
  const deleteLocalMemo = (key: number) => {
    setAction("delete");
    setItemKey(key);
  };

  //update
  const updateMemo = (value: string) => {
    setModifying(true);
    setEnterModifyValue(value);
  };
  const modifyingDone = (key: number) => {
    setModifying(false);
    const modifiedArray = getLocalArray.map((v) =>
      v.key === key ? { ...v, value: enterModifyValue } : v
    );
    setAction("update");
    setInputValue(modifiedArray);
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
            <button className="default_btn" onClick={() => moveMonth(-1)}>
              전 달
            </button>
            <button className="default_btn" onClick={() => moveMonth(0)}>
              오늘
            </button>
            <button className="default_btn" onClick={() => moveMonth(+1)}>
              다음 달
            </button>
          </div>
        </div>
        <div className="calender_body">
          {/* 요일 */}

          <div className="date_container">
            {WEEKDAY.map((v) => (
              <div className="date_box week_box">
                <span className="week" key={v}>
                  {v}
                </span>
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
                    v.date == selectedDate.date ? "date slected_date" : "date"
                  }
                >
                  <CalenderDate
                    key={v.date}
                    date={v.date}
                    localList={getLocalArray}
                    selectedYear={selectedYear}
                    selectedMonth={selectedMonth}
                  ></CalenderDate>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CalenderBody lastDate={lastDate} firstDay={firstDay}></CalenderBody>
      </S.Calender>

      {modal && (
        <S.Modal className="modal">
          <div className="overlay"></div>
          <div className="madal_content">
            <button onClick={toggleModal} className="default_btn close_btn">
              닫기
            </button>
            <div className="date_info">
              <span>{selectedYear}년</span>
              <span>{selectedMonth}월</span>
              <span>{selectedDate.date}일</span>
            </div>
            <label>새 이벤트 생성</label>
            <input
              type="text"
              className="default_input"
              onChange={(e) => setInputMemo(e.target.value)}
              onKeyDown={(e) => activeEnterMemo(e)}
              value={inputMemo}
            ></input>

            <div className="memo_wrapper">
              <ul>
                {getLocalArray.map(
                  (v) =>
                    v.year == selectedYear &&
                    v.month == selectedMonth &&
                    v.date == selectedDate.date && (
                      <>
                        <li key={v.key}>
                          <div className="memo_point"></div>
                          {modifying ? (
                            <>
                              <input
                                type="text"
                                value={enterModifyValue}
                                className="default_input"
                                onChange={(e) =>
                                  setEnterModifyValue(e.target.value)
                                }
                              />
                              <button
                                className="default_btn"
                                onClick={() => modifyingDone(v.key)}
                              >
                                수정완료
                              </button>
                            </>
                          ) : (
                            <>
                              <div className="memo_value">{v.value}</div>
                              <div className="btns">
                                <button
                                  className="default_btn modify_btn"
                                  onClick={() => updateMemo(v.value)}
                                >
                                  수정
                                </button>
                                <button
                                  className="default_btn delete_btn"
                                  onClick={() => deleteLocalMemo(v.key)}
                                >
                                  삭제
                                </button>
                              </div>
                            </>
                          )}
                        </li>
                      </>
                    )
                )}
              </ul>
            </div>
          </div>
        </S.Modal>
      )}
    </>
  );
}
export default Calender;

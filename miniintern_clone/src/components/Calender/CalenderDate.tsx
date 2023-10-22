import * as T from "../../types/calenderTypes";

function CalenderDate(props: T.DatePropsType) {
  const { date, localList, selectedYear, selectedMonth } = props;
  return (
    <>
      <div>{date}</div>
      <div className="selected_point"></div>
      {localList.map(
        (v) =>
          v.year == selectedYear &&
          v.month == selectedMonth &&
          v.date == date && <div className="memo_point"></div>
      )}
    </>
  );
}
export default CalenderDate;

import * as T from "../../types/calenderTypes";

function CalenderDate(props: T.DatePropsType) {
  const { date, localList, selectedYear, selectedMonth } = props;

  const memoPoint = () => {
    if (
      localList.find(
        (v) =>
          v.year == selectedYear && v.month == selectedMonth && v.date == date
      ) != undefined
    ) {
      return <div className="memo_point"></div>;
    }
  };

  return (
    <>
      <div>{date}</div>
      <div className="selected_point"></div>
      {memoPoint()}
    </>
  );
}
export default CalenderDate;

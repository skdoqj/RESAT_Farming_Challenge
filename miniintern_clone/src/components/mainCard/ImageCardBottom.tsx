interface Props {
  title: string;
  tag: string;
  day?: string;
  sub?: string | string[];
  coast?: string;
  payment?: string;
}
export function InternshipCard({ day, tag, title }: Props) {
  return (
    <>
      <span className="day">{day}</span>
      <span className="tag">{tag}</span>
      <div className="main_text">{title}</div>
    </>
  );
}

export function MClassCard({ payment, tag, title, sub, day }: Props) {
  return (
    <>
      <div className="payment">{payment}</div>
      <div className="tag">{tag}</div>
      <div className="main_text">{title}</div>
      <div className="sub">{sub}</div>
      <div className="day">{day}</div>
    </>
  );
}

export function HFolioCard({ tag, title, sub, coast }: Props) {
  return (
    <>
      <div className="tag">{tag}</div>
      <div className="main_text">{title}</div>
      <div className="sub">{sub}</div>
      <div className="coast">{coast}</div>
    </>
  );
}

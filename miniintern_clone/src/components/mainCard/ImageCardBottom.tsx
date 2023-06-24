import { styled } from "styled-components";

interface Props {
  title: string;
  tag: string;
  day?: string;
  sub?: string | string[];
  coast?: string;
  payment?: string;
}
export function InternshipCard({ day, tag, title }: Props) {
  const ICard = styled.div`
    .day {
      background-color: rgb(56, 64, 64);
      color: white;
      font-weight: 800;
      font-size: 0.8rem;
      padding: 3px 8px 2px 8px;
      border-radius: 30px;
    }
    .tag {
      font-size: 0.8rem;
      padding-left: 8px;
      color: rgb(147, 153, 153);
      font-weight: 600;
    }
    .main_text {
      padding-top: 8px;
    }
  `;
  return (
    <ICard>
      <span className="day">{day}</span>
      <span className="tag">{tag}</span>
      <div className="main_text">{title}</div>
    </ICard>
  );
}

export function MClassCard({ tag, title, sub, day }: Props) {
  const MCard = styled.div`
    .tag {
      font-size: 0.8rem;
    }
  `;
  return (
    <MCard>
      <div className="tag">{tag}</div>
      <div className="main_text">{title}</div>
      <div className="sub">{sub}</div>
      <div className="day">{day}</div>
    </MCard>
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

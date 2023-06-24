import * as S from "../../styles/cardStyle";
import { company } from "../MainModule";
import { InternshipCard, MClassCard, HFolioCard } from "./ImageCardBottom";

function ImageCard({
  section,
  title,
  tag,
  img,
  day,
  coast,
  payment,
  sub,
}: company) {
  return (
    <S.ImageCard>
      <div className="card_wrapper">
        <div className="top_img">
          <img className="cardImg" src={img}></img>
        </div>
        {payment ? <div className="payment">{payment}</div> : ""}

        <div className="bottom">
          {section === "intership" ? (
            <InternshipCard day={day} tag={tag} title={title}></InternshipCard>
          ) : (
            ""
          )}
          {section === "m_class" ? (
            <>
              <MClassCard
                tag={tag}
                title={title}
                sub={sub}
                day={day}
              ></MClassCard>
            </>
          ) : (
            ""
          )}
          {section === "happy_folio" ? (
            <HFolioCard
              tag={tag}
              title={title}
              sub={sub}
              coast={coast}
            ></HFolioCard>
          ) : (
            ""
          )}
        </div>
      </div>
    </S.ImageCard>
  );
}

function LogoCard({ section, title, tag, img, sub }: company) {
  return (
    <S.LogoCard>
      <div className="card_wrapper">
        <div className="left_logo">
          <img className="logo" src={img}></img>
        </div>
        <div className="right">
          <div className="text_container">
            <div className="part">{tag}</div>
            <div className="main_text">{title}</div>
            {sub === undefined ? (
              ""
            ) : (
              <>
                <div className="company">{sub[0]}</div>
                <div className="tag_wrapper">
                  <div className="tag">{sub[1]}</div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="heart"></div>
      </div>
    </S.LogoCard>
  );
}

export { ImageCard, LogoCard };

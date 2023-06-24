import * as S from "../styles/mainStyle";
import { ImageCard, LogoCard } from "../components/mainCard/card";
import {
  internArray,
  companyArray,
  mClassArray,
  hFolioArray,
} from "../components/MainModule";

function Main() {
  return (
    <>
      <S.Main>
        <S.Banner>
          <main>
            <section className="head">
              <div className="top_banner left_banner">
                <div className="top_banner_text">
                  <p>최대한의 효율로</p>
                  <p>직무경험을 쌓아보세요</p>
                  <p className="sub">2주만에 실무 경험을 만드는, 미니인턴</p>
                  <span>미니인턴으로 가기</span>
                </div>
                <img src="https://miniintern.com/static/images/main/main_img_1.webp" />
              </div>
              <div className="top_banner right_banner">
                <div className="top_banner_text">
                  <p>미니인턴?</p>
                  <p>미니인턴!</p>
                  <span>서비스 더 알아보기</span>
                </div>
                <img src="https://miniintern.com/static/images/main/main_img_r_1.webp" />
              </div>
            </section>

            <section className="intership">
              <h1>미니인턴으로 취업하세요</h1>
              <div className="text_bottom">
                <h2>
                  이제 집, 학교, 도서관, 카페에서 인턴십을 경험하고,
                  실무역량평가로 취업하세요
                </h2>
                <div className="go">모든 기업과제 보기</div>
              </div>
              <S.CardSpace>
                {internArray.map((v) => (
                  <ImageCard
                    section={v.section}
                    title={v.title}
                    tag={v.tag}
                    img={v.img}
                    day={v.day}
                  ></ImageCard>
                ))}
              </S.CardSpace>
            </section>

            <section className="slide_banner">
              <div className="background"></div>
              <div className="banner_container">
                <div className="banner"></div>
                <div className="text_box">
                  <span>서비스 런칭</span>
                  <p className="title">해피폴리오로 취업 정보를 받으세요</p>
                  <p className="sub">
                    검증된 현직자의 취업 스토리로 <br></br>취준 전략을 세우세요
                  </p>
                </div>
              </div>
            </section>
            <section className="company">
              <h1>채용 중인 기업을 확인하세요</h1>
              <div className="text_bottom">
                <h2>내게 맞는 기업을 찾았나요? 바로 지원해 보세요</h2>
                <div className="go">모든 채용정보 보기</div>
              </div>
              <S.LogoCardSpace>
                {companyArray.map((v) =>
                  v.sub === undefined ? (
                    ""
                  ) : (
                    <LogoCard
                      section={v.section}
                      title={v.title}
                      tag={v.tag}
                      img={v.img}
                      sub={v.sub}
                    ></LogoCard>
                  )
                )}
              </S.LogoCardSpace>
            </section>
            <section className="bottom_banner">
              <div className="banner">
                <div className="banner_text">
                  이력서 피드백도 받고 회사도 추천받고 싶다면?
                </div>
                <button>헤드헌팅 설정하기</button>
                <img src="https://miniintern.com/static/images/main/headhunting_banner_pc.png" />
              </div>
            </section>
            <section className="m_class">
              <h1>M클래스를 신청하세요</h1>

              <div className="text_bottom">
                <h2>미니인턴만의 색깔을 가진 교육을 제공해 드려요</h2>
                <div className="go">모든 M클래스 보기</div>
              </div>
              <div className="card_space">
                <S.CardSpace>
                  {mClassArray.map((v) => (
                    <ImageCard
                      section={v.section}
                      title={v.title}
                      tag={v.tag}
                      img={v.img}
                      day={v.day}
                      sub={v.sub}
                      payment={v.payment}
                    ></ImageCard>
                  ))}
                </S.CardSpace>
              </div>
            </section>
            <section className="happy_folio">
              <h1>해피폴리오로 취업 정보를 받으세요</h1>

              <div className="text_bottom">
                <h2>검증된 현직자의 취업 스토리로 취준 전략을 세우세요</h2>
                <div className="go">모든 해피폴리오 보기</div>
              </div>
              <div className="card_space">
                <S.CardSpace>
                  {hFolioArray.map((v) => (
                    <ImageCard
                      section={v.section}
                      title={v.title}
                      tag={v.tag}
                      img={v.img}
                      sub={v.sub}
                    ></ImageCard>
                  ))}
                </S.CardSpace>
              </div>
            </section>
          </main>
        </S.Banner>
      </S.Main>
    </>
  );
}

export default Main;

import { Header } from "../../components/header/header";
import * as S from "./styles";
import ImgHeroBottom from "@assets/hero/img-hero-bottom.png";
import BallonTop from "@assets/hero/ballon-top.png";
import BallonBottom from "@assets/hero/ballon-bottom.png";
import Typical from "react-typical";
import { useNavigate } from "react-router-dom";
import ImgHeroTop from "@assets/hero/img-hero-top.png";
export const Home = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <Header />
      <S.Wapper>
        <S.WapperText>
          <S.Text>Hi!</S.Text>
          <S.Title>My name is Gabriel !!</S.Title>

          <S.BopxTypical>
            <S.Text>I'm : </S.Text>
            <Typical
              steps={[
                "front end developer",
                1500,
                "back end developer!",
                1500,
                "full stack developer!",
                1800,
              ]}
              loop={Infinity}
              wrapper="span"
            />
          </S.BopxTypical>
        </S.WapperText>

        <S.HeroImgContainer>
          <S.ImgHeroTop src={ImgHeroTop} />
          {/* <ImgHeroTop /> */}
          <S.ImgHeroBottom src={ImgHeroBottom} alt="Hero Top" />
          <S.ImgBallonTop
            src={BallonTop}
            alt="Hero Top"
            style={{ position: "absolute", top: "50%", left: "-6rem" }}
          />
          <S.BallonBottom
            src={BallonBottom}
            alt="Hero Top"
            style={{ position: "absolute", bottom: "-25%", right: "-10%" }}
          />
        </S.HeroImgContainer>
      </S.Wapper>

      <S.WapperButton>
        <S.Button onClick={() => navigate("/projects")}>projects</S.Button>
      </S.WapperButton>
    </S.Container>
  );
};

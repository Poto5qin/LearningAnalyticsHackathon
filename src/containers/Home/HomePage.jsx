import {UseMedia} from 'hooks/useMedia';
import {useState} from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Logo, LogoSectionAbout} from '../../components/About/index.jsx';
import {Accordion} from '../../components/Accordian/index.jsx';
import Birds from '../../components/Animation';
import Footer from '../../components/Footer/index.jsx';
import {Myinfo} from '../../components/Landing/index.jsx';
import {FirstPrize, PrizeHeading} from '../../components/Prizes/index.jsx';
// import Media from '../../components/Socials/index.jsx';  // <-- REMOVED
import {
  Sponsor,
  SponsorsHead,
  SponsorUS
} from '../../components/Sponsors/sponsors.jsx';
import {JoinTeam, Member} from '../../components/Team';
import {
  FOOTER,
  frequentlyAskedQuestions,
  JudgesInfo,
  Prizeinfo,
  sponsorLogos,
  // TeamInfo,   // <-- REMOVED
  TOP_SECTION
} from '../../Module/General';
import MyCalender from '../calender';
import './about.css';
import pattern from './assets/pattern4.png';

// ... rest of your code ...

export default function HomePage() {
  const [media, setMedia] = useState();
  UseMedia('min-width', 1000, setMedia);

  return (
    <div className="Whole_div" style={{backgroundImage: `url(${pattern})`}}>
      <div className="color_sectiom" id="home">
        <Container fluid>
          <Row className="Row info">
            <Col className="info-div" sm={12} lg={7} md={7}>
              <Myinfo />
            </Col>
            <Col className="d-image" sm={12} lg={5} md={5}>
              <MyCalender />
            </Col>
          </Row>
          {/* Media section removed */}
        </Container>
      </div>
      <Container fluid>
        {/* Logo section  */}
        <Row className=" logoSection">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
          </Col>
          <Col className="info-div" sm={12} lg={4} md={4}>
            <Logo />
          </Col>
        </Row>

        {/* ********Frequently asked Questions here ***** */}
        <div className="Myfaqs" id="faq">
          {frequentlyAskedQuestions.map(FrequentlyAsked)}
        </div>

        {/* ********Prizes here ***** */}
        <Row className="prizesection" id="prizes">
          <PrizeHeading type="Prize section" />
          {Prizeinfo.map(PrizeGroup)}
        </Row>
        {/* ********Prizes ending here ***** */}

        <Row className="prizesection non-coding">
          <PrizeHeading type="Non-coding prizes" />
          <h2>coming soon</h2>
        </Row>

        {/* ********Sponsors here ***** */}
        <Row className="sponsorSection" id="sponsors">
          <SponsorsHead />
          <SponsorUS />
          {sponsorLogos.map(SponsorGroup)}
        </Row>
        {/* ********Sponsors ending here ***** */}

        {media && <Birds top="120vh" left="0vh" type="" />}

        {/* ********Team here ***** */}
        <h1 id="team">Our Team</h1>
        {FOOTER.JOIN_TEAM.required && (
          <JoinTeam
            placeholder="Join our team"
            formLink={FOOTER.JOIN_TEAM}
            content="Interested in joining our team"
          />
        )}
        {/* {TeamInfo.map(TeamMembers)}  <-- REMOVED */}
        {/* ********Team ending here ***** */}

        {/* ********Judges here ***** */}
        <h1 id="team">Judges</h1>
        {FOOTER.JOIN_TEAM.required && (
          <JoinTeam
            placeholder="Join our team"
            formLink={TOP_SECTION.JUDGES_FORM_LINK}
            content="Interested in being judge"
          />
        )}
        {JudgesInfo.map(TeamMembers)}
        {/* ********Team ending here ***** */}
      </Container>
      <Footer />
    </div>
  );
}

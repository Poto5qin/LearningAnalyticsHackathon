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
import {
  Sponsor,
  SponsorsHead,
  SponsorUS
} from '../../components/Sponsors/sponsors.jsx';
import {
  frequentlyAskedQuestions,
  Prizeinfo,
  sponsorLogos
} from '../../Module/General';
import MyCalender from '../calender';
import './about.css';
import pattern from './assets/pattern4.png';

// Helper components/functions
const FrequentlyAsked = (props, index) => (
  <Row key={index} className="sf">
    {props.map((s, i) => (
      <Col key={i} sm={12} lg={6} md={6}>
        <Accordion panels={s} />
      </Col>
    ))}
  </Row>
);

const PrizeGroup = (props, index) => (
  <Row key={index}>
    {props.map((s, i) => (
      <Col key={i} className="" sm={12} lg={4} md={4}>
        <FirstPrize icon={s.icon} type={s.type} content={s.content} />
      </Col>
    ))}
  </Row>
);

const SponsorGroup = (props, index) => (
  <Row key={index}>
    {props.map((s, i) => (
      <Col key={i} className="" sm={12} lg={4} md={6}>
        <Sponsor srcx={s.src} />
      </Col>
    ))}
  </Row>
);

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

        {/* ********Sponsors here ***** */}
        <Row className="sponsorSection" id="sponsors">
          <SponsorsHead />
          <SponsorUS />
          {sponsorLogos.map(SponsorGroup)}
        </Row>
        {/* ********Sponsors ending here ***** */}

        {media && <Birds top="120vh" left="0vh" type="" />}
      </Container>
      <Footer />
    </div>
  );
}

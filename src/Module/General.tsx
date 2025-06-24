import hackathonLogo from './Assets/hackathonLogo.png';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from './Assets/boy.png';
import pass from './Assets/sponsorsLogos/1pass.png';
import ACF from './Assets/sponsorsLogos/ACF.png';
import cfc from './Assets/sponsorsLogos/cfc.png';
import echoAR from './Assets/sponsorsLogos/echoAR.png';
import egg from './Assets/sponsorsLogos/egg.png';
import glimpse from './Assets/sponsorsLogos/glimpse.png';
import interviewC from './Assets/sponsorsLogos/interview-cake.jpg';
import ll from './Assets/sponsorsLogos/ll.png';
import qoom from './Assets/sponsorsLogos/qoom.svg';
import Replit from './Assets/sponsorsLogos/replit.png';
import sublime from './Assets/sponsorsLogos/sublime.png';
import taskade from './Assets/sponsorsLogos/taskade.png';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */


const TOP_SECTION = {
  TITLE: 'Reimagine Learning through Learning Analytics @ NTU Hackathon',
  Typed_effect: ['Design the future of learning',
    'Empower students with AI',
    'Transform education at NTU'],
  SHORT_DESCRIPTION:
    'Join us in collaboration with Imperial College London to innovate how students learn using AI, learning sciences, and analytics. Make a real impact on the NTU learning experience.',
  IMG_SRC: boy,
  JUDGES_FORM_LINK:
    'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNVRQMUg4VllMRURDN1lON0haNFVCQUgySC4u',
  HACKERS_REGISTRATION_FORM_LINK:
    'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNTgyREk0VzdEMU9RVFlPMVNWVEJQUkNYMi4u'
};

const MIDDLE_SECTION = {
  TITLE: 'About the Hackathon',
  LONG_DESCRIPTION:
    'Since late 2024, NTU has been piloting Project NALA (NTU AI Learning Assistants) — a university-wide initiative to transform how students learn with AI. This hackathon challenges you to design analytics solutions that help students become self-aware learners, ask better questions, plan their learning, and visualize progress. In collaboration with Imperial College London, dive into learning science, design thinking, and AI innovation to support effective learning at NTU.',
  LOGO: hackathonLogo
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNFBQME44TzJZWDc2UFgwTUtLN0xDQVYyUi4u'
  },
  JOIN_TEAM: {
    required: true,
    src: 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUOUhEQkJSRk02OEU4SlBMTUdYOFIxOTNZSy4u'
  }
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2021, 18-11-2021 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 7,
  year: 2025
};
// Original schedule for display
const schedule = [
  {
    stage: "Pre-Hackathon",
    events: [
      {
        title: "Hackathon Announcement",
        timings: "4th Jul 2025 to 11th Jul 2025",
        description: "Official announcement of the hackathon and event details."
      },
      {
        title: "Call for Participants",
        timings: "14th Jul 2025 to 25th Jul 2025",
        description: "Registration opens for participants."
      }
    ]
  },
  {
    stage: "Stage 1: Ideation",
    events: [
      {
        title: "Workshop by InsPIRE (Learning Sciences)",
        timings: "4th & 5th Aug 2025, 6:30pm–9:30pm",
        description: "Interactive workshop on learning sciences."
      },
      {
        title: "Workshop by ATLAS (Technical)",
        timings: "6th Aug 2025, 6:30pm–9:30pm",
        description: "Technical workshop on integrating with NALA."
      },
      {
        title: "Submission of Proposal (Deadline)",
        timings: "15th Aug 2025, 11:59pm",
        description: "Deadline for teams to submit their learning analytics proposal."
      },
      {
        title: "Evaluation",
        timings: "18th–21st Aug 2025",
        description: "Judges review and evaluate submitted proposals."
      },
      {
        title: "Announcement of Evaluation Results",
        timings: "22nd Aug 2025",
        description: "Teams advancing to Stage 2 are announced."
      }
    ]
  },
  {
    stage: "Stage 2: Implementation",
    events: [
      {
        title: "Development & Mentorship",
        timings: "25th Aug 2025 to 30th Sep 2025",
        description: "Teams develop their solutions with guidance from mentors."
      },
      {
        title: "Competition Day & Announcement of Winners",
        timings: "1st Oct 2025 (Half Day)",
        description: "Teams present their solutions; winners are announced."
      }
    ]
  },
  {
    stage: "Stage 3: Refinement & Conference",
    events: [
      {
        title: "Refinement & Preparation for Joint Conference",
        timings: "6th Oct 2025 to 4th Nov 2025",
        description: "Winning teams refine their solutions and prepare for the joint conference."
      },
      {
        title: "Winners Presentation at Joint Conference with Imperial & Award Presentation",
        timings: "5th Nov 2025, 5pm onwards (3 hours, with dinner)",
        description: "Winners present their solutions at the joint conference with Imperial College London."
      }
    ]
  }
];

// Calendar events for use in your calendar component
const calendarEvents = [
  {
    title: "Hackathon Announcement",
    start: "2025-07-04",
    end: "2025-07-11",
    description: "Official announcement of the hackathon and event details."
  },
  {
    title: "Call for Participants",
    start: "2025-07-14",
    end: "2025-07-25",
    description: "Registration opens for participants."
  },
  {
    title: "Workshop by ATLAS (Technical)",
    start: "2025-08-06",
    end: "2025-08-06",
    description: "Technical workshop on integrating with NALA."
  },
  {
    title: "Submission of Proposal (Deadline)",
    start: "2025-08-15",
    end: "2025-08-15",
    description: "Deadline for teams to submit their learning analytics proposal."
  },
  {
    title: "Announcement of Evaluation Results",
    start: "2025-08-22",
    end: "2025-08-22",
    description: "Teams advancing to Stage 2 are announced."
  },
  {
    title: "Development & Mentorship",
    start: "2025-08-25",
    end: "2025-09-30",
    description: "Teams develop their solutions with guidance from mentors."
  },
  {
    title: "Refinement & Preparation for Joint Conference",
    start: "2025-10-06",
    end: "2025-11-04",
    description: "Winning teams refine their solutions and prepare for the joint conference."
  },
  {
    title: "Winners Presentation at Joint Conference with Imperial & Award Presentation",
    start: "2025-11-05",
    end: "2025-11-05",
    description: "Winners present their solutions at the joint conference with Imperial College London."
  }
];


/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: 'Top 3 Teams',
      content: 'Winners will present their solutions at a joint conference with Imperial College London.'
    }
  ]
];


/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: cfc}, {src: sublime}, {src: echoAR}], //Array 1
  [{src: taskade}, {src: Replit}, {src: qoom}], //Array 2
  [{src: interviewC}, {src: pass}, {src: glimpse}], //Array 3
  [{src: egg}, {src: ll}, {src: ACF}] //Array 4
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'What is the Reimagine Learning through Learning Analytics @ NTU Hackathon?',
        content:
          'It’s a collaborative hackathon between NTU and Imperial College London where students design innovative learning analytics solutions to empower self-aware learning using AI, learning sciences, and user interface design.'
      },
      {
        label: 'Who can participate?',
        content:
          'The hackathon is open to NTU students from all disciplines. Teams should preferably be interdisciplinary, with at least one member from CCDS.'
      },
      {
        label: 'How do I register?',
        content:
          'Register during the Call for Participants period by signing up through the official event form. Details will be provided on the event webpage.'
      },
      {
        label: 'What are the stages of the competition?',
        content:
          'There are three stages: Ideation (workshops and proposal submission), Implementation (solution development with mentorship), and Presentation (student voting and final presentations at a joint conference).'
      }
    ],
    [
      {
        label: 'What skills or background do I need?',
        content:
          'No prior hackathon experience is required. Participants from all backgrounds—learning sciences, AI, design, or tech—are welcome. Workshops will help you get started.'
      },
      {
        label: 'How are winners selected?',
        content:
          'Finalists are chosen based on proposal evaluation, solution implementation, and presentations. Both student votes and faculty judges contribute to the final decision.'
      },
      {
        label: 'What do winners receive?',
        content:
          'Top teams will present at a joint conference with Imperial College London and have their solutions considered for integration into NTU’s NALA platform.'
      }
    ]
  ]
];


export {
  TOP_SECTION,
  MIDDLE_SECTION,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
   frequentlyAskedQuestions,
  schedule,            // for display
  calendarEvents,      // for calendar component
  calenderStartingDate
};

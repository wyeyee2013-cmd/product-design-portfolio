/**
 * Long-form case-study content, transcribed from the write-ups on
 * cheryllimm.framer.website. Keyed by the project `id` in projects.js —
 * a project without an entry here just shows its summary and meta block.
 *
 * Section shape (every field optional except `heading`):
 *   heading  section title
 *   lead     the bold line under the title
 *   body     paragraphs
 *   bullets  simple list
 *   blocks   [{ title, body }] for sub-points like the solution cards
 *   figures  [{ src, caption }]
 */

export const CASE_STUDIES = {
  pantas: {
    sector: 'Environmental Services',
    tagline: 'Making organisation setup fast and efficient',
    credits: [
      {
        label: 'My Role',
        value:
          'Product Designer — Product Development, Interaction Design, Visual Design, Requirement Gathering',
      },
      {
        label: 'Team',
        value: 'Shanny Yu (Product Designer), Stan Tan (Senior Product Designer), Yi Zhe Koh (Product Manager)',
      },
      { label: 'Timeline', value: 'November 2024 — February 2025 · 4 months' },
    ],
    sections: [
      {
        heading: 'Overview',
        body: [
          'Setting up organisation-related information is crucial in the onboarding process of Pantas’ clients. Pantas needed an intelligent onboarding automation system to replace manual processes, enabling seamless data ingestion, validation, and structuring for scalable operations. The solution improves efficiency, reduces manual effort, and improves client experience through AI-driven workflows.',
        ],
      },
      {
        heading: 'Highlights',
        lead: 'AI-powered onboarding automation for scalable and efficient workflows',
        figures: [
          { src: '/assets/pantas-01-companies.png', caption: '01 Manage Companies' },
          { src: '/assets/pantas-02-extraction.png', caption: '02 Running AI Extraction' },
        ],
      },
      {
        heading: 'The Problem',
        lead: 'To streamline client onboarding without excessive manual processes',
        body: [
          'The current process is highly inefficient due to heavy reliance on template-based Excel files. Both internal teams (Business Development and onboarding personnel) and external clients face friction, as they must manually fill out complex, hierarchical data structures while also validating and processing that data by hand.',
        ],
        bullets: [
          'Manual template-based Excel files that are prone to human error, inconsistencies, and redundant work, leading to data inaccuracies.',
          'Onboarding is time consuming — 2–3 days or more — due to complex data structures and manual validation.',
          'Internal teams and clients experience friction, reducing overall satisfaction and efficiency.',
        ],
        blocks: [
          {
            title: 'The Challenge',
            body: 'Ensuring that both internal teams and clients can complete onboarding with minimal manual work, reduced errors, and improved efficiency — a seamless and accurate data collection experience.',
          },
        ],
      },
      {
        heading: 'Solution Proposal',
        lead: 'Automating client onboarding with AI extraction',
        body: [
          'By leveraging automation, real-time feedback, and seamless integration, this approach minimises human error, reduces onboarding time, and improves satisfaction for both internal teams and clients.',
        ],
        blocks: [
          {
            title: 'Solution #1 — AI-powered data extraction and structuring',
            body: 'Automatically extract, structure, and validate client and organisational data from the client’s own file template for seamless processing.',
          },
          {
            title: 'Solution #2 — Interactive data review and editing',
            body: 'Present extracted data in a compact but informative interface, allowing inline review, editing, and real-time error correction.',
          },
        ],
      },
      {
        heading: 'Designs',
        lead: 'Intuitive, convenient and interactive',
        blocks: [
          {
            title: 'Seamless hierarchical company navigation',
            body: 'In previous designs it was confusing to navigate companies of different hierarchies, as they were displayed as nested information within a company.',
          },
          {
            title: 'Extract and transform information of any format',
            body: 'The AI auto-maps information in the client’s current templates to match our template requirements, removing manual entry into a fixed format.',
          },
          {
            title: 'Review and edit extracted data',
            body: 'Not satisfied with the generated data? Edit it freely — inaccurate information is flagged to draw the user’s attention.',
          },
        ],
        figures: [
          { src: '/assets/pantas-03-upload.png', caption: '03 File upload' },
          { src: '/assets/pantas-04-preview.png', caption: '04 File preview' },
        ],
      },
      {
        heading: 'Results',
        lead: 'Effortless onboarding, satisfied clients',
        body: [
          'Through an AI-powered, automated onboarding system, businesses can significantly improve efficiency, accuracy, and user satisfaction.',
        ],
        bullets: [
          'Onboarding completion time cut by 6–7 hours.',
          'Manual data processing tasks reduced by more than 60% for the onboarding team.',
          'High satisfaction rate achieved from internal employees and clients.',
        ],
      },
    ],
  },

  hireti: {
    sector: 'Recruitment',
    tagline: 'Elevating talent acquisition processes',
    credits: [
      {
        label: 'My Role',
        value:
          'UX/UI and Design Lead — Product Development, Branding, Interaction Design, Visual Design',
      },
      {
        label: 'Team',
        value:
          'Zachary Ang (Project Manager), Kok Hon Kit (Machine Learning Specialist), Lee Ren Jie (Full-stack Developer), Vandyck Lai (Technical Lead)',
      },
      { label: 'Timeline', value: 'December 2023 — August 2024 · 9 months' },
    ],
    sections: [
      {
        heading: 'Overview',
        body: [
          'Hireti is a talent acquisition system built for Hilti in conjunction with the Hilti IT Competition 2024, where it was awarded the Grand Champion title. The product focuses on reducing the effort talent acquisition teams spend sourcing quality candidates, through candidate management, job management, and analytics dashboards.',
        ],
      },
      {
        heading: 'Highlights',
        lead: 'A unified recruitment system with AI features',
        figures: [
          { src: '/assets/hireti-01-matching.png', caption: '01 Candidate Matching' },
          { src: '/assets/hireti-02-design-system.png', caption: '02 Design System' },
        ],
      },
      {
        heading: 'The Problem',
        lead: 'To find suitable candidates through a unified system',
        body: [
          'Although thousands of applications arrive every day, the company struggles to surface candidates who meet its criteria. The current structure is not unified — it requires interacting with several different recruitment management platforms.',
        ],
        bullets: [
          'Delays caused by insufficient initial filtering, and difficulty assessing candidates’ levels of experience.',
          'Inadequate feedback mechanisms, hindering communication throughout the recruitment process.',
          'Delays in job position approvals and a lack of automation, compromising transparency.',
        ],
        blocks: [
          {
            title: 'The Challenge',
            body: 'Ensuring recruiters can complete recruitment processes with the fewest interactions and least effort, for the maximum result in recruiting good candidates.',
          },
        ],
      },
      {
        heading: 'Research',
        lead: 'Looking into our main user personalities',
        body: [
          'Several interviews were conducted with a diverse pool of individuals to understand their personality and attitude towards recruitment, focusing on talent acquisition specialists.',
        ],
        blocks: [
          {
            title: 'The Indecisive',
            body: 'Cannot settle on the best candidate, due to bias and a lack of additional reference or opinion.',
          },
          {
            title: 'The Skill-centric',
            body: 'Focuses less on the interview and more on the candidate’s technical capability to handle the work.',
          },
          {
            title: 'The Communication-centric',
            body: 'Places more weight on communication skills, on the view that hard skills can be trained.',
          },
        ],
      },
      {
        heading: 'The current process',
        lead: 'Acquiring, screening, interviewing and offering',
        blocks: [
          {
            title: 'Acquisition',
            body: 'Determine positions to hire, then write and post job descriptions. Users may struggle to prioritise suitable postings and to write a comprehensive description.',
          },
          {
            title: 'Screening',
            body: 'Screen resumes one by one, run pre-screening calls, assess technical roles, then shortlist or reject. Users are often overwhelmed by the volume of applications.',
          },
          {
            title: 'Interview',
            body: 'Conduct interviews, evaluate performance, and decide who advances. Users may not remember the context discussed during each interview.',
          },
          {
            title: 'Offer',
            body: 'Select the candidate, confirm their interest, then prepare and send the offer letter. Users need extra time to produce an error-free letter.',
          },
        ],
      },
      {
        heading: 'Wireframes',
        lead: 'Compact, consistent and scannable',
        blocks: [
          {
            title: 'Candidate matching made easy — all information on one page',
            body: 'Because the existing setup requires separate systems across the process, those functions are compressed into a single interface.',
          },
          {
            title: 'Solving budgeting decisions — a chatbot consultant',
            body: 'The consultant chatbot helps with budgeting struggles and with creating new job postings.',
          },
        ],
        figures: [
          { src: '/assets/hireti-03-matching-concept.png', caption: '03 Candidate Matching layout concept' },
          { src: '/assets/hireti-04-chatbot-concept.png', caption: '04 Budgeting Chatbot layout concept' },
        ],
      },
      {
        heading: 'Design System',
        lead: 'A touch of simplicity and modernity',
        blocks: [
          {
            title: 'The colours of Hilti',
            body: 'Hilti’s main colour palette is implemented to maintain the system’s brand identity.',
          },
          {
            title: 'The small components that craft a big system',
            body: 'UI components are built on Next.js components to ease development.',
          },
        ],
        figures: [
          { src: '/assets/hireti-05-colors.png', caption: '05 Hilti colour palette' },
          { src: '/assets/hireti-06-components.png', caption: '06 UI components' },
        ],
      },
      {
        heading: 'Final Design',
        lead: 'Elevating talent acquisition processes with Hireti',
        figures: [
          { src: '/assets/hireti-07-job-request.png', caption: '07 Job Request' },
          { src: '/assets/hireti-08-chatbot.png', caption: '08 Budgeting Chatbot' },
        ],
      },
      {
        heading: 'Results',
        lead: 'Fast recruitment, happy applicants',
        body: [
          'A single system for recruiters to run every stage produced significant positive results. Due to non-disclosure agreements, results are shown in general terms.',
        ],
        bullets: [
          'Significant time savings by reducing manual processes.',
          'Increased diversity in hiring by dispelling human bias.',
          'High satisfaction rate achieved from employees.',
        ],
      },
      {
        heading: 'Key Takeaways',
        lead: 'Teamwork makes the dream work',
        body: [
          'The product’s success came from each team member’s specialisation and strengths.',
        ],
        blocks: [
          {
            title: 'A team with balanced skill sets contributes to success',
            body: 'Teammates with different expertise help each other by exchanging knowledge.',
          },
          {
            title: 'Adapting to different requirements and situations',
            body: 'There were many unexpected turns, overcome by voicing thoughts to the team during brainstorming.',
          },
        ],
      },
      {
        heading: 'Our Achievement',
        lead: 'Grand Champion of the Hilti IT Competition 2024',
        body: [
          'A shoutout to my teammates — Zach (Project Manager), Hon Kit (ML Engineer), Ren Jie (Full-stack Developer) and Vandyck (Tech Lead) — for their dedication and effort. We would not have made it without any one of us on this team.',
        ],
        figures: [
          {
            src: '/assets/hireti-09-team.png',
            caption: '09 Team Sweetzerland from Asia Pacific University',
          },
        ],
      },
    ],
  },
}

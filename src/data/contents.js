const contents = [
  {
    content: [
      {
        id: 1,
        topic: "Main Content",
        author: "Hollie Rosser",
        url: "1/main-content",
        type: "main",
        points: 100,
        creationDate: new Date(2023, 4, 28),
        content: `
          <div class="content-block">
            <p>Welcome from all of us at Work-Learn!</p>

            <p>
              We are interested in helping people like you gain new skills and
              expand the opportunities you have when entering (or re-entering)
              careers in computer and information technology.
            </p>

            <p>
              To accomplish this goal, we need to learn more about who you are
              and what your experiences are while you are in the program.
            </p>

            <p>This will happen in a couple of ways:</p>

            <ol>
              <li>
                Complete the Qualtrics Survey linked below to provide background
                information about you and your past education experiences.
                Responses are confidential and anonymous.
              </li>
              <li>
                Schedule a time to meet with a Work-Learn team member either
                in person or online. This will be the first of three meetings
                during the program.
              </li>
            </ol>

            <p>
              We will be on campus at SFH weekly and will make every effort to
              meet with you in person. If that is not possible, a team member
              will contact you by email to schedule a virtual meeting.
            </p>

            <p>
              Because we value your time, you will receive compensation for
              each of the three meetings you complete with our team.
            </p>

            <p>
              If you have questions, email us at
              <a href="mailto:worklearnproject@gmail.com">
                worklearnproject@gmail.com
              </a>.
            </p>
          </div>
        `,
      },

      {
        id: 2,
        topic: "Complete Survey",
        author: "Hollie Rosser",
        url: "1/complete-survey",
        type: "quiz",
        points: 100,
        creationDate: new Date(2023, 4, 28),
        content: `
          <div class="content-block">
            <a
              href="https://unomaha.az1.qualtrics.com/jfe/form/SV_8iGZnehHEJ64MCO"
              class="primary-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Complete the Qualtrics Survey
            </a>
          </div>
        `,
      },

      {
        id: 3,
        topic: "Main Content",
        author: "Hollie Rosser",
        url: "2/main-content",
        points: 100,
        creationDate: new Date(2023, 4, 28),
        content: `
          <div class="content-block">
            <h2>Computer Literacy</h2>
            <p>
              Computer literacy refers to your comfort level using computers
              to accomplish tasks. This can range from basic usage to writing
              code. As technology evolves, so does this definition.
            </p>

            <h2>Digital Literacy</h2>
            <p>
              Digital literacy focuses on finding, evaluating, and communicating
              information using digital tools such as search engines, social
              media, and office productivity software.
            </p>

            <h2>What’s Next?</h2>
            <p>
              Explore the Northstar Online Learning lesson on Basic Computer
              Skills to continue building your knowledge.
            </p>

            <p>
              Practice navigating your screen using Mousercise!, especially
              if you use a trackpad.
            </p>

            <p>
              Additional mini-courses are available if you would like more
              practice before moving forward.
            </p>
          </div>
        `,
      },

      {
        id: 4,
        topic: "Main Content",
        author: "Hollie Rosser",
        url: "3/main-content",
        points: 100,
        creationDate: new Date(2023, 4, 28),
        content: `
          <div class="content-block">
            <h2>Before You Proceed</h2>

            <p>
              Before moving on, please complete the Basic Computer Skills and
              Internet Basics assessments on the Northstar Digital Literacy
              website with a score of 85% or higher.
            </p>

            <ul>
              <li>You may retake assessments using private browsing mode.</li>
              <li>Use headphones or captions for voice-over questions.</li>
              <li>Review your answers carefully before submitting.</li>
              <li>Download and upload your results as PDFs.</li>
            </ul>

            <p>
              Once your scores are verified, you may proceed to the
              Computational Thinking module.
            </p>
          </div>
        `,
      },

      {
        id: 5,
        topic: "Main Content",
        author: "Hollie Rosser",
        url: "4/main-content",
        points: 100,
        creationDate: new Date(2023, 4, 28),
        content: `
          <div class="content-block">
            <p>
              Knowing how to use the software required for your coursework
              is a critical first step to success as an online learner.
            </p>

            <h3>Google Classroom</h3>
            <p>
              Google Classroom is the learning platform used for all Work-Learn
              coursework. Tutorials are provided to help you get started.
            </p>

            <h3>Google Drive & Docs</h3>
            <p>
              Google Drive stores your files in the cloud. Docs, Slides, and
              Sheets save automatically and are accessible from anywhere.
            </p>

            <h3>What to Turn In</h3>
            <p>
              Complete the “Challenge!” activities in each tutorial and upload
              your completed work as instructed.
            </p>
          </div>
        `,
      },

      {
        id: 6,
        topic: "Resources",
        author: "Hollie Rosser",
        url: "4/resources",
        points: 100,
        creationDate: new Date(2023, 4, 28),
        content: `
          <div class="content-block">
            <ol>
              <li><a href="https://www.youtube.com/watch?v=qSxNLaWm74g">Student Guide to Google Classroom</a></li>
              <li><a href="https://usadultliteracy.com/how-to-use-google-classroom-for-students-computer-tutorial/">How to Use Google Classroom – US Adult Literacy</a></li>
              <li><a href="https://edu.gcfglobal.org/en/googledriveanddocs/">Google Drive & Docs Tutorial (GCFGlobal)</a></li>
              <li><a href="https://edu.gcfglobal.org/en/googleslides/">Google Slides Tutorial (GCFGlobal)</a></li>
            </ol>
          </div>
        `,
      },
    ],
  },
];

export default contents;

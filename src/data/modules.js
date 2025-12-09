

const data = [
    {
      id: 1,
      topicName: "Unit 0: Getting Started",
      subTopics: [
        {
          id: 1,
          name: "Getting to Know You",
          author: "Hollie Rosser",
          creationDate: new Date(2023, 4, 28),
          points: 100,
          content: `
          <div class="gtk">
          <p>Welcome from all of us at Work-Learn!</p>
          <p>We are interested in helping people like you gain new skills and expanding the opportunities you have entering (or re-entering) careers in computer and information technology. To accomplish this goal, we need to learn about who you are and what your experiences are while you are in the program.</p>
          <p>This will happen in a couple of ways:</p>
          <p>We will be on campus at SFH weekly and will make every effort to schedule a time to meet with you in person while we're here. If this isn't possible, one of our team members will be available on the Slack Channel that is set up for you.</p>
          <p>Complete the Qualtrics Survey at the bottom of this page to provide us with some background information about you and your past education experiences. The answers to this survey are confidential. Your name will not be used so no one will know who you are. All information about you will be kept in locked offices of the research team and information kept on computers will be password protected.</p>
          <p>We will also interview you several times. You have already completed the first of the interviews. We will be using the same email address you logged into the Work-Learn Classroom to contact you for scheduling.</p>
          <p>Finally, we know that your time is valuable, and we truly appreciate all of your efforts as you work your way through the program. For this reason, you will be given $15 for each of the interviews you have with us.</p>
          <p>If you have any questions before you get started, please direct those questions by email to <a style="text-decoration: underline;" target="_blank" href='mailto:worklearnprojects@gmail.com'>worklearnprojects@gmail.com</a>.
          </p>
          </div>
          <style>
          .gtk p {
            margin-top: 20px;
          }
          </style>
          <p style="margin-top:20px;">Completing this survey is worth $5.</p>
                <a target="_blank"  style='text-decoration: underline' href='https://smu.az1.qualtrics.com/jfe/form/SV_bPLjuVE1N21OLYy' alt='qualtrics survey'>Please complete this Qualtrics Survey</a>
                <p style="margin-top:20px;">Completing this survey is worth $15.</p>
                <a target="_blank"  style='text-decoration: underline' href='https://unomaha.az1.qualtrics.com/jfe/form/SV_0wXrZjeZJ6OMYAK' alt='qualtrics survey'>Please complete this Qualtrics Survey</a>
          `,
        },
        {
          id: 2,
          name: "Link to Slack Channel",
          content: `
              <p>This is the link to the Slack Channel:</p>
              <a style="margin-top: 20px; text-decoration: underline;" target="_blank" href="https://join.slack.com/t/worklearn-workspace/shared_invite/zt-3e743j1sh-89RnamU6oyf9d98AsZbAcg">WorkLearn</a>
              `,
        },
        {
          id: 3,
          name: "Payment",
          content: `
              <div class="payment">
                 <p>For participating in the WorkLearn class, you can earn up to $1000. WorkLearn follows the Siena Francis House bi-weekly payment schedule. Successfully achieved tasks will be paid out in your bi-weekly checks.</p>
                 <p>Here is an overview of the units to understand how they align to the payments.</p>
                 <ul>
                 <li>Introductory Interview: $15</li>
                 <li>Getting Started: $5</li>
                 <li>Computational Thinking: $100</li>
                 <li>Professional Skills: $25</li>
                 <li>Python: $170</li>
                 <li>COBOL: $170</li>
                 <li>WebDev Challenges: $250</li>
                 <li>Mainframe Challenges: $250</li>
                 <li>Exit Interview: $15</li>
                 </ul>
                 <p>There are two types of payments: Complete/Incomplete and Content Mastery.</p>
                 <p>We will use Complete/Incomplete-type payments when we ask you to complete a task that is not linked to learning new materials. For example, if there are surveys or interviews, we need you to complete the task but we do not need you to prepare any new materials first.</p>
                 <p>We will use Content Mastery-type payments when we ask you to complete a task that is linked to your having studied the materials or using knowledge that you have gained in previous units. For Content Mastery-type payments, we require that you achieve at least 80% correctness on the tasks.</p>
                 <p>Content Mastery payments will have different tasks associated with them. Sometimes, you will be asked to take a quiz or write short answers to show content mastery; sometimes you will need to write code to create small programs or correct bugs. Learning materials and Challenges are Content Mastery-type payments.</p>
              </div>
              <style>
              .payment p, .payment ul {
                margin-top: 20px;
              }
              .payment ul {
                list-style-type: disc;
                margin-left: 20px;
              }
              </style> 
              `,
        },
        {
          id: 4,
          name: "Tutorial on How to Navigate in Work-Learn Application",
          content: `
              <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/tutorial.mp4"
                    type="video/mp4">
                </video>
              </div>
              `,
        },
        {

          id: 5,
          name: "Troubleshooting",
          content: `
            <div class="troubleshooting">
              <p>
                Welcome to the Troubleshooting page. Here you will find updates about known issues 
                (also called bugs), along with their current status. We regularly monitor and resolve 
                problems to ensure your experience is smooth.
              </p>
        
              <h3 style="font-weight: 700; margin-top: 30px;">Date: 8 Feb 2024</h3>
              <p><strong>Issue:</strong> Quiz scores were incorrect for many accounts.</p>
              <p><strong>Status:</strong> Resolved</p>
        
              <p><strong>Issue:</strong> The site was unavailable for some devices.</p>
              <p><strong>Status:</strong> Resolved</p>
        
              <hr/>
        
              <h3 style="font-weight: 700; margin-top: 30px;">Date: 6 Feb 2024</h3>
              <p><strong>Issue:</strong> Several users could not log in, and the site was down on some computers.</p>
              <p><strong>Status:</strong> Under review</p>
        
              <hr/>
        
              <h3 style="font-weight: 700; margin-top: 30px;">Date: 4 Feb 2024</h3>
              <p>No known issues on this date.</p>
        
              <hr/>
        
              <h3 style="font-weight: 700; margin-top: 40px;">Need Help?</h3>
              <p>
                If you experience a problem that is not listed here, or if you need assistance, please reach out:
              </p>
        
              <p>
                <strong>Support Contact:</strong><br/>
                Magie Hall, Ph.D.<br/>
                <a href="mailto:mahall@unomaha.edu">mahall@unomaha.edu</a>
              </p>
        
              <p>
                We’re here to help! Please include as much detail as possible screenshots, error messages, 
                and what you were doing when the issue occurred greatly helps us troubleshoot quickly.
              </p>
            </div>
        
            <style>
              .troubleshooting p, .troubleshooting h3 {
                margin-top: 18px;
                line-height: 1.6;
              }
              .troubleshooting a {
                color: #0056b3;
                text-decoration: none;
              }
              .troubleshooting a:hover {
                text-decoration: underline;
              }
            </style>
          `,


        },
        //       {
        //         id: 3,
        //         name: "Basic Computer and Digital Literacy",
        //         author: "Hollie Rosser",
        //         creationDate: new Date(2023, 4, 28),
  
        //         contents: [
        //           {
        //             id: 1,
        //             topic: "Main Content",
        //             points: 100,
        //             content: `
        //                 <p>What is Computer Literacy?</p>
        //                 <p>Computer literacy can be defined as the level of experience and comfort someone has using computers to accomplish a goal. Your skill level can range from having no or very basic knowledge of how to use a computer all the way to operating common software programs or being able to write code. It's important to keep in mind that this definition is always changing and evolving depending on the advances made in that technology. It covers the basics of being able to functionally use the physical elements of a computer to achieve some task.</p>
  
        //                 <p>What is Digital Literacy?</p>
        //                 <p>Digital literacy is a little bit different. It refers to a person's ability to use computers and other digital media to find, evaluate, and communicate information. While early digital literacy definitions were more closely related to computer literacy skills, the birth of the internet quickly led to a definition that included the creation, gathering, and sharing of information through the use of a computer. These skills include the ability to use social media platforms (like Facebook or Twitter), search engines (Google), and office productivity suites (Office 365 and GSuite/Google Workplace).</p>
  
        //                 <p>What's Next?</p>
        //                 <p>To learn a little bit more about computer and digital literacy, check out the lesson below from Northstar Online Learning on Basic Computer Skills.</p>
  
        //                 <p>Using a trackpad instead of a mouse can be tricky. The Mousercise! link below will help you practice navigating around your screen using the trackpad. If you're using a mouse, this can be good practice for you too!</p>
  
        //                 <p>Want a little more practice before moving on? Check out the mini-course, Getting Started on a Computer, to work on your computer literacy skills.</p>
  
        //                 <p>To get started on improving your digital literacy skills, check out the lesson on Using a PC. It will take you through the basics of working on a desktop, working with windows, and handling files and folders.</p>
        //                 `,
        //           },
        //           {
        //             id: 2,
        //             topic: "Resources",
        //             content: `
        //               <ul class="resources">
        //               <li>
        //               <a href="https://assessment.digitalliteracyassessment.org/basic-computer-skills/practice/getting-started-with-computers?authuser=3">Northstar Digital Literacy</a>
        //               </li>
        //               <li>
        //               <a href="https://www.digitallearn.org/courses/getting-started-on-a-computer-new?authuser=3">Getting Started on a Computer</a>
        //               </li>
        //               <li>
        //               <a href="https://www.digitallearn.org/courses/using-a-pc-windows-10-new?authuser=3">Using a PC (Windows 10)</a>
        //               </li>
        //               <li>
        //               <a href="http://www.pbclibrary.org/mousing/mousercise.htm?authuser=3">Palm Beach County Library System Mousing Tutorial</a>
        //               </li>
        //               </ul>
        //               <style>
        //               .resources li a {
        //                 text-decoration: underline;
        //               }
        //               </style>
  
        //             `,
        //           },
        //         ],
        //       },
        //       {
        //         id: 4,
        //         name: "Assessing Your Computer and Digital Literacy",
        //         author: "Hollie Rosser",
        //         creationDate: new Date(2023, 4, 28),
        //         contents: [
        //           {
        //             id: 1,
        //             topic: "Main Content",
        //             points: 100,
        //             content: `
        //                 <p>Before You Proceed to Other Modules</p>
        //                 <p>Before you can move on to the other modules of the Work Learn Classroom, we want to make sure you have the computer and digital literacy skills needed to be successful in the program. So, we are asking that you complete the Basic Computer Skills and Internet Basics assessments from the Northstar Digital Literacy website linked below with a score of 85% or better. If you are not successful the first time, please go back to the Basic Computer and Digital Literacy Practice module to improve your skills.</p>
  
        //                 <p>When you get to the Northstar website, please click on the green "Take an Assessment" button to get to the menu options you will need to select to complete the assessments. You will find the Basic Computer Skills and Internet Basics under Essential Computer Skills in the left column. An illustrative tutorial of these steps is provided below for you if needed.</p>
  
        //                 <p>Helpful Hints</p>
        //                 <ul>
        //                     <li>You can take the assessments multiple times by using the private mode of your web browser. If you do not use the private viewing mode, you will only be able to take the assessments once per day.</li>
        //                     <li>These assessments have voice-over prompts for each question. Please be mindful of others around you and use headphones, turn on closed captioning, or mute your device. The platform tutorial will also go through how to do this.</li>
        //                     <li>At the beginning of each assessment, there is a tutorial that goes through how to complete the assessments. This tutorial will show you how to navigate through each screen, record your answers, review and change your answers, submit your answers, and receive your final score.</li>
        //                     <li>Make sure you are confident in your answers before you submit your assessment for grading. You will not be able to return to the questions after the assessment is graded.</li>
        //                 </ul>
  
        //                 <p>When you are done with each assessment, please press Print Result and download your results as a PDF file. Upload each of the files to this assignment. Once your scores are verified to be 85% or better, you will be able to move on to the Computational Thinking module.</p>
        //             `,
        //           },
        //         ],
        //       },
        //       {
        //         id: 5,
        //         name: "Your Digital Footprint",
        //         author: "Hollie Rosser",
        //         creationDate: new Date(2023, 4, 28),
        //         contents: [
        //           {
        //             id: 1,
        //             topic: "Main Content",
        //             points: 150,
        //             content: `
        //                     <span><b>Your Digital Footprint<br></b><br>Digital footprint refers to the trails, traces, and crumbs that are left behind after someone uses the internet. This information is available for others to find without a lot of effort, and never goes away. Not only is your personal digital footprint affected by what you post and do online, it is also affected by what others might post about you online. Having a negative digital footprint, even if it's from a long time ago,
        //                     can have consequences on future employment opportunities, so it's important to understand what contributes to your digital footprint and how it can impact your future. <br><br>Here are just a few examples of online sources that can make up your digital footprint:<ul><li>Social media posts on Facebook, Instagram, Twitter, etc.
        //                     <br></li><li>YouTube uploads, channel subscriptions, and public comment history</li><li>Postings on Yelp, Amazon, Google</li><li>Personal websites, blog posts, and digital art portfolios</li><li>Accepted cookies from websites you have visited<br></li></ul>So, here are a couple of recommendations to keep in mind:&nbsp; 1) Always think twice or even three times before you post questionable content or opinions on the internet--including your social media accounts; and 2) Maybe even consider maintaining separate accounts for personal and professional use to mitigate potential bleed through. <br><br><i>**For more information and practice on identifying sources of your digital footprint, check out the video, </i><b><i>Your Digital Footprint</i></b><i>. You'll test your knowledge with a skills assessment on the Northstar Digital Literacy site, </i><b><i>Using Technology in Daily Life--Your Digital Footprint</i></b><i> a little later. </i><br><br><b>Personal Use of Technology at Work</b><br><br>Have you ever checked your socials or email, do some online shopping, or even read up on the daily news while you're on the clock at work? You are not alone and most workers will admit that they either use their work computers for personal use or use their personal devices while at work. Sometimes this is okay. Research has shown that taking a short break from your work will also give your brain a break, and this can improve your productivity. It's also been shown that these brief online breaks can improve your mood while you're working because you tend to visit sites you want to or enjoy going to. <br><br><br>Whether or not this is an okay use of your on-the-clock-time depends on a lot of different variables and has its limits. First of all, be aware of your employer's policy on personal use of technology at work. Many employers will have this policy spelled out in their employee handbook. If they don't, ask before you start scrolling. Second, make sure you are getting your work done, its done well, and you're meeting your deadlines. Ultimately, you are being paid to do work for your employer, and that should be your priority while you're there.
        //                     Finally, looking at funny pet videos on YouTube would be appropriate, going to sexually explicit, gambling, or sites selling illegal materials employer is paying you for.&nbsp;<br><br><i>**Take a couple of minutes to watch the video, </i><b><i>Good and Proper Use of Technology in the Workplace</i></b><i>, for more information on this topic.</i><br><br><b>Crafting Professional Emails</b><br><b><br></b>In the video you just watched, you learned a little bit about email etiquette at work. As you enter into a work setting where email is often a primary source of communication, it will become more and more important for you to know how to craft high quality professional emails. Direct messaging (DM)/instant messaging (IM) is also a popular way to communicate with your co-workers, and in a lot of ways is very similar to sending and receiving text messages. However, it's also equally important to remember that there a few more guidelines you need to pay attention to when you're using DMs at work. <br><br>Regardless of whether you are communicating through an email or a direct messaging app, your writing should always be professional and business-friendly. The tutorials and videos below will give you a good idea of how to craft a quality work-ready email and DM. <br><br><br><i>**Check out the tutorials on, </i><b><i>Email Basics, Beyond Email, Communication Skills, </i></b><i>and </i><b><i>Business Communication</i></b><i>. We've also provided you with a video series for the </i><b><i>Business Communication</i></b><i> tutorial that provides several short videos to reinforce your learning.</i></span>
        //                 `,
        //           },
        //           {
        //             id: 2,
        //             topic: "Resources",
        //             points: 150,
        //             // type: "upload",
        //             content: `
        //                 <div class="lf">
        //                     <ol>
        //                         <li>
        //                             <a href="https://www.youtube.com/watch?v=iVEdvp8MWTg&authuser=1">Good and proper use of technology in the workplace</a>
        //                         </li><li>
        //                             <a href="https://www.digitalliteracyassessment.org/?authuser=1">Home | Northstar Digital Literacy</a>
        //                         </li><li>
        //                             <a href="https://edu.gcfglobal.org/en/email101/?authuser=1">Free Email Basics Tutorial at GCFGlobal</a>
        //                         </li><li>
        //                             <a href="https://edu.gcfglobal.org/en/beyondemail/?authuser=1">Free Beyond Email Tutorial at GCFGlobal</a>
        //                         </li><li>
        //                             <a href="https://edu.gcfglobal.org/en/communicationskills/?authuser=1">Free Communication Skills Tutorial at GCFGlobal</a>
        //                         </li><li>
        //                             <a href="https://youtube.com/playlist?list=PLpQQipWcxwt_vpL6XGO94Lhs-sWLVpurs&authuser=1">Business Communication - YouTube</a>
        //                         </li><li>
        //                             <a href="https://www.youtube.com/watch?v=6TUMHplBveo&authuser=1">Your Digital Footprint</a>
        //                         </li>
        //                     </ol>
        //                 </div>
        //                 <style>
        //                 .lf a {
        //                   text-decoration: underline;
        //                 }
        //                 </style>
  
        //                 `,
        //           },
        //           {
        //             id: 3,
        //             topic: "Assessment",
        //             content: `
        //             <div class="assessment">
        //             <p>
        //             As part of the Looking Forward module you just completed, you learned a bit about what your digital footprint is and why it's important.
        //             </p>
        //             <p>
        //             When you get to the Northstar website from the link below, please click on the green "Take an Assessment" button to get to the menu options you will need to select to complete the assessments. You will find the Your Digital Footprint under Using Technology in Daily Life in the right column. An illustrative tutorial of these steps is provided below for you if needed.
        //             </p>
        //             <p>
        //             Before you get started on this assignment, however, here are a couple of helpful hints:
        //             </p>
        //             <ul class='list'>
        //             <li>
        //             You
        // can take the assessments multiple times by using the private mode of
        // your web browser. If you do not use the private viewing mode, you will
        // only be able to take the assessments once per day.
        //             </li>
        //             <li>
        //             These
        // assessments have voice-over prompts for each question. Please be mindful
        // of others around you and use headphones, turn on closed captioning, or
        // mute your device. The platform tutorial will also go through how to do
        // this.
        //             </li>
        //             <li>
        //             At the beginning of each assessment, there is a
        // tutorial that goes through how to complete the assessments. This
        // tutorial will show you how to navigate through each screen, record your
        // answers, review and change your answers, submit your answers and receive
        // your final score.</li>
        //             <li>Make sure you are confident in your
        // answers before you submit your assessment for grading. You will not be
        // able to return to the questions after the assessment is graded.</li>
  
        //             </ul>
        //             <p>
        //             When
        // you are done with each assessment, please press Print Result and
        // download your results as a PDF file. Upload each of the files to this
        // assignment. You will need to achieve an 80% or better to receive your incentive pay of $_____.
        //             </p>
        //             <div class="resources">
        //             <h3>Resources</h3>
        //             <ul>
        //             <li>
        //             <a href="https://work-learn-bucket.s3.amazonaws.com/northstar-tutorial.pdf">Northstar Navigation Tutorial-DL.pdf</a>
        //             </li>
        //             <li>
        //             <a href="https://www.digitalliteracyassessment.org/?authuser=0">Home | Northstar Digital Literacy</a>
        //             </li>
  
        //             </ul>
        //             </div>
        //             </div>
  
        //             <style>
        //             .assessment p, assessment ul.list {
        //               margin-top: 20px;
        //             }
  
        //             .list {
        //               list-style-type: disc;
        //               padding: 30px;
        //             }
        //             .resources h3 {
        //               font-weight: 700;
        //               margin-top: 20px;
        //             }
        //             .resources a {
        //               text-decoration: underline;
        //             }
        //             </style>
        //             `,
        //           },
        //           //           {
        //           //             id: 3,
        //           //             topic: "Looking Forward: Your Digital Footprint Assessment",
        //           //             author: "Hollie Rosser",
        //           //             creationDate: new Date(2023, 4, 28),
        //           //             contents: [
        //           //               {
        //           //                 id: 1,
        //           //                 topic: "Main Content",
        //           //                 points: 100,
        //           //                 content: `
        //           // <span>As part of the Looking Forward module you just completed, you learned a bit about what your digital footprint is and why it's important. <br><br><br><br>When you get to the Northstar website from the link below, please click on the green "<i>Take an Assessment</i>" button to get to the menu options you will need to select to complete the assessments. You will find the<b> Your Digital Footprint</b> under <i>Using Technology in Daily Life</i> in the right column. An illustrative tutorial of these steps is provided below for you if needed.<br><br>Before you get started on this assignment, however, here are a couple of helpful hints:<ul><li>You<br> can take the assessments multiple times by using the private mode of <br>your web browser. If you do not use the private viewing mode, you will <br>only be able to take the assessments once per day. <br></li><li>These <br>assessments have voice-over prompts for each question. Please be mindful<br> of others around you and use headphones, turn on closed captioning, or <br>mute your device. The platform tutorial will also go through how to do <br>this. <br></li><li>At the beginning of each assessment, there is a <br>tutorial that goes through how to complete the assessments. This <br>tutorial will show you how to navigate through each screen, record your <br>answers, review and change your answers, submit your answers and receive<br> your final score. <br></li><li>Make sure you are confident in your <br>answers before you submit your assessment for grading. You will not be <br>able to return to the questions after the assessment is graded. </li></ul>When <br>you are done with each assessment, please press Print Result and <br>download your results as a PDF file. Upload each of the files to this <br>assignment. You will need to achieve an 80% or better to receive your incentive pay of $_____.</span>
        //           //                 `,
        //           //               },
        //           //               {
        //           //                 id: 2,
        //           //                 topic: "Resources",
        //           //                 points: 150,
        //           //                 content: `
        //           //                 <div class="lf">
        //           //                     <ol>
        //           //                         <li>
        //           //                             <a href="https://drive.google.com/file/d/1lKbPnqPOEBmS4l6sK4S8Zn6OHnYG1cVx/view?usp=drive_web&authuser=1">Northstar Navigation Tutorial-DL.pdf</a>
        //           //                         </li>
        //           //                         <li>
        //           //                             <a href="https://www.digitalliteracyassessment.org/?authuser=1">Home | Northstar Digital Literacy</a>
        //           //                         </li>
        //           //                     </ol>
        //           //                 </div>
  
        //           //                 <style>
        //           //                 .lf a {
        //           //                   text-decoration: underline;
        //           //                 }
        //           //                 </style>
  
        //           //                 `,
        //           //               },
        //           //             ],
        //           //           },
        //         ],
        //       },
  
        //       {
        //         id: 6,
        //         name: "Writing Professional E-mail",
        //         author: "Hollie Rosser",
        //         type: "email",
        //         creationDate: new Date(2023, 4, 28),
        //         contents: [
        //           {
        //             id: 1,
        //             topic: "Main Content",
        //             points: 150,
        //             content: `
        //                    <span>After you have gone through the Email Basics tutorials in Looking Forward, please take this quiz to test your understanding of the topic. <br><br><br>You'll need to answer 8 of the questions correctly to receive your incentive of $_____.</span>
        //                 `,
        //           },
        //           {
        //             id: 2,
        //             topic: "Assessment",
        //             type: "quiz",
        //           },
        //         ],
        //       },
        //       {
        //         id: 7,
        //         name: "Looking Forward: Beyond Email Quiz",
        //         author: "Hollie Rosser",
        //         type: "beyond",
        //         creationDate: new Date(2023, 4, 28),
        //         contents: [
        //           {
        //             id: 1,
        //             topic: "Main Content",
        //             points: 150,
        //             content: `
        //                     <span>After you have gone through the Beyond Email tutorials in the Looking Forward module, please take this quiz to test your understanding of the topic. <br><br><br>You'll need to answer 8 of the questions correctly to receive your incentive of $________.</span>
        //                 `,
        //           },
        //           {
        //             id: 2,
        //             topic: "Assessment",
        //             type: "quiz",
        //           },
        //         ],
        //       },
      ],
    },
    {
      id: 2,
      topicName: "Unit 1: Computational Thinking",
      subTopics: [
        {
          id: 1,
          name: "Introduction to Computational Thinking",
          type: "intro",
          contents: [
            {
              id: 1,
              topic: "Computational Thinking: How Computers Think",
              type: "content",
              points: 100,
              content: `
          <div class="how-comp-think">
                <h1>Computational Thinking: How Computers Think</h1>
  
        <p>
            Computational thinking is a way of solving problems. It is called computational thinking because we are specifically thinking in the same way that we could tell a computer to solve a problem. In computational thinking, we break problems and their solutions into simple steps. We use computational thinking when we write computer programs. We can also use computational thinking in everyday life. Computers are often used to model the real world, so many of the problems we solve with computers are like problems we solve in real life.
        </p>
  
        <h2>Four Cornerstones to Computational Thinking</h2>
  
        <p>
            Computational thinking is an approach in which you break down problems into distinct parts, look for similarities, identify the relevant information and opportunities for simplification, and create a plan for a solution. There are four key techniques (cornerstones) to computational thinking: decomposition, pattern recognition, abstraction, algorithms.
        </p>
  
        <ul>
            <li><strong>Decomposition:</strong> Breaking down a complex problem or system into smaller, more manageable parts;</li>
            <li><strong>Pattern Recognition:</strong> Looking for similarities among and within problems;</li>
            <li><strong>Abstraction:</strong> Focusing on the important information only, ignoring irrelevant detail;</li>
            <li><strong>Algorithms:</strong> Developing a step-by-step solution to the problem, or the rules to follow to solve the problem.</li>
        </ul>
  
        <h2>What Problems Can Computational Thinking Solve?</h2>
  
        <p>
            Another element of computational thinking is knowing what kinds of problems can be solved well by a computer and what problems are better for humans to resolve. A computer is really good at recording, processing, and searching for data making them a great tool for keeping track of data and completing complex computational tasks. On the other hand, computers are not very good at completing creative tasks or providing subjective opinions making humans still better at these activities. So, although computers are getting more powerful and sophisticated in what they can do, people are still required to program them!
        </p>
  
        <h2>Here's an Example</h2>
  
        <p>
            In real life, you might have to fill out a form while at a government office. That form has stuff on it like your name and address. In computing, we would call your entries on the form data. This data needs to be stored somewhere--like in a folder placed into a filing cabinet--and the people at the office will need to be able to find that folder later.
        </p>
  
        <p>
            In the computer, the form would be called a file that would be stored in a folder on the hard drive. Then, if a person needs to access the data in the file, they can either go directly to the folder the file is stored in (just like pulling the folder from the cabinet in real life), or they can look for the file using the computer's search function.
        </p>
  
        <p>
            Computational thinking can help us think about how to store the file and also how to search for it, both in real life and in the computer.
        </p>
  
        <h2>Final Thoughts</h2>
  
        <ul>
            <li>Computational Thinking is a way of solving problems;</li>
            <li>Helps us formulate solutions that can be easily carried out by a computer;</li>
            <li>With computational thinking, we solve problems creatively;</li>
            <li>With computational thinking, we get to the root of the problem, which is a crucial step in solving it.</li>
        </ul>
        </div>
          <style> 
      .how-comp-think {
              font-family: Arial, sans-serif;
              // line-height: 1.6;
              // margin: 20px;
          }
  
          .how-comp-think h1 {
              color: #333;
              padding-bottom: 10px;
              font-weight: 700;
              // border-bottom: 2px solid #333;
          }
  
          .how-comp-think h2 {
              padding-top: 20px;
              padding-bottom: 10px;
              font-weight: 700;
              // border-bottom: 1px solid #ccc;
          }
  
          .how-comp-think p {
              margin-bottom: 15px;
          }
  
          .how-comp-think ul {
              margin-bottom: 15px;
          }
  
          .how-comp-think li {
              margin-bottom: 5px;
          }
          </style>
                `,
            },
            {
              id: 2,
              topic: "Quiz",
              type: "quiz",
              points: 100,
            },
          ],
        },
        {
          id: 2,
          name: "Decomposition",
          type: "decomposition",
          points: 100,
          contents: [
            {
              id: 1,
              topic: "Introduction",
              type: "content",
              content: `
    <div class="decomp">
    <div style="width: 100%; height: auto">
    <img src="/images/contents/computation.png" style="width: 50%; height: auto; margin:auto"/>
    <p style="text-align: center; padding: 20px;">(Brackman et al., 2016)</p>
    </div>
    <div style="margin-top: 50px;">
    <h3 style="font-weight: 700">Purpose</h3>
    <p>Decomposition is one of the pillars of computational thinking. Decomposition allows us to take a complex problem, break it into smaller, more manageable problems, and solve those problems to arrive at a solution to the original, more complex problem. By the end of this section, you should be able to:</p>
    <ol>
      <li>Identify large problems in your life and in the world</li>
      <li>Break problems into small, meaningful steps</li>
      <li>Articulate the ways that computers can help humans break down problems</li>
    </ol>
  
  
  
    <p>The process of breaking things down is decomposition. We look for small solutions to small problems that can help us create big solutions to bigger problems!</p>
      
  <div class="video-intro-section">
    <h2 class="video-intro">Video Introduction</h2>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/DecompositionIntroduction.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div>
  </div>
  <div style="margin-top: 30px;">
    <h1 style="font-weight: 600">Real life example of Decomposition</h1>
    <p>A problem that could be decomposed is getting to the library. “Going to the library” is a single thing we might say we are doing, but it is really made up of many smaller steps. One possible way to decompose getting to the library is this set of steps:</p>
    <ol style="padding-left: 30px;">
      <li>1. Go outside</li>
      <li>2. Walk to the bus stop</li>
      <li>3. Take the bus to the stop nearest the library</li>
      <li>4. Walk to the library</li>
      <li>5. Go inside the library</li>
    </ol>
  <div style="margin-top: 10px;">
    <p>Each of those steps could be decomposed as well - broken into even smaller steps. For example, if you needed to explain to someone who had never taken the bus how to do that, you might break it into steps:</p>
    <ol style="padding-left: 30px;">
      <li>1. At the bus stop, if you don’t have a pass, buy a ticket</li>
      <li>2. Wait for the bus</li>
      <li>3. When the bus arrives, wait for other riders to exit</li>
      <li>4. Enter the bus and scan your ticket or pass</li>
      <li>5. Figure out how many stops until yours, and watch so you know when it is your stop</li>
      <li>6. Right before your stop, press the button to ask for the bus to stop</li>
      <li>7. When the bus stops, get off the bus</li>
    </ol>
    </div>
    </div>
  
  
  
    <div style="margin-top: 20px;">
    <h2 style="font-weight: 600">You try:</h2>
    <p>Think about your morning routine. What are the steps of your morning routine? List them in order:</p>
    <ol>
      <li>1.</li>
      <li>2.</li>
      <li>3.</li>
      <li>4.</li>
      <li>5.</li>
      <li>6.</li>
    </ol>
  
  
  
    <p>Pick one step of your morning routine and break it into smaller steps, like if you were trying to teach someone who had never done that thing before:</p>
    <ol>
      <li>1.</li>
      <li>2.</li>
      <li>3.</li>
      <li>4.</li>
      <li>5.</li>
      <li>6.</li>
    </ol>
    <div>
    <p>Try it here: <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScu_Iq6ojUC2qFrDt1I_dyR8LhWEhb1RxmGhcuZMHWILMvUfA/viewform">Google Forms</a></p>
  
        </div>
  <style>
  
  .decomp p {
    color: black;
  }
  .video-intro-section {
    margin-top: 20px;
  }
  
  
  
  .decomp a, .video-intro-section a {
    text-decoration: underline;
  }
  
  .video-intro {
    font-weight: 600;
  }
  </style>
              `,
            },
            {
              id: 2,
              topic: "Building Background Knowledge",
              points: 100,
              content: `
  <html>
  <head>
    <title>Building Background Knowledge</title>
  </head>
  <body>
  <div class="decomp">
    <h2 class="title">Building Background Knowledge</h2>
    <p>Before computers can be used to solve a problem, the problem and the ways in which it can be resolved must be understood. Decomposition helps us by breaking down complex programs into more manageable components.</p>
  <div class="decomp-defn">
    <h2>What is Decomposition?</h2>
    <p>Decomposition is the process of breaking down a problem into smaller parts or components. These smaller parts can then be examined and solved. They are generally simpler to work with than the larger, more complex problem (like writing a computer program).</p>
  </div>
  <div class="decomp-why"> 
    <h2>Why is Decomposition Important?</h2>
    <p>If a problem is not decomposed, it is much harder to solve. Dealing with many different stages all at once is much more difficult than breaking a problem down into a number of smaller problems and solving each one, one at a time. Breaking the problem down into smaller parts means that each smaller problem can be examined in greater detail.</p>
    <p>Similarly, trying to understand how a complex system works is easier using decomposition. For example, understanding how a bicycle works is more straightforward if the whole bike is separated into smaller parts (like brakes, gears, wheels, etc.), and each part can be examined to see how it works in more detail.</p>
  
  
  
    <p>When you write a program, you might break it into parts.</p>
  </div>
  <div class="decomp-example">
    <h3>EXAMPLE:</h3>
    <p>This video is a great example of breaking a program into smaller parts. </p>
    <div style="display: flex; justify-content: center">
      <video controls width="700">
        <source src="https://work-learn-bucket.s3.amazonaws.com/Procedural+Decomposition+on+Existing+Code+Example.mp4"
        type="video/mp4">
    </video>
  </div>
  
  
  
    <p>This video shows how he started off with a code with no parts and everything was just in one big block of code. He then separated parts of the house by breaking it into smaller sections or pieces (decomposition). After doing that, his code looked a lot more organized and it would be easier for someone else to understand by looking at it.</p>
  
  
  
    <p>Lots of computational tools are huge and very complex. Many programmers work together to create them. The big project gets decomposed into smaller parts, and each programmer gets assigned one part at a time. Then the parts get put together. That’s how the web browser you are using got built!</p>
  
  
  
    <p>For an example of a person decomposing how they built their website, read this: <a target="_blank" href="https://sparkbox.com/foundry/web_design_process_decomposition_exercise">Web Design Process Decomposition Exercise</a></p>
    <div>
  </body>
  </html>
  
  
  
  <style>
  
  .decomp p {
    color: black;
  }
  .title {
    font-weight: 700;
    font-size: 1.25em;
  }
  
  
  
  .decomp-defn {
    margin: 20px 0;
  
  
  
  }
  
  
  
  .decomp-defn h2 {
    font-weight: 700;
    font-size: 1em;
  }
  
  
  
  .decomp-defn p {
    padding: 10px 0;
  }
  
  
  
  .decomp-why {
    margin-bottom: 20px;
  }
  
  
  
  .decomp-why h2 {
    font-weight: 700;
  }
  .decomp-why p {
    padding: 10px 0;
  }
  
  
  
  .decomp-example h3 {
    font-weight: 700;
  }
  
  
  
  .decomp-example a {
    text-decoration: underline;
  }
  .decomp-example p {
    padding: 10px 0;
  }
  
  .youtube iframe {
      border-radius: 8px;
      width: 600px;
      height: 350px;
      margin: 20px auto;
  }
  </style>
              `,
            },
  
            {
              id: 3,
              topic: "Decomposition in the Real World",
              points: 100,
              content: `
              <!DOCTYPE html>
  <html>
  <head>
    <title>Decomposition in the Real World</title>
  </head>
  <body>
  <div class="decomp">
  <div class="decomp-title"> 
    <h2>Decomposition in the Real World</h2>
  </div>
  <div class="decomp-subtitle">
    <p>Use the links below the problem to complete these exercises. They’re also linked in the assignment.</p>
  </div>
  <div class="decomp-exercise"> 
    <h3>Exercise One:</h3>
    <p>Everyday, we are faced with preparing for the day, whether it’s brushing our teeth, cleaning our space, or even navigating the tasks we have to accomplish. Choose one task you do every day and break that task down into its smallest steps.</p>
    <p><a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSerrjEZ0oU7tcATLgZWyLq-oDC8yamMtAu5Dn6oENVduVsRVQ/viewform?authuser=0">Exercise One Link</a></p>
    </div>
  <div class="decomp-exercise">
    <h3>Exercise Two:</h3>
    <p>You are traveling to Chicago and have to figure out how to navigate the train system to get from Midway on the Orange Line to Logan Square on the Blue Line. Look at the map of the city transit and determine what you would do to navigate this system. What are the steps you take to get to your destination?</p>
    <p><a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdExrair1SM7NHSpsT8jQthLOAu5dqguiI_5pIQZLNVOk88Qg/viewform?authuser=0">Exercise Two Link</a></p>
    <img src="/images/contents/railsystemmap.png" />
  </div>
  </div>
  </body>
  <style>
  
  .decomp p {
    color: black;
  }
  .decomp-title {
    font-weight: 700;
    font-size: 1.25em;
  }
  
  
  
  .decomp-subtitle {
    padding: 10px 0;
  }
  
  
  
  .decomp-exercise h3 {
    font-weight: 600;
    margin-top: 20px;
  }
  
  
  
  .decomp-exercise a {
    text-decoration: underline;
  }
  
  
  
  .decomp-exercise img {
    width: 500px;
    height: auto;
    margin: auto;
    padding: 20px;
  }
  
  
  
  
  
  </style>
  </html>
  
  
  
              `,
            },
            {
              id: 4,
              topic: "Decomposition in Computing",
              points: 100,
              content: `
             <!DOCTYPE html>
  <html>
  <head>
    <title>Decomposition in Computing</title>
  </head>
  <body>
  <div class="decomp">
  <div class="decomp-title">
    <h2>How Do We Use Decomposition in Computer Programming?</h2>
    </div>
    <div class="decomp-subtitles"> 
    <p>As a programmer, you will basically face the same problems each and every time you approach a coding assignment--namely, you will need to find out what the program is going to do and then figure out how you will go about building the solution. Decomposition will help you solve this problem.</p>
    <p>It's important to understand that decomposition doesn't stop at identifying the parts of a problem. You need to keep decomposing the problem until you arrive at a series of steps that cannot be broken down any further. Then, once you are done decomposing, you should be able to stick the components back together to make a complete program.</p>
    <p>When you have broken the problem down into a set of clear, easy-to-follow steps, the problem is fully decomposed. Decomposition to this degree also allows for delegation and any other programmer should be able to follow what needs to be done easily.</p>
    </div>
  
  
  
    <div class="decomp-example">
  
  
  
    <h3>Here's an Example</h3>
    <p>An example of this is writing, or creating a program for a piece of artwork made of squares.</p>
  
  
  
    <p>Let’s say you get asked to take this image and code it (using some code language).</p>
    <img src="/images/contents/decomp-computing-1.png" />
  
  
  
    <p>Taking this as it is would take a while to figure out how to code, and could get very confusing. It would be hard to work out and would take a lot of writing. So to make this problem easier we look to see if there are ways we can break it up into smaller parts, so then the code can come easier.</p>
  
  
  
    <p>Looking at that picture you might realize a pattern, and that you can fold it in half and it is the same thing on both sides. So you can break that in half like so.</p>
    <!-- Image decomposing steps could be inserted here -->
    <img src="/images/contents/decomp-computing-2.png" />
  
  
  
    <p>Looking at this it already seems a lot more manageable to code than the first picture, and you can just think of the first picture as two of these pictures side by side. So you can have one code that you have executed twice. However as you look at this you might realize we can decompose(break into smaller parts) it even more.</p>
    <img src="/images/contents/decomp-computing-3.png" />
    <p>This is half of the 2nd, and 1/4th of the original picture, and it is much easier to look at and understand.</p>
    <p>We can then break it down or decompose it even more, until it is just one small square. This one square can be coded and then copied to make the starting picture. </p>
    <img src="/images/contents/decomp-computing-4.png" />
  
  
  
    <p>Decomposing that picture into these smaller parts made it a lot easier to understand and a lot easier to code. You could even take this a step further and break it into the colors.</p>
  </div>
  <div class="decomp-you-try">
    <h3>You Try:</h3>
    <p>How could this art piece get decomposed/broken into smaller parts?</p>
    <img src="/images/contents/decomp-computing-5.png" />
    <p>Describe it in steps:</p>
    <ol>
      <li>1.</li>
      <li>2.</li>
      <li>3.</li>
      <li>4.</li>
      <li>5.</li>
    </ol>
    <p>Describe it here: <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeFLnSEMNKyp8VmEmC7FybbxiiAuFtbMquz5cLf_UoA91QO5A/viewform">Google Forms</a></p>
  
    </div>
  
    </div>
  
  
  </body>
  <style>
  .decomp p {
    color: black;
  }
  .decomp-title {
    font-weight: 700;
    font-size: 1.25em;
  }
  .decomp-subtitles p {
    padding: 10px 0;
  }
  
  .decomp a {
    text-decoration: underline;
  }
  
  
  
  .decomp-example h3 {
    font-weight: 600;
  }
  
  
  
  .decomp-example p {
    padding: 10px 0;
  }
  
  
  
  .decomp-you-try h3 {
    font-weight: 600;
  }
  
  
  
  .decomp-you-try p {
    padding: 10px 0;
  }
  
  
  
  .decomp-you-try ol {
    padding: 0 20px; 
  }
  
  
  
  img {
    width: 300px;
    height: auto;
    margin: auto;
    padding: 10px;
  }
  </style>
  </html>
  
  
  
  
  
              `,
            },
            {
              id: 5,
              topic: "Quiz",
              type: "quiz",
              points: 100,
            },
          ],
        },
        {
          id: 3,
          name: "Pattern Recognition",
          type: "pattern-recognition",
          points: 100,
          contents: [
            {
              id: 1,
              topic: "Introduction",
              points: 100,
              content: `
    <div class="pattern">
    <div style="width: 100%; height: auto">
    <img src="/images/contents/computation.png" style="width: 50%; height: auto; margin:auto"/>
    <p style="text-align: center; padding: 20px;">(Brackman et al., 2016)</p>
    </div>
    <div style="margin-top: 50px;">
    <h3 style="font-weight: 700">Purpose</h3>
    <p>Purpose: Pattern Recognition is another of the pillars of computational thinking. When we decompose a problem, we often come across patterns – similarities or shared characteristics – that can make the complex problem easier to solve. By the end of this section, you should be able to: </p>
    <ol>
      <li>Identify patterns across different problems that make them easier to solve
  </li>
      <li>Understand the patterns that occur in your everyday life and how they can make your actions more efficient</li>
      <li>Articulate the ways that computers can help humans solve problems by leveraging patterns in their coding</li>
    </ol>
  
  
  
    <p>You have actually already done a little bit of pattern recognition for this class! The last example problem for decomposition (the art work), you had to be able to recognize patterns to be able to do that. A lot of times you have a lot more practice with recognizing problems then you think you do!</p>
  </div>
  <style>
  .pattern p {
    color: black;
  }
  .video-intro-section {
    margin-top: 20px;
  }
  
  .video-intro {
    font-weight: 600;
  }
  
  </style>
              `,
            },
            {
              id: 2,
              topic: "Warm Up",
              points: 100,
              content: `
  <html>
  <head>
    <title>Warm Up</title>
  </head>
  <body>
  <div class="pattern">
  <div class="warm-up">
    <h2 class="title">Warm Up</h2>
    <p><a target="_blank" href="https://forms.gle/G1VtsGN7a3HYByuSA">Warm Up Form</a></p>
    </div>
  <div class="decomp-defn">
    <ul>
    <li>As you were looking for patterns in the seeding ideas activity, what process did you use? How did you go about finding the answer?</li>
    <li>Given what you know right now about computational thinking and decomposition, how do you think computers might use patterns to help solve problems?</li>
    </ul>
    </div>
  </div>
  </body>
  </html>
  
  
  
  <style>
  
  .pattern p {
    color: black;
  }
  
  .warm-up a {
    text-decoration: underline;
  }
  
  
  
  .warm-up p {
    padding: 10px 0;
  }
  .title {
    font-weight: 700;
    font-size: 1.25em;
  }
  
  
  
  .decomp-defn {
    margin: 20px 0;
  
  
  
  }
  
  
  
  .decomp-defn h2 {
    font-weight: 700;
    font-size: 1em;
  }
  
  
  
  .decomp-defn p {
    padding: 10px 0;
  }
  
  
  
  
  
  .decomp-defn ul {
    list-style-type: disc;
  }
  
  
  
  .decomp-why {
    margin-bottom: 20px;
  }
  
  
  
  .decomp-why h2 {
    font-weight: 700;
  }
  .decomp-why p {
    padding: 10px 0;
  }
  
  
  
  .decomp-example h3 {
    font-weight: 700;
  }
  
  
  
  .decomp-example a {
    text-decoration: underline;
  }
  .decomp-example p {
    padding: 10px 0;
  }
  </style>
              `,
            },
            {
              id: 3,
              topic: "Building Background Knowledge",
              points: 100,
              content: `
  
  
  
              <!DOCTYPE html>
  <html>
  <head>
    <title>Building Background Knowledge</title>
    <style>
    .pattern p {
    color: black;
  }
      /* Your CSS styles here */
      .title-section p {
        padding: 10px 0;
      }
  
  
  
      .title-section a {
        text-decoration: underline;
      }
  
  
  
      .title {
        font-weight: 700;
        font-size: 1.25em;
      }
  
  
  
  
  
      .pattern-defn {
        margin: 20px 0;
      }
      .pattern-defn h2 {
        font-weight: 700;
        font-size: 1em;
      }
      .pattern-defn p {
        padding: 10px 0;
      }
      .pattern-why {
        margin-bottom: 20px;
      }
      .pattern-why h2 {
        font-weight: 700;
      }
      .pattern-why p {
        padding: 10px 0;
      }
      .pattern-example h3 {
        font-weight: 700;
      }
      .pattern-example a {
        text-decoration: underline;
      }
      .pattern-example p {
        padding: 10px 0;
      }
  
  
  
      .us-flag-title {
        font-weight: 600;
      }
  
  
  
      .pattern-example img {
        width: 700px;
        height: auto;
        margin: auto;
        padding: 10px 0;
      }
  
      .youtube iframe {
        border-radius: 8px;
        width: 600px;
        height: 350px;
        margin: auto;
      }
    </style>
  </head>
  
  <body>
    <div class="pattern">
    <div class="title-section">
      <h2 class="title">Building Background Knowledge</h2>
      <p class="subtitle">The process of finding similarities across different ideas and problems is called pattern recognition.</p>
        <div style="display: flex; justify-content: center">
        <video controls width="700">
          <source src="https://work-learn-bucket.s3.amazonaws.com/Computational+Thinking_+Pattern+Recognition.mp4"
          type="video/mp4">
      </video>
    </div>
      <p>Watch until around 7:30 in the video.</p>
      </div>
      <div class="pattern-defn">
        <h2>What is Pattern Recognition?</h2>
        <p>Pattern Recognition is the process of looking across a problem’s parts to find similarities. We search for recurring elements in a problem to help group ideas and find a common solution more easily. Patterns are elements that share one or more similarities. In computer programming, patterns can reduce the complexity of a program and make the program more efficient. Patterns exist both between different problems and within a single problem!</p>
      </div>
      <div class="pattern-example">
        <h3>Example from real life:</h3>
        <p>If you need to go to the grocery store. Many people keep a list of things they have run out of. One way to grocery shop is to go in the order of the list, which means picking items up in the order you wrote them. (E.g., chicken soup, bananas, oregano, milk, apples). However, you might notice that grocery stores have a pattern. The produce is all in the same area, the canned goods are together, etc. So instead of picking up bananas (produce area), then oregano (in the spice aisle), then milk (in the dairy area), then apples (back to the produce area), you could get bananas and apples while you’re in the produce area. Picking up this pattern can shorten the amount of time you are in the store and make the process a lot simpler.</p>
        <p class="us-flag-title">U.S. Flag Example</p>
        <img src="/images/contents/us-flag.png" />
        <p>If we wanted to program a picture of the US Flag, you might notice that there are 50 stars and 13 stripes. We can notice the pattern of stars and stripes, and decompose the problem to create one star and one stripe. </p>
        <p>Then from there we can call the stars and stripes multiple times instead of creating a new code for each one. So instead of writing out a new code for each star and each stripe, we would repeat the code we made as many times as needed. Seeing the pattern of multiple stars and stripes can simplify how much code we have to write. </p>
        <!-- Incorporate the provided real-life example content -->
        <!-- You can add more content based on the provided examples -->
      </div>
      <div class="pattern-why"> 
        <h2>Why is Pattern Recognition Important?</h2>
        <p>Once a problem is decomposed, we still need to come up with solutions. However, if we try to solve every small problem we’ve broken down, we’re setting ourselves up for a lot of work. Finding similarities within and across problems means that we’re making our efforts in problem solving much more efficient. In computational thinking, patterns help you recognize what needs to be done to solve a problem. Patterns can also help you because if you notice a pattern you have seen before, it can be easier to solve again, using a similar solution.</p>
        <p>If we want computers to automate processes, then we also want them to be as efficient as possible. Computer coding is based upon patterns. By understanding the ways that patterns function, and by training ourselves to recognize patterns, we are able to code computers to do a lot of work very efficiently without having to repeat the code we input over and over again.</p>
      </div>
    
    </div>
  </body>
  </html>
  
  
  
  `,
            },
            {
              id: 4,
              topic: "Applying Idea in the Real World",
              points: 100,
              content: `
              <!DOCTYPE html>
  <html>
  <head>
    <title>Decomposition in the Real World</title>
  </head>
  <body>
  <div class="pattern">
  <div class="decomp-title"> 
    <h2>Applying Idea in the Real World</h2>
  </div>
  <div class="decomp-subtitle">
    <p>Here are some exercises from the real word we would like you to complete.</p>
  </div>
  <div class="decomp-exercise"> 
    <h3>Exercise One:</h3>
    <p>Everyday, we are faced with recognizing patterns, for example, whether an animal is a cat or a dog, whether they are friendly or unfriendly, whether or not we should approach and pet them. What are the patterns we notice that help us make these choices? Take a few moments to look at the pictures below. What patterns do you see across the images? Describe the patterns that help you determine which you want to approach and which to stay away from? If you had to draw a cat, what are the key components you would use in your drawing?  (All images open source from pixabay)</p>
    <p><a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdDVM9xSc6fVe9vwFyUzWE19JFTeEDFnvCY1IVB8tQcmm31vw/viewform?usp=sf_link">Exercise One</a></p>
    <div class="img-grid">
    <img src="/images/contents/animal1.png" />
    <img src="/images/contents/animal2.png" />
    <img src="/images/contents/animal3.png" />
    <img src="/images/contents/animal4.png" />
    </div> 
    </div>
  <div class="decomp-exercise">
    <h3>Exercise Two:</h3>
    <p>You are working for a company that needs to interpret a large amount of public data. Because you’re an expert in pattern recognition, they ask you to take a look first and help them determine what patterns you see to help them start making sense of the data provided. Take a look at the 
    <a target="_blank" href="https://www.google.com/publicdata/explore?ds=d5bncppjof8f9_&ctype=b&strail=false&nselm=s&met_x=sp_dyn_le00_in&scale_x=lin&ind_x=false&met_y=sp_dyn_tfrt_in&scale_y=lin&ind_y=false&met_s=sp_pop_totl&scale_s=lin&ind_s=false&dimp_c=country:region&ifdim=country&iconSize=0.5&uniSize=0.035#!ctype=b&strail=false&bcs=d&nselm=s&met_x=sp_dyn_le00_in&scale_x=lin&ind_x=false&met_y=sp_dyn_tfrt_in&scale_y=lin&ind_y=false&met_s=sp_pop_totl&scale_s=lin&ind_s=false&dimp_c=country:region&idim=country:AFG&ifdim=country&hl=en_US&dl=en_US&ind=false">Google public data</a> site on World Development Indicators and then answer the following questions.</p>
    <p><a target="_blank" href="https://youtu.be/AM6w_tUlIn4">Tutorial on Google Public Data</a></p>
    <p><a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdPxbN0mSLRbMsbRKMrKiFXXyhRyzKRv3TuziFLQ2BJWiM-jg/viewform">Exercise Two Link</a></p>
    <ul>
    <li>What kinds of information do you think this data can tell you? </li>
    <li>What patterns do you notice? What questions do these patterns raise? </li>
    <li>If you play with the indicators, what, if any patterns, do you notice? </li>
    <li>If you get stuck, what do you notice about the data that stops a pattern from occurring?</li>
    </ul>
  
  
  
    <div class="google-trends">
        <p><strong>Google Trends: </strong><a target="_blank" href="https://trends.google.com/trends/" >https://trends.google.com/trends/</a></p>
    </div>
  
  </div>
  
  </div>
  </body>
  <style>
  .pattern p {
    color: black;
  }
  .decomp-title {
    font-weight: 700;
    font-size: 1.25em;
  }
  
  
  
  .decomp-subtitle {
    padding: 10px 0;
  }
  
  
  
  .decomp-exercise h3 {
    font-weight: 600;
    margin-top: 20px;
  }
  
  
  
  .decomp-exercise a {
    text-decoration: underline;
  }
  
  
  
  .decomp-exercise p {
    padding: 10px 0;
  }
  
  
  
  .decomp-exercise img {
    width: 500px;
    height: auto;
    margin: auto;
    padding: 20px;
  }
  
  
  
  .img-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  
  
  
  
  
  </style>
  </html>
  
  
  
              `,
            },
            {
              id: 5,
              topic: "Pattern Recognition in Computer Programming",
              points: 100,
              content: `
             <!DOCTYPE html>
  <html>
  <head>
    <title>Pattern Recognition in Computer Programming</title>
  </head>
  <body>
  <div class="pattern">
  <div class="decomp-title">
    <h2>Pattern Recognition in Computer Programming</h2>
    </div>
    <div class="decomp-first-section"> 
    <h2>How Do We Use Pattern Recognition in Computer Programming?</h2>
    <p>As you learned before, as a programmer, you will basically face the same problems each and every time you approach a coding assignment--namely, you will need to find out what the program is going to do and then figure out how you will go about building the solution. Pattern Recognition will help you solve this problem by lowering the amount of steps you need to go through to come up with the solution.</p>
    <p>It's important to understand that pattern recognition takes place in two ways when you’re programming. First, patterns can occur within small parts of a problem, helping you to notice similarities within each step. (For example, if you are baking a cake, you might notice that there is a pattern with how you need to measure each ingredient before adding it to the mix.) Next, it can happen across problems. (Every time you bake, it’s important to know that ingredients need to be measured). </p>
    <p>Pattern Recognition within and across problems can make you more efficient as a programmer and it can help you to build the most efficient programs possible. </p>
    </div>
  
  
  
    <div class="decomp-example">
  
  
  
    <h3>Example 1:</h3>
    <p>Social media sites, like Facebook, often use patterns to compress our photos so that they are smaller to store online. Computers use pixels (small units of digital display) to store our images. Data compression for photos entails the computer looking at patterns in pixels and making those patterns smaller by assigning them a symbol (such as a number) rather than trying to store each individual colored pixel. For example:</p>
    <p class="color-p"><span><img src="/images/contents/color1.png" /></span> would become <img src="/images/contents/color2.png" /></p>
    
    <p>While each picture might have a different number of red, yellow, blue, or green pixels, the process of compression is the same for each image. There are two pattern recognition activities in compressing large amounts of data. The computer has to recognize the patterns within each picture, it also has to recognize the pattern of kinds of data in order to perform the same tasks across all of the pictures.</p>
    
    <h3>Example 2:</h3>
    <img src="/images/contents/pattern1.png" />
  
  
  
    <p>Remember this piece of artwork from the decomposition section. In decomposition we broke this picture down into smaller parts. What you might not have realized is that while doing that we were actively doing pattern recognition as well. Realizing that parts of this artwork is just a repetition of other parts is pattern recognition.</p>
    <p>Think about how pattern recognition would help you code this art. </p>
    <p>You might bring up that the more patterns we recognize the less coding we have to do. Coding each of those blocks individually at each location would be terrible. Looking at small part of this art:</p>
    <img src="/images/contents/pattern2.png" />
    <p>We realize that this part of the code is actually just repeated 3 other times in the picture. Meaning we could repeat this shape 4 times in 4 different locations rather than each tiny block individually. That is pattern recognition. Realizing that something is just repeated over again and using that to make the problem seem simpler.</p>
  </div>
  <div class="decomp-you-try">
    <h3>You Try:</h3>
    <p>Now that you know more about pattern recognition, I want you to try and make your own artwork with patterns in it.</p>
    <p>Go to this website: <a target="_blank" style="text-decoration: underline;" href="https://bricklayer.org/apps/grid_lite/grid.html">https://bricklayer.org/apps/grid_lite/grid.html</a></p>
    <p>Turn in a screenshot of your pattern.</p>
  </div>
  <div class="decomp-example">
    <h3>Example 3:</h3>
    <p>Here is an example of a code in the coding language python.</p>
    <p>Here is something that you code pretty easily in python.</p>
    <ul>
    <li>*</li>
    <li>**</li>
    <li>***</li>
    <li>****</li>
    <li>*****</li>
    </ul>
    <p>If you look at that shape you can most likely find the pattern in that shape. Each line adds an additional *, on the next line. You might even realize the next line will have 6 asterisks.</p>
    <p>Here is a code without realizing that pattern and just go by each line individually. </p>
    <img src="/images/contents/code1.png" />
    <p>The problem with this is what if we wanted to have 10 of these lines. We would have to write 10 lines of code. If we wanted to go up to 100 asterisks, it would take 100 lines of code. That would be a lot of typing. Realizing the pattern of each line gets 1 more asterisk than the line above is extremely important. We can simplify the code so that it will still output the correct answer but we can pick any number of lines we want. </p>
    <p>Instead, we can create a pattern, where all we need to know is how many asterisks we want, and tell the computer “start with 1 and go up to ___ asterisks” which is way easier than telling it one-by-one! In programming, that’s called a “for loop”. The details aren’t important - you’ll learn about for loops when you learn Python - but you can see how the code is written here. (You might not understand what the code means but you can see how much shorter it is).</p>
    <div class="code23">
    <img src="/images/contents/code2.png" />
    <img src="/images/contents/code3.png" />
    </div>
    <p>This new code gives the exact same output for wanting 5 rows, but we only need 3 lines of code to execute this, and this code also allows us to have any number of rows we want. Recognizing the pattern is what allowed us to make the code simplified.</p>
  
  
  
  </div>
  </div>
  
  
  
  </body>
  <style>
  
  .pattern p {
    color: black;
  }
  
  .code23 img {
    width: 600px;
    padding: 10px 0;
  }
  .color-p img {
    width: 200px;
  }
  .decomp-title {
    font-weight: 700;
    font-size: 1.25em;
  }
  .decomp-subtitles p {
    padding: 10px 0;
  }
  
  
  
  .decomp-example h3 {
    font-weight: 600;
  }
  
  
  
  .decomp-example p {
    padding: 10px 0;
  }
  
  
  
  .decomp-you-try h3 {
    font-weight: 600;
  }
  
  
  
  .decomp-you-try p {
    padding: 10px 0;
  }
  
  
  
  .decomp-you-try ol {
    padding: 0 20px; 
  }
  
  
  
  img {
    width: 300px;
    height: auto;
    margin: auto;
    padding: 10px;
  }
  </style>
  </html>
  
  
  
  
  
              `,
            },
            {
              id: 6,
              topic: "Quiz",
              type: "quiz",
              points: 100,
            },
          ],
        },
        {
          id: 4,
          name: "Abstraction",
          type: "abstraction",
          points: 100,
          contents: [
            {
              id: 1,
              topic: "Introduction",
              points: 100,
              content: `
    <div class="abstraction">
    <div style="width: 100%; height: auto">
    <img src="/images/contents/computation.png" style="width: 50%; height: auto; margin:auto"/>
    <p style="text-align: center; padding: 20px;">(Brackman et al., 2016)</p>
    </div>
    <div class="purpose" style="margin-top: 50px;">
    <h3 style="font-weight: 700">Purpose</h3>
    <p>Abstraction involves determining what parts of a problem are important and filtering out those that are not. We want to focus on the big idea or unit rather than each individual component. When we engage in abstraction, we take away details. We use abstraction to take algorithms and think of them as whole idea rather than each individual step, so that the code is easier to decipher.</p>
    <p>Abstraction helps us make problems easier to solve. Looking at the main idea of what an algorithm or program does will make it easier to understand than to look at each small step. From there, we can also create a representation or model of the problem we’re trying to solve. This is called data representation. By the end of this section, you should be able to: </p>
    <ul>
      <li>Look at a problem and decide what information is important</li>
      <li>Decide how to represent or name different parts of a problem</li>
      <li>Begin to recognize which steps to take first to solve problems efficiently</li>
    </ul>
    </div>
  </div>
  <style>
  .abstraction p {
    color: black;
  }
  .purpose * {
    padding: 10px 0;
  }
  .purpose ul {
    list-style-type: disc;
    padding: 0 20px;
  }
  .video-intro-section {
    margin-top: 20px;
  }
  
  
  
  .video-intro {
    font-weight: 600;
  }
  
  </style>
              `,
            },
            {
              id: 2,
              topic: "Thinking about Abstraction",
              points: 100,
              content: `
  <html>
  <head>
    <title>Thinking about Abstraction</title>
  </head>
  <body>
  <div class="abstraction">
  <div>
    <h2 class="title">Thinking about Abstraction</h2>
    <p>One way to make sense of this idea is to think about abstract art. Realistic art, like a photograph, has all of the details (image on the left). But a piece of art that is more abstract does not have all the details (image on the right). </p>
    <p>Look at some of these pieces of artwork and then look at the abstracted version. What are some differences that you notice? What details are removed? What details are kept? For example, in the Mona Lisa, the general shapes are kept - you can see her eyes, nose, mouth, and hair. But the details such as shading are not - for example, in the image on the right, the cheeks are all one color, rather than shaded. </p>
    <div class="monalisa">
    <img src="/images/contents/monalisa1.png" />
    <img src="/images/contents/monalisa2.png" />
    
    </div>
    <p>What details are kept or removed in the following images?</p>
    <div class="vangogh">
    <img src="/images/contents/vangogh1.png" />
    <img src="/images/contents/vangogh2.png" />
    </div>
    <p>Answer it here: <a target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSetcjjKU91oG2e8JiTEZnF-X_JRj47H70JwpOdZDKC9C9otKw/viewform">Google Forms</a></p>
  </div>
  
  
  </body>
  </html>
  
  
  
  <style>
  
  .abstraction p {
    color: black;
  }
  
  .abstraction a {
    text-decoration: underline;
  }
  
  .monalisa, .vangogh {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 50px;
  }
  
  
  
  .monalisa img {
    width: 300px;
    height: auto;
  }
  
  
  
  .vangogh {
    grid-gap: 10px;
  }
  
  
  
  .vangogh img {
    width: 100%;
    height: auto;
  }
  .title {
    font-weight: 700;
    font-size: 1.25em;
  }
  
  
  
  .decomp-defn {
    margin: 20px 0;
  
  
  
  }
  
  
  
  .decomp-defn h2 {
    font-weight: 700;
    font-size: 1em;
  }
  
  
  
  .decomp-defn p {
    padding: 10px 0;
  }
  
  
  
  .decomp-why {
    margin-bottom: 20px;
  }
  
  
  
  .decomp-why h2 {
    font-weight: 700;
  }
  .decomp-why p {
    padding: 10px 0;
  }
  
  
  
  .decomp-example h3 {
    font-weight: 700;
  }
  
  
  
  .decomp-example a {
    text-decoration: underline;
  }
  .decomp-example p {
    padding: 10px 0;
  }
  </style>
  `,
            },
  
            {
              id: 3,
              topic: "Video Introduction",
              points: 100,
              content: `
                <!DOCTYPE html>
                <html>
                <head>
                <title>Video Introduction</title>
                </head>
                <body>
                <div class="abstraction">
                <div class="decomp-title"> 
                <h2>Video Introduction</h2>
                </div>
                  <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Abstraction+-+Computational+Thinking.mp4"
                    type="video/mp4">
                </video>
              </div>
                </div>
                </body>
  <style>
  .abstraction p {
    color: black;
  }
  
  .decomp-title {
    font-weight: 700;
    font-size: 1.25em;
  }
  
  .youtube iframe {
      border-radius: 8px;
      width: 600px;
      height: 350px;
      margin: 20px auto;
  }
  
  p a {
    text-decoration: underline;
  }
  
  
  
  
  
  </style>
  </html>
                
                `,
            },
            {
              id: 4,
              topic: "What is Abstraction?",
              points: 100,
              content: `
                <!DOCTYPE html>
                <html>
                <head>
                <title>What is Abstraction?</title>
                </head>
                <body>
                <div class="abstraction">
                <div class="decomp-title">
                <h2>What is Abstraction?</h2>
                </div>
                <div class="decomp-subtitles"> 
                <p>Abstraction is focusing on details that matter and ignoring the unnecessary details while solving a problem. This helps make a program more efficient and effective.</p>
                <p>It's important to understand that decomposition doesn't stop at identifying the parts of a problem. You need to keep decomposing the problem until you arrive at a series of steps that cannot be broken down any further. Then, once you are done decomposing, you should be able to stick the components back together to make a complete program.</p>
                <p>An easier way to think about abstraction is that it is simplification. We are simplifying the problem to make it easier to look at and understand. If you think about the pictures above, the detailed one would be more difficult to copy than the simple one. </p>
                </div>
  
  
  
                <div class="decomp-why">
                <h2>Why is Abstraction Important?</h2>
                <p>Abstraction is important because it helps us to simplify problems by removing unnecessary information. Abstraction is the process of creating an easier to understand representation of a complex system. Abstraction is also important because it lets us think of algorithms as individual units so that we do not have to think of each portion of the algorithm.</p>
                <p>Think back to the decomposition section. In decomposition, we took an algorithm, like your morning routine, and broke it into smaller and smaller parts. Abstraction is the opposite - it’s when we take step-by-step instructions and think about them as a single task or algorithm. For example, we decomposed “take the bus to the library” into a set of instructions (an algorithm). If we had the set of instructions, we could abstract those instructions into a single thing called “take the bus to the library”.</p>
                <p>This is important in programming, because a lot of time we want to split up a bigger program into parts (decomposition) and be able to just think of each of those parts are a single thing. Each “thing” is an abstraction. In the algorithms section, you learned about flowcharts. Each box in a flowchart is an abstraction of a set of instructions.</p>
                </div>
                </div>
              
  </body>
  <style>
  .abstraction p {
    color: black;
  }
  h2 {
    font-weight: 700;
    font-size: 1.25em;
  }
  .decomp-subtitles p {
    padding: 10px 0;
  }
  
  
  
  .decomp-why p {
    padding: 10px 0;
  }
  
  
  
  img {
    width: 300px;
    height: auto;
    margin: auto;
    padding: 10px;
  }
  </style>
  </html>
              `,
            },
            {
              id: 5,
              topic: "Applying Ideas in the Real World",
              points: 100,
              content: `
                <!DOCTYPE html>
                <html>
                <head>
                <title>Applying Ideas in the Real World</title>
                </head>
                <body>
                <div class="abstraction">
                <div class="decomp-title">
                <h2>Applying Ideas in the Real World</h2>
                </div>
                <div class="decomp-example"> 
                <h3>Exercise One:</h3>
                <p>You are making peanut butter and jelly for lunch. Write an extremely detailed version of making peanut butter and jelly. Think of if you were describing it to a toddler for the first time ever. Then create a simplified/abstracted version that an adult would understand, leaving only key details.</p>
                <p>Detailed Version: ______________________</p>
                <p>Abstraction: ______________________</p>
                <p><a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfkVcTJkJD0-f1y89PDMMBvJK-WOVNEWfPMQZv2jH_yI1JoDg/viewform">Google Forms</a></p>
  
                </div>   
                
                <div class="decomp-example"> 
                <h3>Exercise Two:</h3>
                <p> In the space below, describe your ideal car. Next, explain how you would describe this car to a mechanic. What would you say about this car to a friend who loves to take long road trips? How would you describe your car to a child? (Each of these descriptions is abstraction. You’re simplifying your description, leaving out some information, because the information that’s important changes depending on the purpose for your description.)</p>
                <p><a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfn8YdPcn8FAEi7xNuPfuH5ksjtsmWpWHldlajoFg8xueD6qA/viewform?authuser=0">Google Forms</a></p>
                </div>
                
                <div class="decomp-example"> 
                <h3>Exercise Three:</h3>
                <p>In the video you watched about abstraction, the narrator discusses the power of maps because every map is built with a purpose in mind. Think of your daily life. What kinds of maps are useful to you? Design a map that provides an abstraction of your general week day. First, choose the purpose of the map; what information would someone need to complete the kind of day you generally have during the week? Next, decide what data you need to include. Finally, sketch a map either on paper or with a digital tool and upload a screenshot or picture of it below. </p>
                <p><a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSf414zzfa_cWPsbVtTnwiTkWDJuYZLLlIEqIPyvjv9bVFKGmw/viewform?usp=sf_link">Google Forms</a></p>
                <ul>
                  <li>What was the purpose of your map?</li>
                  <li>What data did you choose to include? What do you leave out?</li>
                  <li>How does this map act as an abstraction of your typical week day?</li>
                  <li>What are the differences between the maps?</li>
                  <li>What purpose might these different maps serve?</li>
                </ul>
                <img src="/images/contents/map4.png" />
                </div>
                </div>
  
  
  
  </body>
  <style>
  
  .abstraction p {
    color: black;
  }
  
  .decomp-example a {
    text-decoration: underline;
  }
  
  
  
  .decomp-example img {
    width: 500px;
    margin: auto;
  }
  
  
  
  .decomp-example * {
    padding: 10px 0;
  }
  
  
  
  .decomp-example h3 {
    font-weight: 600;
  
  
  
  }
  .decomp-example p {
    padding: 10px 0;
  }
  h2 {
    font-weight: 700;
    font-size: 1.25em;
  }
  .decomp-subtitles p {
    padding: 10px 0;
  }
  
  
  
  .decomp-why p {
    padding: 10px 0;
  }
  
  
  
  img {
    width: 300px;
    height: auto;
    margin: auto;
    padding: 10px;
  }
  </style>
  </html>
              `,
            },
            {
              id: 6,
              topic: "Abstraction in Computer Programming",
              points: 100,
              content: `
                <!DOCTYPE html>
                <html>
                <head>
                <title>Abstraction in Computer Programming</title>
                </head>
                <body>
                <div class="abstraction">
                <div class="decomp-title">
                <h2>Abstraction in Computer Programming</h2>
                <p>Start by watching this video about abstraction (stick with it if it gets confusing!):</p>
                <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/What+Is+Abstraction+in+Computer+Science.mp4"
                    type="video/mp4">
                </video>
              </div>
               </div>
                <div class="decomp-how">
                <h2>How Do We Use Abstraction in Computer Programming?</h2>
                <p>As a programmer, you will basically face the same problems each and every time you approach a coding assignment--namely, you will need to find out what the program is going to do and then figure out how you will go about building the solution. Abstraction will help you solve this problem.</p>
                <p>Abstraction allows programmers to hide all but the important data in order to make problems simpler and increase the efficiency of their programs. Abstraction allows us to create a representation or model using only the most important data. The programmer tries to make sure that the models they create are clearly named and include all of the necessary information to solve the problem they were designed to solve. This means that every time the computer runs into a similar problem, it has a program that knows exactly what information to pay attention to.</p>
                </div>
                <div class="decomp-example"> 
                <h3>Exercise One:</h3>
                <p>A good example of abstraction in programming is to look at a database that contains a lot of information. Think about an online bookseller that sells a lot of digital books. People will want to be able to find books using all kinds of different information, they might search for the author, title, ISBN, or genre. They also might want to know the reviews others have given the book or how much the book costs. The online store might also have the size, color of the books, and length of the books, but this information is not as relevant for people searching for a new book to buy, so it would not be included in the model abstracted from the database. </p>
                <p>Remember, when you’re engaging in abstraction to create computer programs, you’ll want to pay attention to these steps: </p>
                <ul>
                  <li>Identify the purpose or problem you’re trying to solve</li>
                  <li>Collect the most relevant and important data</li>
                  <li>Understand the relationships between the data</li>
                  <li>Identify patterns within the data</li>
                  <li>Finally, build a representation or model of a problem to make a solution more easily recognizable</li>
                </ul>
                </div>
                
                <div class="decomp-example"> 
                <h3>Exercise Two:</h3>
                <p>A second example of abstraction in coding is something that might often not be thought of as abstraction. You are given the task of needing to multiply 2 by 3. That is pretty simple and can easily be done. However to create an abstracted version would be to make a program that can multiply any two numbers. This is so that if you even need to call the code again but with different numbers you have it ready and can just use the code you already created. </p>
                <p>It is getting rid of the unnecessary details of what the numbers themselves are and focusing solely on what the process is. We generalized the problem.</p>
                <h3>Video</h3>
                <p>This video does a great job about talking about abstraction, using a real word example, as well as showing abstraction in a coding language.</p>
                <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Abstraction+explained+with+real-life+examples+and+code!+-+C%2B%2B+OOP+Course.mp4"
                    type="video/mp4">
                </video>
              </div>
                </div>
                </div>
                </body>
  <style>
  .abstraction p {
    color: black;
  }
  
  .youtube {
  }
  .youtube iframe {
    border-radius: 8px;
    width: 600px;
    height: 350px;
    margin: auto;
  } 
    .decomp-title *, .decomp-how * {
    padding: 10px 0;
  }
  ul  {
    list-style-type: disc;
    margin: 0 20px;
  }
  
  
  
  .decomp-example a {
    text-decoration: underline;
  }
  
  
  
  .decomp-example img {
    width: 500px;
    margin: auto;
  }
  
  
  
  .decomp-example * {
    padding: 10px 0;
  }
  
  
  
  .decomp-example h3 {
    font-weight: 600;
  
  
  
  }
  .decomp-example p {
    padding: 10px 0;
  }
  h2 {
    font-weight: 700;
    font-size: 1.25em;
  }
  .decomp-subtitles p {
    padding: 10px 0;
  }
  
  
  
  .decomp-why p {
    padding: 10px 0;
  }
  
  
  
  img {
    width: 300px;
    height: auto;
    margin: auto;
    padding: 10px;
  }
  </style>
  </html>
              `,
            },
            {
              id: 7,
              topic: "Quiz",
              type: "quiz",
              points: 100,
            },
          ],
        },
        {
          id: 5,
          name: "Algorithms",
          type: "algorithms",
          points: 100,
          contents: [
            {
              id: 1,
              topic: "Introduction",
              points: 100,
              content: `
    <div class="algorithm">
    <div style="width: 100%; height: auto">
    <img src="/images/contents/computation.png" style="width: 50%; height: auto; margin:auto"/>
    <p style="text-align: center; padding: 20px;">(Brackman et al., 2016)</p>
    </div>
    <div class="purpose" style="margin-top: 50px;">
    <h3 style="font-weight: 700">Purpose</h3>
    <p>Algorithms and Algorithmic Thinking is the third pillar of our introduction to computational thinking. Algorithms are the starting point for writing computer programs because they help to express step-by-step instructions for how to solve the problem the program is designed to address. Algorithms give the computer directions on how to solve a problem, which include the steps a computer should take, and the order in which those steps should be taken. By the end of this section, you should be able to: </p>
    <ul>
      <li>Express an algorithm in everyday language and flowcharts</li>
      <li>Describe how the order of step-by-step instructions matters to a computer program</li>
      <li>Understand how to translate simple instructions into a flowchart</li>
    </ul>
    </div>
    </div>
  <style>
  .algorithm p {
    color: black;
  }
  .purpose * {
    padding: 10px 0;
  }
  .video-intro-section {
    margin-top: 20px;
  }
  .video-intro {
    font-weight: 600;
  }
  ul {
    list-style-type: disc;
    margin: 0 20px;
  }
  </style>
              `,
            },
            {
              id: 2,
              topic: "Exploring Algorithms",
              points: 100,
              content: `
  <html>
  <head>
    <title>Exploring Algorithms</title>
  </head>
  <body>
  <div class="algorithm">
  <div class="explore-alg">
    <h2 class="title">Exploring Algorithms</h2>
    <p>In order to explore how algorithms can give a computer step-by-step instructions, let’s start by playing around with LightBot (<a target="_blank" style="text-decoration: underline;" href="https://www.lightbot.lu/">https://www.lightbot.lu/</a>). LightBot is a game that allows you to sequence instructions with blocks of code in order to move a character around the screen. Begin by reading the instructions in the help section, then try playing the first five levels of LightBot (level 0 - level 4). Upload a screenshot of your medals into the Google Form and answer the discussion questions before moving on to the next set of activities. (See below for step-by-step instructions to get started.)
  </p>
  </div>
  <div class="steps"> 
  <ul>
  <li>1. Go to <a style="text-decoration: underline;" href="https://www.lightbot.lu">https://www.lightbot.lu</a><img src="/images/contents/alg1.png" /></li>
  <li>2. Click on the “Help” button in the bottom right hand corner to get instructions on how to play the game. <img src="/images/contents/alg2.png" /> </li>
  <li>3. Click on each of the titles and read the instructions to understand how each of the coding buttons functions within the game. <img src="/images/contents/alg3.png" /> </li>
  <li>4. When you feel you understand the instructions, click back to the main menu and then click start.</li>
  <li>5. Play through level 4, then take a screenshot of your progress and upload it to this <a target="_blank" style="text-decoration: underline;" href="https://forms.gle/zQHMkafs1oCHY5gz5">Google Form</a>. (See a sample screenshot below.) Reflect on the questions in the form before moving onto the next activity. You’ll come back to LightBot in a bit to see if you can continue making progress and improve your score. ***Don’t worry if you’re not yet successful in completing the game, remember, this is just a place to play around with ideas. <img src="/images/contents/alg4.png" />
  </li>
  </ul>
  </div>
  </div>
  
  
  
  </body>
  </html>
  
  
  
  <style>
  .algorithm p {
    color: black;
  }
  .explore-alg * {
    padding: 10px 0;
  }
  img {
    width: 500px;
    height: auto;
  }
  .title {
    font-weight: 700;
    font-size: 1.25em;
  }
  
  .steps ul li {
    padding: 10px 0;
  }
  
  </style>
              `,
            },
            {
              id: 3,
              topic: "Building Background Knowledge",
              points: 100,
              content: `
  <html>
  <head>
    <title>Building Background Knowledge</title>
  </head>
  <body>
  <div class="algorithm">
  <div class="title-section">
    <h2 class="title">Building Background Knowledge</h2>
    <p>As you keep finding out, computational thinking helps us to solve open-ended problems. Algorithms help us to solve these problems by giving us a way to tell the computer what to do and in what order to execute those steps. Algorithms allow computers, smartphones, websites, and even cars to function.</p>
    </div>
  <div class="lightbot-list">
  <p>In Lightbot, you were building an algorithm in each level. </p>
  <ul>
  <li>In level 0, the algorithm was to move forward twice then light</li>
  <li>In level 1, the algorithm was to move forward 4 times, turn left and then light, and then repeat that process 2 more times</li>
  <li>In level 2, the algorithm was to turn to the left or right, move forward, turn in the opposite way, go forward 5 times, turn in the same directions you did before, and then move forward once and light it</li>
  <li>In level 3, the algorithm was to walk forward, jump twice, move forward once and then light the block</li>
  <li>In level 4, the algorithm was to walk forward, jump twice, walk forward, turn right, walk forward five times and then light the block</li>
  </ul>
  <p>As you can see in each level you gave the robot specific instructions to move to reach the blue colored blocks. You had to be extremely precise on the directions so that you could complete the level. This was building an algorithm. Congratulations!</p>
    </div>
    </div>
  </body>
  </html>
  
  
  
  <style>
  .algorithm p {
    color: black;
  }
  .title-section *, .lightbot-list * {
    padding: 10px 0;
  }
  
  
  
  ul {
    list-style-type: disc;
    margin: 0 20px;
  }
  
  
  .title {
    font-weight: 700;
    font-size: 1.25em;
  }
  
  
  
  .decomp-defn {
    margin: 20px 0;
  
  
  
  }
  
  
  
  .decomp-defn h2 {
    font-weight: 700;
    font-size: 1em;
  }
  
  
  
  .decomp-defn p {
    padding: 10px 0;
  }
  
  
  
  .decomp-why {
    margin-bottom: 20px;
  }
  
  
  
  .decomp-why h2 {
    font-weight: 700;
  }
  .decomp-why p {
    padding: 10px 0;
  }
  
  
  
  .decomp-example h3 {
    font-weight: 700;
  }
  
  
  
  .decomp-example a {
    text-decoration: underline;
  }
  .decomp-example p {
    padding: 10px 0;
  }
  </style>
              `,
            },
            {
              id: 4,
              topic: "Applying Ideas in the Real World",
              points: 100,
              content: `
             <!DOCTYPE html>
  <html>
  <head>
    <title>Applying Ideas in the Real World</title>
  </head>
  <body>
  <div class="algorithm">
  <div class="decomp-title">
    <h2>Applying Ideas in the Real World</h2>
    </div>
    <div class="alg-example">
    <h3>Exercise One:</h3>
    <ul>
    <li>
    1.  In the video you watched about algorithms, the narrator discussed the algorithm for making pasta. Take a look at the choice below and identify which of the instructions are in the correct order for making spaghetti.
    <ul class="sub-ul">
              <li>
              a) 1) Boil water; 2) Put water in the pot; 3) Cook the spaghetti; 4) Add the sauce; 5) Serve; 6) Eat the pasta
            </li>
  <li>b) 1) Put water in the pot; 2) Boil the water; 3) Add the noodles; 4) Cook the pasta; 5) drain the water; 6) Serve the pasta
  </li>
  <li>c) 1) Boil the water; 2) Add the noodles; 3) Add the sauce; 4) Cook the pasta; 5) Eat the pasta; 6) Clean the dishes
  </li>
  <li>d) 1) Put the water in the pot; 2) Cook the spaghetti; 3) Add the noodles; 4) Add the sauce; 5) Drain the water; 6) Serve the pasta 
  </li>
    </ul>
    </li>
    <li>
    2. Using Google Draw or a piece of paper, illustrate the algorithm you chose as a flowchart, then compare your answer to ours. Were you able to accurately represent your algorithm? (Hint: Remember that computers will always need a “start” and “stop” indicator)
    <p> Answer: </p>
    <img src="/images/contents/diagram3.png" />
    </li>
    <li>
    3.  <strong>Reflect</strong>: What do you think might happen if you had two different kinds of noodles? How could you create a flowchart that offered a user multiple options for how to cook different kinds of pasta? 
    </li>
    </ul>
    </div>
    <div class="alg-example">
    <h3>Exercise Two:</h3>
    <p>Now that you’ve had some practice representing your own algorithms, let’s go back to LightBot and try some of the harder levels. As you play levels 5-10, think about the algorithms you’re building to move the bot. When you finish levels 5-9, upload a screenshot of your progress on the home screen, then use the following prompts to push your thinking.</p>
    <ul>
    <li>1. Choose one level that you struggled with in the LightBot game and use the space below to explain your struggle and how you worked around the problem to solve the level.</li>
    <li>2. Choose one level to replay and upload a screenshot of your initial code here. </li>
    <li>3. Next, play the level again and try to solve the problem more efficiently. Take a screenshot of your final attempt to show your progress.</li>
    <li>4. In the space below, explain how decomposition, pattern recognition, and algorithms all work together to help you solve the LightBot challenges. If there are any points you’re continuing to struggle with, see if you can come up with solutions as you write your thoughts here. </li>
    </ul>  
    </div>
    <div class="alg-example">
      <h3>Exercise Three:</h3>
      <p><a target="_blank" href="https://thewordsearch.com/hangman/">https://thewordsearch.com/hangman/</a></p>
      <p>Click on this link and play a game of hangman.</p>
      <p>Hangman is a code that can easily be made once you understand algorithms. Although you have not learned any coding yet, you can still think of how this algorithm might look like in the world of a flow chart. Provided below are a list of all instructions in a randomized order and the flowchart with instructions.</p>
      <p>Match the instructions to the correct place on the flow chart. (Match the number to the letter)</p>
      <div class="diagram-grid">
      <img src="/images/contents/diagram4.png" />
      <ul>
      <li>1) Display number of dashes 1 per letter in word </li>
      <li>2) Select word from dictionary </li>
      <li>3) Is the word complete? </li>
      <li>4) Get input = letter </li>
      <li>5) Yes - put letter in place of dash </li>
      <li>6) Add part to hangman and then go back to step 4 </li>
      <li>7) Count letters in word </li>
      <li>8) Yes: YOU WIN </li>
      <li>9) Is letter in word? </li>
      </ul>
      </div>
  
  
    </div>
  
  </div>
  
  </body>
  <style>
  .algorithm p {
    color: black;
  }
  .sub-ul {
    margin: 10px 20px;
  }
  
  .diagram-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  
  
  
  .diagram-grid ul {
    margin: 50px 0;
  }
  .decomp-title {
    font-weight: 700;
    font-size: 1.25em;
  }
  .decomp-subtitles p {
    padding: 10px 0;
  }
  
  .alg-example * {
    padding: 10px 0;
  }
  
  .alg-example h3 {
    font-weight: 600;
  }
  
  .alg-example a {
    text-decoration: underline;
  }
  
  img {
    width: 300px;
    height: auto;
    margin: auto;
    padding: 10px;
  }
  </style>
  </html>
  
  
  
  
  
              `,
            },
  
            {
              id: 5,
              topic: "Algorithms in Computer Programming",
              points: 100,
              content: `
             <!DOCTYPE html>
  <html>
  <head>
    <title>Algorithms in Computer Programming</title>
  </head>
  <body>
  <div class="algorithm">
  <div class="decomp-title">
    <h2>Algorithms in Computer Programming</h2>
    </div>
    <div class="alg-example">
    <h3>How Do We Use Algorithms in Computer Programming?</h3>
    <p>Algorithms are the foundation of computer programming because they allow computers to make  decisions. They are like the blueprint that tells a computer what to do when faced with a problem. An algorithm improves the efficiency of a computer program by finding the best possible ways to solve problems. This means that your programs will be accurate and produce the very best results.</p>
  
  
  
  <p>Language is extremely important when it comes to computer programming, and that is why having clear and precise algorithms are so important. Computers are fundamentally quite dumb. They will only do exactly what you tell them to, in the language they understand. Also there are many different computer programming languages, but they all still have algorithms in them even if the actual language is different.</p>
  <p>Algorithms are also important because they ensure that a program consumes the least amount of memory possible. As you progress through the course, you’ll find that there are many different kinds of algorithms. Choosing the right algorithm can ensure that your program runs exactly the way you envision. </p>
  <div class="nestedif">
  <p class="example">Example from coding: 
  <img src="/images/contents/nested-if.png" />
  <p>Algorithms are the foundation of computer programming because they allow computers to make  decisions. They are like the blueprint that tells a computer what to do when faced with a problem. An algorithm improves the efficiency of a computer program by finding the best possible ways to solve problems. This means that your programs will be accurate and produce the very best results.</p>
  <p>Language is extremely important when it comes to computer programming, and that is why having clear and precise algorithms are so important. Computers are fundamentally quite dumb. They will only do exactly what you tell them to, in the language they understand. Also there are many different computer programming languages, but they all still have algorithms in them even if the actual language is different.</p>
  <p>Algorithms are also important because they ensure that a program consumes the least amount of memory possible. As you progress through the course, you’ll find that there are many different kinds of algorithms. Choosing the right algorithm can ensure that your program runs exactly the way you envision. </p>
  <p class="example">Example from coding: </p>
  <p>This might look like a lot of random words, but what you are looking at is an algorithm in the coding language of python. This code is an algorithm to output a letter grade based on the input of a percentage. </p>
  <p>This code is saying: </p>
  <p>1. Give an input score
  <ul id="gradeList">
      <li>a. If score is greater than or equal to 90
        <ul>
          <li>i. Print A (letter grade is A)</li>
        </ul>
      </li>
      <li>b. If score is not move on
        <ul>
          <li>i. If score is greater than or equal to 80
            <ul>
              <li>1. Print B</li>
            </ul>
          </li>
          <li>ii. If not move on
            <ul>
              <li>1. If score is greater than or equal to 70 
                <ul>
                  <li>a. Print C</li>
                </ul>
              </li>
              <li>2. If not move on
                <ul>
                  <li>a. If score is greater than or equal to 60
                    <ul>
                      <li>i. Print D</li>
                    </ul>
                  </li>
                  <li>b. If not print F</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <p>A flow chart of this might look like (marks = score).</p>
    <img src="/images/contents/nested-diagram.png" />
    <div class="watch-video">
      <h3>Watch this video: </h3>
      <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/2015e-patrick-lin-cars-002-b9d824aa-d5f1-49a5-a9b2-5000k.mp4"
                    type="video/mp4">
                </video>
              </div>
      <p>As the video illustrates, learning algorithmic thinking is important because it allows you to navigate the very real complications of the ways that computers integrate into our daily lives.</p>
      <p>Remember, all of the pillars of computational thinking go into helping you find the best algorithm possible to solve a problem. As you move through the rest of this course, continue to think about the ways that technology and algorithms play a role in your everyday life. </p>
    </div>
  
  
  
  </div>
  
  </div>
  
  </body>
  <style>
  .algorithm p {
    color: black;
  }
  .youtube iframe {
    border-radius: 8px;
    width: 600px;
    height: 350px;
    margin: auto;
  }
  
  
  .diagram-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  
  
  
  .diagram-grid ul {
    margin: 50px 0;
  }
  .decomp-title {
    font-weight: 700;
    font-size: 1.25em;
  }
  .decomp-subtitles p {
    padding: 10px 0;
  }
  
  
  
  .alg-example h3 {
    font-weight: 600;
    margin-top: 20px;
  }
  
  
  
  .alg-example p {
    padding: 10px 0;
  }
  
  
  
  .decomp-you-try h3 {
    font-weight: 600;
  }
  
  
  
  .decomp-you-try p {
    padding: 10px 0;
  }
  
  
  
  .decomp-you-try ol {
    padding: 0 20px; 
  }
  
  
  
  img {
    width: 300px;
    height: auto;
    margin: auto;
    padding: 10px;
  }
  
  
  
  ul, li {
    margin: 0;
    padding: 0;
  }
  
  
  
  /* Apply indentation for nested lists */
  ul#gradeList { 
    margin: 5px 30px;
  }
  ul {
    list-style-type: none;
  }
  
  
  
  ul#gradeList ul {
    margin-left: 20px; /* Adjust the indentation as needed */
  }
  
  ul#gradeList ul ul {
    margin-left: 40px; /* Nested indentation */
  }
  
  /* Optional: Style list items */
  ul#gradeList li, ul#gradeList ul li,  ul#gradeList ul ul li  {
    margin-bottom: 5px; /* Adjust spacing between list items */
  }
  
  img {
    width: 500px; 
    height: auto;
  }
  
  .watch-video *  {
    padding: 10px 0;
  }
  
  .watch-video a {
    text-decoration: underline;
  }
  .watch-video h3 {
    font-weight: 600;
  }
  </style>
  </html>
              `,
            },
            {
              id: 6,
              topic: "Quiz",
              type: "quiz",
              points: 100,
            },
          ],
        },
        {
          id: 6,
          name: "Review Your Knowledge",
          type: "review",
          contents: [
            {
              id: 1,
              topic: "Quiz",
              type: "quiz",
              points: 100,
            },
            {
              id: 2,
              topic: "Qualtrics Survey",
              author: "Hollie Rosser",
              points: 100,
              content: `
                <p style="margin-top:20px;">Completing this survey is worth $5.</p>
                <a target="_blank"  style='text-decoration: underline' href='https://unomaha.az1.qualtrics.com/jfe/form/SV_6iomnRh5EwVwHn8' alt='qualtrics survey'>Please complete this Qualtrics Survey</a>
                `,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      topicName: "Unit 2: Professional Skills",
      subTopics: [
        {
          id: 1,
          name: "Cover Letter Practice",
          type: "intro",
          contents: [
            {
              id: 1,
              topic: "Introduction to Write a Cover Letter for a Job or Career Change",
              type: "content",
              content: `
          <body>
            <h2>Introduction to Write a Cover Letter for a Job or Career Change</h2><br>
            <video controls width="700">
                  <source src="https://work-learn-bucket.s3.amazonaws.com/Unit%3A6-How+to+Write+a+Cover+Letter/Introduction+to+Write+a+Cover+Letter+for+a+Job+or+Career+Change.mp4"
                  type="video/mp4">
              </video>
              </body>
        </div>`,
            },
            {
              id: 2,
              topic: "Research the Job and Company",
              type: "content",
              content:`
              <body>
                <h2>Research the Job and Company</h2><br>
                <video controls width="700">
                      <source src="https://work-learn-bucket.s3.amazonaws.com/Unit%3A6-How+to+Write+a+Cover+Letter/Research+job+and+company.mp4"
                      type="video/mp4">
                  </video>
                  </body>`,
            },
            {
              id: 3,
              topic: "Start Your Letter",
              content: `
              <body>
                <h2>Start Your Letter</h2><br>
                <video controls width="700">
                      <source src="https://work-learn-bucket.s3.amazonaws.com/Unit%3A6-How+to+Write+a+Cover+Letter/Start+Your+Letter.mp4"
                      type="video/mp4">
                  </video>
                  </body>`,
            },
            {
              id: 4,
              topic: "Write Your First Paragraph",
              content: `
              <body>
                    <h2>Write Your First Paragraph</h2><br>
                    <video controls width="700">
                          <source src="https://work-learn-bucket.s3.amazonaws.com/Unit%3A6-How+to+Write+a+Cover+Letter/Write+Your+First+Paragraph.mp4"
                          type="video/mp4">
                      </video>
                      </body>`,
            },
            {
              id: 5,
              topic: "Write Your Second Paragraph",
              content: `
              <body>
                    <h2>Write Your Second Paragraph</h2><br>
                    <video controls width="700">
                          <source src="https://work-learn-bucket.s3.amazonaws.com/Unit%3A6-How+to+Write+a+Cover+Letter/Write+Your+Second+Paragraph.mp4"
                          type="video/mp4">
                      </video>
                      </body>`,
            },
            {
              id: 6,
              topic: "Finish Your Letter and Sign Off",
              content: `<body>
                    <h2>Finish Your Letter and Sign Off</h2><br>
                    <video controls width="700">
                          <source src="https://work-learn-bucket.s3.amazonaws.com/Unit%3A6-How+to+Write+a+Cover+Letter/Finish+Your+Letter+and+Sign+Off.mp4"
                          type="video/mp4">
                      </video>
                      </body>`,
            },
            {
              id: 7,
              topic: "Write a Cover Letter for a Job or Career Change Wrap-Up",
              content: `<body>
                    <h2>Write a Cover Letter for a Job or Career Change Wrap-Up</h2><br>
                    <video controls width="700">
                          <source src="https://work-learn-bucket.s3.amazonaws.com/Unit%3A6-How+to+Write+a+Cover+Letter/Write+a+Cover+Letter+for+a+Job+or+Career+Change+Wrap-Up.mp4"
                          type="video/mp4">
                      </video>
                      </body>`,
            },
          ],
        },
        {
          id: 2,
          name: "Try a Career in Data Analytics",
          points: 100,
          contents: [
            {
              id: 1,
              topic: "Introduction to Try a Career in Data Analytics",
              type: "content",
              content: `<div class="video-intro-section">
    <h2 class="video-intro">Introduction to Try a Career in Data Analytics</h2><br>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Try+a+Career+in+Data+Analytics/Try+a+Career+in+Data+Analytics/Introduction+to+Try+a+Career+in+Data+Analytics.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div>`,
            },
            {
              id: 2,
              topic: "Understand How to Analyze User Data in Google Sheets",
              content: `<div class="video-intro-section">
                        <h2 class="video-intro">Understand How to Analyze User Data in Google Sheets</h2><br>
                        <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Try+a+Career+in+Data+Analytics/Try+a+Career+in+Data+Analytics/Understand+How+to+Analyze+User+Data+in+Google+Sheets.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div>`,
            },
            {
              id: 3,
              topic: "Sort by Most Listened to Music Genre",
              points: 100,
              content: `<div class="video-intro-section">
    <h2 class="video-intro">Sort by Most Listened to Music Genre</h2><br>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Try+a+Career+in+Data+Analytics/Try+a+Career+in+Data+Analytics/Sort+by+Most+Listened+to+Music+Genre.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div>`,
            },
            {
              id: 4,
              topic: "Calculate the Average Age of Users Based on Music Genre",
              points: 100,
              content: `<div class="video-intro-section">
    <h2 class="video-intro">Calculate the Average Age of Users Based on Music Genre</h2> <br>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Try+a+Career+in+Data+Analytics/Try+a+Career+in+Data+Analytics/Calculate+the+Average+Age+of+Users+Based+on+Music+Genre.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div>`,
            },
            {
              id: 5,
              topic: "Chart the Average Age of Users for Each Music Genre",
              points: 100,
              content: `<div class="video-intro-section">
    <h2 class="video-intro">Chart the Average Age of Users for Each Music Genre</h2> <br>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Try+a+Career+in+Data+Analytics/Try+a+Career+in+Data+Analytics/Chart+the+Average+Age+of+Users+for+Each+Music+Genre.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div>`,
            },
            {
              id: 6,
              topic: "Try a Career in Data Analytics Wrap-Up",
              points: 100,
              content: `<div class="video-intro-section">
    <h2 class="video-intro">Try a Career in Data Analytics Wrap-Up</h2><br>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Try+a+Career+in+Data+Analytics/Try+a+Career+in+Data+Analytics/Try+a+Career+in+Data+Analytics+Wrap-Up.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div>`,
            },
          ],
        },
        {
          id: 3,
          name: "Use Google to Get a New Job",
          type: "Use Google to Get a New Job",
          points: 100,
          contents: [
            {
              id: 1,
              topic: "Use Google to Get a New Job Unit Introduction",
              points: 100,
              content: `<div class="video-intro-section">
    <h2 class="video-intro">Use Google to Get a New Job Unit Introduction</h2> <br>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Using+google+to+get+new+job/Use+Google+to+Get+a+New+Job+Unit+Introduction.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div>`,
            },
            {
              id: 2,
              topic: "Create a Job guide",
              points: 100,
              content: `<div class="video-intro-section">
                       <h2 class="video-intro">1.Create a Job Guide</h2><br>
                       <p>In this video we will Learn how to create a job guide using Google Slides. </p>
                       <div style="display: flex; justify-content: center">
                      <video controls width="700">
                      <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Using+google+to+get+new+job/Create+a+Job+Guide.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div> <br>
    <div class="video-intro-section">
                       <h2 class="video-intro">2.Create a Title Slide</h2><br>
                       <p>In this video we will Learn how to create a title slide for your job guide. </p>
                       <div style="display: flex; justify-content: center">
                      <video controls width="700">
                      <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Using+google+to+get+new+job/Create+a+Title+Slide.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div><br>
    <div class="video-intro-section">
                       <h2 class="video-intro">3.Create a New Slide: Searching for a Job in Your Area</h2><br>
                       <p>In this video we will Learn how to create a new slide for searching for a job in your area. </p>
                       <div style="display: flex; justify-content: center">
                      <video controls width="700">
                      <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Using+google+to+get+new+job/Create+a+New+Slide+Searching+for+a+Job+in.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div><br>
    <div class="video-intro-section">
                       <h2 class="video-intro">4.Add More Slides: Job Goals</h2><br>
                       <p>In this video we will Learn how to add more slides for job goals. </p
                       <div style="display: flex; justify-content: center">
                      <video controls width="700">
                      <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Using+google+to+get+new+job/Add+More+Slides+Job+Goals.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div><br>
     <div class="video-intro-section">
                       <h2 class="video-intro">5.Share Your Guide With A Partner</h2><br>
                       <p>In this video we will Learn how to share your guide with a partner. </p
                       <div style="display: flex; justify-content: center">
                      <video controls width="700">
                      <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Using+google+to+get+new+job/Share+Your+Guide+With+A+Partner.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div><br>
     <div class="video-intro-section">
                       <h2 class="video-intro">6.Create a Job Guide Activity Wrap Up</h2><br>
                       <p>In this video we will Learn how to create a job guide activity wrap up. </p>
                       <div style="display: flex; justify-content: center">
                      <video controls width="700">
                      <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Using+google+to+get+new+job/Create+a+Job+Guide+Activity+Wrap+Up.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div><br>
    `,

            },
            {
              id: 3,
              topic: "Create a Job Search Plan",
              points: 100,
              content: `<div class="video-intro-section">
    <h2 class="video-intro">1.Create a Job Search Plan</h2> <br>
    <p>In this video we will Learn how to create a job search plan using Google Slides. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Create+a+Job+Search+Plan/Create+a+Job+Search+Plan.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div><br>
    <div class="video-intro-section">
    <h2 class="video-intro">2.Add Columns to Your Plan</h2> <br>
    <p>In this video we will Learn how to add columns to your job search plan. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Create+a+Job+Search+Plan/Add+Columns+to+Your+Plan.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div><br>
    <div class="video-intro-section">
    <h2 class="video-intro">3.Add Tasks to Your Plan</h2> <br>
    <p>In this video we will Learn how to add tasks to your job search plan. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Create+a+Job+Search+Plan/Add+Tasks+to+Your+Plan.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div><br>
    <div class="video-intro-section">
    <h2 class="video-intro">4.Add Tasks to Your Plan</h2> <br>
    <p>In this video we will Learn how to add tasks to your job search plan. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Create+a+Job+Search+Plan/Create+a+Job+Search+Plan+Activity+Wrap+Up.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div>`,
            },
            {
              id: 4,
              topic: "Search for Jobs",
              points: 100,
              content: `<div class="video-intro-section">
    <h2 class="video-intro">1.Introduction to Search for Jobs</h2> <br>
    <p>In this video we will Learn how to search for jobs using Google. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Using+google+to+get+new+job/Use+Google+to+Get+a+New+Job+Unit+Introduction.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div><br>
    <div class="video-intro-section">
    <h2 class="video-intro">2.Search for Jobs</h2> <br>
    <p>In this video we will Learn how to search for jobs using Google. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Search+for+jobs/Search+for+Jobs.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div><br>
    <div class="video-intro-section">
    <h2 class="video-intro">3.Set Up Applications Spreadsheet</h2> <br>
    <p>In this video we will Learn how to set up an applications spreadsheet. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Search+for+jobs/Set+Up+Applications+Spreadsheet.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div><br>
    <div class="video-intro-section">
    <h2 class="video-intro">4.Add Jobs to Your Spreadsheet</h2> <br>
    <p>In this video we will Learn how to add jobs to your spreadsheet. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Search+for+jobs/Add+Jobs+to+Your+Spreadsheet.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div><br>
    <div class="video-intro-section">
    <h2 class="video-intro">5.Add Data Validation to Track Your Progress</h2> <br>
    <p>In this video we will Learn how to add data validation to track your progress. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Search+for+jobs/Add+Data+Validation+to+Track+Your+Progress.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div><br>
    <div class="video-intro-section">
    <h2 class="video-intro">6.Set Up an Email Alert for New Listings</h2> <br>
    <p>In this video we will Learn how to set up an email alert for new listings. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Search+for+jobs/Set+Up+an+Email+Alert+for+New+Listings.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div><br>
    <div class="video-intro-section">
    <h2 class="video-intro">7.Search for Jobs Activity Wrap Up</h2> <br>
    <p>In this video we will Learn how to search for jobs using Google. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Search+for+jobs/Search+for+Jobs+Activity+Wrap+Up.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div>`
    ,
            },
            {
              id: 5,
              topic: "Craft Your Resume",
              points: 100,
              content: `<div class="video-intro-section">
    <h2 class="video-intro">1.Introduction to Resumes</h2> <br>
    <p>In this video we will Learn how to craft your resume. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Craft+Your+Resume/Introduction+to+Resumes+.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div><br>
    <div class="video-intro-section">
    <h2 class="video-intro">2.Write the First Draft</h2> <br>
    <p>In this video we will Learn how to write the first draft of your resume. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Craft+Your+Resume/Write+the+First+Draft.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div><br>
    <div class="video-intro-section">
    <h2 class="video-intro">3.Brainstorm for One Job</h2> <br>
    <p>In this video we will Learn how to brainstorm for one job. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Craft+Your+Resume/Brainstorm+for+One+Job.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div><br>
    <div class="video-intro-section">
    <h2 class="video-intro">4.Tailor Your Resume</h2> <br>
    <p>In this video we will Learn how to tailor your resume. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Craft+Your+Resume/Tailor+Your+Resume.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div><br>
    <div class="video-intro-section">
    <h2 class="video-intro">5.Make Your Resume Stand Out</h2> <br>
    <p>In this video we will Learn how to make your resume stand out. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Craft+Your+Resume/Make+Your+Resume+Stand+Out.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div><br>
    <div class="video-intro-section">
    <h2 class="video-intro">6.Share Your Resume with a Partner</h2> <br>
    <p>In this video we will Learn how to share your resume with a partner. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Craft+Your+Resume/Share+Your+Resume+with+a+Partner.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div><br>
    <div class="video-intro-section">
    <h2 class="video-intro">7.Revise and Save Your Resume</h2> <br>
    <p>In this video we will Learn how to revise and save your resume. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Craft+Your+Resume/Revise+and+Save+Your+Resume.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div><br>
    <div class="video-intro-section">
    <h2 class="video-intro">8.Resume Writing Wrap Up</h2> <br>
    <p>In this video we will Learn how to resume writing wrap up. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Craft+Your+Resume/Resume+Writing+Wrap+Up.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div>`,
            },
            {
              id: 6,
              topic: "Practice Interview Techniques",
              points: 100,
              content: `<div class="video-intro-section">
    <h2 class="video-intro">1.Interviewing Introduction</h2> <br>
    <p>In this video we will Learn how to practice interview techniques. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Practice+Interview+Techniques/Interviewing+Introduction+.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div><br>
    <div class="video-intro-section">
    <h2 class="video-intro">2.Research the Workplace and Brainstorm Questions</h2> <br>
    <p> In this video we will learn how to research the workplace and brainstorm questions. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Practice+Interview+Techniques/Research+the+Workplace+and+Brainstorm+Questions.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div><br>
    <div class="video-intro-section">
    <h2 class="video-intro">3.Search for Interview Questions</h2> <br>
    <p> In this video we will learn how to search for interview questions. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Practice+Interview+Techniques/Search+for+Interview+Questions.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div><br>
    <div class="video-intro-section">
    <h2 class="video-intro">4.Practice Interviewing by Yourself</h2> <br>
    <p> In this video we will learn how to practice interviewing by yourself. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Practice+Interview+Techniques/Practice+Interviewing+by+Yourself.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div> <br>
    <div class="video-intro-section">
    <h2 class="video-intro">5.Hold a Practice Interview with a Partner</h2> <br>
    <p> In this video we will learn how to hold a practice interview with a partner. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Practice+Interview+Techniques/Hold+a+Practice+Interview+with+a+Partner.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div>`,
    
            },
            {
              id: 7,
              topic: "Use Google to Get a New Job Unit Wrap Up",
              points: 100,
              content: `<div class="video-intro-section">
    <h2 class="video-intro">1.Use Google to Get a New Job Unit Wrap Up</h2> <br>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Use+Google+to+Get+a+New+Job+Unit+Wrap+Up/Use+Google+to+Get+a+New+Job+Unit+Wrap+Up.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div>`,
            },
          ],
        },
        {
          id: 4,
          name: "Communicate Effectively at Work Introduction",
          type: "abstraction",
          points: 100,
          contents: [
            {
              id: 1,
              topic: "Information Sharing at Work",
              points: 100,
              content: `<div class="video-intro-section">
              <p> In this video we will learn how to share information at work. </p>
    <h2 class="video-intro">Information Sharing at Work</h2> <br>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Communicate+Effectively+at+Work+Introduction/Information+Sharing+at+Work.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div> `,
            },
            {
              id: 2,
              topic: "Facilitate a Team Meeting",
              points: 100,
              content: `<div class="video-intro-section">
    <h2 class="video-intro">1.Virtual Meetings as Communication Tools</h2> <br>
    <p> In this video we will learn how to use virtual meetings as communication tools. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Communicate+Effectively+at+Work+Introduction/Facilitate+a+Team+Meeting/Virtual+Meetings+as+Communication+Tools.mp4"
                    type="video/mp4"> <br>
                </video>
              </div>
    </div><br>
    <div class="video-intro-section">
    <h2 class="video-intro">2.Create and Share an Agenda</h2> <br>
    <p> In this video we will learn how to create and share an agenda. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Communicate+Effectively+at+Work+Introduction/Facilitate+a+Team+Meeting/Create+and+Share+an+Agenda.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div><br>
    <div class="video-intro-section">
    <h2 class="video-intro">3.Use Calendar to Schedule a Meeting</h2> <br>
    <p> In this video we will learn how to use calendar to schedule a meeting. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Communicate+Effectively+at+Work+Introduction/Facilitate+a+Team+Meeting/Use+Calendar+to+Schedule+a+Meeting.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div><br>
    <div class="video-intro-section">
    <h2 class="video-intro">4.Facilitate Your Meeting in Google Meet</h2> <br>
    <p> In this video we will learn how to facilitate your meeting in google meet. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Communicate+Effectively+at+Work+Introduction/Facilitate+a+Team+Meeting/Facilitate+Your+Meeting+in+Google+Meet.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div><br>
    <div class="video-intro-section">
    <h2 class="video-intro">5.Activity Wrap-Up: Making Meetings More Efficient</h2> <br>
    <p> In this video we will learn how to make meetings more efficient. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Communicate+Effectively+at+Work+Introduction/Facilitate+a+Team+Meeting/Activity+Wrap-Up+Making+Meetings+More+Efficient.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div> `,
            },
            {
              id: 3,
              topic: "Collect Feedback with Google Forms",
              points: 100,
              content: `<div class="video-intro-section">
    <h2 class="video-intro">Gather Information Using Digital Tools</h2> <br>
    <p> In this video we will learn how to gather information using digital tools. </p
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Communicate+Effectively+at+Work+Introduction/Collect+Feedback+with+Google+Forms/Gather+Information+Using+Digital+Tools.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div> <br>
    <div class="video-intro-section">
    <h2 class="video-intro">Add a Title, Description, and Questions</h2> <br>
    <p> In this video we will learn how to add a title, description, and questions
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Communicate+Effectively+at+Work+Introduction/Collect+Feedback+with+Google+Forms/Add+a+Title%2C+Description%2C+and+Questions.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div> <br>
    <div class="video-intro-section">
    <h2 class="video-intro">Insert Images and Apply a Theme</h2> <br>
    <p> In this video we will learn how to insert images and apply a theme. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Communicate+Effectively+at+Work+Introduction/Collect+Feedback+with+Google+Forms/Insert+Images+and+Apply+a+Theme.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div> <br>
    <div class="video-intro-section">
    <h2 class="video-intro">Send the Survey</h2> <br>
    <p> In this video we will learn how to send the survey. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Communicate+Effectively+at+Work+Introduction/Collect+Feedback+with+Google+Forms/Send+the+Survey.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div> <br>
    <div class="video-intro-section">
    <h2 class="video-intro">Monitor and Export Responses</h2> <br>
    <p> In this video we will learn how to monitor and export responses. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Communicate+Effectively+at+Work+Introduction/Collect+Feedback+with+Google+Forms/Monitor+and+Export+Responses.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div> <br>
    <div class="video-intro-section">
    <h2 class="video-intro">Activity Wrap-Up: Gather Feedback to Make Informed Decisions</h2> <br>
    <p> In this video we will learn how to gather feedback to make informed decisions. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Communicate+Effectively+at+Work+Introduction/Collect+Feedback+with+Google+Forms/Activity+Wrap-Up+Gather+Feedback+to+Make+Informed+Decisions.mp4"
                    type="video/mp4">
                </video>
              </div>`,
            },
            {
              id: 4,
              topic: "Communicate Ideas in a Proposal",
              points: 100,
              content: `<div class="video-intro-section">
    <h2 class="video-intro">1.Use a Proposal to Share Information and Get Support</h2> <br>
    <p> In this video we will learn how to use a proposal to share information and get
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Communicate+Effectively+at+Work+Introduction/Information+Sharing+at+Work.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div><br>
    <div class="video-intro-section">
    <h2 class="video-intro">2.Add Details to Your Proposal</h2> <br>
    <p> In this video we will learn how to add details to your proposal. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Communicate+Effectively+at+Work+Introduction/Communicate+Ideas+in+a+Proposal/Add+Details+to+Your+Proposal.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div> <br>
    <div class="video-intro-section">
    <h2 class="video-intro">3.Add Visual Interest to Your Proposal</h2> <br>
    <p> In this video we will learn how to add visual interest to your proposal. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Communicate+Effectively+at+Work+Introduction/Communicate+Ideas+in+a+Proposal/Add+Visual+Interest+to+Your+Proposal.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div> <br>
    <div class="video-intro-section">
    <h2 class="video-intro">4.Collaborate Using Comments and Suggestions</h2> <br>
    <p> In this video we will learn how to collaborate using comments and suggestions. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Communicate+Effectively+at+Work+Introduction/Communicate+Ideas+in+a+Proposal/Collaborate+Using+Comments+and+Suggestions.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div> <br>
    <div class="video-intro-section">
    <h2 class="video-intro">5.Manage Permissions and Publish Proposal</h2> <br>
    <p> In this video we will learn how to manage permissions and publish proposal. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Communicate+Effectively+at+Work+Introduction/Communicate+Ideas+in+a+Proposal/Manage+Permissions+and+Publish+Proposal.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div> <br>
    <div class="video-intro-section">
    <h2 class="video-intro">6.Use Documents to Collaborate and Communicate</h2> <br>
    <p> In this video we will learn how to use documents to collaborate and communicate. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Communicate+Effectively+at+Work+Introduction/Communicate+Ideas+in+a+Proposal/Use+Documents+to+Collaborate+and+Communicate.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div>  `,
            },
            {
              id: 5,
              topic: "Present Information About Your Job",
              points: 100,
              content: `<div class="video-intro-section">
    <h2 class="video-intro">1.Use Google Slides to Communicate What You Do</h2> <br>
    <p> In this video we will learn how to use google slides to communicate what you do. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Communicate+Effectively+at+Work+Introduction/Present+Information+About+Your+Job/+Use+Google+Slides+to+Communicate+What+You+Do.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div><br>
    <div class="video-intro-section">
    <h2 class="video-intro">2.Add a Title and Slides to Your Presentation</h2> <br>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Communicate+Effectively+at+Work+Introduction/Present+Information+About+Your+Job/Add+a+Title+and+Slides+to+Your+Presentation.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div>  <br>
    <div class="video-intro-section">
    <h2 class="video-intro">3.Add and Format Text</h2> <br>
    <p> In this video we will learn how to add and format text. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Communicate+Effectively+at+Work+Introduction/Present+Information+About+Your+Job/Add+and+Format+Text.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div> <br>
    <div class="video-intro-section">
    <h2 class="video-intro">4.Create Visual Appeal with a Theme and Images</h2> <br>
    <p> In this video we will learn how to create visual appeal with a theme and images. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Communicate+Effectively+at+Work+Introduction/Present+Information+About+Your+Job/Create+Visual+Appeal+with+a+Theme+and+Images.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div> <br>
    <div class="video-intro-section">
    <h2 class="video-intro">5.Add Speaker Notes and Present</h2> <br>
    <p> In this video we will learn how to add speaker notes and present. </p>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Communicate+Effectively+at+Work+Introduction/Present+Information+About+Your+Job/Add+Speaker+Notes+and+Present.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div> `,
            },
            {
              id: 6,
              topic: "Communicate Effectively at Work Wrap-Up",
              points: 100,
              content: `<div class="video-intro-section">
    <h2 class="video-intro">Communicate Effectively at Work Wrap-Up</h2> <br>
    <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Communicate+Effectively+at+Work+Introduction/Communicate+Effectively+at+Work+Wrap-Up/Communicate+Effectively+at+Work+Wrap-Up.mp4"
                    type="video/mp4">
                </video>
              </div>
    </div> `,
            },
          ],
        },
        {
          id: 7,
          name: "Review Your Knowledge",
          type: "review",
          contents: [
            {
              id: 1,
              topic: "Qualtrics Survey",
              author: "Hollie Rosser",
              points: 100,
              content: `
                <p style="margin-top:20px;">Completing this survey is worth $5.</p>
                <a target="_blank"  style='text-decoration: underline' href='https://unomaha.az1.qualtrics.com/jfe/form/SV_6iomnRh5EwVwHn8' alt='qualtrics survey'>Please complete this Qualtrics Survey</a>
                `,
            },
          ],
        },
        // ],
        // },
      ],
    },
    {
      id: 4,
      topicName: "Unit 3: Python",
      subTopics: [
        {
          id: 1,
          name: "Getting Started in VS Code",
          contents: [
            
            {
              id: 1,
              topic: "Open a folder in VS Code",
              content: `
              <div class='VS Code'>
              <p class='sub-topic' style='font-size: 1.35em'><strong>Background</strong></p>
              <p>We will be using a powerful code editor called <strong>Visual Studio Code (VS Code)</strong> for this course. Using VS Code will allow you to write and run code seamlessly across different systems, including Windows, Mac, and Linux. VS Code also provides various extensions that support Python and collaborative programming.</p><br>
              <p class='sub-topic' style='font-size: 1.35em'><strong>Install VS Code</strong></p>
              <p>To get started, download and install VS Code from the official website: <a style='text-decoration: underline' href='https://code.visualstudio.com/download' target='_blank'>https://code.visualstudio.com/</a>.</p>  
              <br> 
               <p> In this tutorial, we walk you through setting up Visual Studio Code and give an overview of the basic features.</p>
              <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Vs-code/Vscode+gettingstarted.mp4"
                    type="video/mp4">
                </video>
              <p class='sub-topic' style='font-size: 1.35em'><strong>Step 1: Open a folder in VS Code</strong></p>
              In VS Code, you can work with individual files seamlessly, for example for quick edits or to view a file. Alternatively, by opening a folder, also known as a workspace, you unlock more features, such as folder-specific configuration settings, restoring the UI state for that folder, debug configurations, and more. 
              Let's start by creating a folder and opening it in VS Code.
              <p>1. Create a new folder vscode101 on your computer.</p>
              <p>2. Open Visual Studio Code.</p>
              When you first open VS Code, you should see the Welcome page with different actions to get started.
              <p>3. On the Welcome page, select Open Folder..., and then select the folder you created.</p> 
               The VS Code window reloads and you should see the folder name at the top of the Explorer view. You'll use the Explorer view to view and manage the files and folders in your workspace.
              <img src='/images/open-folder.png' style="width: 100%;height: 100%;" alt="Open-folder"/>
              
              
              </div>
              <style>
              .VS Code p {
                margin: 10px 0;
              }
              .VS Code img {
                width: 50%;
                height: auto;
                text-align: center;
                margin: 20px;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                border-radius: 5px;
              }
  
              .vscode .lg-img {
                width: 70%;
              }
  
              .vscode .xl-img {
                width: 100%;
              }
  
              .vscode .sub-topic {
                margin-top: 30px;
              }
  
              </style>
  
              `,
            },
            {
              id: 2,
              topic: "Explore the user interface",
              content: `
              <div class='Explore the user interface'>
              <p class='sub-topic' style='font-size: 1.35em'><strong>Step 2: Explore the user interface</strong></p><br>
              <p> <strong>Switch between views with the Activity Bar</strong></p>
              The Activity Bar is located on the side of the window and gives you quick access to different views, such as the Explorer, Search, Source Control, and Run and Debug views.
              <p>1. Use the Activity Bar to explore the different views.</P>
              <p>As you hover over the Activity Bar, you can see the name of each view and the keyboard shortcut to open each view. You'll find that many of the features in VS Code have keyboard shortcuts already assigned to them, and you can also customize these shortcuts to your liking.</p>
              <image src='/images/activity-bar.png' style="width: 100%;height: 100%;" alt="Activity-bar"/>
              <p>2. Notice the Primary Side Bar that opens when you select a view in the Activity Bar.</p>
              <p>The Primary Side Bar shows view-specific information. For example, the Source Control view shows the changes in your Git repository, and the Run and Debug view enables you to configure and start debugging sessions.</P>
              <image src='/images/activity-bar-and-side-bar.png' style="width: 100%;height: 100%;" alt="activity-bar-and-side-bar"/>  
              <p><strong>View and edit files with the Editor</strong></p>
              <p>The Editor is located in the main area of the window and is where you view and edit files in your workspace.</p>
              <p>1.Select the Explorer view in the Activity Bar, and then select the New File... button to create a new file in your workspace.</p>
              <image src='/images/explorer-new-file.png' style="width: 100%;height: 100%;" alt="explorer-view"/>
              <p>2.Enter the name index.html and press Enter.</p>
              <p>A file is added to your workspace and an Editor opens in the main area of the window, where you can start typing and editing the file.</p>
              <image src='/images/new-file-editor.png' style='width:100%;height:100%' alt='newfile.png'/>
              <p>3.Add more files to your workspace and notice that each file opens in a new Editor tab.</p>
              <p>You can open as many editors as you like and view them side by side vertically or horizontally. Learn more about side by side editing.</p>
              <image src='/images/multiple-editors.png' style='width:100%;height:100%' alt='multiple-editors.png'/>
              <p><strong>Access the terminal from the Panel area</strong></p>
              <p>The Panel area is located below the Editor and contains different views, such as the output and debug information, and also gives you access to the integrated terminal.
              <p>1. Open the Panel area by selecting View > Appearance > Panel from the menu.</p>
              <p>Notice the different view in the Panel area. As you use different features in VS Code, such as debugging your code, you'll use the information and functionality in these views.</p>
              <image src='/images/vscode-panel.png' style='width:100%;height:100%' alt='vscode-panel.png'/>
              <p>2. Open the integrated terminal by selecting Terminal in the Panel area > New Terminal, and try running some shell commands.</p>
              The terminal enables you to run shell commands directly in VS Code, without switching to another terminal application. For example, you can use the terminal to install dependencies for your project, or run a development server. Notice that the terminal working directory is the root of your workspace.
              <image src='/images/vscode-terminal.png' style='width:100%;height:100%;' alt='vscode-terminal'/>
              <p><strong>Access commands with the Command Palette</strong></p>
              Many of the commands in VS Code are available through the Command Palette. For example, enter Create new file in the Command Palette to create a file in your workspace, or enter Git to view the list of Git actions you can trigger.
              <p>1. Select View > Command Palette to open the Command Palette.</p>
              <img src ='/images/command-palette.png' style='width:100%;height:100%' alt='command-palette'/>
              <p> <strong>View status information with the Status Bar</strong></p>
              The Status Bar is located at the bottom of the window and shows information about the file you are editing, and the workspace you have open. For example, if the folder you opened is a Git repository, the Status Bar shows the Git status and current branch.
              <p>1. Open a file by selecting it in the Explorer view.</p>
              The Status Bar shows the language mode, indentation, and the line ending of the current editor.
              <img src='/images/status-bar.png' style='width:100%;height:100%' alt='status-bar'/>
              <p>2. Select the indentation field (shown as Spaces: 4 in the screenshot) in the Status Bar to modify the indentation of the current file. For example, to use tabs instead of spaces.</p>
              <p>If you've opened a Git repository, you can select the branch name in the Status Bar to create a new branch.</p>
              </div>
              <style>
              .Explore the user interface-submit p {
                margin: 10px 0;
              }
              .Explore the user interface-submit pre {
                font-size: 0.85em;
              }
              </style>
              `,
            },
            {
              id: 3,
              topic: "Customize the user interface",
              content: `
              <div class='Customize the user interface'>
              <p class='sub-topic' style='font-size: 1.35em'><strong>Step 3: Customize the user interface</strong></p>
              <p>Each developer has their own preferences for how their coding environment should look. VS Code enables you to change the layout, colors, keyboard shortcuts, and nearly every other aspect of the editor through various settings.</p>
              <p>Let's start by using Color Themes to customize the colors in VS Code. A Color Theme affects both the VS Code user interface elements and the editor highlighting colors.</P>
              To select a different Color Theme:
              <p>1. Select the Manage button (gear icon) in the Activity Bar, and then select Themes > Color Theme to display the Color Theme picker.</p>
              <image src='/images/change-color-theme.png' style='width:100%;height:100%' alt='color-theme.png'/>
              <p>2. Use the Up and Down keys to navigate through the list and preview the colors of the theme.</p>
              VS Code comes with a list of built-in themes that you can choose from. As you move through the list, the active theme is previewed in VS Code.
              <image src='/images/themes_hero.gif' style='width:100%;height:100%' alt='color-theme-preview'/>
              Let's use the Settings Editor to modify the font size in the editor:
              <p>1.Select Code > Settings > Settings to open the Settings Editor.</p>
              <image src='/images/settings-editor.png' style='width:100%;height:100%' alt='settings.png'/>
              <p>2. Modify the value of the Editor: Font Size setting to 36.</p>
              When you switch to the index.html editor tab, notice how the font size change is immediately applied in the editor. You can select the gear icon next to the setting and select Reset Setting to reset the value back to its default value.

              
              </div>
              <style>
              .Customize the user interface-submit p {
                margin: 10px 0;
              }
              .Customize the user interface-submit pre {
                font-size: 0.85em;
              }
              </style>
              `,
            },
            {
              id: 4,
              topic: "Write some code",
              content: `
              <div class='Write some code'>
              <p class='sub-topic' style='font-size: 1.35em'><strong>Step 4: Write some code</strong></p>
              <body>VS Code is first and foremost a code editor, so let's start by writing some code! VS Code has built-in support for JavaScript, TypeScript, HTML, CSS, and more. In this tutorial, you create a sample JavaScript file and use some of the code editing features that VS Code offers.
              <p>VS Code supports many programming languages and in a next step, you'll install a language extension to add support for a different language, namely Python</p>
              <p>1. In the Explorer view, create a new file app.js, and start typing the following JavaScript code:</p>
              <img src='/images/Myfirstcode.png' style='width:100%;height:100%' alt='new-file'/>
              As you type, you should see suggestions popping up that help you complete your code (IntelliSense). You can use the Up and Down keys to navigate the suggestions, and Tab to insert the selected suggestion.
              Notice also the formatting of the code (syntax highlighting), to help you distinguish between different parts of the code.
              <img src='https://code.visualstudio.com/assets/docs/getstarted/getting-started/javascript-intellisense.gif' style="width: 100%;height: 100%;" alt="Activity-bar"/>
              <p>2.Put the cursor on the Hello, string, select the lightbulb icon, and then select Convert to template string.</p>
              The lightbulb indicates that there are Code Actions available, which are suggestions that help you apply quick fixes to your code. 
              <p>In this case, the Code Action converts ""Hello, " + name into a template string "Hello,$name ", which is a special JavaScript construct to embed expressions in strings.
              <img src ='/images/code-action-template-string.png' style='width:100%;height:100%' alt='code-action-template-string'/>
              Toggle the File > Auto Save menu item to automatically save files whenever you make changes.
              </body>

            
              


  
              </div>
              <style>
              .Write some code-submit p {
                margin: 10px 0;
              }
              .Write some code-submit pre {
                font-size: 0.85em;
              }
              </style>
              `,
            },
            {
              id: 5,
              topic: "Use source control",
              content: `
              <div class='Use source control'>
              <p class='sub-topic' style='font-size: 1.35em'><strong>Step 5: Use source control</strong></p>
              <p>As you're writing code, you'll want to save your work in a source control system to track changes or collaborate with others.</p>
              <p>Let's use the built-in Git support to commit the changes you've made previously.</p>
              <p>1. Make sure you have Git installed on your computer. You can check if Git is installed by opening the terminal and entering <strong>git --version</strong>.</p>
              <p>2. Select the Source Control view in the Activity Bar, and select Initialize Repository to create a new Git repository for your workspace.</p>
              <p>You also have the option to directly publish your changes to a GitHub repository by selecting Publish to GitHub.</p>
              <img src='/images/source-control-initialize.png' style='width:100%;height:100%' alt='initialize-repository'/>

              <p>3. After you initialize a repository, the Source Control view shows the changes you've made in your workspace.
              Notice the letter indicating the type of change alongside each file. For example, U indicates an untracked/new file.
              When you hover over a change, you can choose to discard or stage the change. Staging a change means that you've marked it as ready to be committed.</p>
              <img src='/images/source-control-changes.png' style='width:100%;height:100%' alt='source-control-view'/>
              <p>4. Select + next to Changes to stage all changes at once.</p>
              <p>5. Enter a commit message, for example Add hello function, and then select the Commit to commit the changes to your Git repository.</p>
              
              <img src='/images/source-control-commit.png' style='width:100%;height:100%' alt='source-control-commit'/>
              <p>6.The Source Control Graph shows a visual representation of the commit history of your Git repository. You can use the graph to explore the commit history, compare changes, and more.</p>
              <img src='/images/source-control-graph.png' style='width:100%;height:100%' alt='source-control-graph'/>
              </div>
              <style>
              .Use source control-submit p {
                margin: 10px 0;
              }
              .Use source control-submit pre {
                font-size: 0.85em;
              }
              </style>
              `,
            },
            {
              id: 6,
              topic: "Install a language extension",
              content: `
              <div class='Install a language extension'>
              <p class='sub-topic' style='font-size: 1.35em'><strong>Step 5: Install a language extension</strong></p>
              <p>The features that VS Code includes out-of-the-box are just the start. VS Code has a rich ecosystem of extensions that let you add languages, debuggers, and tools to your installation to support your specific development workflow.</p>
              <p>Let's install a language extension to add support for Python, or any other programming language you are interested in.</p>
              <p>1. Select the Extensions view in the Activity Bar.</p>
              The Extensions view enables you to browse and install extensions from within VS Code.
              <img src='/images/extensions-view.png' style='width:100%;height:100%' alt='extension-view'/>
              
              <p>2. Enter Python in the Extension view search box to browse for Python-related extensions. Select the Python extension published by Microsoft, and then select the Install button.</p>
              <img src='/images/extensions-search-python.png' style='width:100%;height:100%' alt='python-extension'/>
              
              <p>3 Now, create a new Python file hello.py in your workspace, and start typing the following Python code:</p>
              <img src='/images/Firstcode.png' style='width:100%;height:100%' alt='hello-world'/>
              </div>
              <style>
              .Install a language extension-submit p {
                margin: 10px 0;
              }
              .Install a language extension-submit pre {
                font-size: 0.85em;
              }
              </style>
              `,
            },
            {
              id: 7,
              topic: "Run and debug your code",
              content: `
              <div class='Run and debug your code'>
              <p class='sub-topic' style='font-size: 1.35em'><strong>Step 5: Run and debug your code</strong></p>
              <p>One of the key features in VS Code is its great support for running and debugging code. VS Code has built-in support for running and debugging Node.js applications. In this tutorial, you use the Python extension you installed in the previous step to debug a Python program.</p>
              Let's debug the <strong>hello.py</strong> program that you created in the previous step.<br>
              <p>1. Make sure that  <a style='text-decoration: underline' href='https://www.python.org/downloads/' target='_blank'> Python 3</a> is installed on your computer.</p>
              To run and debug programs in VS Code, you need to have the necessary runtime installed on your computer. For example, to run and debug a Node.js program, you need to have the Node.js runtime installed.
              <p>2. In the hello.py file, place the cursor on the print line and press F9 to set a breakpoint</p>
              A red dot appears in the left margin of the editor, indicating that a breakpoint is set. With a breakpoint, you can pause the execution of your program at a specific line of code.
              <img src='/images/python-set-breakpoint.png' style='width:100%;height:100%' alt='first-breakpoint'/>
              <p>3. Press F5 to start a debugging session. Select Python Debugger in the Quick Pick menu, and then select Python File to debug the current Python file.</p>
              Select the Python debugger:
              <img src='/images/python-select-debugger.png' style='width:100%;height:100%' alt='python-debugger'/>
              Choose to run the current Python file:
              <img src='/images/python-debug-configuration.png' style='width:100%;height:100%' alt='python-debug-configuration'/>
              <p>4. Notice that the program starts and that the execution stops at the breakpoint you set.</p>
              VS Code uses the Python Debugger you installed via the extension to run and debug the program.
              <img src='/images/vscode-debugging.png' style='width:100%;height:100%' alt='python-debug'/>
              <p>5. Press the Continue button in the Debug toolbar or press F5 to continue the execution.</p>
              <img src='/images/debug-toolbar-play.png' style='width:100%;height:100%' alt='python-continue'/>
              </div>
              <style>
              .Run and debug your code p {
                margin: 10px 0;
              }
              .Run and debug your code pre {
                font-size: 0.85em;
              }
              </style>
              `,
            },
          ],
        },
        {
          id: 2,
          name: "Introduction to Programming in Python",
          type: "python1",
          contents: [
            {
              id: 1,
              topic: "Data Representation",
              content: `
              <div class='data-rep'>
                <h2 style='font-weight: 700; font-size: 1.25em'>Data Representation</h2>
                <p>
                Before we get started with writing programs, it is helpful to understand a little bit about the computer and how it understands the programs we write. Computers use a lot of abstraction! At their core, they are machines, with various parts that do different tasks, including computation, storing data, and output (such as showing things on the screen).  Computers store data in binary, which is a system of numbering that uses only two digits: 0 and 1. When we use computers, we are interacting with an abstraction – rather than having to interact with the 0s and 1s, we can type letters, click images, and generally have a much better time! Images on the screen are an abstraction of the 1s and 0s stored in the computer.  
                </p>
                <p>This video will introduce you to computer hardware and binary numbers. This is NOT the most important thing you should know, so if you’re kind of confused, that’s okay. It is a thing that is not actually useful but is the kind of background knowledge that many computer scientists have. </p>
                <p>The speaker uses a paper tool called the “Flippy Do” An online version of the Flippy Do is available here:</p>
                <a target='_blank' href='https://studio.code.org/projects/applab/z6iQr137KHDvkIaz5UNCviWLVkkRnhyteDqWhWBJ56o'>Flippy Do Game</a>
                <p>Video: </p>
                 <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Lesson+1+-+Binary+Numbers.mp4"
                    type="video/mp4">
                </video>
              </div>
                <p>You can practice your understanding of binary numbers with this game:</p>
                <a target='_blank' href='https://learningcontent.cisco.com/games/binary/index.html'>Binary Numbers Game</a>
  
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
              </style>
              `,
            },
            {
              id: 2,
              topic: "Scripting vs. Compiled Languages",
              content: `
              <div class='script-compiled'>
                  <h2 style='font-weight: 700; font-size: 1.25em'>Scripting vs. Compiled Languages</h2>
                  <p>There are a LOT of different programming languages. There are some differences in how the computer executes (that is, runs) programs run in different languages. One of the differences is between languages known as scripting languages and languages known as compiled languages. This video will explain the difference:</p>
                 <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Lesson+1+-+Scripted+Languages.mp4"
                    type="video/mp4">
                </video>
              </div>
              <div class='notes'>
              <p>Notes as shown in the video: </p>
              <h3 style='font-weight: 700; font-size: 1.25em'>Compiled Languages </h3>
              <ul class='list'>
              <li>Written with strict syntax in high-level language</li>
              <li>Converted to machine code by the compiler
                <ul class='sublist'>
                  <li>All lines are evaluated </li>
                  <li>Syntax errors are flagged by compiler</li>
                </ul>
              </li>
              <li>Compiled program is what actually runs </li>
              <li>Used for major applications </li>
              <li>Source code is not needed for execution </li>
              </ul>
              </div>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Scripting Languages </h3>
              <ul class='list'>
              <li>Written with strict syntax in high-level language </li>
              <li>Each line is converted to machine code as it runs 
                <ul class='sublist'>
                  <li>Syntax errors are not flagged until the individual line is executed  </li>
                  <li>Conversion as you go is slower than converting ahead of time </li>
                </ul>
              </li>
              <li>Easier to begin a program  </li>
              <li>Used for automation and simple tasks </li>
              <li>Source code is needed to run </li>
              </ul>
              </div>
              </div>
              <style>
              .script-compiled p {
                margin: 10px 0;
              }
  
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .notes .sublist {
                list-style-type: circle;
                padding-left: 22px;
              }
              </style>
              `,
            },
            {
              id: 3,
              topic: "Writing Python Code & Debugging",
              content: `
              <div class='debug'>
                <h2 style='font-weight: 700; font-size: 1.25em'>Writing Python Code & Debugging </h2>
                <p>Programming is just a process of telling the computer what to do. – creating an algorithm. The algorithms are called programs or code, and they are written in programming languages. Python is one programming language, and you will be learning to write Python programs.  </p>
                <p>Most programmers use something called an “I.D.E.” which stands for Integrated Development Environment. Basically, an IDE is like a word processor (like Google Docs or Microsoft Word) but for programming. Programs have a lot of weird characters and their own syntax (the rules of grammar for the programming language), and IDEs are made to help with that, just like a word processor has tools like spell-check.  </p>
                <p>This video has two parts. In the first part, you will learn how to write a little python code. The thing is, no one is perfect, and the computer is SUPER picky about what it understands. At some point you will write some code that the computer doesn’t understand and it will give you an error. This is known as having a bug in your code. You will have to debug your code – find the problem and fix it. The second half of the video has you write some code that is wrong, and learn about why, and what it looks like when you get an error. One thing to remember is that <span style='text-decoration: underline;'>the computer does not judge you</span>. It has no opinion, so you can just keep trying to fix it as many times as it takes. The error message is trying to help you know where it got confused so you can fix it. (Error messages are often confusing and unhelpful, but they’re trying.) Debugging is the most frustrating part of programming! In addition to learning technical skills for finding and fixing bugs, it is good to find emotional skills that work for you too, like taking a break if you get overly frustrated, or asking someone else for help if you’ve already tried to fix it and searched for help online. </p>
                 <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Lesson+1+-+Intro+to+Python.mp4"
                    type="video/mp4">
                </video>
              </div>
              <div class='notes'>
              <p>Notes as shown in the video: </p>
            <h3 style='font-weight: 700; font-size: 1.25em'>Debugging Python</h3>
            <p>We will use a IDE (Integrated Development Environment) in this class. However, with python, you can type commands directly into a command line and they will execute. This is useful if you have a small script that you want to run or a bit of code you want to test outside of a larger program. </p>
            <p>In VS Code, start a new Python Project. This is only for experimentation so the name of the project does not matter. </p>
            <p>In the VS Code main.py file, try typing and running each of the following commands. </p>
            <div class='code'>
            <pre>print("Hello Python") </pre>
            <pre>print(2 + 3) </pre>
            <pre>print("Hello" + "world") </pre>
            <pre>print("Hello" + 5)</pre>
            </div>
  
              </div>
               <div class='notes'>
            <h3 style='font-weight: 700; font-size: 1.25em'>Practice Debugging</h3>
            <p>Type the following commands into a Python program. Debug the errors to see how Python responds if it cannot run a command as typed.  </p>
            <div class='code'>
            <pre>Print("Hello world")  </pre>
            <pre>print "Hello world" </pre>
            <pre>print("Hello world)  </pre>
            <pre>print("Hello world" </pre>
            <pre>print(Hello world) </pre>
            </div>
  
              </div>
              <div class='notes'>
            <h3 style='font-weight: 700; font-size: 1.25em'>Documentation For Help</h3>
            <p>There are many internet resources, your peers, texts, and your instructor you can get help from in this class. Python also has built-in help documentation if you need it. When you are using a command, a window will pop up with information about the command you are typing. Hover on the command to get additional information and usage examples. </p>
            <div class='code'>
            <pre>abs(5)  </pre>
            <pre>chr(65)   </pre>
            <pre>eval()</pre>
            </div>
  
              </div>
              </div>
              <style>
              .debug p {
                margin: 10px 0;
              }
              .notes pre {
                font-size: 0.85em;
                padding-left: 20px;
                margin: 10px 0;
              }
  
              </style>
              `,
            },
            {
              id: 4,
              topic: "Quiz",
              type: "quiz",
            },
            {
              id: 5,
              topic: "Lab 1 - MadLib",
              content: `
              <div class='madlib'>
              <h2 style='font-weight: 700; font-size: 1.25em'>Lab 1 - MadLib</h2>
              <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/python+lab+videos/Lab-1---Madlib.mp4"
                    type="video/mp4">
                </video>
              </div>
              <p>Create a new python project in VS Code. Name the project Lab 1.</p>
              <p>Create a <a style='text-decoration: underline;' href='https://en.wikipedia.org/wiki/Mad_Libs' target='_blank'>Mad Lib</a> where the user supplies key adjectives, nouns, verbs, adverbs, or other types of speech then constructs a full story with those words.</p>
              <p>Your Mad Lib must:</p>
              <ul class='list'>
              <li>Ask for at least 6 words</li>
              <li>Consider usability in design (be clear)</li>
              <li>Create a story with the user supplied words.</li>
              </ul>
              <p>There are a few ways to join words in python:</p>
              <div class='code'>
              <pre>noun1 = "Bicycle"</pre>
              <pre>print("I like to ride my " + noun1)</pre>
              <pre>print("I like to ride my", noun1)</pre>
              </div>
              <p>Test which works best for you, note where the spaces fall using the different methods.</p>
              <p>You will also need to get input from the user. This is done by using the input function and saving the response to a variable.</p>
                 <div class='code'>
              <pre>noun1 = input("Enter a noun: ")</pre>
              <pre>print("You said", noun1)</pre>
              </div>
              <p>Note that the variable is on the left side of the equal sign. Whatever you put in the quotes of the input function will display on screen.</p>
              
              </div>
              <style>
              .madlib p {
                margin: 20px 0;
              }
              .code pre {
                font-size: 0.85em;
              }
              </style>
              `,
            },
          ],
        },
        {
          id: 3,
          name: "Data Types",
          type: "python2",
          contents: [
            {
              id: 1,
              topic: "Introduction to Data Types",
              content: `
              <div class='data-rep'>
                <h2 style='font-weight: 700; font-size: 1.25em'>Introduction to Data Types </h2>
                <p>
  You learned about variables in the last lab. Variables contain data. In the Mad Lib lab, the data was words like nouns, adjectives, and verbs. Sometimes the data is numbers, like a year or a quantity, like the number of learners who are participating in the Work-Learn project.                 
  </p>
                <p>Unfortunately, computers are <span style='text-decoration: underline'>super</span> picky, so they care about what data type a variable is. Believe it or not, if you tried to get a computer to add “five” and “three,” it wouldn’t be able to, because to the computer, “five” and “three” are both words (which is known as a string data type). Instead, you would have to ask it to add 5 + 3 to get the right answer.   </p>
                <p>In many ways, having to know about data types is the kind of thing that seems boring and like you shouldn’t have to worry about it. However, programming languages (often) can’t abstract away the details of data types to just figure it out. Knowing data types will help you write good code and debug code if you or another programmer makes a mistake. </p>
                <p>In this video, you will learn about different data types, and about arithmetic operators, which is just the fancy programming way to say “how to tell the computer to do math.” You can follow along with the video by typing into your own python program.  </p>
                <p>Video: </p>
                 <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Lesson+2+-+Data+Types.mp4"
                    type="video/mp4">
                </video>
              </div>
                <div class='notes'>
              <p>Notes as shown in the video: </p>
              <h3 style='font-weight: 700; font-size: 1.25em'>Objectives </h3>
              <p>Discuss and demonstrate: </p>
              <ul class='list'>
              <li>The concept of data types </li>
              <li>variables, assignments </li>
              <li>numerical types  </li>
              <li>arithmetic operators and expressions </li>
              <li>comments in the program  </li>
              <li>understanding error messages   </li>
              </ul>
              </div>
  
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Arithmetic Operators  </h3>
              <p>Discuss and demonstrate: </p>
              <table class='table'>
                  <tr>
                    <th>Operator</th>
                    <th>Description </th>
                    <th>Notes</th>
                  </tr>
                  <tr>
                    <td>+</td>
                    <td>addition</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>subtraction</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>*</td>
                    <td>multiplication</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>/</td>
                    <td>division (float)</td>
                    <td>5 / 2 -> 2.5 </td>
                  </tr>
                  <tr>
                    <td>//</td>
                    <td>division (floor)</td>
                    <td>5 / 2 -> 2</td>
                  </tr>
                  <tr>
                    <td>%</td>
                    <td>modulus</td>
                    <td>5 % 2 -> 1 </td>
                  </tr> 
                  <tr>
                    <td>**</td>
                    <td>exponent</td>
                    <td>2 ** 5 -> 32</td>
                  </tr>
                </table>
              </div>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Data Types </h3>
              <p>There are many different data types in python. You can always test what python a data type is using the following function: </p>
              <pre style='font-size: 0.85em'>x = 5</pre>
              <pre style='font-size: 0.85em'>type(x)</pre>
              <pre style='font-size: 0.85em'>&lt;class 'int'&gt;</pre>
              </div>
              
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Integers  </h3>
              <p>Integers are whole numbers without decimal values. In many languages, there is a "biggest" value that an integer can be. </p>
              <p>In Python 3, there is effectively no limit to how long an integer value can be. Of course, it is constrained by the amount of memory your system has but beyond that you can represent a very large number.  </p>
              </div>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Floating-Point Numbers  </h3>
              <p>The float type in Python designates a floating-point number. float values are specified with a decimal point. Optionally, the character e or E followed by a positive or negative integer may be appended to specify scientific notation: </p>
              <pre style='font-size: 0.85em'>x = 5.2</pre>
              <pre style='font-size: 0.85em'>type(x)</pre>
              <pre style='font-size: 0.85em'>&lt;class 'float'&gt;</pre>
              </div>
              
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Characters  </h3>
              <p>Single letters are called characters or char. Characters align to the <span><a href='http://www.asciitable.com/' target='_blank'>ASCII standard</a></span> where every letter has a unique number. </p>
              <ul class='list'>
              <li>The concept of data types </li>
              <li>variables, assignments </li>
              </ul>
              <p>These are examples of Characters, you can also convert a character from the letter representation to the numerical representation" </p>
              <pre style='font-size: 0.85em'>ord('a')</pre>
              <pre style='font-size: 0.85em'>97</pre>
              <pre style='font-size: 0.85em'>ord('a')</pre>
              <pre style='font-size: 0.85em'>65</pre>
  
              <p>This conversion can go the other way too.  </p>
              <pre style='font-size: 0.85em'>chr(65) </pre>
              <pre style='font-size: 0.85em'>A</pre>
              <pre style='font-size: 0.85em'>chr(66) </pre>
              <pre style='font-size: 0.85em'>B</pre>
              </div>
              
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Special Characters  </h3>
              <p>To represent keyboard actions that are difficult to type, several special characters are used. Here are a few common special characters. </p>
              <table class='table'>
                  <tr>
                    <th>Character</th>
                    <th>Meaning </th>
                  </tr>
                  <tr>
                    <td>&#92;n</td>
                    <td>New Line (Enter) </td>
                  </tr>
                  <tr>
                    <td>&#92;t</td>
                    <td>Tab</td>
                  </tr>
                  <tr>
                    <td>&#92;"</td>
                    <td>Displays a quote </td>
                  </tr>
                  <tr>
                    <td>&#92;&#92;</td>
                    <td>Displays a backslash  </td>
                  </tr>
                  
                </table>
              </div>
  
               <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Strings  </h3>
              <p>Strings are one or more characters in a row, we show the beginning and end of a string by using quotations. Strings can be denoted in several methods: </p>
              <ul class='list'>
              <li>"I am a string"  </li>
              <li>'I am also a string' </li>
              <li>'''This is also a string'''  </li>
  
              </ul>
              <p>The key is to have the same beginning and ending quotation to show the matched pair. We will usually use double quotes ("") for strings since that is the standard in other programming languages. </p>
              </div>
              
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Boolean   </h3>
              <p>Boolean types have two possible states: </p>
              <ul class='list'>
              <li>True  </li>
              <li>False </li>
  
              </ul>
              <p>We use booleans to make decisions or evaluate a criteria. Anything that can be answered as a yes or no can be stored as a boolean value. </p>
              </div>
  
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
  
  
              .notes {
                margin-top: 20px;
              }
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .table {
                display: flex;
                justify-content: center;
                padding: 20px;
              }
  
              .table th, .table td {
                border: 1px solid;
              }
  
              .table th, .table td {
                padding: 20px;
              }
              </style>
              `,
            },
            {
              id: 2,
              topic: "Converting Types",
              content: `
              <div class='script-compiled'>
                  <h2 style='font-weight: 700; font-size: 1.25em'>Converting types </h2>
                  <p>Since the computer is super picky about what type of data is in each variable, sometimes we will have to tell the computer, “no, don’t treat it like that, make it be something else!” For example, the number 5 is usually a number. But if you put it into quotes, the computer will treat it as a string – just like it would treat anything else in quotes.  </p>
                  <p>In this video, you’ll see some errors that happen when you try to do something the computer can’t do because the data is the “wrong” type, and how to convert data to different types. You’ll also learn how to use some data types together. You can follow along in your own vscode editor if you’d like to practice. </p>
                 <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Lesson+2+-+Type+Conversion.mp4"
                    type="video/mp4">
                </video>
              </div>
              <div class='notes'>
              <p>Notes as shown in the video: </p>
              <h3 style='font-weight: 700; font-size: 1.25em'>Converting types   </h3>
              <p>Often when we get input, we accept whatever they type as a string. If the value they gave us was actually a number, we will have to convert the data type to do mathematical manipulation. </p>
              <pre style='font-size: 0.85em'>
            \nx = "5" \ny = x + 10 \n\nTraceback (most recent call last):\n File "<stdin>", line 1, in <module> \nTypeError: can only concatenate str (not "int") to str
              </pre>
              <p>To avoid this error we must first convert one of the data types to match. In this case, we want to convert the string "5" to the integer 5. </p>
              <pre style='font-size: 0.85em'>
            \nx = "5" \ny = int(x) + 10 \nprint(y) \n15 
              </pre>
  
               <p>You cannot convert a string to a number if the letters of the string are not actually numbers. You will get an error. </p>
              <pre style='font-size: 0.85em'>
            \nint("Hello")  \n\nTraceback (most recent call last):\nFile "<stdin>", line 1, in <module>  \nValueError: invalid literal for int() with base 10: 'Hello' 
              </pre>
              </div>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Combining Types - Numbers </h3>
              <p>Data Types can sometimes be combined without a type change involved. If we do this, what would the resulting type be? </p>
              <pre style='font-size: 0.85em'>
              \nx = 5 \ny = 7.2 \nz = x + y  \nprint(z)\n12.2\n\ntype(z)\n&lt;class 'float'&gt;
              </pre>
              <p>Here we can see that an integer and a floating-point number are added. The result is a float. If we had converted the result to an integer, data would have been lost. An integer cannot hold the decimal portion of the floating-point number and that data would have been dropped. </p>
              <p>Sometimes, it is okay to lose the decimal portion of a floating point number. </p>
              <pre style='font-size: 0.85em'>
              \nx = 7.2 \ny = int(x) \nprint(y)\n7
              </pre>
              <p>Note: the decimal portion is not rounded, it is just dropped. </p>
              <pre style='font-size: 0.85em'>
              \nprint( int(8.8) ) \n8
              </pre>
              </div>
              
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Combining Types - Letters </h3>
              <p>Two strings can be joined with the + operator. </p>
              <pre style='font-size: 0.85em'>
              \nprint("Hello " + "world")  \nHello world
              </pre>
              
              <p>We can also join a string and a character with the same method. </p>
              <pre style='font-size: 0.85em'>
              \nprint("Hello " + '!') \nHello!
              </pre>
              
              <p>You cannot join a number with a string, you will get an error.  </p>
              <pre style='font-size: 0.85em'>
              \nprint("Hello " + 1) \nTraceback (most recent call last):\n File "<stdin>", line 1, in <module> \nTypeError: can only concatenate str (not "int") to str 
              </pre>
              <p>If you want to do this, you can convert the number to become a string. This works with both literal numbers and with variables that are numbers. It also works with both integers and floating-point numbers. </p>
              <pre style='font-size: 0.85em'>
              \nprint("Hello" + str(1)) \nHello1
              </pre>
              
              <pre style='font-size: 0.85em'>
              \nx = 5 \nprint("Hello" + str(x)) \nHello5
              </pre>
              
              <pre style='font-size: 0.85em'>
              \ny = 2.8 \nprint("Hello" + str(y))\nHello2.8
              </pre>
              </div>
              </div>
              <style>
              .script-compiled p {
                margin: 10px 0;
              }
  
  
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .notes .sublist {
                list-style-type: circle;
                padding-left: 22px;
              }
              </style>
              `,
            },
            {
              id: 3,
              topic: "Quiz",
              type: "quiz",
            },
            {
              id: 4,
              topic: "Lab 2 - Magic 8 Ball",
              content: `
              <div class='madlib'>
              <h2 style='font-weight: 700; font-size: 1.25em'>Lab 2 - Magic 8 Ball </h2>
              <p>
              In this module you learned about simple data types. There are some more complicated data types, such as when you want to store data in a list. In this lab, you’ll learn how to create and use a list, to make a program that is a model of the Magic 8 Ball. If you don’t know or remember about the Magic 8 Ball – a plastic sphere that would answer questions – you can read the Wikipedia page about it <span><a href='https://en.wikipedia.org/wiki/Magic_8_Ball' target='_blank'>https://en.wikipedia.org/wiki/Magic_8_Ball</a></span> or play someone else’s computer model <span><a href='https://www.horoscope.com/us/games/divination/game-magic-8-ball.aspx' target='_blank'>https://www.horoscope.com/us/games/divination/game-magic-8-ball.aspx</a></span>  </p>
              <p>This video will get you started on the lab:</p>
              <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/python+lab+videos/Lab-2---Magic-8-Ball.mp4"
                    type="video/mp4">
                </video>
              </div>
              <p>Here are the notes as shown in the video: </p>
              <p>Create a program that will allow the user to ask a question, then provide a random response like a Magic 8 Ball. </p>
              <p>A traditional Magic 8 Ball has 20 possible answers: </p>
              <ul class='list'>
              <li>As I see it, yes.</li>
              <li>Ask again later.</li>
              <li>Better not tell you now.</li>
              <li>Cannot predict now.</li>
              <li>Concentrate and ask again.</li>
              <li>Don’t count on it.</li>
              <li>It is certain.</li>
              <li>It is decidedly so.</li>
              <li>Most likely.</li>
              <li>My reply is no.</li>
              <li>My sources say no.</li>
              <li>Outlook not so good.</li>
              <li>Outlook good.</li>
              <li>Reply hazy, try again.</li>
              <li>Signs point to yes.</li>
              <li>Very doubtful.</li>
              <li>Without a doubt.</li>
              <li>Yes.</li>
              <li>Yes – definitely.</li>
              <li>You may rely on it.</li>
              </ul>
              <p>You may select to use these or answers you have created. They key is that they are given a random answer to the question they ask. </p>
              <p>How to create a list of possible answers: </p>
              <pre style='font-size:0.85em'>answers = ["thing 1", "thing 2"] # Each item must be in quotes, separated by a comma.</pre>
              <p>At the top of your code, you need to include the following line to get access to the random utilities. </p>
              <pre style='font-size:0.85em'>import random </pre>
              <p>Since we imported random at the top of our file, we can use the following code to select a random item from the list. </p>
              <pre style='font-size:0.85em'>randomNum = random.randint(0, 2)\nresponse = answers[randomNum]   </pre>
              <p>Your program should do the following: </p>
              <ul class='list'>
              <li>Ask the user a question</li>
              <li>Randomly select an answer from your list of possible answers</li>
              <li>Respond to the asked question with the random answer</li>
              </ul>
              <p>When you are done, submit the “join link” to your  project. </p>
              </div>
              <style>
  
              .madlib a {
                text-decoration: underline;
              }
              .madlib p {
                margin: 20px 0;
              }
              .code pre {
                font-size: 0.85em;
              }
  
              .list {
                list-style-type: disc;
                padding: 0 20px;
              }
              </style>
              `,
            },
          ],
        },
        {
          id: 4,
          name: "Control Structures",
          type: "python3",
          contents: [
            {
              id: 1,
              topic: "Introduction to Control Structures",
              content: `
              <div class='data-rep'>
                <h2 style='font-weight: 700; font-size: 1.25em'>Introduction to Control Structures </h2>
                <p>
  So far, all of the programs you’ve written have just run each line of code in order. However, we often want more control over how a program runs. For example, when you log in to the Work-Learn website, it checks your username against the list of users and gives you the permission of a student, rather than the permissions of a teacher. In order to do this, we use something called Boolean Logic. In this video, you will learn how to get the computer to evaluate a variable (that is, look at the value of the variable) to tell you if a condition is true or false.  </p>
                <p>Video: </p>
                 <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Control+Structures/Lesson+3+-+Control+Structures.mp4"
                    type="video/mp4">
                </video>
              </div>
                <div class='notes'>
              <p>Notes as shown in the video: </p>
              <h3 style='font-weight: 700; font-size: 1.25em'>Objectives </h3>
              <p>Discuss and demonstrate: </p>
              <ul class='list'>
              <li>Conditions, boolean logic, logical operators  </li>
              <li>Ranges  </li>
              <li>numerical types  </li>
              <li>Control statements
                <ul>
                  <li>if-else </li>
                  <li>for loops </li>
                  <li>while loops </li>
                </ul>
              </li>
  
              <li>Short-circuit evaluation  </li>
              </ul>
              </div>
  
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Boolean Logic </h3>
              <p>Boolean values can only be one of two states:  </p>
              <ul>
              <li>True</li>
              <li>False</li>
              </ul>
              <p>Boolean values are used to make decisions in various control structures. The most common way to create a boolean value is through a comparison. </p>
              <pre>10 < 15 </pre>
              <pre>True</pre>
              <pre style='margin-top: 20px'>10 < 15 </pre>
              <pre>False</pre>
              <pre style='margin-top: 20px'>age = 19 </pre>
              <pre>age >= 21 </pre>
              <pre>False </pre>
  
              <p>Here are some common boolean comparison operators </p>
  
              <table class='table'>
                  <tr>
                    <th>Operator</th>
                    <th>Description </th>
                  </tr>
                  <tr>
                    <td>&lt;</td>
                    <td>Strict less than </td>
                  </tr>
                  <tr>
                    <td>&gt;</td>
                    <td>Strict greater than </td>
                  </tr>
                  <tr>
                    <td>&lt;=</td>
                    <td>Less than OR equal </td>
                  </tr>
                  <tr>
                    <td>&gt;=</td>
                    <td>Greater than OR equal </td>
                  </tr>
                  <tr>
                    <td>==</td>
                    <td>Equal </td>
                  </tr>
                  <tr>
                    <td>!=</td>
                    <td>NOT equal</td>
                  </tr> 
                </table>
  
                <p>We also join two or more boolean expressions together with and and or operators. </p>
  
  
                <table class='table'>
                  <tr>
                    <th>Statement 1 </th>
                    <th>Statement 2  </th>
                    <th>AND </th>
                    <th>OR  </th>
                  </tr>
                  <tr>
                    <td>True</td>
                    <td>True</td>
                    <td>True</td>
                    <td>True</td>
                  </tr>
                  
                  <tr>
                    <td>True</td>
                    <td>False</td>
                    <td>False</td>
                    <td>True</td>
                  </tr>
                  
                  <tr>
                    <td>False</td>
                    <td>True</td>
                    <td>False</td>
                    <td>True</td>
                  </tr>
  
                  <tr>
                    <td>False</td>
                    <td>False</td>
                    <td>False</td>
                    <td>False</td>
                  </tr>
                </table>
  
              </div>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Examples </h3>
              <pre>x = 5  </pre>
              <pre>y = 10 </pre>
              <pre>x &lt; 10 and y &gt; 5 </pre>
              <pre>True  </pre>
              <pre style='margin-top: 20px'>x &lt; 10 or y &lt; 0  </pre>
              <pre>True </pre>
              <pre style='margin-top: 20px'>x &lt; 10 and y &lt; 0  </pre>
              <pre>age &gt;= 21 </pre>
              <pre>False </pre>
              </div>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Short-circuit evaluation   </h3>
              <p>Since the result of an <strong>and</strong> statement is only True if both the first and second elements are True, for the sake of efficiency the second part of the statement is only evaluated if the first part is True. </p>
              <pre style='font-size: 0.85em'>age = 19 </pre>
              <pre style='font-size: 0.85em'>hour = 23 </pre>
              <pre style='font-size: 0.85em'>age &lt; 18 and hour &gt; 22 </pre>
              <pre style='font-size: 0.85em'>False </pre>
              <p>The hour is not evaluated since the first statement is False. This is often used to avoid potential errors. </p>
              <pre>import math </pre>
              <pre>x = -20  </pre>
              <pre>math.sqrt(x)  </pre>
              <pre style='margin-top:20px'>Traceback (most recent call last):   </pre>
              <pre>  File "<stdin>", line 1, in <module>   </pre>
              <pre>ValueError: math domain error    </pre>
              <pre style='margin-top:20px'>x &gt;= 0 and math.sqrt(x) &lt; 5    </pre>
              <pre>False    </pre>
              <pre style='margin-top:20px'>x = 16   </pre>
              <pre style='margin-top:20px'>x &gt;= 0 and math.sqrt(x) &lt; 5    </pre>
              <pre>True</pre>
              <p>The same is true with <strong>or</strong> statements. This time, a True statement in the first position will result in a True result. As a result, the second expression is not evaluated if the first expression is True. </p>
              <p>There are many reasons we may want to short circuit an operation, especially if it is a difficult or costly operation. </p>
              </div>
  
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
  
  
              .notes {
                margin-top: 20px;
              }
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .notes .list ul {
                list-style-type: circle;
                padding: 10px 20px;
              }
  
              .notes pre {
                font-size: 0.85em;
              }
  
              .table {
                display: flex;
                justify-content: center;
                padding: 20px;
              }
  
              .table th, .table td {
                border: 1px solid;
              }
  
              .table th, .table td {
                padding: 20px;
              }
              </style>
              `,
            },
            {
              id: 2,
              topic: "Conditional Statements",
              content: `
              <div class='script-compiled'>
                  <h2 style='font-weight: 700; font-size: 1.25em'>Conditional Statements</h2>
                  <p>Now you have learned how to evaluate one or more variables, but the reason to do that is so you can control whether or not a piece of code runs. In this video, you’ll learn one way to tell the computer to run or skip a piece of code, using something called a conditional (also known as if statements or if-else statements) </p>
                  <p>Video:</p>
                 <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Control+Structures/Lesson+3+-+If+Statements.mp4"
                    type="video/mp4">
                </video>
              </div>
              <div class='notes'>
              <p>Notes as shown in the video: </p>
              <h3 style='font-weight: 700; font-size: 1.25em'>if-else statements   </h3>
              <p>Note: Indentation matters </p>
              <pre style='font-size: 0.85em'>if <condition>: </pre>
              <pre style='font-size: 0.85em'>  statement1 </pre>
              <pre style='font-size: 0.85em'>  statement2 </pre>
              <pre style='font-size: 0.85em'>  etc... </pre>
  
              <p>The indented statements will only execute if the condition is true. </p>
              <pre style='font-size: 0.85em'>x = 5 </pre>
              <pre style='font-size: 0.85em'>if x > 2: </pre>
              <pre style='font-size: 0.85em'>  print ("The statement x > 2 is TRUE!") </pre>
              <pre style='font-size: 0.85em'>print("This line happens either way.")  </pre>
  
               <p>What do you do if the if condition is not true? </p>
  
              <pre style='font-size: 0.85em'>
  grade = input("Enter your grade: ") 
  
  grade = int(grade) #convert from string to integer 
  
  
  if(grade >= 70): 
    print("You passed!") 
  
  else: 
    print("You need to study more.") 
  
  
  What if there are multiple options? 
  
  if(grade >= 90): 
    print("You got an A") 
  
  elif(grade > 80): 
    print("You got a B") 
  
  elif(grade > 70): 
    print("You got a C") 
  
  elif(grade > 60): 
    print("You got a D") 
  
  else: 
    print("You got a F") 
              </pre>
              </div>
              
              </div>
              <style>
              .script-compiled p {
                margin: 10px 0;
              }
  
  
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .notes pre {
                font-size: 0.85em;
              }
  
              .notes .sublist {
                list-style-type: circle;
                padding-left: 22px;
              }
              </style>
              `,
            },
            {
              id: 3,
              topic: "Loops",
              content: `
              <div class='script-compiled'>
                  <h2 style='font-weight: 700; font-size: 1.25em'>Loops</h2>
                  <p>If statements are not the only control structure. Another way to control the program is by writing a loop where something happens over and over. In this video you will learn about two kinds of loops. You use a for loop when you need to run a piece of code some specific number of times. You use a while loop when you need the code to run while a condition is true. You will also hear about infinite loops, which never end (and are a problem – you always want your code to have an ending condition!) </p>
                  <p>Video:</p>
                 <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Control+Structures/Lesson+3+-+Loops.mp4"
                    type="video/mp4">
                </video>
              </div>
              <div class='notes'>
              <p>Notes as shown in the video: </p>
              <h3 style='font-weight: 700; font-size: 1.25em'>for loops </h3>
              <p>For loops in Python will iterate across a list. The variable you create for the loop will be each of the items in the list in order. </p>
              <pre font-style='0.85em'>
  for i in ages: 
      print(i) 
  
  19 
  18 
  22 
  20 
              </pre>
              </div>
              
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Ranges </h3>
              <p>The range function is an easy way to create a list for our loop to iterate over. </p>
              <pre font-style='0.85em'>
  range(10) -> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] 
  
  for i in range(10): 
      print(i) 
  </pre> 
              <p>You can also give the range function a start, stop, and increment amount. </p>
              <pre font-style='0.85em'>
  #range(start, end, increment) 
  #Example 
  for i in range(10, 20, 2): 
      print(i) 
              </pre>
  
              </div>
              
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>while loops  </h3>
              <p>A while loop works like an if statement where a boolean expression will determine if the loop continues. Every loop should have 3 important things. </p>
              <ul class='list'>
              <li>Initialize a variable </li>
              <li>Check the variable </li>
              <li>Change the variable... in a way that will eventually end. </li>
              </ul>
              <pre font-style='0.85em'>
  x = 10 #initialize 
  
  while (x > 0):  #check the variable 
      print(x) 
      x = x - 1   #change the variable 
  </pre> 
              <p>Loops do not need to be determined by the value of a number, it could be a state that we are waiting to change.  </p>
  
              <pre font-style='0.85em'>
  play = "Yes" # initialize 
  
  while (play == "Yes"): # check the variable 
    <some game goes here> 
    play = input("Play again? (Yes/No): ") #change the variable 
  
  print("End of the game.") 
              </pre>
  
              </div>
              
  
              </div>
              <style>
              .script-compiled p {
                margin: 10px 0;
              }
  
  
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .notes pre {
                font-size: 0.85em;
              }
  
              .notes .sublist {
                list-style-type: circle;
                padding-left: 22px;
              }
              </style>
              `,
            },
            {
              id: 4,
              topic: "Quiz",
              type: "quiz",
            },
            {
              id: 5,
              topic: "Lab 3a - Temperature Conversion",
              content: `
              <div class='madlib'>
              <h2 style='font-weight: 700; font-size: 1.25em'>Lab 3a - Temperature Conversion </h2>
              <p>
              In this module, you learned about “control of flow” or how to control the way your program runs (that is, flows). Thinking back to the computational thinking module, you could create a flowchart to show how your program runs, with a diamond for each loop or conditional statement – that’s why it’s called control of flow. </p>
              <p>In this lab, the first of two for this module,  you will create a program that asks the user for a temperature in Fahrenheit and converts it to Celsius. This will also give you practice thinking about number precision, that is, how to control how many decimal places a number has.  </p>
              <p>The video will also show you how to comment your program – adding notes that a person can read and the computer will ignore. You will also see a function – a chunk of code with a name. You’ll learn more about functions in a future module, in this lab you will modify the starter code and just use the function that is already there.  </p>
              <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/python+lab+videos/Lab-3a---Temp-Convert.mp4"
                    type="video/mp4">
                </video>
              </div>
              <p>Here are the notes as shown in the video: </p>
              <p>Precision</p>
              <p>When dealing with decimal values, it is often useful to round data to make it more presentable to the user. Python has several methods to round, here are a few </p>
              <pre style='font-size: 0.85em'>
  num = 3.1415926  
  num = num * 100 #Multiply by 100  
  num = int(num) #drop the decimal part  
  num = num / 100.0 #divide by 100 to get 2 decimal points back  
  print(num)
              </pre>
              <p>What are the problems with this method?</p>
              <pre style='font-size: 0.85em'>
  num = 3.1415926  
  num = round(num, 2) # rounds to two places  
  print(num) 
              </pre>
              <p>Are there any issues with this method?</p>
              <h3 style='font-weight: 700'>Lab Assignment</h3>
              <p>Create a Python project that asks the user for a temperature in Fahrenheit, convert to Celsius. 
  Copy/Paste the starter code linked: </p>
              <a href='https://github.com/phuclinh9802/aied-staging-v2/blob/main/TempConvert.py' target='_blank'>https://github.com/phuclinh9802/aied-staging-v2/blob/main/TempConvert.py</a>
              <p>You will need to look up the conversion factor online.</p>
              </div>
              <style>
  
              .madlib a {
                text-decoration: underline;
              }
              .madlib p {
                margin: 20px 0;
              }
              .code pre {
                font-size: 0.85em;
              }
  
              .list {
                list-style-type: disc;
                padding: 0 20px;
              }
              </style>
              `,
            },
            {
              id: 6,
              topic: "Lab 3b: Rock – Paper – Scissors",
              content: `
              <div class='madlib'>
              <h2 style='font-weight: 700; font-size: 1.25em'>Lab 3b: Rock – Paper – Scissors </h2>
              <p>
              You may have played Rock-Paper-Scissors when you needed to settle an argument with another person, such as children fighting over the last piece of cake. If you’ve never encountered this game before, there are instructions at WikiHow: <a href='https://www.wikihow.com/Play-Rock,-Paper,-Scissors' target='_blank'>https://www.wikihow.com/Play-Rock,-Paper,-Scissors</a> or you can play against the computer by clicking on the rock, paper, or scissors at this online version: <a href='https://www.rock-paper-scissors-game.com' target='_blank'>https://www.rock-paper-scissors-game.com</a>.  </p>
              <p>To create this game, you’ll use your new knowledge of conditionals and loops.  </p>
              <p>The video will also show you how to comment your program – adding notes that a person can read and the computer will ignore. You will also see a function – a chunk of code with a name. You’ll learn more about functions in a future module, in this lab you will modify the starter code and just use the function that is already there.  </p>
              <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/python+lab+videos/Lab-3b---RPS.mp4"
                    type="video/mp4">
                </video>
              </div>
              <p>Here are the notes as shown in the video: </p>
              <p>We will be creating the class game of Rock, Paper, Scissors. </p>
              <p>Copy/Paste the starter code (Github link attached) into a new Python project in VSCode.  </p>
              <p>Example Game: </p>
              <pre style='font-size: 0.85em'>
  Select Rock, Paper, or Scissors (R, P, S): R  
  Player chose: Rock  
  Computer chose: Scissors  
  You win!  
  Would you like to play again? (Y/N): Y  
  Select Rock, Paper, or Scissors (R, P, S): R 
   
  Player chose: Rock  
  Computer chose: Paper  
  You lose.  
  Would you like to play again? (Y/N): N  
   
   
  Final Stats: 
   
  Wins Ties Losses  
  ---- ---- ------  
   1    0     1 
              </pre>
              <p>Starter Code: </p>
              <a href='https://github.com/phuclinh9802/aied-staging-v2/blob/main/RPS.py' target='_blank'>https://github.com/phuclinh9802/aied-staging-v2/blob/main/RPS.py</a>
              </div>
              <style>
  
              .madlib a {
                text-decoration: underline;
              }
              .madlib p {
                margin: 20px 0;
              }
              .code pre {
                font-size: 0.85em;
              }
  
              .list {
                list-style-type: disc;
                padding: 0 20px;
              }
              </style>
              `,
            },
          ],
        },
        {
          id: 5,
          name: "Graphics & Functions",
          type: "python3",
          contents: [
            {
              id: 1,
              topic: "Graphics and Functions",
              content: `
              <div class='data-rep'>
                <h2 style='font-weight: 700; font-size: 1.25em'>Graphics and Functions </h2>
                <p>
  In this video you will learn about something called turtle graphics, that is, how to program the computer to draw pictures. One way to think of this is thinking of the cursor as a tiny little turtle holding a pen. You tell the turtle where to go and it draws as it goes. You will see how to “import” the turtle package – a program someone else wrote that makes the turtle for you. You’ll also learn about how to create functions and practice loops. You should definitely read through the notes, because the video focuses on how to write the code but the notes also explain what these things (like functions) even are.</p>
                 <p>Video: </p>
                 <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Graphics/Lesson+4+-+Turtle+Graphics.mp4"
                    type="video/mp4">
                </video>
              </div>
                <div class='notes'>
              <p>Notes as shown in the video: </p>
              <h3 style='font-weight: 700; font-size: 1.25em'>Objectives </h3>
              <ul class='list'>
              <li>Demonstrate Turtle Graphics </li>
              <li>Create algorithms with Turtle </li>
              </ul>
              </div>
  
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Turtle Graphics  </h3>
              <p>Drawing with a "turtle" is a popular way to visualize algorithms. It was part of the original Logo programming language developed in the 1960s by Wally Feruzig and Seymour Papert. Originally, a turtle was a robot that used a marker to make lines on a sheet of paper.   </p>
  <pre>import turtle 
  bob = turtle.Turtle() #bob is a Turtle 
  bob.forward(100) 
  </pre>
              </div>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Turtle Graphics  </h3>
              <p>What can you do with a turtle? Any of these methods work: </p>
  
              <table class='table'>
          <tr>
              <th>Method</th>
              <th>Parameter</th>
              <th>Description</th>
          </tr>
          <tr>
              <td>Turtle()</td>
              <td>None</td>
              <td>Creates and returns a new turtle object</td>
          </tr>
          <tr>
              <td>forward()</td>
              <td>amount</td>
              <td>Moves the turtle forward by the specified amount</td>
          </tr>
          <tr>
              <td>backward()</td>
              <td>amount</td>
              <td>Moves the turtle backward by the specified amount</td>
          </tr>
          <tr>
              <td>right()</td>
              <td>angle</td>
              <td>Turns the turtle clockwise</td>
          </tr>
          <tr>
              <td>left()</td>
              <td>angle</td>
              <td>Turns the turtle counter clockwise</td>
          </tr>
          <tr>
              <td>penup()</td>
              <td>None</td>
              <td>Picks up the turtle’s Pen</td>
          </tr>
          <tr>
              <td>pendown()</td>
              <td>None</td>
              <td>Puts down the turtle’s Pen</td>
          </tr>
          <tr>
              <td>up()</td>
              <td>None</td>
              <td>Picks up the turtle’s Pen</td>
          </tr>
          <tr>
              <td>down()</td>
              <td>None</td>
              <td>Puts down the turtle’s Pen</td>
          </tr>
          <tr>
              <td>color()</td>
              <td>Color name</td>
              <td>Changes the color of the turtle’s pen</td>
          </tr>
          <tr>
              <td>fillcolor()</td>
              <td>Color name</td>
              <td>Changes the color of the turtle will use to fill a polygon</td>
          </tr>
          <tr>
              <td>heading()</td>
              <td>None</td>
              <td>Returns the current heading</td>
          </tr>
          <tr>
              <td>position()</td>
              <td>None</td>
              <td>Returns the current position</td>
          </tr>
          <tr>
              <td>goto()</td>
              <td>x, y</td>
              <td>Move the turtle to position x,y</td>
          </tr>
          <tr>
              <td>begin_fill()</td>
              <td>None</td>
              <td>Remember the starting point for a filled polygon</td>
          </tr>
          <tr>
              <td>end_fill()</td>
              <td>None</td>
              <td>Close the polygon and fill with the current fill color</td>
          </tr>
          <tr>
              <td>dot()</td>
              <td>None</td>
              <td>Leave the dot at the current position</td>
          </tr>
          <tr>
              <td>stamp()</td>
              <td>None</td>
              <td>Leaves an impression of a turtle shape at the current location</td>
          </tr>
          <tr>
              <td>shape()</td>
              <td>shapename</td>
              <td>Should be ‘arrow’, ‘classic’, ‘turtle’ or ‘circle’</td>
          </tr>
      </table>
  
    
  
              </div>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Algorithms with Turtles  </h3>
              <p>How can we use these commands to make shapes? </p>
              <p>An Algorithm is a process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer. </p>
  
              <pre>bob = turtle.Turtle() 
  
  for i in range(4): 
    bob.forward(100) 
    bob.right(90) </pre>
  <img src='/images/graphic1.png' alt='graphic' />
  <p>How could we make the following shape: </p>
  <img src='/images/graphic2.png' style='width: 350px' alt='graphic' />
  
              </div>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Functions  </h3>
              <p>In python, we can define functions. This can be useful in removing code that is repeated in multiple places in your program and placing it in a function. Functions can be used multiple times throughout your code. </p>
              <pre style='font-size: 0.85em'>def drawSquare(myTurtle): 
    for i in range(4): 
      myTurtle.forward(100) 
      myTurtle.right(90)</pre>
              <p>Notice in this function that the myTurtle is in the parenthesis. This is an argument, you will have to put the name of your turtle in the parenthesis when you call this function. </p>
              <pre>bob = turtle.Turtle() 
  drawSquare(bob) </pre>
              <p>Finally, we can add parameters to make the drawSquare function more general. In this case, we will add a second parameter for the size of the sides. </p>
              <pre>def drawSquare(myTurtle, size): 
    for i in range(4): 
      myTurtle.forward(size) 
      myTurtle.right(90)</pre>
              </div>
  
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
  
  
              .notes {
                margin-top: 20px;
              }
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .notes .list ul {
                list-style-type: circle;
                padding: 10px 20px;
              }
  
              .notes pre {
                font-size: 0.85em;
              }
  
              .table {
                display: flex;
                justify-content: center;
                padding: 20px;
              }
  
              .table th, .table td {
                border: 1px solid;
              }
  
              .table th, .table td {
                padding: 20px;
              }
              </style>
              `,
            },
            {
              id: 2,
              topic: "Lab: Turtle Graphics",
              content: `
              <div class='madlib'>
              <h2 style='font-weight: 700; font-size: 1.25em'>Lab: Turtle Graphics</h2>
              <p>
              In this assignment, you will use turtle graphics to write a function and use it to draw a generalized polygon. A polygon is a closed shape with at least three sides. For example, a triangle is a polygon with exactly three sides and a rectangle is a polygon with four sides. Your goal is to write the function with a parameter that is a number, and draw a polygon with that many sides. This will involve a little bit of math, and you are welcome to use the internet to figure out how to calculate the angles between the lines. </p>
              <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Graphics/Lab+4+-+Turtle+Graphics.mp4"
                    type="video/mp4">
                </video>
              </div>
              <p>Here are the notes as shown in the video: </p>
              <p>Turtle Graphics</p>
              <p>Create a new Python project (with Turtle graphics) in VS Code.</p>
              <p>Create a function that will draw a shape with a given turtle (needed to draw) as well as the number of sides. You'll need to calculate the amount to turn based on the number of sides</p>
              <p>Copy/Paste the code below to get started. You may need to adjust spacing to ensure that it works. </p>
              <pre style='font-size: 0.85em'>
  import turtle 
   
  def drawSquare(myTurtle, size): 
    for i in range(4): 
      myTurtle.forward(size) 
      myTurtle.right(90) 
   
   
  def drawPolygon(turtle, sides): 
    #TODO - Implement function 
   
  def main(): 
    myTurtle = turtle.Turtle() 
    drawPolygon(myTurtle, 5) #draws a pentagon 
    drawPolygon(myTurtle, 8) #draws an octogon 
              </pre>
              </div>
              <style>
  
              .madlib a {
                text-decoration: underline;
              }
              .madlib p {
                margin: 20px 0;
              }
              .code pre {
                font-size: 0.85em;
              }
  
              .list {
                list-style-type: disc;
                padding: 0 20px;
              }
              </style>
              `,
            },
          ],
        },
        {
          id: 6,
          name: "Strings",
          type: "python5",
          contents: [
            {
              id: 1,
              topic: "Introduction to Strings",
              content: `
              <div class='data-rep'>
                <h2 style='font-weight: 700; font-size: 1.25em'>Introduction to Strings</h2>
                <p>
  In the lesson on data types, you were briefly introduced to strings. There are special things you can do with a string that you can’t do with other variables. In this video, you will learn several ways to work with strings. you will learn how to access single letters by using the index position. That’s the place in the word where the letter is. The numbering starts from 0, so the first letter in a word is letter number 0, the second letter is number 1, and so on. You will also learn how to access several letters, by slicing a string into parts.               
                </p>
                <p>Video: </p>
                 <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Strings/Lesson+5+-+Strings.mp4"
                    type="video/mp4">
                </video>
              </div>
                <div class='notes'>
              <p>Notes as shown in the video: </p>
              <h3 style='font-weight: 700; font-size: 1.25em'>Objectives </h3>
              <ul class='list'>
              <li>Discuss & demonstrate string manipulations:  
                <ul class='sublist>
                <li>subscript operator </li>
                <li>indexing </li>
                <li>slicing a string </li>
                </ul>
              
              </li>
              <li>Converting strings to numbers </li>
              <li>Converting numbers to strings </li>
              </ul>
              </div>
  
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Strings   </h3>
              <p>In Python, Strings are lists of bytes representing Unicode characters. However, Python does not have a character data type, a single character is simply a string with a length of 1.</p>
  <pre>
  print("Hello") 
  word = "Hello" 
  print(word) 
  </pre>
              </div>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Indexing </h3>
              <p>Square brackets can be used to access elements of the string. Since a string is a list of individual letters, we can look at a spot in the list using the index position in a square bracket. This list is zero-indexed, meaning that the first spot is str[0].  </p>
  <pre>
  word = "hello" 
  print(word[1]) 
  print("hello"[1]) 
  </pre>
  </div><div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Slicing  </h3>
              <p>Beyond looking at a single letter of a string, we can look at a selected range of the string. This range is denoted by a square bracket with the starting index (inclusive) and the ending index (exclusive). </p>
  <pre>
  word = "strawberry" 
  print(word[2:5]) 
  </pre>
    
  
              </div>
             
  
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
  
  
              .notes {
                margin-top: 20px;
              }
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .sublist {
                padding: 10px 20px;
              }
              .notes .list ul {
                list-style-type: circle;
                padding: 10px 20px;
              }
  
              .notes pre {
                font-size: 0.85em;
              }
  
              .table {
                display: flex;
                justify-content: center;
                padding: 20px;
              }
  
              .table th, .table td {
                border: 1px solid;
              }
  
              .table th, .table td {
                padding: 20px;
              }
              </style>
              `,
            },
            {
              id: 2,
              topic: "Looping in Strings",
              content: `
              <div class='notes'>
              <h2 style='font-weight: 700; font-size: 1.25em'>Looping in Strings</h2>
              <p>
              You already learned about loops in the lesson about control structures. In this lesson you will learn how to loop through a string. This is a nice reminder about how loops work. It is also useful because sometimes we need to work with each character in a string. It also will prepare you for the next unit on lists, because a string is a list of characters.</p>
              <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Strings/Lesson+5+-+Looping+in+Strings.mp4"
                    type="video/mp4">
                </video>
              </div>
              <p>Here are the notes as shown in the video: </p>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Looping in Strings    </h3>
              <p>Since a string is a list of characters, we can iterate across this list. One method is to use the index positions from zero to the length of the string. </p>
  <pre>
  word = "Hello" 
  index = 0 
  while(index < len(word)): 
      print(word[index]) 
  </pre>
  <p>In python, the for-loop iterates across a list, we can use the string as a list. </p>
  <pre>
  sentence = "This is a test" 
  for ch in sentence: 
      print(ch)
  </pre>
  <p>We can use the index position to test elements of the word... in this case we are trying to determine if a word is a palindrome. A palindrome is a word (or phrase) that is the same forward and backward. </p>
  <pre>
  def isPalendrome(word): 
    # check that the first letter is the same as the last 
    # continue checking 2nd letter to 2nd from end, etc. 
  
    return False 
  
  def main(): 
    word = input("Enter a word: ") 
  
    if isPalendrome(word): 
      print("It is a palindrome") 
    else: 
      print("It is not a palindrome") 
  
  main() 
  </pre>
              </div>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>String Methods  </h3>
              <table class='table'>
          <tr>
              <th>Function </th>
              <th>Meaning </th>
          </tr>
          <tr>
              <td>str.capitalize() </td>
              <td>Copy of str with only the first character capitalized </td>
          </tr>
          <tr>
              <td>str.capwords() </td>
              <td>Copy of str; first character of each word capitalized </td>
          </tr>
          <tr>
              <td>str.center(width) </td>
              <td>Center str in a field of given width </td>
          </tr>
          <tr>
              <td>str.count(sub) </td>
              <td>Count the number of occurrences of sub in str </td>
          </tr>
          <tr>
              <td>str.find(sub) </td>
              <td>Find the first position where sub occurs in str </td>
          </tr>
          <tr>
              <td>str.join(list) </td>
              <td>Concatenate list of strings into one large string </td>
          </tr>
          <tr>
              <td>str.ljust(width) </td>
              <td>Like center, but str is left-justified </td>
          </tr>
          <tr>
              <td>str.lower() </td>
              <td>Copy of str in all lowercase characters </td>
          </tr>
          <tr>
              <td>str.lstrip() </td>
              <td>Copy of str with leading whitespace removed </td>
          </tr>
          <tr>
              <td>str.replace(oldsub, newsub) </td>
              <td>Replace occurrences of oldsub in str with newsub </td>
          </tr>
          <tr>
              <td>str.rfind(sub) </td>
              <td>Like find, but returns the rightmost position </td>
          </tr>
          <tr>
              <td>str.rjust(width) </td>
              <td>Like center, but str is right-justified </td>
          </tr>
          <tr>
              <td>str.rstrip() </td>
              <td>Copy of str with trailing whitespace removed </td>
          </tr>
          <tr>
              <td>str.split() </td>
              <td>Split str into a list of substrings </td>
          </tr>
          <tr>
              <td>str.upper() </td>
              <td>Copy of str - all characters converted to uppercase </td>
          </tr>
      </table>
    
  
              </div>
             
  
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
  
  
              .notes {
                margin-top: 20px;
              }
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .sublist {
                padding: 10px 20px;
              }
              .notes .list ul {
                list-style-type: circle;
                padding: 10px 20px;
              }
  
              .notes pre {
                font-size: 0.85em;
              }
  
              .table {
                display: flex;
                justify-content: center;
                padding: 20px;
              }
  
              .table th, .table td {
                border: 1px solid;
              }
  
              .table th, .table td {
                padding: 20px;
              }
              </style>
              `,
            },
            {
              id: 3,
              topic: "Formatting output: controlling the print statement ",
              content: `
              <div class='notes'>
              <h2 style='font-weight: 700; font-size: 1.25em'>Formatting output: controlling the print statement </h2>
              <p>
              Often we want to combine multiple kinds of data when we display it on the screen. For example, we might want to print someone’s name and age – a string and a number. The print function only prints strings, but in this video you’ll learn some ways to control the output so you can print all kinds of data. You’ll also see how to convert between different kinds of data.</p>
              <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Strings/Lesson+5+-+Formatted+Print.mp4"
                    type="video/mp4">
                </video>
              </div>
              <p>Here are the notes as shown in the video: </p>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Formatted Print   </h3>
              <p>Formatted print statements are often useful, especially when you want to have a mix of numbers with decimals that need to be inserted in a larger string.  </p>
  <pre>
  name = "Jen" 
  temp = 22 
  print("Hello %s. The temperature today is %d degrees." %(name, temp)) 
  </pre>
  <p>Placeholder types: </p>
              <table class='table'>
          <tr>
              <th>Symbol  </th>
              <th>Type  </th>
          </tr>
          <tr>
              <td>%s </td>
              <td>string </td>
          </tr>
          <tr>
              <td>%d </td>
              <td>integer  </td>
          </tr>
          <tr>
              <td>%f  </td>
              <td>float  </td>
          </tr>
          <tr>
              <td>%x  </td>
              <td>hexadecimal </td>
          </tr>
          <tr>
              <td>%c </td>
              <td>character </td>
          </tr>
      </table>
      <p>With numeric values, padding can be used to ensure that the values have uniform size. </p>
      <pre>
  for i in range(10): 
      num = random.random() * 100 
      print("%2.2f" %(num)) 
      </pre>
          </div>
           <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Converting types    </h3>
              <p>In programming languages, numbers and words are different data types. The number 5 is not the same as the string "5". To use math, we need to make sure that the values are numeric. To print, we need to make sure that values are strings. </p>
  <pre>
  age_str = input("Enter your age: ") 
  age_int = int(age_str) 
  age_in_five = age_int + 5 
  print("In five years you will be " + str(age_in_five))
  </pre>
              </div>
          
  
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
  
  
              .notes {
                margin-top: 20px;
              }
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .sublist {
                padding: 10px 20px;
              }
              .notes .list ul {
                list-style-type: circle;
                padding: 10px 20px;
              }
  
              .notes pre {
                font-size: 0.85em;
              }
  
              .table {
                display: flex;
                justify-content: center;
                padding: 20px;
              }
  
              .table th, .table td {
                border: 1px solid;
              }
  
              .table th, .table td {
                padding: 20px;
              }
              </style>
              `,
            },
            {
              id: 4,
              topic: "Quiz",
              type: "quiz",
            },
            {
              id: 5,
              topic: "Lab: Word Game",
              content: `
              <div class='madlib'>
              <h2 style='font-weight: 700; font-size: 1.25em'>Lab: Word Game  </h2>
              <p>
              In this lab, you will program your own version of a popular word game. In the game, the player guesses 5-letter words and gets feedback on each guess. You can play a version of this game here: <span><a href='https://www.nytimes.com/games/wordle/index.html  ' target='_blank'>https://www.nytimes.com/games/wordle/index.html</a></span>  </p>
              <p>This video will get you started on the lab:</p>
              <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Strings/Lab+5+-+Word+Game.mp4"
                    type="video/mp4">
                </video>
              </div>
              <p>The word list can be found here: <span><a href='https://github.com/UNO-Babb/Lab5/blob/master/words.txt?authuser=1  ' target='_blank'>https://github.com/UNO-Babb/Lab5/blob/master/words.txt?authuser=1</a></span>  </p>
              <p>The starter code is here: <span><a href='https://github.com/UNO-Babb/Lab5/blob/master/WordGame.py?authuser=1' target='_blank'>https://github.com/UNO-Babb/Lab5/blob/master/WordGame.py?authuser=1</a></span>  </p>
              <p>Here are the notes as shown in the video: </p>
              <p>Word Game (not a NYT property) </p>
              <p>We will be re-creating a (currently) popular word game where a user guesses 5-letter words and gets feedback on their guess. <p>
  <p>You will finish the word game in a few important ways. There are three helper functions we will look at completing. </p>
  <pre>inWord(letter, word) </pre>
  <p>This function returns True or False depending on the state of the given letter being anywhere in the word. </p>
  <pre>inSpot(letter, word, spot) </pre>
  <p>This function returns True or False if the letter is in the word at the given spot. </p>
  <pre>rateGuess(myGuess, word) </pre>
  <p>Rates your guess and returns a word with the following features.  </p>
              <ul class='list'>
              <li>Capital letter if the letter is in the right spot </li>
              <li>Lower case letter if the letter is in the word but in the wrong spot </li>
              <li>if the letter is not in the word at all </li>
              </ul>
  <pre>main()</pre>
              <p>Your main function should randomly select a word from the list of all possible words. You will give the user 6 tries to get the correct word If they get it early, end the loop and congratulate. Use the helper methods to determine if the user got any letters correct. </p>
              <p>Copy/Paste the word game from the starter code (linked) in your Git repository. </p>
              <p>You will also need to create a new file in your VS Code project called <strong>words.txt</strong> that contains all of the possible 5-letter word. You can copy the one provided (link) or create your own.  </p>
              </div>
              <style>
  
              .madlib a {
                text-decoration: underline;
              }
              .madlib p {
                margin: 20px 0;
              }
              .code pre {
                font-size: 0.85em;
              }
  
              .list {
                list-style-type: disc;
                padding: 0 20px;
              }
              </style>
              `,
            },
          ],
        },
        {
          id: 7,
          name: "Lists & Dictionaries",
          type: "python6",
          contents: [
            {
              id: 1,
              topic: "Introduction to Lists",
              content: `
              <div class='data-rep'>
                <h2 style='font-weight: 700; font-size: 1.25em'>Introduction to Strings</h2>
                <p>
  A list is a set of consecutive items. You saw lists in the strings lesson, since a string is just a list of letters. This lesson focuses on lists more generally, including lists with any kind of data not just letters.              
  </p>
                <p>Video: </p>
                 <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Lists/Lesson+6+-+Lists.mp4"
                    type="video/mp4">
                </video>
              </div>
                <div class='notes'>
              <p>Notes as shown in the video: </p>
              <h3 style='font-weight: 700; font-size: 1.25em'>Objectives </h3>
              <ul class='list'>
              <li>Lists, tuples, and dictionaries </li>
              <li>Basic list operators, replacing, inserting, removing an element;  </li>
              <li>Dictionary literals
              <ul class='sublist'>
              <li>adding and removing keys </li>
              <li>accessing and replacing values </li>
              </ul>
              
              </li>
              <li>Traversing dictionaries. </li>
              </ul>
              </div>
  
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Lists</h3>
              <p>A list is a sequence of values. In a string, the values are all characters; in a list, they can be any type. The values in a list are called elements or items. There are several ways to create a list but the easiest is to create values, separated by a comma, inside of square braces [] </p>
  <pre>
  list1 = [2, 3, 5, 6] 
  print(list1[2]) 
  list2 = ["Alice", "Bob", "Catherine", "Doug"] 
  print(list2[2]) 
  </pre>
  <p>Unlike other languages, the elements of a list do not need to be the same type. </p>
  <pre>
  list3 = ["apple", 5, "grapes", 23.7] 
  for element in list3: 
    print(element) 
  </pre>
  <p>Lists can also be changed, we can update the value at a position. </p>
  <pre>
  print(list1) 
  list1[2] = 17 
  print(list1)
  </pre>
              </div>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Traversing a List  </h3>
              <p>There are multiple ways to use loops with a list. Similar to the way strings can be traversed, we will look at visiting each element in a list by its numerical position and by iterating using a for loop. </p>
  <pre>
  list1 = [3, 1, 4, 1, 5, 9, 2, 6] 
  position = 0 
  while position < len(list1): 
    print(list1[position]) 
    position = position + 1 
  </pre>
  <p>This method is the best option if you need to know where you are in a list. For example, if your goal is to remove elements, or search for the location of an item in a list. </p>
  <p>Using a for loop, we can iterate across each element of a list. This is useful if we want to print the contents of a list, find the sum of a list, or determine if an element exists in a list (but not where). </p>
  <pre>
  for item in list1: 
    print(item) 
  </pre>
  <p>This allows us to easily traverse a list without ever knowing how long the list is, or keep track of our position in the list. </p>
  </div>
             
  
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
  
  
              .notes {
                margin-top: 20px;
              }
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .sublist {
                padding: 10px 20px;
              }
              .notes .list ul {
                list-style-type: circle;
                padding: 10px 20px;
              }
  
              .notes pre {
                font-size: 0.85em;
              }
  
              .table {
                display: flex;
                justify-content: center;
                padding: 20px;
              }
  
              .table th, .table td {
                border: 1px solid;
              }
  
              .table th, .table td {
                padding: 20px;
              }
              </style>
              `,
            },
            {
              id: 2,
              topic: "List Operations ",
              content: `
              <div class='notes'>
              <h2 style='font-weight: 700; font-size: 1.25em'>List Operations </h2>
              <p>
              There are many more actions you may want to take with lists. Some of these, like slicing (cutting out a part of a list), you’ve already seen in the Strings list. Others, such as adding or deleting an item from the list, are new. In this video, you’ll see several operations (actions) you can use with lists.</p>
              <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Lists/Lesson+6+-+List+Operations.mp4"
                    type="video/mp4">
                </video>
              </div>
              <p>Here are the notes as shown in the video: </p>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>List operations  </h3>
              <p>There are several operations you can do to a list. The first operation is joining two lists with the + operator. </p>
  <pre>
  a = [1, 2, 3] 
  b = [7, 8, 9] 
  c = a + b 
  print (c) 
  </pre>
  <p>In this operation, the two lists are appended to each other and the result is saved to the variable c. The * operator repeats a list a number of times. </p>
  <pre>
  [0] * 5 
  [1, 2, 3] * 3 
  </pre>
  <p>Another useful operation is to add a new element to a list. This can be done in a few ways. </p>
  <div class='list-method'>
  <p>append (element) </p>
  <pre>
  t = ['a', 'b', 'c'] 
  t.append('d') 
  print(t)  
  </pre>
  </div>
  <div class='list-method'>
  <p>delete (position)  </p>
  <pre>
  t = ['a', 'b', 'c'] 
  del t[1] 
  print(t) 
  </pre>
  </div>
  <div class='list-method'>
  <p>delete (value)  </p>
  <pre>
  t = ['a', 'b', 'c'] 
  t.remove('a') 
  print(t)
  </pre>
  </div>
  <div class='list-method'>
  <p>slicing[start: end]  </p>
  <p>Slicing a list is very similar to slicing a string, this is because python treats strings as a list of characters. </p>
  <pre>
  t = ['a', 'b', 'c', 'd', 'e', 'f'] 
  t[1:3] 
  t[:4] 
  t[3:] 
  </pre>
  </div>
  <div class='list-method'>
  <p>Strings -> Lists   </p>
  <p>While a string is a list of characters, it is possible to make a list of individual words or even a list of individual sentences.  </p>
  <pre>
  s = "This is a sentence." 
  words = s.split() 
  print(words) 
  </pre>
  </div>
              </div>
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
  
  
              .notes {
                margin-top: 20px;
              }
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .sublist {
                padding: 10px 20px;
              }
              .notes .list ul {
                list-style-type: circle;
                padding: 10px 20px;
              }
  
              .notes pre {
                font-size: 0.85em;
              }
  
              .table {
                display: flex;
                justify-content: center;
                padding: 20px;
              }
  
              .table th, .table td {
                border: 1px solid;
              }
  
              .table th, .table td {
                padding: 20px;
              }
  
              .list-method {
                padding: 15px 0;
              }
              </style>
              `,
            },
            {
              id: 3,
              topic: "Dictionaries ",
              content: `
              <div class='notes'>
              <h2 style='font-weight: 700; font-size: 1.25em'>Dictionaries</h2>
              <p>
              This video begins by showing you how to convert a string into a regular list. It then continues by introducing you to a special kind of list called a dictionary. In a dictionary, you can define what the index is, rather than using the numbered position like lists do.  
  </p>
              <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Lists/Lesson+6+-+Dictionaries.mp4"
                    type="video/mp4">
                </video>
              </div>
              <p>Here are the notes as shown in the video: </p>
              <p>Strings -> Lists   </p>
  <p>While a string is a list of characters, it is possible to make a list of individual words or even a list of individual sentences.  </p>
  <pre>
  s = "This is a sentence." 
  words = s.split() 
  print(words) 
  </pre>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Dictionaries    </h3>
              <p>Dictionaries are similar to lists but the index is not necessarily an integer. Dictionaries are denoted with braces { } rather than brackets [ ] like a list. The position is still in the brackets.  </p>
  <pre>
  colors = {'red' : 'rojo', 'green' : 'verde', 'blue' : 'azul', 'yellow': 'amarillo'} 
  colors['blue'] 
  colors['rojo'] 
  colors[3] 
  </pre>
           <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Traversing Dictionaries   </h3>
              <p>What do we get if we wanted to print all the elements in a dictionary? </p>
  <pre>
  for c in colors: 
    print(c) 
  </pre>
  <p>How could we use that to get all the elements? </p>
              </div>
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
  
  
              .notes {
                margin-top: 20px;
              }
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .sublist {
                padding: 10px 20px;
              }
              .notes .list ul {
                list-style-type: circle;
                padding: 10px 20px;
              }
  
              .notes pre {
                font-size: 0.85em;
              }
  
              .table {
                display: flex;
                justify-content: center;
                padding: 20px;
              }
  
              .table th, .table td {
                border: 1px solid;
              }
  
              .table th, .table td {
                padding: 20px;
              }
              </style>
              `,
            },
            {
              id: 4,
              topic: "Quiz",
              type: "quiz",
            },
            {
              id: 5,
              topic: "Lab: Word Count ",
              content: `
              <div class='madlib'>
              <h2 style='font-weight: 700; font-size: 1.25em'>Lab: Word Count  </h2>
              <p>
              Sometimes it is useful to find out how many words, lines, or characters are in a file, such as if you have a word limit on a form. You may have seen the “word count” tool in a word processor. In this lab, you will create a small program that counts the words, lines, and characters in a file.  </p>
              <p>This video will get you started on the lab:</p>
              <div style="display: flex; justify-content: center;margin: 20px 0">
              <video controls width="700">
              <source src="https://work-learn-bucket.s3.amazonaws.com/Lists/Lab+6+-+Word+Count.mp4"
              type="video/mp4">
              </video>
              </div>
              <p>Here are the notes as shown in the video: </p>
                          <h3 style='font-weight: 700; font-size: 1.25em'>Word Count    </h3>
              <p>A common utility on Unix/Linux systems is a small program called "wc". This program analyzes a file to determine the number of lines, words, and characters contained therein. Write your own version of wc. The program should accept a file name as input and then print three numbers showing the count of lines, words, and characters in the file. 
  </p>
  <p>SAMPLE OUTPUT </p>
  <pre>
  Enter a File Name: text.txt  
  Lines: 12  
  Words: 48  
  Characters:249 
  </pre>
  <p>Copy/Paste the linked starter code and create a new document in your VS Code editor for the <strong>gettysberg.txt</strong> or create your own text file. </p>
              <p>The starter code is here: <span><a href='https://github.com/UNO-Babb/Lab6/blob/master/WordCount.py  ' target='_blank'>https://github.com/UNO-Babb/Lab6/blob/master/WordCount.py</a></span>  </p>
              <p>The gettysberg.txt file is here: <span><a href='https://github.com/UNO-Babb/Lab6/blob/master/gettysberg.txt' target='_blank'>https://github.com/UNO-Babb/Lab6/blob/master/gettysberg.txt</a></span>  </p>
  
              </div>
              <style>
  
              .madlib a {
                text-decoration: underline;
              }
              .madlib p {
                margin: 20px 0;
              }
              .code pre {
                font-size: 0.85em;
              }
  
              .list {
                list-style-type: disc;
                padding: 0 20px;
              }
              </style>
              `,
            },
          ],
        },
        {
          id: 8,
          name: "Functions",
          type: "python7",
          contents: [
            {
              id: 1,
              topic: "Introduction to Functions",
              content: `
              <div class='data-rep'>
                <h2 style='font-weight: 700; font-size: 1.25em'>Introduction to Functions</h2>
                <p>
                The final topic in the Python unit is about functions. You have already used functions in your programs, but now you will learn how to write your own functions.  
                A function is an abstraction, where you can use one word to mean something more complex. That is, you call the function using just the function name, 
                and then it does whatever it has been programmed to do. Rather than having to write the same code over and over again, you can just use the function name! 
                In this video, you will learn how to define a function.
                </p>
                <p>Video: </p>
                 <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Functions/Lesson+7+-+Functions.mp4"
                    type="video/mp4">
                </video>
              </div>
                <div class='notes'>
              <p>Notes as shown in the video: </p>
              <h3 style='font-weight: 700; font-size: 1.25em'>Objectives </h3>
              <ul class='list'>
              <li>Design with functions: 
              <ul class='sublist'>
              <li>hiding redundancy, complexity </li>
              <li>arguments and return values  </li>
              <li>formal vs actual arguments, named arguments.  </li>
              </ul>
              
              </li>
              <li>Program structure and design. </li>
              </ul>
              </div>
  
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Functions </h3>
              <p>In Python, a function is a named sequence of statements that belong together. Their primary purpose is to help us organize programs into chunks that match how we think about the solution to the problem. </p>
              <p>The syntax for a function definition is: </p>
  <pre>
  def name( parameters ): 
      statements 
  </pre>
  <p>The parameters we give to a function are values that are passed into the function when it is called. For example, when we had a turtle, we made a function called drawSquare() that took two parameters, a turtle and a size. </p>
  <pre>
  def drawSquare(myTurtle, size): 
    myTurtle.penDown() 
  
    for i in range(4): 
      myTurtle.forward(size) 
      myTurtle.right(90) 
  
    myTurtle.penUp() 
  </pre>
  <p>In this case, a turtle and a number are passed to the function as parameters. These values can now be used by the function. </p>
  <p>Note: any changes made to a parameter passed to a function, will not change the original value that called it. </p>
  </div>
  
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
  
  
              .notes {
                margin-top: 20px;
              }
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .sublist {
                padding: 10px 20px;
              }
              .notes .list ul {
                list-style-type: circle;
                padding: 10px 20px;
              }
  
              .notes pre {
                font-size: 0.85em;
              }
  
              .table {
                display: flex;
                justify-content: center;
                padding: 20px;
              }
  
              .table th, .table td {
                border: 1px solid;
              }
  
              .table th, .table td {
                padding: 20px;
              }
              </style>
              `,
            },
            {
              id: 2,
              topic: "Docstrings: Documenting your function ",
              content: `
              <div class='notes'>
              <h2 style='font-weight: 700; font-size: 1.25em'>Docstrings: Documenting your function </h2>
              <p>
              In this video, you’ll learn about something called docstrings. A docstring is a string used to document Python code. You first learned about documentation in the Introduction to Programming in Python unit. Documentation is the explanation of how things work. Documentation is a specific kind of comments. Comments are notes that the computer ignores, that are there for people reading the code. They are often an explanation of what the code does or should do. In this case, you will learn to write a docstring to explain your function.  </p>
              <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Functions/Lesson+7+-+Docstrings.mp4"
                    type="video/mp4">
                </video>
              </div>
              <p>Here are the notes as shown in the video: </p>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>docstrings </h3>
              <p>If the first thing after the function header is a string (some tools insist that it must be a triple-quoted string), it is called a docstring and gets special treatment in Python and in some of the programming tools. </p>
              <p>Another way to retrieve this information is to use the interactive interpreter, and enter the expression <function_name>.doc, which will retrieve the docstring for the function. So the string you write as documentation at the start of a function is retrievable by python tools at runtime. This is different from comments in your code, which are completely eliminated when the program is parsed. </p>
              <p>By convention, Python programmers use docstrings for the key documentation of their functions. </p>
  <pre>
  def checkPrime(num): 
    """Check to see if the given number is prime. Returns True or False""" 
    statements 
  </pre>
              </div>
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
  
  
              .notes {
                margin-top: 20px;
              }
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .sublist {
                padding: 10px 20px;
              }
              .notes .list ul {
                list-style-type: circle;
                padding: 10px 20px;
              }
  
              .notes pre {
                font-size: 0.85em;
              }
  
              .table {
                display: flex;
                justify-content: center;
                padding: 20px;
              }
  
              .table th, .table td {
                border: 1px solid;
              }
  
              .table th, .table td {
                padding: 20px;
              }
  
              .list-method {
                padding: 15px 0;
              }
              </style>
              `,
            },
            {
              id: 3,
              topic: "Return values  ",
              content: `
              <div class='notes'>
              <h2 style='font-weight: 700; font-size: 1.25em'>Return values </h2>
              <p>
              You now know how to call a function in your program (such as telling the computer to draw a square), and how to give the function information, called parameters (such as telling the computer the string to manipulate). Sometimes you also want to have a function give you some information back after it is done – returning the answer to you (such as telling you the answer to a math problem). The information returned from a function is called a return value. In this video, you will learn how to write a function that returns a value when it is done running. 
  </p>
              <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Functions/Lesson+7+-+Return+Values.mp4"
                    type="video/mp4">
                </video>
              </div>
              <p>Here are the notes as shown in the video: </p>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Return Values     </h3>
              <p>A function can send a value back to the code that called it. We have been using this type of function in python for a while. </p>
              <p>Example:</p>
  <pre>
  abs(10) 
  abs(-15) 
  
  import math 
  
  math.pow(2, 5) 
  </pre>
  <p>When you are defining your own functions, the return statement will be the last thing that happens in your function. As soon as a return statement is reached, the function ends and any lines that happen after the return statement will not be executed. </p>
  <pre>
  def hasValue(myList, value): 
    for e in myList: 
      if e == value: 
        return True 
  
    return False 
  
  nums = [5, 10, 15, 20] 
  
  print( hasValue(nums, 8) ) 
  </pre>
  </div>
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
  
  
              .notes {
                margin-top: 20px;
              }
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .sublist {
                padding: 10px 20px;
              }
              .notes .list ul {
                list-style-type: circle;
                padding: 10px 20px;
              }
  
              .notes pre {
                font-size: 0.85em;
              }
  
              .table {
                display: flex;
                justify-content: center;
                padding: 20px;
              }
  
              .table th, .table td {
                border: 1px solid;
              }
  
              .table th, .table td {
                padding: 20px;
              }
              </style>
              `,
            },
            {
              id: 4,
              topic: "Problem deconstruction and abstraction ",
              content: `
              <div class='notes'>
              <h2 style='font-weight: 700; font-size: 1.25em'>Problem deconstruction and abstraction </h2>
              <p>
              In the unit on computational thinking, you learned about decomposition (breaking problems into parts) and abstraction (taking details away). Both of these ways of thinking about problems make the problems simpler, and therefore easier to solve. In programming, functions are a way to decompose problems. That is, each function can do a small thing, and then you can put them together to solve the whole problem. This video will show you how to decompose a problem into smaller functions. It will also explain how to make sure you’re in the right file when you call a function.  
  </p>
              <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Functions/Lesson+7+-+Abstraction.mp4"
                    type="video/mp4">
                </video>
              </div>
              <p>Here are the notes as shown in the video: </p>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Problem deconstruction (abstraction)   </h3>
              <p>One of the big ideas in computer science is taking a large problem and breaking it down into smaller, more manageable parts. For example, imagine that we have the problem of finding the sum of many squares. We can begin by breaking this down into the smallest possible problem. </p>
  <pre>
  def square(x): 
    y = x * x 
    return y 
  </pre>
  <p>Then, we can use this small solution as part of the larger solution. </p>
  <pre>
  def sumOfSquares(start, end): 
    total = 0 
    for num in range(start, end + 1): 
      total = total + square(num) 
  
    return total 
  </pre>
  <p>Then finally, we could call this in the context of our program. Perhaps after we have some data or user input. </p>
  <pre>
  def main(): 
    tot = sumOfSquares(4, 7) 
    print(tot) 
  
  main() 
  </pre>
  </div>
  
  <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Using a Main Function   </h3>
              <p>Most of the work we have done so far involves code that has a main() function. This function is the one we tend to call as a first step. Sometimes, your code will be imported by another python file so automatically calling a main function becomes unnecessary or undesired. </p>
              <p>Before the Python interpreter executes your program, it defines a few special variables. One of those variables is called name and it is automatically set to the string value "main" when the program is being executed by itself in a standalone fashion. On the other hand, if the program is being imported by another program, then the name variable is set to the name of that module. This means that we can know whether the program is being run by itself or whether it is being used by another program and based on that observation, we may or may not choose to execute some of the code that we have written. </p>
              <p>For example, assume that we have written a collection of functions to do some simple math. We can include a main function to invoke these math functions. It is much more likely, however, that these functions will be imported by another program for some other purpose. In that case, we would not want to execute our main function. </p>
  <pre>
  def squareit(n): 
    return n * n 
  
   
  def cubeit(n): 
    return n*n*n 
  
   
  def main(): 
    anum = int(input("Please enter a number")) 
    print(squareit(anum)) 
    print(cubeit(anum)) 
  
  if __name__ == "__main__": 
    main() 
  </pre>
  </div>
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
  
  
              .notes {
                margin-top: 20px;
              }
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .sublist {
                padding: 10px 20px;
              }
              .notes .list ul {
                list-style-type: circle;
                padding: 10px 20px;
              }
  
              .notes pre {
                font-size: 0.85em;
              }
  
              .table {
                display: flex;
                justify-content: center;
                padding: 20px;
              }
  
              .table th, .table td {
                border: 1px solid;
              }
  
              .table th, .table td {
                padding: 20px;
              }
              </style>
              `,
            },
            {
              id: 5,
              topic: "Composition ",
              content: `
              <div class='notes'>
              <h2 style='font-weight: 700; font-size: 1.25em'>Composition </h2>
              <p>
              The opposite of decomposition is composition – putting things together. You can compose the solution to a complex problem by creating one function which uses other functions. This video shows you how to create a complex function step by step, testing your work at each step.  
  </p>
              <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Functions/Lesson+7+-+Composition.mp4"
                    type="video/mp4">
                </video>
              </div>
              <p>Here are the notes as shown in the video: </p>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Program Development </h3>
              <p>At this point, you should be able to look at complete functions and tell what they do. Also, if you have been doing the exercises, you have written some small functions. As you write larger functions, you might start to have more difficulty, especially with runtime and semantic errors. </p>
              <p>To deal with increasingly complex programs, we are going to suggest a technique called incremental development. The goal of incremental development is to avoid long debugging sessions by adding and testing only a small amount of code at a time. 
  
  As an example, suppose you want to find the distance between two points, given by the coordinates (x1, y1) and (x2, y2). By the Pythagorean theorem, the distance is: </p>
  
  <pre>
  <span style="white-space: nowrap; display: flex; justify-content:center; margin: 10px;">
  &radic;<span style="text-decoration:overline;">&nbsp;(x2 - x1)^2 + (y2 - y1)^2&nbsp;</span>
  </span>
  </pre>
  <p>The first step is to consider what a distance function should look like in Python. In other words, what are the inputs (parameters) and what is the output (return value)? 
  
  In this case, the two points are the inputs, which we can represent using four parameters. The return value is the distance, which is a floating-point value. 
  
  Already we can write an outline of the function that captures our thinking so far. </p>
  <pre>
  def distance(x1, y1, x2, y2): 
    return 0.0 
  </pre>
  <p>Obviously, this version of the function doesn’t compute distances; it always returns zero. But it is syntactically correct, and it will run, which means that we can test it before we make it more complicated.  </p>
  <p>For the second test the horizontal distance equals 3 and the vertical distance equals 4; that way, the result is 5 (the hypotenuse of a 3-4-5 triangle). For the third test, we have a 1-1-sqrt(2) triangle.  </p>
  <p>At this point we have confirmed that the function is syntactically correct, and we can start adding lines of code. After each incremental change, we test the function again. If an error occurs at any point, we know where it must be — in the last line we added.  </p>
  <p>A logical first step in the computation is to find the differences x2- x1 and y2- y1. We will store those values in temporary variables named dx and dy.   </p>
  <pre>
  def distance(x1, y1, x2, y2): 
    dx = x2 - x1 
    dy = y2 - y1 
  
    return 0.0  
  </pre>
  <p>Next we compute the sum of squares of dx and dy. </p>
  <pre>
  def distance(x1, y1, x2, y2): 
    dx = x2 - x1 
    dy = y2 - y1 
    dsquared = dx**2 + dy**2 
    return 0.0 
  </pre>
  <p>Finally, we have our working function we can test. </p>
  <pre>
  def distance(x1, y1, x2, y2): 
    dx = x2 - x1 
    dy = y2 - y1 
    dsquared = dx**2 + dy**2 
    result = dsquared**0.5 
    return result  
  </pre>
  
  </div>
  
  <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Composition   </h3>
              <p>As we have already seen, you can call one function from within another. This ability to build functions by using other functions is called composition. </p>
              <p>As an example, we’ll write a function that takes two points, the center of the circle and a point on the perimeter, and computes the area of the circle. </p>
              <p>Assume that the center point is stored in the variables xc and yc, and the perimeter point is in xp and yp. The first step is to find the radius of the circle, which is the distance between the two points. Fortunately, we’ve just written a function, distance, that does just that, so now all we have to do is use it: </p>
  <pre>
  radius = distance(xc, yc, xp, yp) 
  </pre>
  <p>The second step is to find the area of a circle with that radius and return it. Again we will use one of our earlier functions: </p>
  <pre>
  result = area(radius) 
  return result 
  </pre>
  <p>Wrapping that up in a function, we get: </p>
  <pre>
  def distance(x1, y1, x2, y2): 
    dx = x2 - x1 
    dy = y2 - y1 
    dsquared = dx**2 + dy**2 
    result = dsquared**0.5 
    return result 
  
  def area(radius): 
    b = 3.14159 * radius**2 
    return b 
  
  def area2(xc, yc, xp, yp): 
    radius = distance(xc, yc, xp, yp) 
    result = area(radius) 
    return result 
  
  print(area2(0,0,1,1)) 
  </pre>
  <p>We called this function area2 to distinguish it from the area function defined earlier. There can only be one function with a given name within a module. 
  
  Note that we could have written the composition without storing the intermediate results. </p>
  <pre>
  def area2(xc, yc, xp, yp): 
    return area(distance(xc, yc, xp, yp)) 
  </pre>
  </div>
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
  
  
              .notes {
                margin-top: 20px;
              }
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .sublist {
                padding: 10px 20px;
              }
              .notes .list ul {
                list-style-type: circle;
                padding: 10px 20px;
              }
  
              .notes pre {
                font-size: 0.85em;
              }
  
              .table {
                display: flex;
                justify-content: center;
                padding: 20px;
              }
  
              .table th, .table td {
                border: 1px solid;
              }
  
              .table th, .table td {
                padding: 20px;
              }
              </style>
              `,
            },
            {
              id: 6,
              topic: "Quiz",
              type: "quiz",
            },
            {
              id: 7,
              topic: "Lab: Coding Bat ",
              content: `
              <div class='madlib'>
              <h2 style='font-weight: 700; font-size: 1.25em'>Lab: Coding Bat </h2>
              <p>
              Coding Bat (<a href='https://codingbat.com/python' target='_blank'>https://codingbat.com/python</a>) is a website that prompts with a problem to solve, then tests several cases to see if your solution actually solves all cases. Each problem uses value-returning functions, where a function takes in some parameters (input), and returns some result (output).   </p>
              <p>Here is a video that shows you how to use coding bat:</p>
              <div style="display: flex; justify-content: center;margin: 20px 0">
              <video controls width="700">
              <source src="https://work-learn-bucket.s3.amazonaws.com/Functions/Lab+7+-+Codingbat.mp4"
              type="video/mp4">
              </video>
              </div>
              <p>To begin, create an account on <a href='https://codingbat.com/python' target='_blank'>CodingBat</a>. Make sure you're in the Python section. Solve the problems for Warmup-1 and Warmup-2. </p>
  <p>When completed, you can click the "done" tab in the top-right portion of the screen. Screenshot this page and submit that as your "proof of completion". Feel free to continue on to the other problems not assigned as part of your python journey. </p>
  
              </div>
              <style>
  
              .madlib a {
                text-decoration: underline;
              }
              .madlib p {
                margin: 20px 0;
              }
              .code pre {
                font-size: 0.85em;
              }
  
              .list {
                list-style-type: disc;
                padding: 0 20px;
              }
              </style>
              `,
            },
          ],
        },
        {
          id: 8,
          name: "Qualtrics Survey",
          contents: [
            {
              id: 1,
              topic: "Qualtrics Survey",
              content: `
              <p style="margin-top:20px;">Completing this survey is worth $5.</p>
              <a target="_blank"  style='text-decoration: underline' href='https://unomaha.az1.qualtrics.com/jfe/form/SV_6iomnRh5EwVwHn8' alt='qualtrics survey'>Please complete this Qualtrics Survey</a>
              `,
            },
          ],
        },
        {
          id: 9,
          name: "Review Your Knowledge",
          type: "review",
          contents: [
            {
              id: 1,
              topic: "Qualtrics Survey",
              author: "Hollie Rosser",
              points: 100,
              content: `
                <p style="margin-top:20px;">Completing this survey is worth $5.</p>
                <a target="_blank"  style='text-decoration: underline' href='https://unomaha.az1.qualtrics.com/jfe/form/SV_6iomnRh5EwVwHn8' alt='qualtrics survey'>Please complete this Qualtrics Survey</a>
                `,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      topicName: "Unit 4: Mainframes",
      subTopics: [
        {
          id: 1,
          name: "Introduction to Mainframes",
          type: "mainframe1",
          contents: [
            {
              id: 1,
              topic: "Introduction to Mainframes",
              content: `
              <div class='cobol1'>       
  <body>
  
      <h2 style="font-weight: bold;"> Introduction to Mainframe Systems </h2>
  
      <p> 
          
      The presentation begins with an introduction to Chapter 1, "The New Mainframe," emphasizing the modern landscape of mainframe computing. The chapter's objectives include challenging traditional views on centralized versus distributed computing, explaining the business applications of mainframes, describing workloads best suited for mainframes, identifying related jobs, and listing mainframe operating systems. Key terms are introduced, such as application programmer, batch processing, e-Business, and scalability. <br />
  
      The IBM System/360 was announced on April 7, 1964, marking a significant shift in computer design and application. The Mainframe Charter outlines goals for innovation, enhancing the value proposition, and supporting the mainframe community. The evolution of IBM mainframes over five decades is highlighted, showcasing various models and technological advancements. <br />
      
      Mainframes, although prevalent, are often unnoticed due to their stability and reliability. They present numerous career opportunities in the technical field. A mainframe is described as a central data hub capable of supporting thousands of users and applications, emphasizing its role in secure, high-availability environments. The balanced system design of mainframes is optimized for high input/output operations and robust data processing. <br />
      
      Mainframes are widely used by Fortune 1000 companies, with 60% of all internet data stored on them. They handle large-scale transaction processing and extensive databases. The presentation briefly overviews Business Class and Enterprise Class mainframe models, providing a detailed look into the components and functionalities of an Enterprise Class mainframe. <br />
      
      Factors contributing to mainframe use include reliability, security, scalability, centralized control, workload management, and cost-effectiveness. Typical workloads for mainframes involve large-scale transaction processing and extensive data management. Batch processing tasks such as data updates, backups, and report generation are common, as are online processing tasks including real-time transactions and database queries. <br />
      
      Various roles in the mainframe world are discussed, including operators, system administrators, system programmers, application developers, and end-users. The evolution of mainframe operating systems is traced from OS/360 to z/OS and others like z/VSE and z/VM. The summary emphasizes the central role of mainframes in large organizations, their reliability, security, processing capabilities, and the skilled support staff required to manage them, as well as the variety of operating systems they run. <br />
  
  
      </p>
  
  <br /> 
  
      <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Lesson+1_+The+New+Mainframe+Video.mp4"
                    type="video/mp4">
                </video>
  
  
  </body>
              </div>
              <style>
              .cobol1 p {
                margin: 10px 0;
              }
              .cobol1 img {
                width: 50%;
                height: auto;
                text-align: center;
                margin: 20px;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                border-radius: 5px;
              }
  
              .cobol1 .lg-img {
                width: 70%;
              }
  
              .cobol1 .xl-img {
                width: 100%;
              }
  
              .cobol1 .sub-topic {
                margin-top: 30px;
              }
  
              </style>
  
              `,
            },
            {
              id: 2,
              topic: "Lab - Getting on the System",
              content: `
              <div class='Getting on the System-submit'>
              <body>
  <p>
      Welcome to the Mainframes Lab! In this lab, you'll embark on an exciting journey into the world of COBOL mainframes, a crucial technology that underpins many of today's enterprise systems. Whether you're a beginner or looking to deepen your expertise, our lab provides hands-on experience with real-world mainframe environments. You'll learn how to navigate the mainframe system, understand COBOL syntax and structure, and develop essential skills for maintaining and enhancing mainframe applications. Get ready to unlock the potential of one of the most enduring and powerful computing platforms in the industry.
  </p>
  <h2 style="font-weight: bold;"> HERE'S Part One </h2>  
  <video controls width="700">
      <source src="https://work-learn-bucket.s3.amazonaws.com/Mainframe/Getting+on+the+system+pt+1.mp4"
      type="video/mp4">
  </video>
  <br /> 
  <h2 style="font-weight: bold;"> Here's Part Two </h2>  
  <video controls width="700">
      <source src="https://work-learn-bucket.s3.amazonaws.com/Mainframe/Getting+on+the+system+pt+2.mp4"
      type="video/mp4">
  </video>
  </body>
     </div>
              <style>
              .Getting on the System-submit p {
                margin: 10px 0;
              }
              .Getting on the System-submit pre {
                font-size: 0.85em;
              }
              </style>
              `,
            },
            {
              id: 3,
              topic: "Quiz",
              type: "quiz",
            },
          ],
        },
        {
          id: 2,
          name: "Hardware Systems and LPARS",
          type: "mainframe2",
          contents: [
            {
              id: 1,
              topic: "Introduction to Hardware Systems and LPARs",
              content: `
              <div class='debug'>

                <body>
  <h1 style="font-weight: bold;">Introduction to Hardware Systems and LPARs</h1>
  <p>
      This presentation provides an in-depth overview of hardware systems, with a particular emphasis on mainframe technologies and their evolution. It begins by examining the design and terminology associated with the S/360 and zSeries hardware, explaining the intricacies of mainframe componentry, including processing units and disk hardware.
  </p>
  <p>
      The presentation highlights how mainframes differ from personal computers in terms of data encoding and explores various typical hardware configurations. It delves into the complexity and modular architecture of modern Central Electronic Complex (CEC) designs, comparing historical and current systems, and discusses the sophisticated partitioning of resources enabled by Logical Partitions (LPARs).
  </p>
  <h2 style="font-weight: bold;">Key elements include:</h2>
  <ul>
      <li>Historical context and evolution of mainframe hardware, starting from the S/360 systems of the 1960s.</li>
      <li>Detailed explanation of channels, control units, and I/O connectivity, focusing on technologies like ESCON and FICON.</li>
      <li>The logical and physical structure of contemporary mainframes, including innovations in the System z10 series.</li>
      <li>The concept of channel spanning and its role in enhancing connectivity and resource sharing across logical partitions.</li>
  </ul>
  <p>
      By the end of the presentation, learners will have a comprehensive understanding of mainframe hardware systems, their unique characteristics, and their operational advantages over standard PC systems.
  </p>
  
  <br />
       <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Mainframe/Lesson+2_+Hardware+Systems+and+LPARS+Video.mp4"
                    type="video/mp4">
                </video>
  
  </body>
   </div>
              <style>
              .debug p {
                margin: 10px 0;
              }
              .notes pre {
                font-size: 0.85em;
                padding-left: 20px;
                margin: 10px 0;
              }
  
              </style>`,
            },
            {
              id: 2,
              topic: "Quiz",
              type: "quiz",
            },
          ],
        },
        {
          id: 3,
          name: "Z/OS Overview",
          type: "mainframe3",
          contents: [
            {
              id: 1,
              topic: "Comprehensive Overview of z/OS",
              content: `
              <div class='debug'>

                <body>
  <h1 style="font-weight: bold;">Comprehensive Overview of z/OS </h1>
  <p>
The slides provide a comprehensive overview of z/OS, a widely used mainframe operating system renowned for its ability to handle large workloads and support numerous concurrent users. Key distinctions from single-user operating systems include advanced virtual storage management and robust multiprocessing capabilities. z/OS is designed to serve critical applications with high reliability and security, processing large and varied workloads efficiently. </p>
  <p>
z/OS manages multiple types of storage, including real, auxiliary, and virtual storage. Virtual storage, a fundamental concept, allows the system to use more memory than physically available by managing data between real and auxiliary storage, ensuring efficient use of resources. Address spaces are a critical feature, providing isolated environments for each user and application, thus ensuring data integrity and security. </p>
<p>
Workload Management (WLM) is a crucial component, optimizing the use of system resources to achieve business goals by balancing throughput and response times. It dynamically adjusts resources based on the workload and system demands. 
</p>
<p>
z/OS supports a vast array of middleware and additional software products, making it versatile and capable of integrating various applications and services. Its ability to manage large I/O configurations and support multiple communications subsystems highlights its robustness. </p>
<p>
The system is also designed for scalability and flexibility, capable of managing mixed workloads and ensuring high availability and reliability, making it suitable for mission-critical applications. Comparisons with UNIX systems reveal commonalities and differences, emphasizing z/OS's unique capabilities in managing extensive and complex computing environments. </p>
<p>
Overall, z/OS is a powerful, flexible, and secure operating system, ideally suited for environments requiring high performance, reliability, and the ability to handle large-scale, diverse workloads. </p>
  <br />
       <video controls width="700">
                    <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Mainframe/Comprehensive+Overview+of+ZOS/ICTN+3210+Enterprise+Server+Technology+Fall+2021-20210913+2159-1+(1).mp4"
                    type="video/mp4">
                </video>
  
  </body>
  </div>
              <style>
              .debug p {
                margin: 10px 0;
              }
              .notes pre {
                font-size: 0.85em;
                padding-left: 20px;
                margin: 10px 0;
              }
  
              </style>
              `,
            },
       {
        id: 2,
        topic: "Lab",
        content: `
        <div class='Apprentice Lab 3, Move/Copy'>
        <body>


<p>
This lab, focuses on key COBOL dataset operations. The lab guides users through copying essential libraries such as LANG.SOURCE, LANG.LOAD, and LANG.CNTL from a shared dataset into their personal workspace using ISPF utilities. It details the process of creating, editing, and verifying dataset members, including adding new members (e.g., NEWMEM1, NEWMEM2, NEWMEM3) and saving their content. 
</p>
<br />
<video controls width="700">
<source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/New-Mainframes/+Apprentice+Lab+3.mp4"
type="video/mp4">
</video>
</body>
 
        </div>
        <style>
        .Getting on the System-submit p {
          margin: 10px 0;
        }
        .Getting on the System-submit pre {
          font-size: 0.85em;
        }
        </style>
        `,
      },
      {
        id: 3,
        topic: "Quiz",
        type: "quiz",
      },
      
          ],
        },
        {
          id: 4,
          name: "Interactive facilities of z/OS: TSO/E, ISPF, & UNIX",
          type: "mainframe4",
          contents: [
            {
              id: 1,
              topic: "Interactive facilities of z/OS: TSO/E, ISPF, & UNIX",
              content: `
              <div class='data-rep'>
  
            <head>
      <title>Interactive facilities of z/OS: TSO/E, ISPF, & UNIX</title>
  </head>
  <body>
    <p>This chapter introduces you to the core interactive tools of z/OS—TSO/E, ISPF, and z/OS UNIX—and their functionalities. </p>
    <p>We begin with Time Sharing Option/Extensions (TSO/E), which allows users to log into the system, execute commands at the READY prompt, and manage data sets in native mode. Building on this, the Interactive System Productivity Facility (ISPF) provides a powerful, menu-driven interface to perform common tasks such as data set editing, browsing, allocation, and system management.
     You’ll learn how to navigate the ISPF menus, use its text editor, and customize settings to enhance efficiency. </p>
     <p>The lesson also covers z/OS UNIX System Services, which integrates UNIX functionalities within z/OS. You’ll explore the UNIX shell, execute shell commands, and create shell scripts, providing a familiar environment for users with UNIX experience. We’ll also compare the z/OS UNIX command shell and the ISHELL interface, a menu-driven alternative tailored for TSO/ISPF users. </p>
<div style="display: flex; justify-content: center">
    <video controls width="700">
       <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Mainframe/Lesson+4%3A+Interactive+facilities+/ICTN+3210+Enterprise+Server+Technology+Fall+2021-20210920+2203-1.mp4"
       type="video/mp4">
   </video>
</body>
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
              </style>
              `,
            },
            {
              id: 2,
              topic: "Lab ",
              content: `
              <title>Apprentice Lab 4</title>
              <div class='script-compiled'>
              <body>
            <h1 style="font-weight: bold;" >Create a dataset</h1>
            <br />
            <p>Welcome to LAB 4! This lab introduces the fundamental process of creating and managing datasets in a mainframe environment using ISPF utilities. The lab emphasizes the efficient data management capabilities of the mainframe and provides step-by-step instructions for allocating a new dataset, defining parameters such as space units, record format, and directory blocks, and ensuring optimal configuration. </p>
            <br />
    <video controls width="700">
       <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Mainframe/Lesson+4%3A+Interactive+facilities+/Lab+(create+a+data+set).mp4"
       type="video/mp4">
   </video>
    </body>
    </div>
              <style>
              .script-compiled p {
                margin: 10px 0;
              }
  
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .notes .sublist {
                list-style-type: circle;
                padding-left: 22px;
              }
              </style>
              `,
            },
            {
              id: 3,
              topic: "Quiz",
              type: "quiz",
            },
          ],
        },
        {
          id: 5,
          name: "Working with Data Sets",
          type: "mainframe5",
          contents: [
            {
              id: 1,
              topic: "Working with Data Sets",
              content: `
              <title>Chapter 5: Data Management on Mainframe</title>
     <style>
              .script-compiled p {
                margin: 10px 0;
              }
  
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .notes .sublist {
                list-style-type: circle;
                padding-left: 22px;
              }
              </style>
</head>
<body>
    <p>This chapter covers the definition, types, and structure of data sets, such as sequential, partitioned, and VSAM data sets, and highlights their differences compared to UNIX file systems. Key topics include:</p>

    <ul>
        <li><strong>Data Set Characteristics:</strong> <p>Explanation of naming conventions, record formats, and access methods.</p></li>
        <li><strong>Allocation and Storage:</strong> <p>Detailed guidance on allocating data sets, including space requirements and usage of DASD volumes.</p></li>
        <li><strong>Management Tools:</strong> <p>Use of ISPF panels, JCL, and DFSMS for creating, modifying, and cataloging data sets.</p></li>
        <li><strong>z/OS UNIX Integration:</strong><p> Comparison of z/OS data sets and UNIX file systems, emphasizing hierarchical structures and byte-stream files.</p></li>
        <li><strong>Exercises:</strong> <p>The chapter also includes exercises for hands-on experience with ISPF utilities, exploring options for managing data sets, and creating libraries for storing program data. It is a valuable resource for understanding the fundamentals of mainframe data management.</p></li>
    </ul>

</body>
<br />
<video controls width="700">
       <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Mainframe/Working+with+Data+Sets/ICTN+3210+Enterprise+Server+Technology+Fall+2021-20210913+2159-1.mp4"
       type="video/mp4">
   </video>
              `,
            },
            {
              id: 2,
              topic: "Lab ",
              content: `
              <title>Apprentice Lab 4</title>
              <div class='script-compiled'>
              <body>
            <h1 style="font-weight: bold;" >Create a dataset</h1>
            <br />
            <p>Welcome to LAB 4! This lab introduces the fundamental process of creating and managing datasets in a mainframe environment using ISPF utilities. The lab emphasizes the efficient data management capabilities of the mainframe and provides step-by-step instructions for allocating a new dataset, defining parameters such as space units, record format, and directory blocks, and ensuring optimal configuration. </p>
            <br />
    <video controls width="700">
       <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Mainframe/Lesson+4%3A+Interactive+facilities+/Lab+(create+a+data+set).mp4"
       type="video/mp4">
   </video>
    </body>
    </div>
               <style>
              .script-compiled p {
                margin: 10px 0;
              }
  
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .notes .sublist {
                list-style-type: circle;
                padding-left: 22px;
              }
              </style>`,
            },
            {
              id: 3,
              topic: "Quiz",
              type: "quiz",
            },
          ],
        },
        {
          id: 6,
          name: "Using JCL and SDSF",
          type: "mainframe6",
          contents: [
            {
              id: 1,
              topic: "Using JCL and SDSF ",
              content: `<title><strong>Managing and Executing Jobs in z/OS</strong></title>
   <style>
              .script-compiled p {
                margin: 10px 0;
              }
  
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .notes .sublist {
                list-style-type: circle;
                padding-left: 22px;
              }
              </style>
</head>
<body>

    <h1><strong>Managing and Executing Jobs in a z/OS Environment</strong></h1>
    
    <p>This lecture provides an essential overview of managing and executing jobs in a z/OS environment. The presentation covers:</p>
    <div class="lecture-content"><br />
        <h2><strong>Introduction to JCL</strong></h2>
        <p>Explains the purpose of JCL, its structure with JOB, EXEC, and DD statements, and demonstrates examples for defining job inputs, outputs, and system controls. </p>
    </div>
    <div class="lecture-content">
        <h2><strong>Advanced JCL Concepts</strong></h2>
        <p>Discusses creating new data sets, continuation and concatenation, and using cataloged procedures for efficient job management. </p>
    </div>
    <div class="lecture-content">
        <h2><strong>Introduction to SDSF</strong></h2>
        <p>Guides users on monitoring and managing jobs, viewing logs, and controlling system resources using SDSF panels.</p>
    </div>

    <div class="lecture-content">
        <h2><strong>Utilities Overview</strong></h2>
        <p>Highlights key z/OS utilities, such as IEBGENER for data set operations and IEBCOPY for library management.</p>
    </div>

</body>
<video controls width="700">
       <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Mainframe/Using+JCL+and+SDSF/ICTN+3210+Enterprise+Server+Technology+Fall+2021-20211004+2200-1.mp4"
       type="video/mp4">
   </video> ` },
            {
              id: 2,
              topic: "Lab ",
              content: `<title>JCL Lab - Pt 1, Pt 2.</title>
   <style>
              .script-compiled p {
                margin: 10px 0;
              }
  
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .notes .sublist {
                list-style-type: circle;
                padding-left: 22px;
              }
              </style>
</head>
<body>

    <h1><strong>JCL Lab - Part 1 and Part 2 </strong></h1>
    
    <p>In this video, you'll learn step-by-step how to work with Job Control Language (JCL) to create and manage data sets in a mainframe environment.
    The tutorial provides hands-on practice with JCL, guiding you through the process of editing JCL scripts and running jobs to create data sets using utilities
     like IEFBR14 (to create an empty data set) and IEBGENER (to create a data set with a member). The tutorial covers:</p>
    <div class="lecture-content"><br/>
        <p>1.Copying job members (LAB4A and LAB4B) to your data set. </p>
    </div>
    <div class="lecture-content">
        <p>2.Editing JCL scripts and understanding the use of IEFBR14 and IEBGENER utilities. </p>
    </div>
    <div class="lecture-content">
        <p>3.Running jobs to create data sets—one empty and one with a member. </p>
    </div>

    <div class="lecture-content">
        <p>4.Capturing and documenting results. </p>
    </div><br/>
<p> The lab emphasizes understanding job hierarchy, executing commands, and documenting results effectively. You'll gain practical experience by taking screenshots and summarizing your findings,
 ensuring a comprehensive understanding of JCL and its applications in data set management.</p>
</body>
<video controls width="700">
       <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Mainframe/Using+JCL+and+SDSF/JCL+Lab+1%2C+Pt+1.mp4"
       type="video/mp4">
   </video>`,
            },
            {
              id: 3,
              topic: "Quiz",
              type: "quiz",
            },
          ],
        },
        {
          id: 7,
          name: "Batch processing and job entry subsystem",
          contents: [
            {
              id: 1,
              topic: "Batch processing and job entry subsystem",
              content: `
              <div class='data-rep'>
                <p>This chapter explores the foundational concepts of batch processing in a z/OS environment. It covers: </p>
                <p>1. <strong> Batch Processing Bascis:</strong> Understanding how jobs are executed sequentially with minimal user interaction. </p>
                <p>2.<strong> Job Entry Subsytem(JES):</strong> Explains JES2 and JES3, their roles in job submission, scheduling, execution, and output management. 
                <p> 3. <strong> Initiator Functionality:</strong> Describes how initiators manage job resources, ensure data set integrity, and prevent conflicts.</p>
                <p>4. <strong> Spooling and Job Flow:</strong> Introduces spooling mechanisms for efficient input/output handling and the phases of job processing.</p>
              </div>
              <video controls width="700">
        <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Mainframe/Batch+processing+and+job+entry+subsystem/ICTN+3210+Enterprise+Server+Technology+Fall+2021-20211018+2203-1.mp4"
        type="video/mp4">
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
  
  
              .notes {
                margin-top: 20px;
              }
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .table {
                display: flex;
                justify-content: center;
                padding: 20px;
              }
  
              .table th, .table td {
                border: 1px solid;
              }
  
              .table th, .table td {
                padding: 20px;
              }
              </style>
              `,
            },
          ],
        },
        {
          id: 8,
          name: "Review Your Knowledge",
          type: "review",
          contents: [
            {
              id: 1,
              topic: "Qualtrics Survey",
              author: "Hollie Rosser",
              points: 100,
              content: `
                <p style="margin-top:20px;">Completing this survey is worth $5.</p>
                <a target="_blank"  style='text-decoration: underline' href='https://unomaha.az1.qualtrics.com/jfe/form/SV_6iomnRh5EwVwHn8' alt='qualtrics survey'>Please complete this Qualtrics Survey</a>
                `,
            },
          ],
        },
      ],
    },
    {
      id: 6,
      topicName: "Unit 5: Cobol",
      subTopics: [
        {   
          id: 1,
          name: "Introduction to COBOL programming",
          type: "cobol1",
          contents: [
            {
              id: 1,
              topic: "Setting up COBOL Libraries",
              content: `
              <div class='data-rep'>
  <p>Welcome to the module on Setting Up COBOL Libraries. This session provides a beginner-friendly introduction to COBOL, a foundational programming language for business and financial applications. 
    You’ll learn about COBOL’s structure, data handling, and integration with mainframe systems like CICS and DB2. Through clear explanations and practical examples, we’ll explore how COBOL processes data, handles numeric conversions, and supports enterprise-level applications. 
    Let’s take a closer look at what each video covers:</p>

  <div style="display: flex; justify-content: center">
    <video controls width="700">
      <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/COBOL/Lesson+1%3A+Introduction+to+COBOL+programming+/ICTN+3220++Enterprise+Server+Programming+Spring+2022-20220110+2300-1.mp4" type="video/mp4" />
    </video></div>`, 
  },
  {
              id: 2,
              topic: "Lab",
              content: `
              <body>
  <p>These lab sessions provide a practical introduction to COBOL programming on mainframes. You’ll learn how to write, compile, and execute COBOL programs while understanding key concepts such as data types, file handling, and numeric conversions. 
    Through step-by-step guidance, these labs will help you build a strong foundation in COBOL development, preparing you for real-world applications in enterprise systems. </p>

  <h2 style="font-weight: bold;">1. Setting Up COBOL Libraries</h2>
  <p>This video will guide you through the initial steps of setting up your COBOL libraries. You'll learn how to install and configure the necessary tools, as well as how to organize your libraries for optimal performance and ease of use.</p>
  
  <div style="display: flex; justify-content: center">
    <video controls width="700">
      <source src="https://work-learn-bucket.s3.amazonaws.com/Cobol_2/3150+Setting+up+Our+COBOL+Libraries.mp4" type="video/mp4" />
    </video>
  </div>

  <h2 style="font-weight: bold;">2. Using Multiple Screens</h2>
  <p>In this video, we’ll explore the benefits of using multiple screens when working with COBOL. You’ll learn techniques for managing multiple windows, navigating between screens efficiently, and enhancing your productivity through effective screen management.</p>
  
  <div style="display: flex; justify-content: center">
    <video controls width="700">
      <source src="https://work-learn-bucket.s3.amazonaws.com/Cobol_2/Using+multiple+screens.mp4" type="video/mp4" />
    </video>
  </div>

  <h2 style="font-weight: bold;">3. Troubleshooting COBOL</h2>
  <p>The final video focuses on troubleshooting common issues that you might encounter while working with COBOL. We'll cover error diagnosis, debugging strategies, and solutions to typical problems, ensuring you have the skills to resolve issues quickly and effectively.</p>
  
  <div style="display: flex; justify-content: center">
    <video controls width="700">
      <source src="https://work-learn-bucket.s3.amazonaws.com/Cobol_2/Troubleshooting+COBOL.mp4" type="video/mp4" />
    </video>
  </div>

  <p>By the end of this module, you will have a solid understanding of how to set up and manage COBOL libraries, utilize multiple screens to enhance your workflow, and troubleshoot common COBOL issues with confidence.</p>
  <p>Feel free to ask any questions or seek further assistance as you progress through the module. Happy learning!</p>
</div>
<style>
  .data-rep a {
    text-decoration: underline;
  }
  .data-rep p {
    margin: 10px 0;
  }
</style>`,
            }
          ],
        },
        {
          id: 2,
          name: "How to compile, test, and debug a COBOL program",
          type: "cobol2",
          contents: [
            {
              id: 1,
              topic: "How to compile, test, and debug a COBOL program",
              content: `
              <div class='data-rep'>
            <head><title>How to compile, test, and debug a COBOL program</title></head>  
  <body>
    <p>Welcome to chapter 2, This chapter will guide you through the key concepts of COBOL programming, focusing on its structure, syntax, and debugging methods used in a mainframe environment.</p>
 <div class="cobol-learning-objectives"><br/>
  <h2 style="font-weight: bold; color: black;">What You’ll Learn:</h2>

  <h3 style="font-weight: bold; color: black;">COBOL Program Structure:</h3>
  <p>Understanding the different divisions and how they work together.</p>

  <h3 style="font-weight: bold; color: black;">Coding & Editing:</h3>
  <p>How to write and modify COBOL programs using mainframe editors.</p>

  <h3 style="font-weight: bold; color: black;">Compiling & Running Programs:</h3>
  <p>Steps to execute COBOL programs in a mainframe.</p>

  <h3 style="font-weight: bold; color: black;">Error Handling with SDSF:</h3>
  <p>Identifying and debugging errors using System Display and Search Facility (SDSF).</p>

  <h3 style="font-weight: bold; color: black;">Debugging Techniques:</h3>
  <p>Using display statements and breakpoints to troubleshoot logic errors.</p>

  <h3 style="font-weight: bold; color: black;">Advanced Tools:</h3>
  <p>A preview of GUI-based debugging tools available beyond SDSF.</p>
</div>

<style>
  .cobol-learning-objectives h2, .cobol-learning-objectives h3 {
    color: black;
  }
  .cobol-learning-objectives p {
    font-size: 16px;
    margin-bottom: 10px;
  }
</style>
<br/>
<video controls width="700">
        <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/COBOL/Lesson+2%3A+How+to+compile%2C+test%2C+and+debug+a+COBOL+program+/ICTN+3220++Enterprise+Server+Programming+Spring+2022-20220131+2302-1.mp4"</source>
        type="video/mp4">
      </video><br/>
      `,
            },
            {
              id: 2,
              topic: "Lab",
              content: `
              <div class='Getting on the System-submit'>
              <body>
  <p>This lab introduces COBOL programming through a classic "Hello, World!" program. It provides a step-by-step approach to coding, compiling, and executing a COBOL program on a mainframe system.</p>
 </div><br/>
  <div class="cobol-learning-objectives">
  <h2 style="font-weight: bold; color: black;">What You’ll Learn:</h2>

  <h3 style="font-weight: bold; color: black;">Understanding COBOL Structure:</h3>
  <p>Learn about the IDENTIFICATION DIVISION, PROCEDURE DIVISION, and modular programming in COBOL.</p>

  <h3 style="font-weight: bold; color: black;">Writing Your First COBOL Program:</h3>
  <p>Manually code the HELLO program, ensuring comprehension of each line.</p>

  <h3 style="font-weight: bold; color: black;">Compiling & Running on a Mainframe:</h3>
  <p>Modify JCL (Job Control Language) to compile, link, and execute the program.</p>

  <h3 style="font-weight: bold; color: black;">Using SDSF for Output Validation:</h3>
  <p>Learn to debug and verify execution results using SDSF (System Display and Search Facility).</p>

  <h3 style="font-weight: bold; color: black;">Executing with REXX Script:</h3>
  <p>Run the program via REXX and capture successful execution output.</p>
</div>

<style>
  .cobol-learning-objectives h2, .cobol-learning-objectives h3 {
    color: black;
  }
  .cobol-learning-objectives p {
    font-size: 16px;
    margin-bottom: 10px;
  }
</style>
<br/>
  <embed src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Lesson+2%3A+How+to+compile%2C+test%2C+and+debug+a+COBOL+program+/COBOL-Lab_Hello_3220_V2.pdf" type="application/pdf" width="100%" height="800"> `,
            },
            {
              id: 3,
              topic: "Quiz",
              type: "quiz",
            },
          ],
        },
        {
          id: 3,
          name: "How to write a program that prepares a report ",
          type: "cobol3",
          contents: [
            {
              id: 1,
              topic: "How to write a program that prepares a report",
              content: `
              <div class='data-rep'>
            <head><title>How to write a program that prepares a report</title></head>  
  <body>
    <p>This lesson focuses on how to write a COBOL program that generates a structured report using sequential file processing in a mainframe environment.</p>
 <div class="cobol-learn-objectives"><br/>
  <h2 style="font-weight: bold; color: black;">What You’ll Learn:</h2>

  <h3 style="font-weight: bold; color: black;">Handling Sequential Files:</h3>
  <p>Understanding how COBOL reads, processes, and formats data from a file.</p>

  <h3 style="font-weight: bold; color: black;">Data Formatting for Reports:</h3>
  <p>Structuring output to fit a 132-byte line printer or adjusting for 80-byte formats.</p>

  <h3 style="font-weight: bold; color: black;">Working with PRINT-AREA:</h3>
  <p>Defining PRINT-AREA for formatted report output.</p>

  <h3 style="font-weight: bold; color: black;">Managing Numeric Data:</h3>
  <p>Handling signed numbers and ensuring proper alignment in reports.</p>

  <h3 style="font-weight: bold; color: black;">Using Fillers & Print Charts:</h3>
  <p>Understanding FILLER fields and using print charts to map report layouts.</p>

  <h3 style="font-weight: bold; color: black;">Writing and Executing the COBOL Program:</h3>
  <p>Coding a simple program to read from a customer master file (CUSTMAST) and print a formatted report.</p>
</div>

<style>
  .cobol-learn-objectives h2, .cobol-learn-objectives h3 {
    color: black;
  }
  .cobol-learn-objectives p {
    font-size: 16px;
    margin-bottom: 10px;
  }
</style><br/>
<video controls width="700">
        <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/COBOL/Lesson+3%3A+How+to+write+a+program+that+prepares+a+report+/ICTN+3220++Enterprise+Server+Programming+Spring+2022-20220207+2302-1.mp4" type="video/mp4">
      </video><br/>`,
            },
            {
              id: 2,
              topic: "Lab",
              content: `
  <p>This lab focuses on creating a COBOL program that generates a structured report from a customer data file (CUSTMAST) using sequential file processing in a mainframe environment. </p>
 </div>
  <div class="cobol-key-learning-objectives">
  <h2 style="font-weight: bold; color: black;">Key Learning Objectives:</h2>

  <h3 style="font-weight: bold; color: black;">Defining Input & Output Files:</h3>
  <p>Using SELECT and ASSIGN TO statements to designate CUSTMAST as input and SALESRPT as output.</p>

  <h3 style="font-weight: bold; color: black;">Understanding File & Data Structure:</h3>
  <p>Using FILE SECTION in DATA DIVISION to define structured records, FILLER fields, and numeric vs. alphanumeric data.</p>

  <h3 style="font-weight: bold; color: black;">Formatting a Report:</h3>
  <p>Using PRINT-AREA to control spacing, headers, and numeric-edited fields for proper display.</p>

  <h3 style="font-weight: bold; color: black;">Implementing the PROCEDURE DIVISION:</h3>
  <ul>
    <li>Read customer records.</li>
    <li>Format and print report headers and customer data.</li>
    <li>Accumulate and display grand totals.</li>
  </ul>

  <h3 style="font-weight: bold; color: black;">Executing the COBOL Program:</h3>
  <p>Running the program using JCL, verifying the report output in SDSF, and debugging as needed.</p>
</div>

<style>
  .cobol-key-learning-objectives h2, .cobol-key-learning-objectives h3 {
    color: black;
  }
  .cobol-key-learning-objectives p, .cobol-key-learning-objectives ul {
    font-size: 16px;
    margin-bottom: 10px;
  }
  .cobol-key-learning-objectives ul {
    list-style-type: disc;
    padding-left: 20px;
    margin-left: 20px;
  }
</style>
  <embed src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/Lesson+3%3A+How+to+write+a+program+that+prepares+a+report+/COBOL-RPT1000.pdf" type="application/pdf" width="100%" height="800">`,
            },
            {
              id: 3,
              topic: "Quiz",
              type: "quiz",
            },
          ],
        },
        {
          id: 4,
          name: "How to design, code, and test a structured program ",
          type: "cobol4",
          contents: [
            {
              id: 1,
              topic: "How to design, code, and test a structured program",
              content: `
              <div class='data-rep'>
            <head><title>How to design, code, and test a structured program</title></head>  
  <body>
    <p>This lesson focuses on the principles of structured programming in COBOL, guiding learners on how to design, write, and test modular programs effectively in a mainframe environment. </p>
 <div class="cobol-programming-learning-objectives"><br/>
  <h2 style="font-weight: bold; color: black;">What You’ll Learn:</h2>

  <h3 style="font-weight: bold; color: black;">Understanding Structured Programming:</h3>
  <p>Breaking down programs into independent, reusable modules for better readability and maintainability.</p>

  <h3 style="font-weight: bold; color: black;">Control Break Logic:</h3>
  <p>Implementing branch control to handle grouped data efficiently.</p>

  <h3 style="font-weight: bold; color: black;">Program Design Techniques:</h3>
  <p>Using structured listings instead of flowcharts to organize and visualize program logic.</p>

  <h3 style="font-weight: bold; color: black;">Modular Independence:</h3>
  <p>Exploring the challenges of true module independence and how modules interact within a program.</p>

  <h3 style="font-weight: bold; color: black;">Testing & Debugging:</h3>
  <p>Best practices for testing COBOL programs, including:</p>
  <ul>
    <li>Commenting out untested sections.</li>
    <li>Using SDSF and debugging tools to verify execution.</li>
    <li>Handling interactive and batch processing, including CICS-based transactional programs.</li>
  </ul>
</div>

<style>
  .cobol-programming-learning-objectives h2, .cobol-programming-learning-objectives h3 {
    color: black;
  }
  .cobol-programming-learning-objectives ul {
    list-style-type: disc;
    padding-left: 20px;
    font-size: 16px;
  }
  .cobol-programming-learning-objectives ul li {
    margin: 5px 0;
  }
  .cobol-programming-learning-objectives p {
    font-size: 16px;
  }
</style>
<br/>
<video controls width="700">
        <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/COBOL/Lesson+4%3A+How+to+design%2C+code%2C+and+test+a+structured+program+/ICTN+3220++Enterprise+Server+Programming+Spring+2022-20220214+2317-1.mp4" type="video/mp4">
      </video><br/>
  >`,
            },
            {
              id: 2,
              topic: "Lab",
              content: `
  <p>This lab focuses on designing, coding, and testing a structured COBOL program that interactively calculates sales tax based on user input. </p>
<div class="interactive-cobol-learning-objectives">
  <h2 style="font-weight: bold; color: black;">Key Learning Objectives:</h2>

  <h3 style="font-weight: bold; color: black;">Understanding Interactive COBOL Programs:</h3>
  <p>Accepting user input and processing values dynamically.</p>

  <h3 style="font-weight: bold; color: black;">Using WORKING-STORAGE Variables:</h3>
  <p>Learning about 77 level variables, which are independent and efficient.</p>

  <h3 style="font-weight: bold; color: black;">Converting Alphanumeric to Numeric Data:</h3>
  <p>Using FUNCTION NUMVAL to convert user input for calculations.</p>

  <h3 style="font-weight: bold; color: black;">Performing Arithmetic in COBOL:</h3>
  <p>Computing sales tax and rounding results.</p>

  <h3 style="font-weight: bold; color: black;">Executing and Debugging in SDSF:</h3>
  <p>Running the program using JCL, handling errors, and validating output.</p>

  <h3 style="font-weight: bold; color: black;">Using REXX for Execution:</h3>
  <p>Running the COBOL program interactively via a REXX script.</p>
</div>

<style>
  .interactive-cobol-learning-objectives h2, .interactive-cobol-learning-objectives h3 {
    color: black;
  }
  .interactive-cobol-learning-objectives p {
    font-size: 16px;
    margin-bottom: 10px;
  }
</style> 
<br/>
  <embed src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/COBOL/Lesson+4%3A+How+to+design%2C+code%2C+and+test+a+structured+program+/COBOL-CALC1000_Sp22_ECU.pdf" type="application/pdf" width="100%" height="800" `,
            },
            {
              id: 3,
              topic: "Quiz",
              type: "quiz",
            },
          ],
        },
        {
          id: 5,
          name: "Other ways to define, move, and initialize fields ",
          type: "cobol6",
          contents: [
            {
              id: 1,
              topic: "Other ways to define, move, and initialize fields",
              content: `
              <div class='data-rep'>
            <head><title>Other ways to define, move, and initialize fields</title></head>  
  <body>
    <p>This lesson explores alternative ways to define, manipulate, and initialize fields in COBOL, focusing on efficient memory usage and data handling. </p><br/>
 <div class="cobol-data-storage">
  <h2 style="font-weight: bold; color: black;">What You’ll Learn:</h2>

  <h3 style="font-weight: bold; color: black;">FILLER Fields:</h3>
  <p>Understanding when and why <strong>FILLER</strong> fields are optional and how they save storage.</p>

  <h3 style="font-weight: bold; color: black;">Working with Constants:</h3>
  <p>Using reserved words to define constant values for efficiency.</p>

  <h3 style="font-weight: bold; color: black;">Data Storage Methods:</h3>
  <ul>
    <li><strong>Display Format:</strong> The most commonly used storage type.</li>
    <li><strong>Binary & Packed Decimal:</strong> Handling numeric data efficiently.</li>
    <li><strong>Understanding Floating Point and Signed Numbers:</strong> Storing sign information correctly.</li>
  </ul>

  <h3 style="font-weight: bold; color: black;">Using the MOVE Statement:</h3>
  <p>Techniques to transfer data between fields.</p>

  <h3 style="font-weight: bold; color: black;">Field Initialization Strategies:</h3>
  <ul>
    <li><strong>Setting values using VALUE ALL:</strong> (e.g., <code>PIC X(40) VALUE ALL "*"</code>).</li>
    <li><strong>Handling numeric conversions:</strong> Avoiding computation errors using <code>NUMVAL</code>.</li>
  </ul>
</div>
<style>
  .cobol-data-storage h2, .cobol-data-storage h3 {
    color: black;
  }
  .cobol-data-storage ul {
    list-style-type: disc;
    padding-left: 20px;
    font-size: 16px;
  }
  .cobol-data-storage ul li {
    margin: 5px 0;
  }
  .cobol-data-storage p {
    font-size: 16px;
  }
  .cobol-data-storage code {
    font-family: monospace;
    font-size: 16px;
  }
</style>
<br/>
<video controls width="700">
        <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/COBOL/Lesson+6%3A+Other+ways+to+define%2C+move%2C+and+initialize+fields+/ICTN+3220++Enterprise+Server+Programming+Spring+2022-20220228+2302-1.mp4" type="video/mp4">
      </video><br/>
  `,
            },
            {
              id: 2,
              topic: "Lab 6a: Average Calculation Program (AVG1000)",
              content: `
              <div class='data-rep'>
                <head><title>Lab 6a: Average Calculation Program (AVG1000)</title></head>  
                <body>
                  <p>This lab focuses on defining, moving, and initializing fields in COBOL by building a program that reads a series of numbers, calculates the sum and average, and outputs the results.</p>
            
                  <div class="cobol-programming-learning-objectives"><br/>
                    <h2 style="font-weight: bold; color: black;">What You’ll Learn:</h2>
            
                    <h3 style="font-weight: bold; color: black;">Using Working-Storage Variables:</h3>
                    <p>Defining and initializing:</p>
                    <ul>
                      <li>A counter for the number of entries</li>
                      <li>A sum variable to store the total</li>
                      <li>An average variable for computation</li>
                    </ul>
            
                    <h3 style="font-weight: bold; color: black;">Reading and Converting Data:</h3>
                    <p>Accepting numeric input as text and converting it using <code>NUMVAL</code> for calculations.</p>
            
                    <h3 style="font-weight: bold; color: black;">Modular Program Structure:</h3>
                    <ul>
                      <li><strong>Main Module</strong> – Controls the program flow</li>
                      <li><strong>Calculation Module</strong> – Computes the sum and average</li>
                      <li><strong>Output Module</strong> – Displays the results</li>
                    </ul>
            
                    <h3 style="font-weight: bold; color: black;">Handling Interactive Input:</h3>
                    <p>Prompting users for multiple inputs and defining a stopping condition.</p>
            
                    <h3 style="font-weight: bold; color: black;">Executing and Debugging:</h3>
                    <ul>
                      <li>Running the program with JCL (modified from <code>CALC1000</code>)</li>
                      <li>Executing using a REXX script</li>
                      <li>Checking SDSF output errors (<code>ABEND S000</code> is acceptable)</li>
                    </ul>
                  </div>
            
                  <style>
                    .cobol-programming-learning-objectives h2, .cobol-programming-learning-objectives h3 {
                      color: black;
                    }
                    .cobol-programming-learning-objectives ul {
                      list-style-type: disc;
                      padding-left: 20px;
                      font-size: 16px;
                    }
                    .cobol-programming-learning-objectives ul li {
                      margin: 5px 0;
                    }
                    .cobol-programming-learning-objectives p {
                      font-size: 16px;
                    }
                  </style>
                  <br/>
                  <embed src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/COBOL/Lesson+6%3A+Other+ways+to+define%2C+move%2C+and+initialize+fields+/COBOL-Lab_7_AVG1000_ECU.pdf" type="application/pdf" width="100%" height="800">
                </body>
              </div>
              `
            },
            {
              id: 3,
              topic: "Lab 6b: Student Information Report (STUDENTS)",
              content: `
              <div class='data-rep'>
                <head><title>Lab 6b: Student Information Report (STUDENTS)</title></head>  
                <body>
                  <p>This lab focuses on processing and formatting a structured student report using COBOL, based on concepts from the MYEMPS program.</p>
            
                  <div class="cobol-programming-learning-objectives"><br/>
                    <h2 style="font-weight: bold; color: black;">What You’ll Learn:</h2>
            
                    <h3 style="font-weight: bold; color: black;">Defining and Structuring Data Fields:</h3>
                    <p>Creating a <code>STUDENT-RECORD</code> structure with the following fields:</p>
                    <ul>
                      <li>First Name (15 bytes)</li>
                      <li>Last Name (15 bytes)</li>
                      <li>Major (20 bytes)</li>
                      <li>Student ID (5 bytes)</li>
                    </ul>
            
                    <h3 style="font-weight: bold; color: black;">Creating and Reading Data Files:</h3>
                    <p>Using a <code>STDATA</code> file with at least three student records.</p>
            
                    <h3 style="font-weight: bold; color: black;">Working with COBOL File Handling:</h3>
                    <p>Defining <code>FILE SECTION</code> and processing structured records for reporting.</p>
            
                    <h3 style="font-weight: bold; color: black;">Using Modular Programming:</h3>
                    <p>Implementing reusable program sections for:</p>
                    <ul>
                      <li>Reading student records</li>
                      <li>Formatting the report output</li>
                      <li>Writing formatted records to a report file</li>
                    </ul>
            
                    <h3 style="font-weight: bold; color: black;">Executing the Program in a Mainframe Environment:</h3>
                    <ul>
                      <li>Modifying JCL from <code>MYEMPS</code> for execution</li>
                      <li>Running the program using a REXX script</li>
                      <li>Checking SDSF output to confirm successful execution</li>
                    </ul>
                  </div>
            
                  <style>
                    .cobol-programming-learning-objectives h2, .cobol-programming-learning-objectives h3 {
                      color: black;
                    }
                    .cobol-programming-learning-objectives ul {
                      list-style-type: disc;
                      padding-left: 20px;
                      font-size: 16px;
                    }
                    .cobol-programming-learning-objectives ul li {
                      margin: 5px 0;
                    }
                    .cobol-programming-learning-objectives p {
                      font-size: 16px;
                    }
                  </style>
                  <br/>
                  <embed src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/COBOL/Lesson+6%3A+Other+ways+to+define%2C+move%2C+and+initialize+fields+/COBOL-Lab_8_+STUDENTS.pdf" width="100%" height="800">
                </body>
              </div>
              `
            },            
            {
              id: 4,
              topic: "Lab 6c: Interactive COBOL Program (HELLO2)",
              content: `
              <div class='data-rep'>
                <head><title>Lab 6c: Interactive COBOL Program (HELLO2)</title></head>  
                <body>
                  <p>This lab focuses on writing an interactive COBOL program that collects and displays user input, applying techniques learned in CALC1000 and HELLO.</p>
            
                  <div class="cobol-programming-learning-objectives"><br/>
                    <h2 style="font-weight: bold; color: black;">What You’ll Learn:</h2>
            
                    <h3 style="font-weight: bold; color: black;">Handling Interactive Input:</h3>
                    <p>Collecting user information such as:</p>
                    <ul>
                      <li>Name</li>
                      <li>Hometown</li>
                      <li>Major</li>
                    </ul>
            
                    <h3 style="font-weight: bold; color: black;">Defining and Using Variables:</h3>
                    <p>Declaring text-based (alphanumeric) fields using <code>Level 77</code> variables.</p>
            
                    <h3 style="font-weight: bold; color: black;">Structuring the Program with Modules:</h3>
                    <ul>
                      <li><strong>Main Module</strong> – Controls program execution</li>
                      <li><strong>Input Module</strong> – Accepts user input</li>
                      <li><strong>Output Module</strong> – Displays collected data</li>
                    </ul>
            
                    <h3 style="font-weight: bold; color: black;">Executing the Program:</h3>
                    <ul>
                      <li>Running the program via JCL (modified from <code>HELLO</code> JCL)</li>
                      <li>Understanding and handling expected <code>ABEND S000</code> due to interactive input</li>
                      <li>Executing the program using a REXX script for interactive mode</li>
                    </ul>
                  </div>
            
                  <style>
                    .cobol-programming-learning-objectives h2, .cobol-programming-learning-objectives h3 {
                      color: black;
                    }
                    .cobol-programming-learning-objectives ul {
                      list-style-type: disc;
                      padding-left: 20px;
                      font-size: 16px;
                    }
                    .cobol-programming-learning-objectives ul li {
                      margin: 5px 0;
                    }
                    .cobol-programming-learning-objectives p {
                      font-size: 16px;
                    }
                  </style>
                  <br/>
                  <embed src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/COBOL/Lesson+6%3A+Other+ways+to+define%2C+move%2C+and+initialize+fields+/COBOL-Lab_4_Hello_interactive.pdf" type="application/pdf" width="100%" height="800">
                </body>
              </div>
              `
            },
            {
              id: 5,
              topic: "Quiz",
              type: "quiz",
            },
          ],
        }, 
        {
          id: 6,
          name: "How to arithmetic statements and intrinsic functions ",
          type: "cobol7",
          contents: [
            {
              id: 1,
              topic: " How to arithmetic statements and intrinsic functions",
              content: `
              <div class='data-rep'>
            <head><title> How to arithmetic statements and intrinsic functions</title></head>  
  <body>
    <p>This lesson focuses on performing arithmetic operations and using built-in functions in COBOL for efficient data processing. </p>
 <div class="cobol-arithmetic"><br/>
  <h2 style="font-weight: bold; color: black;">What You’ll Learn:</h2>

  <h3 style="font-weight: bold; color: black;">Arithmetic Statements in COBOL:</h3>
  <ul>
    <li><strong>ADD:</strong> Adds values to an identifier.</li>
    <li><strong>SUBTRACT:</strong> Subtracts values from an identifier.</li>
    <li><strong>MULTIPLY / DIVIDE:</strong> Multiplies or divides values (though <em>COMPUTE</em> is preferred).</li>
    <li><strong>COMPUTE:</strong> The recommended method for complex calculations.</li>
  </ul>

  <h3 style="font-weight: bold; color: black;">Using Intrinsic Functions:</h3>
  <ul>
    <li><strong>MOD vs. REM:</strong> MOD returns the integer quotient, while REM gives the remainder.</li>
    <li><strong>MATHEMATICAL OPERATIONS:</strong> Using functions inside <em>MOVE</em> or <em>COMPUTE</em> statements.</li>
    <li><strong>Business-Oriented Functions:</strong> Trigonometric functions are rarely used in business applications.</li>
  </ul>

  <h3 style="font-weight: bold; color: black;">Best Practices in COBOL Arithmetic:</h3>
  <ul>
    <li>Understanding precision, rounding, and data movement for accurate calculations.</li>
  </ul>
</div>

<style>
  .cobol-arithmetic h2, .cobol-arithmetic h3 {
    color: black;
  }
  .cobol-arithmetic ul {
    list-style-type: disc;
    padding-left: 20px;
    font-size: 16px;
  }
  .cobol-arithmetic ul li {
    margin: 5px 0;
  }
  .cobol-arithmetic ul ul {
    list-style-type: circle;
  }
</style>
<br/>
  <video controls width="700">
        <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/COBOL/Lesson+7%3A+How+to+arithmetic+statements+and+intrinsic+functions+/ICTN+3220++Enterprise+Server+Programming+Spring+2022-20220314+2200-1.mp4" type="video/mp4">
        </video>`,
            },
            {
              id: 2,
              topic: "Quiz",
              type: "quiz",
            },
          ],
        },
        {
          id: 7,
          name: "How to work with dates ",
          type: "cobol8",
          contents: [
            {
              id: 1,
              topic: " How to work with dates",
              content: `
              <div class='data-rep'>
            <head><title>How to work with dates</title></head>  
  <body>
    <p>This lesson covers date handling techniques in COBOL, including date formats, conversions, and calculations. </p><br/>
 <div class="cobol-date-handling">
  <h2 style="font-weight: bold; color: black;">What You’ll Learn:</h2>

  <h3 style="font-weight: bold; color: black;">Understanding Date Systems in COBOL</h3>
  <ul>
    <li><strong>Date Formatting and Conversions:</strong></li>
    <ul>
      <li>Handling 2-digit vs. 4-digit years to avoid logical errors.</li>
      <li>Using REDEFINES to transform year fields into 4-digit values.</li>
    <li><strong>Windowing Techniques:</strong> Managing century transitions in date logic.</li>
  </ul>

  <h3 style="font-weight: bold; color: black;">Performing Date Calculations:</h3>
  <ul>
    <li>Determining the <strong>number of days between two dates</strong>.</li>
    <li>Ensuring correct date arithmetic for business applications.</li>
  </ul>

  <h3 style="font-weight: bold; color: black;">Best Practices for Date Handling:</h3>
  <ul>
    <li>Avoiding <strong>incorrect IF conditions</strong> due to century mismatches.</li>
    <li>Understanding how <strong>date windowing</strong> works in financial applications.</li>
  </ul>
</div>

<style>
  .cobol-date-handling h2, .cobol-date-handling h3 {
    color: black;
  }
  .cobol-date-handling ul {
    list-style-type: disc;
    padding-left: 20px;
    font-size: 16px;
  }
  .cobol-date-handling ul li {
    margin: 5px 0;
  }
  .cobol-date-handling ul ul {
    list-style-type: circle;
  }
</style>
<br/>
<video controls width="700">
       <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/COBOL/Lesson+8%3A+How+to+work+with+dates+/ICTN+3220++Enterprise+Server+Programming+Spring+2022-20220328+2202-1.mp4"</source>
       type="video/mp4">`,
            },
            {
              id: 2,
              topic: "Quiz",
              type: "quiz",
            },
          ],
        },
        {
          id: 8,
          name: "How to work with characters ",
          type: "cobol9",
          contents: [
            {
              id: 1,
              topic: "How to work with characters",
              content: `
              <div class='data-rep'>
            <head><title>How to work with characters</title></head>  
  <body>
    <p>In this lesson, we explore how COBOL handles character data and string manipulation. You’ll learn how to reference specific parts of a field, manage name structures, and process character data effectively. Key topics include: </p><br/>
<div class="cobol-module">
  <ul>
    <li><strong>Referring to Part of a Field</strong> – Understanding how to extract and manipulate sections of a string.</li>
    <li><strong>String Formatting and Editing</strong> – Handling name fields with spaces, punctuation, and special characters.</li>
    <li><strong>Using COUNT Variables</strong> – Tracking and adjusting character counts for processing.</li>
    <li><strong>Editing ZIP Codes and Other Inputs</strong> – Formatting numerical and textual data to match business requirements.</li>
  </ul>
</div>
<br/>
`,
            },
            {
              id: 2,
              topic: "Lab",
              content: `
<p>This COBOL lab focuses on calculating the future value of an investment based on user input. It expands upon CALC1000 by introducing a complete financial computation process. </p><br/>
<h3 style="font-weight: bold;">Key Components of the Lab: </h3><br/>
<div class="cobol-procedure">
  <h2 style="font-weight: bold; color: black;">1. IDENTIFICATION & DATA DIVISION</h2>
  <ul>
    <li>Define program details, author information.</li>
    <li>Setup <strong>WORKING-STORAGE SECTION</strong> to hold input values and computed results.</li>
    <li>Use <strong>NUMVAL</strong> function to convert alphanumeric input into numeric values.</li>
  </ul>
<br/>
  <h2 style="font-weight: bold; color: black;">2. PROCEDURE DIVISION:</h2>
  <h3 style="font-weight: bold; color: black;">A. Main Module (000-CALCULATE-FUTURE-VALUES)</h3>
  <p>Repeatedly executes <strong>100-CALCULATE-FUTURE-VALUE</strong> until user inputs zero.</p>
<br/>
  <h3 style="font-weight: bold; color: black;">B. 100-CALCULATE-FUTURE-VALUE</h3>
  <ul>
    <li>Prompts user for an action.</li>
    <li>Accepts input and converts it into a numeric value.</li>
    <li>If <strong>NUMBER-ENTERED = 1</strong>, calls <strong>110-GET-USER-VALUES</strong>.</li>
    <li>Loops through <strong>120-CALCULATE-NEXT-FV</strong> until the final value is computed.</li>
  </ul>
<br/>
  <h3 style="font-weight: bold; color: black;">C. 110-GET-USER-VALUES</h3>
  <ul>
    <li>Collects investment amount, number of years, and yearly interest rate.</li>
  </ul>
<br/>
  <h3 style="font-weight: bold; color: black;">D. 120-CALCULATE-NEXT-FV</h3>
  <ul>
    <li>Computes future value using financial formulas.</li>
    <li>Increments <strong>YEAR-COUNTER</strong> until reaching the final year.</li>
  </ul>
</div>

<style>
  .cobol-procedure h2, .cobol-procedure h3 {
    color: black;
  }
  .cobol-procedure ul {
    list-style-type: disc;
    padding-left: 20px;
    font-size: 16px;
  }
  .cobol-procedure ul li {
    margin: 5px 0;
  }
</style>
<br/>
<div class="cobol-jcl">
  <h2 style="font-weight: bold; color: black;">3. JCL & Execution</h2>
  <ul>
    <li>Copy the necessary <strong>CALC2000</strong> file from <strong>KC02071.ECUJCL</strong> to personal <strong>ECUJCL</strong>.</li>
    <li>Modify execution scripts.</li>
    <li>Handle expected <strong>ABEND</strong> message due to lack of user input.</li>
    <li>Use <strong>SDSF</strong> output to verify execution.</li>
  </ul>
</div>

<style>
  .cobol-jcl h2 {
    color: black;
  }
  .cobol-jcl ul {
    list-style-type: disc;
    padding-left: 20px;
    font-size: 16px;
  }
  .cobol-jcl ul li {
    margin: 5px 0;
  }
</style>
  <embed src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/COBOL/Lesson+9%3A+How+to+work+with+characters+/COBOL-CALC2000_ECU.pdf" type="application/pdf" width="100%" height="800">,
`,
            },
          ],
        },
        {
          id: 9,
          name: "How to work with tables ",
          type: "cobol10",
          contents: [
            {
              id: 1,
              topic: "How to work with tables",
              content: `
              <div class='data-rep'>
            <head><title>How to work with tables</title></head>  
  <body>
    <p>In this lesson, we explore how COBOL handles tables (arrays) for storing and processing multiple values efficiently. Tables are fundamental in COBOL for managing structured data.</p><br/>
 <h2 style="font-weight: bold;">Key Topics Covered:</h2><br/>
<div class="cobol-tables">
  <h2 style="font-weight: bold; color: black;">Defining Tables in COBOL</h2>
  <ul>
    <li><strong>Using the OCCURS clause</strong> to define an array.</li>
    <li><strong>Structuring data efficiently</strong> in the WORKING-STORAGE SECTION.</li>
  </ul>

  <h3 style="font-weight: bold; color: black;">Accessing Table Elements</h3>
  <ul>
    <li><strong>Using subscripts</strong> (numeric variables) to reference specific entries.</li>
    <li><strong>Understanding indexed tables</strong> for optimized processing.</li>
  </ul>

  <h3 style="font-weight: bold; color: black;">Subscripts vs. Indexing</h3>
  <ul>
    <li><strong>Subscripts:</strong> Numeric values representing position; require additional calculations.</li>
    <li><strong>Indexes:</strong> More efficient as they store displacement directly in memory.</li>
    <li><strong>INDEXED BY clause:</strong> Improves table navigation and performance.</li>
  </ul>

  <h3 style="font-weight: bold; color: black;">Multi-Dimensional Tables</h3>
  <ul>
    <li><strong>Handling tables with multiple levels of OCCURS.</strong></li>
    <li><strong>Organizing data with nested tables.</strong></li>
  </ul>

  <h3 style="font-weight: bold; color: black;">Table Redefinition & Data Manipulation</h3>
  <ul>
    <li><strong>Using REDEFINES</strong> to manage different views of table data.</li>
    <li><strong>Updating, searching, and modifying tables dynamically.</strong></li>
  </ul>

  <h3 style="font-weight: bold; color: black;">Performance Considerations</h3>
  <ul>
    <li><strong>Efficiently looping through tables</strong> using PERFORM VARYING.</li>
    <li><strong>Minimizing system overhead</strong> with indexing instead of subscripting.</li>
  </ul>
</div>
<video controls width="700">
        <source src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/COBOL/Lesson+10%3A+How+to+work+with+tables+/ICTN+3220++Enterprise+Server+Programming+Spring+2022-20220418+2205-1.mp4" type="video/mp4">
      </video>

<style>
  .cobol-tables h2, .cobol-tables h3 {
    color: black;
  }
  .cobol-tables ul {
    list-style-type: disc;
    padding-left: 20px;
    font-size: 16px;
  }
  .cobol-tables ul li {
    margin: 5px 0;
  }
</style>
`,
            },
            {
              id: 2,
              topic: "Quiz",
              type: "quiz",
            },
          ],
        },
        {
          id: 10,
          name: "How to use copy members and subprograms ",
          type: "cobol11",
          contents: [
            {
              id: 1,
              topic: "How to use copy members and subprograms",
              content: `
              <div class='data-rep'>
            <head><title>How to use copy members and subprograms</title></head>  
  <body>
    <p>In this lesson, we explore how COBOL modularizes code using copy members and subprograms for reusability and maintainability. </p><br/>
 <h2 style="font-weight: bold;">Key Topics Covered: </h2><br/>
<div class="cobol-modular-programming">
  <h2 style="font-weight: bold; color: black;">Using COPY Members</h2>
  <ul>
    <li><strong>The COPY statement</strong> allows reusable code sections (e.g., data definitions) to be included in multiple programs.</li>
    <li><strong>Reduces redundancy</strong> and simplifies maintenance.</li>
  </ul>

  <h3 style="font-weight: bold; color: black;">Working with Subprograms</h3>
  <ul>
    <li><strong>CALL Statement:</strong> Enables COBOL programs to invoke subprograms dynamically.</li>
    <li><strong>Passing Parameters:</strong> Uses USING to send data between programs.</li>
  </ul>

  <h3 style="font-weight: bold; color: black;">Static vs. Dynamic Linking</h3>
  <ul>
    <li><strong>Static Call:</strong> Subprograms are linked at compile-time.</li>
    <li><strong>Dynamic Call:</strong> Subprograms are loaded at runtime, allowing for flexibility.</li>
  </ul>

  <h3 style="font-weight: bold; color: black;">Advantages of Modular Programming</h3>
  <ul>
    <li><strong>Enhances code reusability</strong> and scalability.</li>
    <li><strong>Simplifies debugging</strong> by separating logic into smaller components.</li>
    <li><strong>Improves collaborative development</strong> in large COBOL applications.</li>
  </ul>
</div>

<style>
  .cobol-modular-programming h2, .cobol-modular-programming h3 {
    color: black;
  }
  .cobol-modular-programming ul {
    list-style-type: disc;
    padding-left: 20px;
    font-size: 16px;
  }
  .cobol-modular-programming ul li {
    margin: 5px 0;
  }
</style>
`,
            },
          ],
        },
        {
          id: 11,
          name: "Review Your Knowledge",
          type: "review",
          contents: [
            {
              id: 1,
              topic: "Qualtrics Survey",
              author: "Hollie Rosser",
              points: 100,
              content: `
                <p style="margin-top:20px;">Completing this survey is worth $5.</p>
                <a target="_blank"  style='text-decoration: underline' href='https://unomaha.az1.qualtrics.com/jfe/form/SV_6iomnRh5EwVwHn8' alt='qualtrics survey'>Please complete this Qualtrics Survey</a>
                `,
            },
          ],
        },
      ],
    },
    ]
   
  
  
  export default data;
  

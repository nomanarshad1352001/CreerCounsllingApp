import React, { Fragment } from "react";
import Button from "../UI/Button.js";
import Modal from "../UI/Modal.js";
import LoginMain from "./LoginMain.js";
import clasess from "./Mainpage.module.css";
// import careerCover from "../Material/careerCover.jpg";
export default function MainPage(props) {
  return (
    <Fragment>
      <div className={clasess.Maincontainer}>
        <div className={clasess.Title}>
          <h1>Welcome to our Career and Degree Counslling App </h1>
        </div>
        {/* <div className={`${clasess.sides} ${clasess.side1}`}>1</div>
        <div className={`${clasess.sides} ${clasess.side2}`}>2</div>
        <div className={`${clasess.sides} ${clasess.side3}`}>3</div>
        <div className={`${clasess.sides} ${clasess.side4}`}>4</div> */}
        <div className={clasess.container}>
          <h2>What Is Career Counselling?</h2>
          <p>
            Career Counselling is the process of giving advice, support and
            guidance for selecting the right stream after class 10th, and the
            right career after 12th and graduation. Career confusion and
            indecision can affect you at any stage of your career, thus it is
            important to get the right support to resolve it and plan ahead.
          </p>
        </div>
        <div className={clasess.container}>
          <h2>Why Do I Need Career Counselling?</h2>
          <div>
            <p>
              All of us require career guidance at some point in our life. It
              helps us get insights about ourselves, our career and what we can
              do to improve it. Here are a few ways in which career counselling
              helps us:
            </p>
            <h4>Helps Pick The Right Career</h4>
            <p>
              Career Counsellors are experts at assessing your aptitude,
              personality, interests, and other aspects of you. They use this
              evaluation to suggest the best career options from all the
              available and relevant options.
            </p>
            <h4>Helps Provide Expert Resources</h4>
            <p>
              Career Counselling provides access to the resources and knowledge
              that a career expert possesses. This knowledge of Careers, their
              scope and the paths to pursue them are most important from the
              point of view of a parent and child, since most of the times,
              parents or guardians do not have that kind of knowledge.
            </p>
            <h4>Helps Gain Confidence And Insight</h4>
            <p>
              Career Counselling helps a counselee understand the hurdles in
              his/her career path. This knowledge helps to develop the
              confidence to overcome these hurdles. It is the duty of a good
              counsellor to provide such insight and confidence to the
              counselee.
            </p>
            <h4>Helps Change Unwanted Behavior Patterns</h4>
            <p>
              Students and professionals have habits that are hard to break,
              such as procrastinating, not keeping updated on latest
              developments in their chosen career paths, neglecting emotional
              and mental health, not trying to self-motivate, etc. A Career
              Counsellor helps break such behavioral patterns that lead to
              unproductive activities, both at home and in school/college/work.
            </p>
            <h4>Helps Remove Career-Related Frustration</h4>
            <p>
              Choosing a career can be a demanding task for both parents and
              children. A lack of any source of venting out emotions and
              thoughts may add to the existing frustration. Career Counselling
              provides a platform where such frustrations can be reduced, and
              focus is re-directed to selecting the best career options.
            </p>
            <h4>Provides A Role-Model</h4>
            <p>
              Career Counselling helps students connect to experts who have
              enough life experiences to share. They are role models who have
              accomplished much, and helped people in their life. This is why
              Career Counselling can serve as an inspiration to those who
              require it.
            </p>
            <h4>Helps Bring Stability In Thought</h4>
            <p>
              Career Counsellors can help you remain calm when it comes to
              taking a career decision. Counselling helps bring about focus, and
              maintain that focus throughout in our activities. Through proper
              scheduling and planning, they try and make your life more
              organized.
            </p>
          </div>
        </div>
        <div className={clasess.container}>
          <h2>Who Need Career Counselling & When?</h2>
          <div>
            <p>
              The perfect time for students to seek Career Counselling is during
              the ages 13-17 years (8th standard to 12th standard). This is a
              time of many changes taking place in their life, both physical and
              emotional, such as transitioning from school to college, and
              trying to “fit in” with peers. It is also a time when career
              decisions are made. This is why they need someone to guide them in
              the right direction at this time.
            </p>

            <p>
              Most of our parents are actively involved in shaping our career,
              in fact at least 51% of Indian parents’ priority is their child’s
              financial success (Survey by HSBC Retail Banking and Wealth
              Management in a report titled “ The Value of Education: Learning
              for Life”). We can safely assume that our parents follow a
              hands-on approach when it comes to making career decisions for us.
              Sometimes, it works and many a times, it does not. We can
              attribute this to the fact that every child is unique, and it is
              extremely hard for parents or teachers to always recognize the
              child’s strengths or weaknesses, and his passion or dislikes. This
              is another reason why career counselling is needed.
            </p>

            <p>
              For students in college, who are still confused about what they
              want to do, as well as for professionals who want to transition
              from their field to something they love, career counselling helps
              in the following manner:
            </p>
            <ul>
              <li>
                Career Counselling helps them understand the career options that
                they have, and how to pursue them.
              </li>
              <li>
                Career Counselling helps them understand their own strengths and
                weaknesses with regard to their present course or profession,
                and lets them know what career they would be suited for.
              </li>
              <li>
                Career Counselling gives them a platform to voice their opinion
                about what they would like to pursue, as well as discuss the
                obstacles that they may be worried about.
              </li>
              <li>
                Career Counselling makes the transition from one field to
                another a non-stressful event.
              </li>
              <li>
                Career Counselling helps give them the required confidence to
                change their domain, with the support of an experienced mentor.
              </li>
            </ul>
          </div>
        </div>
        <div className={clasess.container}>
          <h2>What Career Counselling Is Not</h2>
          <div>
            <p>
              There are some common misconceptions about career counselling. Let
              us have a look at what career counselling is not:
            </p>
            <h4>
              It is not general advice about careers, courses and curriculum.
            </h4>
            <p>
              Career Counsellors help you pick the best career options, based on
              your abilities. Their suggestions and guidance are unbiased.
            </p>
            <h4>It is not a short-term process that gives instant results.</h4>
            <p>
              Career Counselling takes time, effort and patience. It is a
              long-term process involving many changes on the part of the
              student.
            </p>
            <h4>
              It is not a service that helps you get jobs or admissions in
              companies and colleges respectively.
            </h4>
            <p>
              Career Counsellors are not affiliated to any academic institution.
              They only help you reach your potential and aim for the best
              institutes and companies in your career.
            </p>
            <h4>It is not a procedure that runs on trial-and-error.</h4>
            <p>
              Career Counselling is a scientific process and involves making
              calculated moves, based on hard facts and methodical research.
            </p>
          </div>
        </div>
        {props.LoginIsShown && (
          <Modal onClickFunc={props.onClose}>
            <LoginMain
              onCloseLogin={props.onClose}
              setUserLoginData={props.setUserLoginData}
              setIsLoggedIn={props.setIsLoggedIn}
            />
          </Modal>
        )}
        <Button btnTitle="Login" onClickFunc={props.OnShow} />
      </div>
    </Fragment>
  );
}

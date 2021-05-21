import React from 'react';
import Spacer from './shared/components/Spacer';
import Layout from './shared/Layout';

const About = () => (
  <Layout>
    <div className="page-header">
      <h1>A bit about myself</h1>
    </div>

    <div className="text-major">
      <img className="wrap-picture" src="/images/me.jpg" />
      <p>
        <b>Hi there!</b> I'm David Liao, an enthusiastic Computer Science
    student in Ottawa, Canada. First and foremost thanks for taking the
    time to view my website! You've probably already seen my
    professional profile from the rest of the site, but the TL;DR is
    that I enjoy coding projects every now and then with new pieces of
    technology, then using global cloud infrastructure to deploy them to
    be seen by the world!
  </p>
      <p>Here I'd like to show you a bit more about what I'm like, how
      I work, and things I enjoy doing when I'm not in front of a computer
    screen.</p>
      <br />
      <p>
        <b><i>When I'm working,</i></b> I like to think things through. This
    means considering my options each step of the way, and creating
    designs in my mind or on drawing software before implementing them.
    Doing so has allowed me to ask critical questions, learn more
    quickly, and produce better work.
  </p>
      <p>I'm also a huge fan of productivity and getting stuff done
      fast. Our time is valuable, and I think it's best to minimize how
      much time we spend doing repetitive or menial tasks. I'm constantly
      looking for ways to speed things up &mdash; maybe it's learning new
      keyboard hotkeys, automating deployment processes, or just simply
      finding ways to keep my thoughts organized. It helps me gets things
    done and keeps things rolling.</p>
      <br /> <img className="wrap-picture" src="/images/sssc.jpg" />
      <p>
        <b><i>In my community,</i></b> one of my main driving factors is
    helping others succeed. I hate it when people get frustrated
    or just give up on something I'm passionate about. In my second year
    of university, I joined Carleton's <a className="link-yellow"
          href="https://sssc.carleton.ca/">SSSC</a> as a volunteer
    mentor, and held one-on-one sessions with other peers to help them
    navigate whatever situation they are in. Speaking with various
    mentees, I listened to whatever they needed help with, helped them
    navigate through their frustration step-by-step, and finally inspire
    them to work towards the personal goals they had set during these
    sessions.
  </p>
      <p>Similarly, during my two terms being a Teaching Assistant for
      an introductory Comp Sci course, I've been able to help other
      students out from a more technical perspective. For students who
      were struggling with tutorials or assignments, I sat down with them
      and helped guide them through the thought process, while emphasizing
      best practices or tips and tricks that would make them more
      efficient. While for students who were more ahead, I provided them
      with insight on how the skills and knowledge learned from the course
      ties into the industry. To me, opportunities like these which allow
    me to uplift and inspire other people are super rewarding.</p>
      <br />
      <p>
        <b><i>In my spare time,</i></b> I like cooking, doing a variety of
    home improvement tasks, and spending time with friends and family. I
    stay active through cycling, going for walks, swimming, playing
    badminton, dragon-boating, and skiing (pre-pandemic and when it's
    the right season).
  </p>
      <br />
      <p>
        Well, that's just a glimpse into my life outside of my professional
        profile. If you'd like to chat about anything, definitely feel free
    to shoot me <a className="link-yellow"
          href="mailto:hi@davidliao.ca">an email</a>!
  </p>
    </div>

    <Spacer height="100px" />
  </Layout>
);

export default About;

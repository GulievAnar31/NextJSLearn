import Head from 'next/head';
import Layout, { siteTitle } from './components/layout';
import utilStyles from '../pages/styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My name is Anar</p>
        <p>
          23 years old, recently received a diploma of higher education, I have been doing
          programming for several years. At the moment I am actively looking for a job and am ready
          to develop, learn and gain experience in large companies, as well as in small but
          interesting startups! I have a small, but quite rich experience of working as a Frontend
          developer. I know JavaScript, React, Redux, NextJS well, I know object-oriented
          programming. I also work with HTML, CSS, responsive site layout. At the moment I program
          on the Ubuntu operating system, but I also have experience with Windows, Mas OS. I have
          several projects of mine on GitHub using the technologies listed above. You can see them{' '}
          <a href="https://github.com/GulievCorp">GitHub</a>.
        </p>
      </section>
    </Layout>
  );
}

import './AboutPage.scss';

const AboutPage = () => (
  <main className="aboutPage">
    <div className="container">
      <h1 className="aboutPage_title">About Us</h1>
      <p className="aboutPage_description">
        Welcome to Bruden, a portfolio project designed to showcase a modern and
        stylish online store for accessories. While this isn't a real e-commerce
        platform, it offers a fully interactive experience, allowing you to
        explore various features just like in a real online shop.
      </p>
      <h2 className="aboutPage_subtitle">🌟 What You'll Find Here</h2>
      <p className="aboutPage_description">
        Bruden is built with a clean and engaging user experience in mind. The
        project includes:
      </p>
      <ul className="aboutPage_list">
        <li className="aboutPage_listitem">
          <b>A captivating home page,</b> that introduces the store's concept.
        </li>
        <li className="aboutPage_listitem">
          <b>A dynamic shop page,</b> where you can browse through a selection
          of stylish accessories.
        </li>
        <li className="aboutPage_listitem">
          <b>A personalized user page,</b> where you can save products you like.
        </li>
        <li className="aboutPage_listitem">
          <b>A shopping cart,</b> allowing you to simulate adding items and
          managing your selections.
        </li>
      </ul>
      <h2 className="aboutPage_subtitle">💻 Tech Behind the Project</h2>
      <p className="aboutPage_description">
        To bring this project to life, I used a modern tech stack:
      </p>
      <ul className="aboutPage_list">
        <li className="aboutPage_listitem">
          <b>Frontend:</b> Developed with React + TypeScript and built using
          Vite for optimal speed and performance.
        </li>
        <li className="aboutPage_listitem">
          <b>Backend:</b> Powered by NestJS, providing a structured and scalable
          server-side architecture.
        </li>
      </ul>
      <p className="aboutPage_description">
        This project represents my passion for web development, UI/UX design,
        and modern technologies. I hope you enjoy exploring it as much as I
        enjoyed creating it!
      </p>
      <p className="aboutPage_description">
        😊 Feel free to look around and test things out—your visit means a lot!
        🚀
      </p>
    </div>
  </main>
);

export default AboutPage;

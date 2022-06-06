export default function Bio() {
  return (
    <>
      <div className="bio_name">
        <h1>Cole Webster</h1>
        <h2>Software Engineer</h2>
      </div>

      <div className="bio_contact_buttons">
        <a className="bio_email">Email</a>
        <a
          href="https://cwportfolio-app.herokuapp.com/"
          className="bio_portfolio"
        >
          Portfolio
        </a>
        <a
          className="bio_resume"
          href="https://drive.google.com/file/d/1jCQimcjPIqABnNZw71A7hM9b4V3t_PJa/view?usp=sharing"
        >
          Resume
        </a>
      </div>

      <div className="bio_about_background">
        <h2>About</h2>
        <p className="bio">
          Full stack web developer using background in sports and technology to
          build more user intuitive experiences online.
          <br />
          <br />
          I thrive in a team environment and have created three mobile-first web
          applications built to solve real world problems and keep the user
          engaged. Most recently, I worked on a team of five to develop a full
          stack online implementation of classic table top party game. Currently
          I am developing a full stack CRM application centered around a coffee
          shop and can't wait to show case more from this project.
          <br />
          <br />
          I'm passionate about creating life-enhancing user experiences and
          collaborating with others to develop meaningful mobile and web
          applications. I’m excited to leverage my love of teamwork,
          problem-solving and new skills in a fast paced environment to build
          better experiences.
        </p>

        <h2>Skills</h2>
        <p className="skills">
          Front End: HTML5, CSS, Bootstrap, JavaScript, jQuery, AJAX, React an
          TailWindCSS
          <br />
          <br />
          Back End: Node.js, Express, MySQL, Sequelize ORM, MongoDB, Mongoose
          ODM, GraphQL
        </p>
      </div>
    </>
  );
}

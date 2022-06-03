export default function Bio() {
  return (
    <>
      <div className="bio_name">
        <h1>Cole Webster</h1>
        <h2>Software Engineer</h2>
      </div>

      <div className="bio_contact_buttons">
        <button
          href="https://cwportfolio-app.herokuapp.com/"
          className="bio_portfolio"
        >
          Portfolio
        </button>
        <button className="bio_email">Email</button>
      </div>

      <div className="bio_about_background">
        <h2>About</h2>
        <p>
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>

        <h2>Skills</h2>
        <p>
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
    </>
  );
}

import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/styles/index.css";
import logo from "./assets/images/tribunal_logo.png"; // use in Navbar component file
import event_img from "./assets/images/tribunal_logo_large.png"; // use in Infocard component file. add a comment to use this image IF an image is not provided by the

/* function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

function Book() {
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg"
        alt="Atomic Habits"
      />
      <h2> Atomic Habits </h2>
      <h4> James Clear </h4>
    </article>
  );
}
 */

/* function Image() {
  return (
    <img
      src="https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg"
      alt="Atomic Habits"
    />
  );
}
function Title() {
  return (
    <>
      <h2> Atomic Habits </h2>
    </>
  );
}
function Author() {
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
    letterSpacing: "2px",
  };

  return <h4> James Clear </h4>;
} */

// Everything below is for MEERKAT
function NavBar() {
  return (
    <header>
      <a href="https://tribunal.uc.edu/">
        <img src={logo} alt="CEAS Tribunal Logo" />
      </a>
    </header>
  );
}

function Title() {
  return (
    <>
      <div className="title">
        <h1> Event Sign-up </h1>
      </div>
      <div className="page-info">
        <p>
          This is placeholder text. Text regarding the event signup form will be
          here. Currently, this is in the Title component, but we can have a
          separate component for this.
        </p>
      </div>
    </>
  );
}

// We will need to create dynamic InfoCards. Every piece of information will be stored in a variable
function InfoCard() {
  const eventName = "CEAS Luau";
  const date = "07/27/2023";
  const time = "12p - 5p";
  let description =
    "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! ";
  const location = "Coney Island";

  if (description.length > 100) {
    description = description.substring(0, 100) + "...";
  }

  return (
    <article className="infocard">
      <img src={event_img} alt="test img" />
      <br />
      <a href="https://tribunal.uc.edu/">{eventName}</a>
      <h2>
        <b>Date/Time:</b> {date} from {time}
      </h2>
      <h2>
        <b>Location:</b> {location}
      </h2>
      <h4>
        <b>Event Description:</b> {description}
      </h4>
    </article>
  );
}

function InfoCardList() {
  return (
    <section className="infocard-list">
      <InfoCard />
      <InfoCard />
      <InfoCard />
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>
        University of Cincinnati | © 2023 College of Engineering and Applied
        Science Tribunal
      </p>
      <p>
        For any questions or comments, contact us at
        ceastribunaltechnology@gmail.com.
      </p>
    </footer>
  );
}

function Container() {
  return (
    <div className="container">
      <Title />
      <InfoCardList />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div className="intro">
      <NavBar />
      <Container />
      {/* <BookList /> */}
    </div>
    <Footer />
  </>
);

import { useRef } from "react";
import { useLocation } from "react-router-dom";
import Card from "../ui/Card";
import emailjs from "emailjs-com";
import classes from "./ShareMeetup.module.css";

function ShareMeetup() {
  const location = useLocation();
  const props = location.state;
  const emailInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: any) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current?.value;
    const enteredName = nameInputRef.current?.value;

    console.log("email was submitted to this one: ", enteredEmail);

    var templateParams = {
      to: enteredName,
      meetupTitle: props.title,
      location: props.address,
      description: props.description,
    };

    console.log(templateParams);

    emailjs
      .send(
        "service_ha9f8ea",
        "template_5gb6m35",
        templateParams,
        "user_rRjx5qA2h8VeEn2lepzko"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("email was set successfully");
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  }

  return (
    <Card>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label>Who would you like to shre this with? (name)</label>
            <input type="text" required ref={nameInputRef} />
          </div>
          <div className={classes.control}>
            <label>Email to share this meetup with</label>
            <input type="email" required ref={emailInputRef} />
          </div>
          <div className={classes.actions}>
            <button>
              Share This Meetup
            </button>
          </div>
        </form>
      </div>
    </Card>
  );
}

export default ShareMeetup;

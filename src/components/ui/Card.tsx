import { ReactNode } from "react";
import classes from "./Card.module.css";

function Card({ children }: {children: ReactNode}) {
  return <div className={classes.card}>
      {children}
  </div>;
}

export default Card;

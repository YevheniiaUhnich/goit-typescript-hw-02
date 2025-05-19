import s from "./ErrorMessage.module.css";
import React from "react";

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message = "Error message",
}) => {
  return <h3 className={s.errorMessage}>{message}</h3>;
};

export default ErrorMessage;

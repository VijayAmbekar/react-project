import { ReactNode } from "react";
import Button from "./Button";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
      {children}
      <Button data-bs-dismiss="alert" color="close" onClick={onClose} />
    </div>
  );
};

export default Alert;

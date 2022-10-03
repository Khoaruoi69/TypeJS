import { isPropertySignature } from "typescript";
type StatusProps = {
  status: "loading" | "success" | "errors";
};
export const Status = (props: StatusProps) => {
  let messages;
  if (props.status === "loading") {
    messages = "Loading .........";
  }
  if (props.status === "success") {
    messages = "Data ferched successfully";
  }
  if (props.status === "errors") {
    messages = "Errors ferching data";
  }
  return (
    <div>
      <h2> DATA - {messages}</h2>
    </div>
  );
};

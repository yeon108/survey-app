import TextInput from "../Input/TextInput";
import SelectInput from "../Input/SelectInput";

export default function Body({ type }) {
  let InputComponent = null;
  if (type === "select") {
    InputComponent = SelectInput;
  } else if (type === "text") {
    InputComponent = TextInput;
  } else if (type === "text area") {
  }
  return (
    <>
      <InputComponent />
    </>
  );
}

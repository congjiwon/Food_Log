import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handle = (event) => {
    setValue(event.target.value);
  };
  return [value, handle];
};

export default useInput;

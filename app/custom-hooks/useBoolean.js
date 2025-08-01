import { useState } from "react";

export const useBoolean = () => {
  const [value, setValue] = useState(false);

  const onTrue = () => {
    setValue(true);
  };
  const onFalse = () => {
    setValue(false);
  };

  return {
    value,
    onTrue,
    onFalse,
  };
};

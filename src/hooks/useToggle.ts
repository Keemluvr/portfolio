import { useState } from "react";

interface ToggleActions {
  setVisible: (visible: boolean) => void;
  onHidden: () => void;
}

function useToggle(initialValue = false): [boolean, ToggleActions] {
  const [isOpen, setIsOpen] = useState(initialValue);

  const setVisible = (visible: boolean) => setIsOpen(visible);

  const actions = {
    setVisible,
    onHidden: () => setIsOpen(false)
  };

  return [isOpen, actions];
}

export default useToggle;

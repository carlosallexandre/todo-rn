import { ClipboardIcon } from "./ClipboardIcon";
import { PlusIcon } from "./PlusIcon";
import { TrashIcon } from "./TrashIcon";

interface IconProps {
  name: "plus" | "clipboard" | "trash";
}

const icons = {
  clipboard: <ClipboardIcon />,
  plus: <PlusIcon />,
  trash: <TrashIcon />,
};

export function Icon({ name }: IconProps) {
  return icons[name];
}

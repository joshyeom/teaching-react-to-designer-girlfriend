import { useState } from "react";

interface ChecklistItemProps {
  id: string;
  label: string;
}

export default function ChecklistItem({ id, label }: ChecklistItemProps) {
  const [checked, setChecked] = useState(false);

  return (
    <label
      htmlFor={id}
      className={`flex items-center gap-3 cursor-pointer transition-opacity ${
        checked ? "opacity-60 line-through" : ""
      }`}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        className="w-5 h-5 cursor-pointer"
      />
      <span>{label}</span>
    </label>
  );
}

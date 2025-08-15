import React, { useState } from "react";

interface ToggleSwitchProps {
  /** Whether the switch is initially on or off */
  defaultChecked?: boolean;
  /** Controlled state value */
  checked?: boolean;
  /** Callback when switch state changes */
  onChange?: (checked: boolean) => void;
  /** Whether the switch is disabled */
  disabled?: boolean;
  /** Size variant of the switch */
  size?: "sm" | "md" | "lg";
  /** Color variant when switch is on */
  variant?: "blue" | "green" | "purple" | "red" | "orange";
  /** Optional label for the switch */
  label?: string;
  /** Position of the label relative to switch */
  labelPosition?: "left" | "right";
  /** Additional CSS classes */
  className?: string;
  /** Screen reader label */
  "aria-label"?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  defaultChecked = false,
  checked,
  onChange,
  disabled = false,
  size = "md",
  variant = "blue",
  label,
  labelPosition = "right",
  className = "",
  "aria-label": ariaLabel,
}) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  // Use controlled value if provided, otherwise use internal state
  const isChecked = checked !== undefined ? checked : internalChecked;

  const handleToggle = () => {
    if (disabled) return;

    const newChecked = !isChecked;

    // Update internal state if not controlled
    if (checked === undefined) {
      setInternalChecked(newChecked);
    }

    // Call onChange callback
    onChange?.(newChecked);
  };

  // Size configurations
  const sizeConfigs = {
    sm: {
      switch: "h-4 w-7",
      thumb: "h-3 w-3",
      translate: "translate-x-3",
    },
    md: {
      switch: "h-6 w-11",
      thumb: "h-5 w-5",
      translate: "translate-x-5",
    },
    lg: {
      switch: "h-8 w-14",
      thumb: "h-7 w-7",
      translate: "translate-x-6",
    },
  };

  // Color configurations for the "on" state
  const colorConfigs = {
    blue: "bg-blue-600",
    green: "bg-green-600",
    purple: "bg-purple-600",
    red: "bg-red-600",
    orange: "bg-orange-600",
  };

  const sizeConfig = sizeConfigs[size];
  const activeColor = colorConfigs[variant];

  const switchElement = (
    <button
      type="button"
      className={`
        ${sizeConfig.switch}
        relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent 
        transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2
        ${isChecked ? activeColor : "bg-gray-200"}
        ${disabled ? "opacity-50 cursor-not-allowed" : "focus:ring-blue-500"}
        ${className}
      `}
      role="switch"
      aria-checked={isChecked}
      aria-label={ariaLabel || label}
      onClick={handleToggle}
      disabled={disabled}
    >
      <span
        className={`
          ${sizeConfig.thumb}
          pointer-events-none inline-block rounded-full bg-white shadow transform ring-0 
          transition duration-200 ease-in-out
          ${isChecked ? sizeConfig.translate : "translate-x-0"}
        `}
      />
    </button>
  );

  // If no label, return just the switch
  if (!label) {
    return switchElement;
  }

  // With label
  return (
    <div className={`flex items-center gap-3`}>
      {labelPosition === "left" && (
        <label
          className={`
            text-sm font-medium select-none cursor-pointer
            ${disabled ? "text-gray-400 cursor-not-allowed" : "text-gray-700"}
          `}
          onClick={!disabled ? handleToggle : undefined}
        >
          {label}
        </label>
      )}
      {switchElement}
      {labelPosition === "right" && (
        <label
          className={`
            text-sm font-medium select-none cursor-pointer
            ${disabled ? "text-gray-400 cursor-not-allowed" : "text-gray-700"}
          `}
          onClick={!disabled ? handleToggle : undefined}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export { ToggleSwitch };

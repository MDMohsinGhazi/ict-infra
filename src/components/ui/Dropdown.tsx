"use client";

import { Check, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  id?: string;
  name?: string;
  value: string;
  options: (string | DropdownOption)[];
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  menuClassName?: string;
  disabled?: boolean;
}

export function Dropdown({
  id,
  name,
  value,
  options,
  onChange,
  placeholder = "Select an option",
  className = "",
  menuClassName = "",
  disabled = false,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Normalize options to { value, label }
  const normalizedOptions: DropdownOption[] = options.map((opt) =>
    typeof opt === "string" ? { value: opt, label: opt } : opt,
  );

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      } else {
        const currentIdx = normalizedOptions.findIndex(
          (opt) => opt.value === value,
        );
        const nextIdx = (currentIdx + 1) % normalizedOptions.length;
        onChange(normalizedOptions[nextIdx].value);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      } else {
        const currentIdx = normalizedOptions.findIndex(
          (opt) => opt.value === value,
        );
        const prevIdx =
          (currentIdx - 1 + normalizedOptions.length) %
          normalizedOptions.length;
        onChange(normalizedOptions[prevIdx].value);
      }
    }
  };

  return (
    <div ref={containerRef} className="relative w-full select-none">
      {/* Hidden input for form submission compatibility */}
      {name && <input type="hidden" name={name} value={value} id={id} />}

      {/* Dropdown Trigger Button */}
      <button
        type="button"
        id={id ? `${id}-trigger` : undefined}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        disabled={disabled}
        onKeyDown={handleKeyDown}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        className={`w-full flex items-center justify-between text-left transition-all duration-200 cursor-pointer ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        } ${className}`}
      >
        <span
          className={`truncate block ${
            selectedOption ? "text-zinc-900 font-medium" : "text-zinc-400"
          }`}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-zinc-500 shrink-0 ml-2 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-primary-container" : ""
          }`}
        />
      </button>

      {/* Floating Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute left-0 right-0 z-50 mt-1 max-h-64 overflow-y-auto rounded-xl bg-white border border-zinc-200 shadow-2xl py-1.5 scrollbar-thin ${menuClassName}`}
            role="listbox"
          >
            {normalizedOptions.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <button
                  type="button"
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-2.5 text-xs sm:text-sm text-left transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-primary-container/10 text-primary-container font-semibold"
                      : "text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
                  }`}
                >
                  <span className="truncate pr-2">{opt.label}</span>
                  {isSelected && (
                    <Check className="w-4 h-4 text-primary-container shrink-0" />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

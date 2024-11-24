"use client";

import { cn } from "@/utils";
import React, {
  Children,
  HTMLAttributes,
  isValidElement,
  ReactElement,
  useState,
} from "react";

export type TabElement = ReactElement<HTMLAttributes<HTMLDivElement>>;

interface Props {
  children: TabElement | TabElement[];
}

export function Tabs({ children }: Props) {
  const firstChild = Array.isArray(children) ? children[0] : children;
  const [activeTab, setActiveTab] = useState(firstChild.props.title);

  return (
    <div>
      {/* Tab Headers */}
      <div
        className="flex justify-between sm:justify-start sm:gap-3 border-b border-b-smoke"
        role="tablist"
        aria-label="Tabs"
      >
        {Children.map(children, ({ props: { title } }) => (
          <button
            key={title}
            role="tab"
            aria-selected={activeTab === title}
            aria-controls={`tabpanel-${title}`}
            id={`tab-${title}`}
            onClick={() => setActiveTab(title)}
            className={cn(
              "py-2 sm:py-3 px-1.5 sm:px-4 text-color-sky font-medium text-sm sm:text-md",
              {
                "line-below": activeTab === title,
              }
            )}
          >
            {title}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      {Children.map(children, (child) => {
        if (!isValidElement(child) || !child.props.title) return null;

        const { title, className, children, ...props } = child.props;

        return (
          <div
            {...props}
            key={title}
            role="tabpanel"
            id={`tabpanel-${title}`}
            aria-labelledby={`tab-${title}`}
            hidden={activeTab !== title}
            className={cn("py-5", className)}
          >
            {children}
          </div>
        );
      })}
    </div>
  );
}

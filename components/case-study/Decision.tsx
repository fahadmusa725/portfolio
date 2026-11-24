import React from "react";

export type DecisionProps = {
  title: string;
  why: string;
  children?: React.ReactNode;
};

export default function Decision({ title, why, children }: DecisionProps) {
  const hasChildren = Boolean(children);

  return (
    <aside className="my-8 rounded-2xl border border-line bg-paper/50 p-6 sm:p-7">
      <div className="flex items-center gap-2 font-mono text-label uppercase text-accent">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
        DECISION
      </div>
      <h3 className="mt-2 text-xl font-bold tracking-tight text-ink sm:text-2xl">
        {title}
      </h3>
      <p className="mt-3 text-ink/85">
        <strong className="font-semibold text-ink">Why: </strong>
        {why}
      </p>
      {hasChildren ? (
        <div className="mt-4 border-t border-line/60 pt-4 text-ink/75">
          {children}
        </div>
      ) : null}
    </aside>
  );
}

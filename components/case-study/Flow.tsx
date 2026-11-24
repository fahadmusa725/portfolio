export type FlowStep = {
  label: string;
  note?: string;
};

type FlowProps = {
  steps: FlowStep[];
};

export default function Flow({ steps }: FlowProps) {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-line bg-paper/50 p-6 sm:p-8">
      <ol className="relative flex flex-col">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;

          return (
            <li key={step.label} className="relative flex gap-4 sm:gap-6">
              {/* Vertical line indicator */}
              <div className="flex flex-col items-center">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line bg-surface/5 font-mono text-xs font-semibold text-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {!isLast ? (
                  <span
                    aria-hidden="true"
                    className="w-px grow border-l border-line my-1.5"
                  />
                ) : null}
              </div>

              {/* Step label and note */}
              <div className={`min-w-0 flex-1 ${!isLast ? "pb-6 sm:pb-8" : "pb-1"}`}>
                <p className="font-mono text-label uppercase font-semibold text-ink pt-1">
                  {step.label}
                </p>
                {step.note ? (
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/75 sm:text-base">
                    {step.note}
                  </p>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

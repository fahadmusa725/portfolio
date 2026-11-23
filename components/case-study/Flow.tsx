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
      {/* Accessible ordered list structure */}
      <ol className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-3">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;

          return (
            <li
              key={step.label}
              className="relative flex flex-1 flex-col items-start lg:items-center text-left lg:text-center"
            >
              <div className="flex w-full items-center lg:flex-col lg:items-center">
                {/* Step pill */}
                <div className="flex items-center gap-2 rounded-full border border-line bg-surface/5 px-3.5 py-1.5 font-mono text-label uppercase text-ink">
                  <span className="text-muted">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-semibold">{step.label}</span>
                </div>

                {/* Arrow to next item */}
                {!isLast ? (
                  <div className="ml-4 flex items-center lg:ml-0 lg:mt-3">
                    {/* Down arrow for mobile */}
                    <svg
                      className="h-4 w-4 text-muted/60 lg:hidden"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>

                    {/* Right arrow for desktop */}
                    <svg
                      className="hidden h-4 w-4 text-muted/60 lg:block"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                ) : null}
              </div>

              {/* Step Note */}
              {step.note ? (
                <p className="mt-2 text-sm text-ink/70 lg:mt-3 lg:max-w-[12rem]">
                  {step.note}
                </p>
              ) : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useMessages, msg } from "gt-next";
import { errors, statuses, dashboard, labels } from "@/lib/messages";

function Badge({
  label,
  color,
}: {
  label: string;
  color: "green" | "yellow" | "red" | "gray";
}) {
  const colors = {
    green:
      "bg-emerald-950 text-emerald-400 border-emerald-800",
    yellow:
      "bg-yellow-950 text-yellow-400 border-yellow-800",
    red: "bg-red-950 text-red-400 border-red-800",
    gray: "bg-neutral-800 text-neutral-400 border-neutral-700",
  };
  return (
    <span
      className={`px-2 py-0.5 text-xs font-medium rounded-full border ${colors[color]}`}
    >
      {label}
    </span>
  );
}

export default function ClientDemo() {
  const m = useMessages();
  const [selectedError, setSelectedError] = useState<keyof typeof errors>("required");
  const [itemCount, setItemCount] = useState(3);

  const errorKeys = Object.keys(errors) as (keyof typeof errors)[];
  const errorLabels: Record<string, string> = {
    required: "required",
    emailInvalid: "emailInvalid",
    passwordTooShort: "passwordTooShort",
    passwordMismatch: "passwordMismatch",
    usernameTaken: "usernameTaken",
  };

  return (
    <div className="space-y-6">
      {/* Status badges */}
      <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-6 space-y-4">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="text-base font-semibold text-neutral-100">
            {m(labels.clientSection)}
          </h3>
          <span className="px-2 py-0.5 text-xs font-mono rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800">
            useMessages()
          </span>
        </div>

        <div>
          <p className="text-xs text-neutral-500 mb-3 font-medium uppercase tracking-wide">
            {m(msg("Status Badges"))}
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge label={m(statuses.active)} color="green" />
            <Badge label={m(statuses.pending)} color="yellow" />
            <Badge label={m(statuses.suspended)} color="red" />
            <Badge label={m(statuses.inactive)} color="gray" />
          </div>
        </div>

        {/* Error messages */}
        <div>
          <p className="text-xs text-neutral-500 mb-3 font-medium uppercase tracking-wide">
            {m(msg("Validation Errors"))}
          </p>
          <div className="flex gap-0.5 bg-neutral-800 rounded-lg p-0.5 flex-wrap mb-3">
            {errorKeys.map((key) => (
              <button
                key={key}
                onClick={() => setSelectedError(key)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
                  selectedError === key
                    ? "bg-neutral-700 text-neutral-100 shadow-sm"
                    : "text-neutral-500 hover:text-neutral-300"
                }`}
              >
                {errorLabels[key]}
              </button>
            ))}
          </div>
          <div className="bg-neutral-950 rounded-lg px-4 py-3 text-red-400 text-sm border border-neutral-800">
            {m(errors[selectedError])}
          </div>
        </div>

        {/* Dashboard with variables */}
        <div>
          <p className="text-xs text-neutral-500 mb-3 font-medium uppercase tracking-wide">
            {m(msg("Dynamic Messages"))}
          </p>
          <div className="bg-neutral-950 rounded-lg px-4 py-3 border border-neutral-800 space-y-2">
            <p className="text-neutral-100 text-sm">
              {m(dashboard.welcome, { name: "Alice" })}
            </p>
            <div className="flex items-center gap-3">
              <p className="text-neutral-300 text-sm">
                {m(dashboard.itemCount, { count: itemCount })}
              </p>
              <div className="flex gap-1">
                <button
                  onClick={() => setItemCount(Math.max(0, itemCount - 1))}
                  className="px-2 py-0.5 text-xs rounded bg-neutral-800 text-neutral-400 hover:text-neutral-200 cursor-pointer border border-neutral-700"
                >
                  -
                </button>
                <button
                  onClick={() => setItemCount(itemCount + 1)}
                  className="px-2 py-0.5 text-xs rounded bg-neutral-800 text-neutral-400 hover:text-neutral-200 cursor-pointer border border-neutral-700"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-neutral-600 font-mono leading-relaxed break-all">
          {`const m = useMessages(); m(errors.required)`}
        </p>
      </div>
    </div>
  );
}

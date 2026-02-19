import { T } from "gt-next";
import { getMessages } from "gt-next/server";
import { msg } from "gt-next";
import { LocaleSelector } from "gt-next";
import { labels, errors, statuses, dashboard } from "@/lib/messages";
import ClientDemo from "@/components/ClientDemo";
import LanguageBadge from "@/components/LanguageBadge";

export default async function Home() {
  const m = await getMessages();

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <header className="border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="https://generaltranslation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              General Translation
            </a>
            <span className="text-neutral-700">/</span>
            <h1 className="text-sm font-semibold text-neutral-100">
              {m(labels.appTitle)}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gt-examples/shared-strings-msg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-200 transition-colors"
              aria-label="View on GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <LocaleSelector />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <T>
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-100 mb-3">
              Shared string constants across components
            </h2>
            <p className="text-base text-neutral-400 max-w-xl leading-relaxed mb-4">
              Define translatable strings once with msg() in a shared file.
              Resolve them per-locale in both server and client components using
              getMessages() and useMessages().
            </p>
            <LanguageBadge />
          </div>
        </T>

        {/* Server component section */}
        <div className="space-y-6 mb-6">
          <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-6 space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="text-base font-semibold text-neutral-100">
                {m(labels.serverSection)}
              </h3>
              <span className="px-2 py-0.5 text-xs font-mono rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800">
                getMessages()
              </span>
            </div>

            <div>
              <p className="text-xs text-neutral-500 mb-3 font-medium uppercase tracking-wide">
                {m(msg("Validation Errors"))}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(
                  Object.keys(errors) as (keyof typeof errors)[]
                ).map((key) => (
                  <div
                    key={key}
                    className="bg-neutral-950 rounded-lg px-3 py-2 border border-neutral-800"
                  >
                    <p className="text-xs text-neutral-600 font-mono mb-1">
                      errors.{key}
                    </p>
                    <p className="text-sm text-red-400">{m(errors[key])}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-neutral-500 mb-3 font-medium uppercase tracking-wide">
                {m(msg("Status Labels"))}
              </p>
              <div className="flex flex-wrap gap-2">
                {(
                  [
                    ["active", "green"],
                    ["pending", "yellow"],
                    ["suspended", "red"],
                    ["inactive", "gray"],
                  ] as const
                ).map(([key, color]) => {
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
                      key={key}
                      className={`px-2 py-0.5 text-xs font-medium rounded-full border ${colors[color]}`}
                    >
                      {m(statuses[key])}
                    </span>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="text-xs text-neutral-500 mb-3 font-medium uppercase tracking-wide">
                {m(msg("Dashboard Messages"))}
              </p>
              <div className="bg-neutral-950 rounded-lg px-4 py-3 border border-neutral-800 space-y-1">
                <p className="text-neutral-100 text-sm">
                  {m(dashboard.welcome, { name: "Alice" })}
                </p>
                <p className="text-neutral-300 text-sm">
                  {m(dashboard.itemCount, { count: 5 })}
                </p>
                <p className="text-neutral-400 text-sm">
                  {m(dashboard.lastLogin, {
                    date: new Date().toLocaleDateString(),
                  })}
                </p>
              </div>
            </div>

            <p className="text-xs text-neutral-600 font-mono leading-relaxed break-all">
              {`const m = await getMessages(); m(dashboard.welcome, { name: "Alice" })`}
            </p>
          </div>
        </div>

        {/* Client component section */}
        <ClientDemo />

        {/* How it works */}
        <T>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 space-y-3 mt-6">
            <h2 className="text-base font-semibold text-neutral-100">
              How it works
            </h2>
            <div className="text-sm text-neutral-400 space-y-2 leading-relaxed">
              <p>
                <code className="text-emerald-400 text-xs bg-emerald-950 px-1.5 py-0.5 rounded">
                  msg()
                </code>{" "}
                encodes a string for translation at build time. Define all your
                UI labels, error messages, and status strings in a single shared
                file.
              </p>
              <p>
                In server components, use{" "}
                <code className="text-emerald-400 text-xs bg-emerald-950 px-1.5 py-0.5 rounded">
                  getMessages()
                </code>{" "}
                to get a resolver function. In client components, use the{" "}
                <code className="text-emerald-400 text-xs bg-emerald-950 px-1.5 py-0.5 rounded">
                  useMessages()
                </code>{" "}
                hook. Both return a function that resolves encoded strings to the
                current locale.
              </p>
              <p>
                Variables use ICU message format. Plurals, dates, and
                interpolated values are handled automatically, with proper
                grammatical rules for each language.
              </p>
            </div>
          </div>
        </T>
      </main>
    </div>
  );
}

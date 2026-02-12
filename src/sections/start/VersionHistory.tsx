import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Change {
  type: "feature" | "fix" | "improvement" | "breaking";
  description: string;
}

interface Version {
  version: string;
  date: string;
  changes: Change[];
}

const versionHistory: Version[] = [
  {
    version: "1.0.8",
    date: "2026-02-12",
    changes: [
      { type: "feature", description: "Added 'prevent mobile access' option" },
      { type: "feature", description: "Added ability to choose presort emoji" },
      { type: "fix", description: "Fixed emoji display on pre-sorting screen" },
      { type: "improvement", description: "Improved UI/UX in language section" },
    ],
  },
  {
    version: "1.0.7",
    date: "2026-01-23",
    changes: [
      {
        type: "feature",
        description: "Added option to require minimum word counts in post-sorting comments section",
      },
      {
        type: "feature",
        description: "Added 'other' option for checkbox and radio button survey questions",
      },
      {
        type: "feature",
        description: "Added additional translations - de, es, fr, it, ko, nl, pt, zh-Hans, zh-Hant",
      },
    ],
  },
  {
    version: "1.0.6",
    date: "2026-01-10",
    changes: [
      { type: "fix", description: "Fixed statement grids layout" },
      { type: "fix", description: "Fixed survey output" },
      { type: "fix", description: "Added missing language translations" },
    ],
  },
  {
    version: "1.0.2",
    date: "2025-010-25",
    changes: [
      { type: "feature", description: "Added language images" },
      { type: "feature", description: "Added mobile screens" },
      { type: "fix", description: "Fixed language defaults" },
    ],
  },
  {
    version: "0.3.1",
    date: "2025-3-28",
    changes: [
      { type: "feature", description: "Added mobile screens" },
      { type: "fix", description: "Fixed Baserow integration" },
      { type: "improvement", description: "Improved mobile UI/UX" },
    ],
  },
  {
    version: "0.0.1",
    date: "2024-11-8",
    changes: [{ type: "feature", description: "Development begins" }],
  },
];

// { type: "breaking", description: "Changed API endpoint structure for user data" },

const getChangeTypeStyles = (type: Change["type"]) => {
  switch (type) {
    case "feature":
      return "bg-green-100 text-green-800 border-green-200";
    case "fix":
      return "bg-red-100 text-red-800 border-red-200";
    case "improvement":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "breaking":
      return "bg-orange-100 text-orange-800 border-orange-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getChangeTypeLabel = (type: Change["type"]) => {
  switch (type) {
    case "feature":
      return "Feature";
    case "fix":
      return "Bug Fix";
    case "improvement":
      return "Improvement";
    case "breaking":
      return "Breaking Change";
    default:
      return type;
  }
};

const VersionHistory: React.FC = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [expandedVersions, setExpandedVersions] = useState<Set<string>>(new Set());

  const toggleVersion = (version: string) => {
    setExpandedVersions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(version)) {
        newSet.delete(version);
      } else {
        newSet.add(version);
      }
      return newSet;
    });
  };

  const toggleAll = () => {
    if (expandedVersions.size === versionHistory.length) {
      setExpandedVersions(new Set());
    } else {
      setExpandedVersions(new Set(versionHistory.map((v) => v.version)));
    }
  };

  return (
    <div className="max-w-4xl w-4/12 mx-auto p-6">
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <button
          onClick={() => setIsHistoryOpen(!isHistoryOpen)}
          className="w-full px-5 py-3 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
        >
          <h2 className="text-xl font-semibold text-gray-900">Version History</h2>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">{versionHistory.length} versions</span>
            {isHistoryOpen ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </div>
        </button>

        {isHistoryOpen && (
          <div className="border-t border-gray-200">
            <div className="px-5 py-3 bg-gray-50 flex justify-between items-center border-b border-gray-200">
              <span className="text-sm font-medium text-gray-700">v0.0.1 - v1.0.8</span>
              <button
                onClick={toggleAll}
                className="px-3 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100 transition-colors"
              >
                {expandedVersions.size === versionHistory.length ? "Collapse All" : "Expand All"}
              </button>
            </div>

            <div className="divide-y divide-gray-200">
              {versionHistory.map((version) => {
                const isExpanded = expandedVersions.has(version.version);
                const isLatest = version.version === "1.0.8";

                return (
                  <div key={version.version}>
                    <button
                      onClick={() => toggleVersion(version.version)}
                      className="w-full px-5 py-2.5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-gray-900">
                          v{version.version}
                        </span>
                        {isLatest && (
                          <span className="px-1.5 py-0.5 text-xs font-medium text-white bg-indigo-600 rounded">
                            Latest
                          </span>
                        )}
                        <span className="text-xs text-gray-500">{version.date}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">{version.changes.length}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-5 pb-3 pt-1 bg-gray-50">
                        <ul className="space-y-2">
                          {version.changes.map((change, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span
                                className={`inline-block px-1.5 py-0.5 text-xs font-medium rounded ${getChangeTypeStyles(
                                  change.type,
                                )}`}
                              >
                                {getChangeTypeLabel(change.type)}
                              </span>
                              <span className="flex-1 text-xs text-gray-700 pt-0.5">
                                {change.description}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { VersionHistory };

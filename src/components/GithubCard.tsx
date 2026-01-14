import { GitHubCalendar } from "react-github-calendar";
import { useState } from "react";

export const GithubCard = () => {
    const [totalContributions, setTotalContributions] = useState(0);

    return (
        <div className="rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-6 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-6 h-full">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-1">
                            Featured
                        </span>
                        <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
                            GitHub Activity
                        </h3>
                    </div>
                </div>
                <div className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                    Total: <span className="text-neutral-900 dark:text-white font-bold">{totalContributions.toLocaleString()} contributions</span>
                </div>
            </div>

            <div className="flex justify-center items-center w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] bg-neutral-100 dark:bg-neutral-900/50 rounded-lg p-4 sm:p-8 border border-neutral-200 dark:border-neutral-800 min-h-[160px]">
                <GitHubCalendar
                    username="sid-dev-99"
                    blockSize={10}
                    blockMargin={4}
                    fontSize={12}
                    colorScheme="dark"
                    transformData={(data) => {
                        const total = data.reduce((acc, day) => acc + day.count, 0);
                        // Avoid infinite loop by checking if value changed
                        if (total !== totalContributions) {
                            // Use setTimeout to avoid "cannot update component while rendering" warning
                            setTimeout(() => setTotalContributions(total), 0);
                        }
                        return data;
                    }}
                    theme={{
                        dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                    }}
                    labels={{
                        totalCount: "{{count}} contributions in the last year",
                    }}
                />
            </div>
        </div>
    );
};

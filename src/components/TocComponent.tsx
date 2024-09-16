import { TocItem } from "@/types/toc-item"
import { ChevronRight } from "lucide-react"


export default function TocComponent({ toc }: { toc: TocItem[] }) {
    if (!Array.isArray(toc)) {
        return (
            <div className="p-4 text-red-700 bg-red-100 rounded-lg">
                Error: Invalid table of contents data
            </div>
        )
    }

    if (toc.length === 0) {
        return (
            <div className="p-4 bg-gray-100 rounded-lg">
                No table of contents available
            </div>
        )
    }

    type LevelMarginLeft = {
        [key: number]: string;
    };
    const lvlMarginLeft: LevelMarginLeft = {
        1: 'ml-0',
        2: 'ml-4',
        3: 'ml-8',
        4: 'ml-12',
        5: 'ml-16',
        6: 'ml-20',
    }

    return (
        <nav className="max-w-md p-4 bg-gray-100 rounded-lg">
            <h2 className="mb-4 text-xl font-bold">Contents</h2>
            <ul className="space-y-2">
                {toc.map((item) => (
                    <li
                        key={item.slug}
                        className={`hover:text-primary transition-colors ${lvlMarginLeft[item.lvl]}`}
                    >
                        <a href={`#${item.slug}`} className="flex items-center">
                            <ChevronRight className="self-start flex-shrink-0 w-4 h-4 mt-1 mr-2" />
                            <span className="block">{item.content}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

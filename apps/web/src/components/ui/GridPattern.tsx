import { useId } from 'react'

export function GridPattern({
    width,
    height,
    x,
    y,
    squares,
    ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
    width: number
    height: number
    x: string | number
    y: string | number
    squares: Array<[x: number, y: number]>
}) {
    const patternId = useId()

    return (
        <svg aria-hidden="true" {...props}>
            <defs>
                <pattern
                    id={patternId}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <path d={`M.5 ${height}V.5H${width}`} fill="none" />
                </pattern>
            </defs>
            <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill={`url(#${patternId})`}
            />
            {squares && (
                <svg x={x} y={y} className="overflow-visible">
                    {squares.map(([x, y]) => (
                        <rect
                            strokeWidth="0"
                            key={`${x}-${y}`}
                            width={width + 1}
                            height={height + 1}
                            x={x * width}
                            y={y * height}
                        />
                    ))}
                </svg>
            )}
        </svg>
    )
}

export function MainPattern() {
    return (
        <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
            <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#8665d4] to-[#995be038] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#4336b4]/30 dark:to-[#d875ff]/30 dark:opacity-100">
                    <GridPattern
                        width={72}
                        height={76}
                        x={-12}
                        y={4}
                        squares={[
                            [4, 3],
                            [2, 1],
                            [7, 3],
                            [10, 6],
                        ]}
                        className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/40 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5"
                    />
                </div>
                <svg
                    viewBox="0 0 1113 440"
                    aria-hidden="true"
                    className="absolute left-1/2 top-0 ml-[-19rem] w-[69.5625rem] blur-[26px] hidden"
                >
                    <path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z" />
                </svg>
            </div>
        </div>
    )
}

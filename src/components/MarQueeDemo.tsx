import { cn } from "@/utils/utils.ts";
import { Marquee } from "@/components/MarQuee.tsx";

const reviews = [
    { id: 1, phrase: "Manicura" },
    { id: 2, phrase: "Pedicura" },
    { id: 3, phrase: "Uñas" },
    { id: 4, phrase: "Gelish" },
    { id: 5, phrase: "Acrílicas" },
    { id: 6, phrase: "Diseños" },
    { id: 7, phrase: "Nailart" },
    { id: 8, phrase: "Spa" },
    { id: 9, phrase: "Cuidado" },
    { id: 10, phrase: "Estilo" },
];



const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(reviews.length / 2);
const ReviewCard = ({
    id,
    phrase,

}: {
    id: number;
    phrase: string;

}) => {
    return (
        <figure
       
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 text-center transition-colors duration-300 ease-in-out",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",

            )}
        >

            <blockquote className="mt-2 text-4xl">{phrase}</blockquote>
        </figure>
    );
};

export function MarqueeDemo() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden font-special"
        style={{
        
        WebkitMaskImage:
        'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        maskImage:
        'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
    }}>
            <Marquee className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </Marquee>
            <Marquee reverse className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </Marquee>
            <Marquee className="[--duration:20s]">
                {thirdRow.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
    );
}

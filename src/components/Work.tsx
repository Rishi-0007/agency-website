import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Work() {
  return (
    <section id="work" className="w-full py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Work
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Take a look at some of our recent projects and success stories.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group relative overflow-hidden rounded-lg">
              <Image
                src={`/images/web-dev.jpg`}
                width={600}
                height={400}
                alt={`Project ${i}`}
                className="aspect-[4/3] object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex h-full items-center justify-center">
                  <Button
                    variant="outline"
                    className="text-white border-white hover:text-white"
                  >
                    View Project
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

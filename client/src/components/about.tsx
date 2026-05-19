import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function About() {
  return (
    <section id="about" className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-secondary mb-6">About Adalithic</h2>
            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">Adalithic is a tech startup focused on giving people new tools and techniques for learning languages and facilitating cross-language communication.</p>
              <p className="text-lg leading-relaxed">
                We believe that language barriers should never limit human connection and
                collaboration. Our mission is to create tools that make cross-cultural
                communication effortless and engaging, empowering people to connect globally
                while learning naturally.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="text-primary font-medium underline-offset-4 hover:underline focus:outline-none focus-visible:underline"
                  >
                    Privacy Policy
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Privacy Policy</DialogTitle>
                  </DialogHeader>
                  <ScrollArea className="max-h-[70vh] pr-4">
                    <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                      <p>Privacy policy content coming soon.</p>
                    </div>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="relative"></div>
        </div>
      </div>
    </section>
  );
}

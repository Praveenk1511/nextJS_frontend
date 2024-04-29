"use client";
import { Meteors } from "@/components/ui/meteors";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/moving-border";
import { BackgroundBeams } from "@/components/ui/background-beams";

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

function Page() {
    const handleSubmit = () => {};
    return (
        <>
            <div className="w-full relative  min-h-screen flex flex-col justify-center items-center dark:bg-gray-900 sm:p-0 p-4">
                <BackgroundBeams className="z-0 absolute w-full h-full top-0 left-0 bg-opacity-5 bg-teal text-gray-500" />
                <div className="w-full text-center p-2 z-10">
                    <h2 className="font-bold text-lg md:text-7xl">
                        Contact Us
                    </h2>
                    <p className="text-neutral-600 sm:text-sm text-xs inline-flex w-full max-w-lg flex-wrap mt-2 dark:text-neutral-300">
                        We&apos;re here to help with any questions about our
                        courses, programs, or events. Reach out and let us know
                        how we can assist you in your musical journey.
                    </p>
                </div>
                <form
                    className="w-full sm:max-w-lg mt-4 z-10"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col space-y-2">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                placeholder="Your email address"
                                type="text"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Input
                                id="message"
                                placeholder="Your messaage"
                                type="text"
                                className="h-20"
                            />
                        </div>
                        <button
                            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                            type="submit"
                        >
                            Send Message &rarr;
                            <BottomGradient />
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Page;

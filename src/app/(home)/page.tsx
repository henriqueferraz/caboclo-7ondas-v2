import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { Suspense } from "react";
import { CenterTabs } from "@/components/centerPage/tabs"
import { TabsSkeleton } from "@/components/centerPage/skeleton";

export default function Page() {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <Header />
            <div className="mx-3">
                <Suspense fallback={<TabsSkeleton />}>
                    <CenterTabs />
                </Suspense>
            </div>
            <Footer />
        </div>
    );
}

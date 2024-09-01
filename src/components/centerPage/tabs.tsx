import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function CenterTabs() {
    return (
        <div>
            <Tabs defaultValue="tab01">
                <TabsList className="flex">
                    <TabsTrigger
                        className="flex-1flex-1 mt-6"
                        value="tab01">
                        Tab 01
                    </TabsTrigger>
                    <TabsTrigger
                        className="flex-1 mt-6"
                        value="tab02">
                        Tab 02
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="tab01">Conteúdo da Tab 01</TabsContent>
                <TabsContent value="tab02">Conteúdo da Tab 02</TabsContent>
            </Tabs>
        </div>
    )
}
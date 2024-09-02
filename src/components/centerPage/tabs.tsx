import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllProducts } from "@/services/product";

export const CenterTabs = async () => {

    const products = await getAllProducts()

    return (
        <div>
            <Tabs defaultValue="tab01">
                <TabsList className="flex">
                    <TabsTrigger
                        className="flex-1"
                        value="tab01">
                        Tab 01
                    </TabsTrigger>
                    <TabsTrigger
                        className="flex-1"
                        value="tab02">
                        Tab 02
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="tab01" className="mt-6">Conteúdo da Tab 01</TabsContent>
                <TabsContent value="tab02" className="mt-6">Conteúdo da Tab 02</TabsContent>
            </Tabs>
        </div>
    )
}
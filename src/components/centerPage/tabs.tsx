import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllProducts } from "@/services/product";
import { Product } from "@/types/product";

type Tab = {
    title: string
    value: string
    products: Product[]
}

export const CenterTabs = async () => {

    const products = await getAllProducts()
    const tabs: Tab[] = [
        {
            title: 'Sushi',
            value: 'sushi',
            products: []
        },
        {
            title: 'Temaki',
            value: 'temaki',
            products: []
        },
        {
            title: 'Pack',
            value: 'pack',
            products: []
        },
        {
            title: 'Bebidas',
            value: 'beverage',
            products: []
        }
    ]

    return (
        <div>
            <Tabs defaultValue="sushi">
                <TabsList className="flex">
                    {tabs.map(item => (
                        <TabsTrigger
                            key={item.value}
                            className="flex-1"
                            value={item.value}>
                            {item.title}
                        </TabsTrigger>

                    ))}
                </TabsList>
                {tabs.map(item => (
                    <TabsContent
                        key={item.value}
                        value={item.value}
                        className="mt-6">
                        ...
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}
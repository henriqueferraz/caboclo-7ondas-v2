import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

export function ButtonAdm() {
    return (
        <Button >
            <Users className="mr-2" />
            <p>Admin</p>
        </Button>
    )
}
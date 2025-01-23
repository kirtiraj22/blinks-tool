import { Zap } from "lucide-react"
import Link from "next/link"

export default function UpgradeButton(){
    const CHECKOUT_URL = "https://codeo.lemonsqueezy.com/buy/bc08367d-b69e-46c1-b6a3-d976c8d64a35?discount=0"

    return(
        <Link href={CHECKOUT_URL} className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all">
            <Zap className="w-5 h-5"/>
            Upgrade to Pro
        </Link>
    )
}
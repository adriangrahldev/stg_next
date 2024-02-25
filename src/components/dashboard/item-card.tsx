import { ChartBarIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const ItemCard = ({ icon, title, value, href }: { icon: any, title: string, value: string|number, href: string }) => {
        return (
                <Link href={href} className="bg-white p-4 rounded-lg  shadow-sm hover:translate-y-[-2px] border-s-4 border-blue-300 hover:border-blue-800">
                <div className="flex items-center">
                    {icon}
                    <h3 className="text-lg font-medium">{title}</h3>
                </div>
                <p className="text-gray-600">{value}</p>
            </Link>
        );
}
export default ItemCard;
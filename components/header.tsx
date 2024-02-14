import { FaLocationDot, FaMagnifyingGlass, FaCartShopping } from "react-icons/fa6";
import { FaTruck, FaRegUser } from "react-icons/fa";
import { TbDiscountCheckFilled } from "react-icons/tb";
import Link from "next/link";
import Category from "./category";
import { UserButton, auth } from '@clerk/nextjs'

export default function Header() {
    const { userId } = auth()

    return (
        <div>
            <div className="till-header bg-[#F5F5F5] py-[14px] hidden lg:block">
                <div className="custom-container flex justify-between items-center">
                    <span className="text-[14px] text-[#666666]">Welcome to worldwide Megamart!</span>
                    <div className="flex divide-x-[2px] divide-[#D9D9D9] gap-[30px]">
                        <div className="flex items-center gap-[6px] pl-[4px] lg:pl-[10px]">
                            <FaLocationDot size={16} color="#008ECC" />
                            <span className="text-[14px] text-[#666666]">Deliver to 423651</span>
                        </div>
                        <div className="flex items-center gap-[6px] pl-[4px] lg:pl-[10px]">
                            <FaTruck size={16} color="#008ECC" />
                            <span className="text-[14px] text-[#666666]">Track your order</span>
                        </div>
                        <div className="flex items-center gap-[6px] pl-[4px] lg:pl-[10px]">
                            <TbDiscountCheckFilled size={16} color="#008ECC" />
                            <span className="text-[14px] text-[#666666]">All Offers</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="custom-container">
                <header>
                    <div className="flex justify-between items-center py-[21px]">
                        <Link href={'/'}>
                            <h1 className="text-3xl font-bold text-[#008ECC]">MegaMart</h1>
                        </Link>
                        <div className="flex items-center gap-[30px]">
                            <div className="searchbar hidden lg:block">
                                <label htmlFor="search" className="flex items-center bg-[#F3F9FB] min-w-[350px] p-[16px] rounded-[10px] gap-[5px]">
                                    <FaMagnifyingGlass size={16} color="#008ECC" />
                                    <input type="search" name="search" className="bg-transparent w-full pl-[10px] outline-none " placeholder="Search essentials, groceries and more..." />
                                </label>
                            </div>
                            <div className="login-cart flex items-center divide-x-[1px] divide-[#D9D9D9] gap-[5px] md:gap-[20px]">
                                {
                                    !userId ? (
                                        <Link href={'/sign-in'} className="flex items-center gap-[6px]">
                                            <FaRegUser size={16} color="#008ECC" />
                                            <span className="text-[#666666] text-[13px] md:text-[14px] ">Sign Up/Sign In</span>
                                        </Link>
                                    ) : (
                                        <UserButton afterSignOutUrl="/" />
                                    )
                                }
                                <Link href={'/'} className="flex items-center gap-[6px] pl-[5px] md:pl-[20px]">
                                    <FaCartShopping size={16} color="#008ECC" />
                                    <span className="text-[#666666] text-[13px] md:text-[14px] ">Cart</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="searchbar lg:hidden">
                        <label htmlFor="search" className="flex items-center bg-[#F3F9FB] min-w-full p-[16px] rounded-[10px] gap-[5px]">
                            <FaMagnifyingGlass size={16} color="#008ECC" />
                            <input type="search" name="search" className="bg-transparent w-full pl-[10px] outline-none " placeholder="Search essentials, groceries and more..." />
                        </label>
                    </div>
                </header>
                <Category withImage={false} />
            </div>
        </div>
    )
}

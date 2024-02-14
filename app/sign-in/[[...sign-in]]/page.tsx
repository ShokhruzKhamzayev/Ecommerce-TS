import { SignIn } from "@clerk/nextjs"
const SignInPage = () => {
    return (
        <div className="flex justify-center items-center mx-auto overflow-hidden my-[20px]">
            <SignIn />
        </div>
    )
}

export default SignInPage

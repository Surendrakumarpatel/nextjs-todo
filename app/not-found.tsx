import Link from "next/link"

const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="font-bold">Page Not Found!</h1>
            <Link className="bg-red-500 px-2 py-1 rounded-md text-white my-4" href="/">Back To Home</Link>
        </div>
    )
}
export default PageNotFound
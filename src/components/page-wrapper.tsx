import React from "react";

type PageProps = {
    children: React.ReactNode;
}

const Page = (props: PageProps) => {
    return (
        <div className="w-full flex justify-center py-24">
            <div className="w-full max-w-5xl px-5 py-10 lg:px-0">{props.children}</div>
        </div>
    )
}
export default Page;
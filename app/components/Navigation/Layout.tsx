import React, { ReactNode } from "react";
import { NavigationBar } from "./NavigationBar";

interface Props {
    children: ReactNode;
    isHome?: boolean;
}

export const Layout: React.FC<Props> = ({ children, isHome }) => {
    return (
        <div className="h-screen w-screen overflow-x-hidden">
            <div className="relative">
                {isHome ? <>
                    <video autoPlay muted loop controls={false}>
                        <source src="/bg.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute bg-black/50 top-0 left-0 h-full w-full">
                        <NavigationBar />
                    </div>
                </> :
                    <NavigationBar />
                }

            </div>
            <div className="py-8 px-4">
                {children}
            </div>

        </div>
    )
}
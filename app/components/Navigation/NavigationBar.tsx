import React from "react";

interface Props {
    isHome?: boolean;
}

const boatTypes = [
    'Sailboat',
    'Motorboat',
    'Yacht',
    'Catamaran',
    'Canoe',
    'Kayak',
    'JetSki',
    'FishingBoat',
    'PontoonBoat',
    'Houseboat',
    'Speedboat',
    'Dinghy',
    'Trawler',
    'CabinCruiser',
    'Barge',
    'InflatableBoat',
    'Paddleboard',
    'WakeboardBoat',
    'JonBoat',
    'Narrowboat',
    'Airboat',
    'Hovercraft',
    'Ferry',
    'Gondola',
    'Tugboat',
    'AmphibiousBoat',
    'Sailboard',
    'Submarine',
    'Other'
];

export const NavigationBar: React.FC<Props> = ({
    isHome
}) => {
    return (
        <div>
            <nav className="w-full bg-white border-b border-gray-200 py-2">
                <div className="container px-4 mx-auto">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <img src="/logo.svg" className="h-10" />
                        </div>
                        <div className="flex items-center">

                            <div className="flex items-center">
                                <a href="#" className="ml-6 text-gray-800 hover:text-gray-600 p-2">Inscription</a>
                                <a href="#" className="ml-6 text-gray-800 hover:text-gray-600 p-2 border border-gray-300 rounded-md hover:bg-sea-blue hover:text-white hover:border-sea-blue">Connexion</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="w-full bg-sea-blue border-b border-gray-200 py-4 px-2 flex flex-row  items-center overflow-x-auto">
                {boatTypes.map((boat, index) => (
                    <span className="text-sm text-white  px-2 text-center cursor-pointer" key={index}>{boat}</span>
                ))}
            </nav>
        </div>
    )
}
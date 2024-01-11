import { FC } from "react";

import "@/style/components/card.scss";


type CardProps = {
    title: string;
};

const Card : FC<CardProps> = ( props ) => {
    return (
        <div className="flex flex-col items-start gap-2">
            <div className="card h-36 w-72 flex-row-center-center border-gradient p-0.5 rounded-lg">
                <div className="h-full w-72 flex justify-start items-end py-2 px-3 bg-grey-dark rounded-lg">
                    <h3 className="text-base font-normal text-grey-light">
                        { props.title }
                    </h3>
                </div>
            </div>
        </div>
    )
}


export default Card;

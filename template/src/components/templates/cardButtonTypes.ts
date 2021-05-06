import * as cardButtonTypes from './cardButtonTypeData.json';

export interface imageAttributesType {
    "fileName": string;
    "bgColor": string;
    "width": string;
    "height": string;
    "top": string;
    "left": string;
}

export interface cardButtonType {
    title: string;
    desc: string;
    navigateTo: string;
    pushState: string
    buttonText: string;
    imageAttributes: imageAttributesType;
}

export interface cardButtonProps {
    loading: boolean;
    onClick: any;
    name: string;
    foo?: string;
}

const getCardButtonPropsByType = (type: string) : cardButtonType => {
    // @ts-ignore
    const result = cardButtonTypes.default[type] as cardButtonType

    if (!result) {
        console.log("ERROR: Invalid CardButton type value.")
        throw new Error("Invalid CardButton type value.");
    }
    return result;
}

export default getCardButtonPropsByType;

export interface PropsButtons {
    advanceClick: () => void;
    returnClick: () => void;
    numberPage: number;
}

export interface PropsButtonsNav extends PropsButtons {
    submitting: boolean;
}
import React from "react";

export interface ModalProps {
    children: React.ReactNode;
    text: string;
    title: string;
    closeModal: (e: any) => void;
}

export enum ButtonType {
    PRIMARY_ACTIVE_ON,
    EMPTY_WITHOUT_BORDER,
    PRIMARY_ACTIVE_OFF_NEW,
}

export enum PageStates {
    MAIN = 'MAIN',
    MODAL = 'MODAL'
}

export interface ModalWrapperProps {
    closeModal: (isModalOpen: PageStates) => void;
    onAgreeBtn: (value: boolean) => void;
}

export interface ButtonProps {
    onBtnClick: (e: any) => void;
    type: ButtonType;
    btnText: string;
    id: string;
    disabled?: boolean;
}

export interface TextBlockProps {
    title?: React.ReactNode;
    children: React.ReactNode;
    styles: string;
    id?: string;
}

export interface ApproveBtnProps {
    btnCallBack: () => void;
    btnType: ButtonType;
    disabled?: boolean;
    btnText: string
}
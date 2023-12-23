import React from "react";

export interface ModalProps {
    children: React.ReactNode;
    text: string;
    title: string;
    closeModal: (value: boolean) => void;
}

export enum ButtonType {
    PRIMARY_ACTIVE_ON,
    EMPTY_WITHOUT_BORDER,
    PRIMARY_ACTIVE_OFF_NEW,
}

export interface ModalWrapperProps {
    closeModal: (isModalOpen: boolean) => void;
    onAgreeBtn: (value: boolean) => void;
}

export interface SharedButtonProps {
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

export interface NextBtnProps {
    btnCallBack: () => void;
    btnType: ButtonType;
    disabled?: boolean;
}
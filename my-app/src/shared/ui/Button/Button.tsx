import React from 'react';

import {ButtonType, SharedButtonProps} from 'shared/types';

import classnames from 'classnames';
import cn from './Button.module.scss';

export const buttonTypeCn = {
    [ButtonType.PRIMARY_ACTIVE_ON]: cn.primaryActiveOn,
    [ButtonType.PRIMARY_ACTIVE_OFF_NEW]: cn.primaryActiveOffNew,
    [ButtonType.EMPTY_WITHOUT_BORDER]: cn.emptyWithoutBorder,
};

export const Button = ({onBtnClick, type, btnText, id, disabled}: SharedButtonProps) => {
    return (
        <button
            disabled={disabled}
            id={id}
            onClick={onBtnClick}
            className={classnames(cn.actions, buttonTypeCn[type])}
        >
            {btnText}
        </button>
    );
};

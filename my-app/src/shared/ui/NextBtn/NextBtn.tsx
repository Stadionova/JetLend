import React from 'react';

import {Button} from 'shared';
import {NextBtnProps} from '../../types';

import cn from './NextBtn.module.scss';

export const NextBtn = ({btnCallBack, btnType, disabled}: NextBtnProps) => {
    return (
        <div className={cn.btnWrapper}>
            <Button id='nextBtn' disabled={disabled} onBtnClick={btnCallBack} type={btnType}
                    btnText='Выполнить действие'/>
        </div>
    );
};

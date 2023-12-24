import React from 'react';

import {Button} from 'shared';
import {ApproveBtnProps} from '../../types';

import cn from './ApproveBtn.module.scss';

export const ApproveBtn = ({btnCallBack, btnType, disabled, btnText}: ApproveBtnProps) => {
    return (
        <div className={cn.btnWrapper}>
            <Button id='approveBtn'
                    disabled={disabled}
                    onBtnClick={btnCallBack}
                    type={btnType}
                    btnText={btnText}/>
        </div>
    );
};

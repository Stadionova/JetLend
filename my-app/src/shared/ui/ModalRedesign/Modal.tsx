import React from 'react';
import 'moment/locale/ru';

import {ModalProps} from '../../types';
import {TextBlock, Text, CloseArrow} from 'shared';

import cn from './Modal.module.scss';

export const Modal = ({text, children, title, closeModal}: ModalProps) => {
    return (
        <div className={cn.modal}>
            <TextBlock styles={cn.content}>
                <div className={cn.closeIcon} onClick={() => closeModal(false)}>
                    <CloseArrow/>
                </div>
                <Text text={title} style={cn.title}/>
                <Text text={text} style={cn.desc}/>
                {children}
            </TextBlock>
        </div>
    );
};

import React, {useEffect, useState} from 'react';
import 'moment/locale/ru';

import {ButtonType, ModalWrapperProps, PageStates} from '../../types';
import {Modal} from './Modal';
import {Button} from 'shared';

import cn from './Modal.module.scss';

export const ModalWrapper = ({closeModal, onAgreeBtn}: ModalWrapperProps) => {
    const [btnType, setBtnType] = useState(ButtonType.PRIMARY_ACTIVE_OFF_NEW);
    const [seconds, setSeconds] = useState(5);
    const [timerActive, setTimerActive] = useState(false);

    useEffect(() => {
        seconds === 0 && setBtnType(ButtonType.PRIMARY_ACTIVE_ON);
    }, [seconds]);

    useEffect(() => {
        if (seconds > 0 && timerActive) {
            setTimeout(setSeconds, 500, seconds - 1);
        } else {
            setTimerActive(false);
        }
    }, [seconds, timerActive]);

    useEffect(() => {
        setTimerActive(true);
        setSeconds(5);
    }, []);

    return (
        <div className={cn.modalWrapper}>
            <Modal
                closeModal={() => closeModal(PageStates.MAIN)}
                title="Согласие с правилами"
                text="Для данной функции применяются особые условия и правила пользования, их необходимо подтвердить, нажав на кнопку Подтвердить"
            >
                <div className={cn.modalBtns}>
                    <Button onBtnClick={() => closeModal(PageStates.MAIN)}
                            type={ButtonType.EMPTY_WITHOUT_BORDER}
                            btnText="Отмена"
                            id="reject"/>
                    <Button
                        disabled={btnType === ButtonType.PRIMARY_ACTIVE_OFF_NEW}
                        id="agree"
                        onBtnClick={() => {
                            closeModal(PageStates.MAIN);
                            onAgreeBtn(true);
                        }}
                        type={btnType}
                        btnText={seconds === 0 ? 'Подтвердить' : `Подтвердить ${seconds}`}
                    />
                </div>
            </Modal>
        </div>
    );
};

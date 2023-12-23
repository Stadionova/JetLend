import React, {useEffect, useState} from 'react';

import {ButtonType} from 'shared/types';
import {ModalWrapper, NextBtn} from 'shared';

export const Main = () => {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [isDataApproved, setDataApproved] = useState<boolean>(false);
    const alertText = '«Действие выполнено»'

    useEffect(() => {
        isDataApproved && alert(alertText);
    }, [isDataApproved]);

    return (
        <>
            {!isModalOpen && (
                <NextBtn
                    btnType={ButtonType.PRIMARY_ACTIVE_ON}
                    btnCallBack={!isDataApproved
                        ? () => setModalOpen(true)
                        : () => alert(alertText)}
                />
            )}
            {isModalOpen && !isDataApproved && (
                <ModalWrapper onAgreeBtn={() => setDataApproved(true)} closeModal={setModalOpen}/>
            )}
        </>
    );
};

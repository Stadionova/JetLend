import React, {useEffect, useState} from 'react';

import {ButtonType, PageStates} from 'shared/types';
import {ModalWrapper, ApproveBtn} from 'shared';

export const Main = () => {
    const alertText = '«Действие выполнено»'

    const [pageState, setPageState] = useState<PageStates>(PageStates.MAIN);
    const [isRulesApproved, setRulesApproved] = useState<boolean>(false);

    const onMainBtnClick = () => {
        return !isRulesApproved
            ? setPageState(PageStates.MODAL)
            : alert(alertText)
    }

    useEffect(() => {
        isRulesApproved && alert(alertText);
    }, [isRulesApproved]);

    return (
        <>
            {pageState === PageStates.MAIN && (
                <ApproveBtn
                    btnType={ButtonType.PRIMARY_ACTIVE_ON}
                    btnCallBack={onMainBtnClick}
                    btnText='Выполнить действие'
                />
            )}
            {pageState === PageStates.MODAL && !isRulesApproved && (
                <ModalWrapper onAgreeBtn={() => setRulesApproved(true)}
                              closeModal={() => setPageState(PageStates.MAIN)}/>
            )}
        </>
    );
};

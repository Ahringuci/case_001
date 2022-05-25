import React from "react";

import "./confirm.scss";

function YesNoComfirm(props) {
    const { callbackConfirm } = props;

    const hanldeConfirm = (e) => {
        callbackConfirm && callbackConfirm(e);
    };
    return (
        <div className="confirm-popup">
            <div
                className="confirm-mask"
                onClick={() => hanldeConfirm(false)}
            ></div>
            <div className="confirm-group">
                <p className="confirm-note">Bạn chắc chứ ?</p>

                <div className="group-inline">
                    <button
                        className="outline button-confirm"
                        onClick={() => hanldeConfirm(true)}
                    >
                        Đồng ý
                    </button>
                    <button
                        className="button-confirm"
                        onClick={() => hanldeConfirm(false)}
                    >
                        Hủy
                    </button>
                </div>
            </div>
        </div>
    );
}

export default YesNoComfirm;

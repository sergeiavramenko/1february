import React from "react";
import d from "./Dialogs.module.css"

const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogs_items}>

                <div className={ ` ${d.dialog} ${d.active}`}> Dim</div>
                <div className={d.dialog}> Andrey</div>
                <div className={d.dialog}> Sveta</div>
                <div className={d.dialog}> Sasha</div>
                <div className={d.dialog}> Viktor</div>
                <div className={d.dialog}> Valery</div>
            </div>
            <div className={d.messages}>
                <div className={d.message}>hi</div>
                <div className={d.message}>how are</div>
                <div className={d.message}>it-camas</div>

            </div>
        </div>

    );
}
export default Dialogs;
import React from "react";
import d from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogs_items}>

                <div className={d.dialog}> <NavLink to="/dialogs/1" className={navData => navData.isActive ? d.active : d.item}>Dim</NavLink> </div>
                <div className={d.dialog}> <NavLink to="/dialogs/2" className={navData => navData.isActive ? d.active : d.item}>Andrey</NavLink></div>
                <div className={d.dialog}> <NavLink to="/dialogs/3" className={navData => navData.isActive ? d.active : d.item}>Sveta</NavLink></div>
                <div className={d.dialog}> <NavLink to="/dialogs/4" className={navData => navData.isActive ? d.active : d.item}>Sasha</NavLink></div>
                <div className={d.dialog}> <NavLink to="/dialogs/5" className={navData => navData.isActive ? d.active : d.item}>Viktor</NavLink></div>
                <div className={d.dialog}> <NavLink to="/dialogs/6" className={navData => navData.isActive ? d.active : d.item}>Valery</NavLink></div>
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
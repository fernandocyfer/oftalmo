
import style from '/styles/Breadcrumb.module.sass';
import {Button} from "../Button/Button";
import Link from "next/link";


const Breadcrumb = ({to, title}) => (<>
        <div className={style.Breadcrumb}>
            <div className={'container-lg'}>
                <span> Página principal / <b><Link href={'/' + to}>{title ? title : to}</Link></b></span>
            </div>
        </div>
    </>
)


export default Breadcrumb;

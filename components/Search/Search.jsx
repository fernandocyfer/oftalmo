import style from '/styles/search.module.sass'
import {Input} from 'react-select/animated'
import {Button} from '../Button/Button'
import arrowDown from '/public/icons/arrow-down.svg'
import Image from 'next/image'

const Search=({children,id,options,handleSelect,search,handleChange}) => {


    const handleEspecialidade=(e) => {
        handleSelect(e.target.value)
    }

    function getValue(e) {
        handleChange(e)
    }


    return (<>
        <div className={style.search}>
            <div className={'container-xl p-4'}>
                <div>
                    <p>Utilize o campo abaixo para encontrar a sua especialidade.</p>
                    <div className={style.searchInput}>
                        <input
                            type="text"
                            placeholder={'Procure seu médico pelo nome'}
                            onChange={(e) => handleChange(e.target.value)}
                        />
                        {id===2? (<>
                            <select onChange={(e) => getValue(e)} name="pets" id="pet-select">
                                <option value="">Procure seu médico por especialidade</option>
                                {options.map((option,i) => <option key={i}
                                    value={option}>{option}</option>)}
                            </select>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="9"
                                viewBox="0 0 14 9"
                                fill="none"
                            >
                                <path
                                    d="M1 1L7 7L13 1"
                                    stroke="#002340"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                />
                            </svg>
                        </>):null}
                        <Button id={1} title={'Buscar'} fire={search} />
                    </div>
                </div>

                <div className={style.line}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1010"
                        height="4"
                        viewBox="0 0 1010 4"
                        fill="none"
                    >
                        <path
                            d="M2 2L1008 2.0001"
                            stroke="url(#paint0_radial_1_1142)"
                            stroke-opacity="0.2"
                            stroke-width="3"
                            stroke-linecap="square"
                        />
                        <defs>
                            <radialGradient
                                id="paint0_radial_1_1142"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(504.995 2.00527) rotate(119.836) scale(195.968 197144)"
                            >
                                <stop stop-color="#007AFF" />
                                <stop offset="1" stop-color="#007AFF" stop-opacity="0" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
                {/* <div className={style.resultBox}>
                    <div className={'container-xl'}>
                        <span>Resultados encontrados</span>
                    </div>
                </div> */}
                <div className={style.results}>{children}</div>
            </div>
        </div>
    </>)
}

export default Search

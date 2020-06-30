import React, {useState} from "react";
import styles from "../users.module.css";

const Paginator = (props) => {

    let countPage = Math.ceil(props.totalCount / props.portionSize)
    let totalPages = []
    for (let i = 1; i <= countPage; i++) {
        totalPages.push(i)
    }

    let portionCount = Math.ceil(countPage / props.portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize +1
    let rightPortionPageNumber = portionNumber * props.portionSize

    return (
        <div className={styles.paginator}>
            { portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>prev</button>
            }
            {totalPages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                return (
                    <span className={p === props.currentPage && styles.selectedPage}
                          onClick={() => {
                              props.onPageChange(p)
                          }}
                    >{p} </span>
                )
            })}
            { portionCount > props.portionSize && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>next</button>}
        </div>
    )
}

export default Paginator
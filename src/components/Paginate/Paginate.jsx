import './Paginate.css';


export default function Paginate(props){
    let totalPages = [];


    for (let i = 1; i <= Math.ceil(props.totalProducts / props.productsPerPage); i++) {
        totalPages.push(i)
    }



    return (
        <div className='paginate-container'>
            <ul className='pages-list'>
                {totalPages.map(e => <li onMouseDown={()=> props.changePage(e)} key={e} className={e === props.currentPage ? "page-active" : "pages"} value={e}>{e}</li>)}
            </ul>
        </div>
    )


}
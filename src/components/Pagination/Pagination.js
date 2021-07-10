export function Pagination({ firstPage, lastPage, prevPage, currentPage, totalPages, nextPage }){

	return (
		<div className="pagination">
			<button className="btn btn--first" onClick={firstPage} disabled={currentPage === 1}>First</button>
			<button title="previous page" className="btn btn--prev" onClick={prevPage} disabled={currentPage === 1}>&#x27B8;</button>
			{currentPage} of {totalPages}
			<button title="next page" className="btn btn--next" onClick={nextPage} disabled={currentPage === totalPages}>&#x27B8;</button>
			<button className="btn btn--last" onClick={lastPage} disabled={currentPage === totalPages}>Last</button>
		</div>
	);
}
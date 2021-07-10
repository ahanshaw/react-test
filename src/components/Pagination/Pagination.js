export function Pagination({ prevPage, currentPage, totalPages, nextPage }){

	return (
		<div className="pagination">
			<button title="previous page" className="btn btn--prev" onClick={prevPage} disabled={currentPage === 1}>&#x27B8;</button>
			{currentPage} of {totalPages}
			<button title="next page" className="btn btn--next" onClick={nextPage} disabled={currentPage === totalPages}>&#x27B8;</button>
		</div>
	);
}
// Just placeholders for cards to see the grid.
// Later, you will substitute real data from SWAPI.
const placeholders = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title: `Title ${i + 1}`,
    subtitle: "Additional information",
    text: "A brief description of the resource in a couple of lines. Will be replaced later with data from the API."
}));

export default function CardList() {
    return (
        <div className="container">
            <div className="row g-3">
                {placeholders.map(item => (
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={item.id}>
                        <div className="card h-100 bg-dark text-light shadow-sm border-light">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{item.title}</h5>
                                <h6 className="card-subtitle mb-2 text-light opacity-75">{item.subtitle}</h6>
                                <p className="card-text flex-grow-1 ">{item.text}</p>
                                <div className="d-flex gap-2">
                                    <button className="btn btn-primary btn-sm" type="button">
                                        More
                                    </button>
                                    <button className="btn btn-light text-dark btn-sm" type="button">
                                        To Favourite
                                    </button>
                                </div>
                            </div>
                            <div className="card-footer">
                                <small className="text-light opacity-75">ID: {item.id}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Пагинация-заглушка */}
            <nav className="mt-3" aria-label="Pagination">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled"><a className="page-link bg-dark text-light">Prev</a></li>
                    <li className="page-item active"><a className="page-link bg-dark text-light">1</a></li>
                    <li className="page-item"><a className="page-link bg-dark text-light">2</a></li>
                    <li className="page-item"><a className="page-link bg-dark text-light">3</a></li>
                    <li className="page-item"><a className="page-link bg-dark text-light">Next</a></li>
                </ul>
            </nav>
        </div>
    );
}

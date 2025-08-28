// Просто заглушки карточек, чтобы увидеть сетку.
// Позже подставишь реальные данные из SWAPI.
const placeholders = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title: `Заголовок ${i + 1}`,
    subtitle: "Доп. инфо",
    text: "Короткое описание ресурса в пару строк. Позже заменится данными из API."
}));

export default function CardList() {
    return (
        <div className="container">
            <div className="row g-3">
                {placeholders.map(item => (
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={item.id}>
                        <div className="card h-100">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{item.title}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{item.subtitle}</h6>
                                <p className="card-text flex-grow-1">{item.text}</p>
                                <div className="d-flex gap-2">
                                    <button className="btn btn-outline-primary btn-sm" type="button">
                                        Подробнее
                                    </button>
                                    <button className="btn btn-outline-secondary btn-sm" type="button">
                                        В избранное
                                    </button>
                                </div>
                            </div>
                            <div className="card-footer">
                                <small className="text-body-secondary">ID: {item.id}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Пагинация-заглушка */}
            <nav className="mt-3" aria-label="Pagination">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled"><a className="page-link">Prev</a></li>
                    <li className="page-item active"><a className="page-link">1</a></li>
                    <li className="page-item"><a className="page-link">2</a></li>
                    <li className="page-item"><a className="page-link">3</a></li>
                    <li className="page-item"><a className="page-link">Next</a></li>
                </ul>
            </nav>
        </div>
    );
}

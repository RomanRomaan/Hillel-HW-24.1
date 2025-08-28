export default function ResourceTabs() {
    return (
        <div className="container">
            <ul className="nav nav-tabs mb-3">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">People</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Planets</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Starships</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Vehicles</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Species</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Films</a>
                </li>
            </ul>
        </div>
    );
}

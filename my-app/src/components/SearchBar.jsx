export default function SearchBar() {
    return (
        <div className="container my-3">
            <form className="row g-2">
                <div className="col-sm-8 col-md-9">
                    <input className="form-control" placeholder="Search by name / title" />
                </div>
                <div className="col-sm-4 col-md-3 d-grid">
                    <button className="btn btn-primary" type="button">Find</button>
                </div>
            </form>
        </div>
    );
}

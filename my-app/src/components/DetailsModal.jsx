// Модалка-заглушка. Открываться пока не будет — просто верстка.
export default function DetailsModal() {
    return (
        <div className="modal fade" id="detailsModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">Заголовок ресурса</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Row</span><strong>Значение</strong>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Row</span><strong>Значение</strong>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Row</span><strong>Значение</strong>
                            </li>
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

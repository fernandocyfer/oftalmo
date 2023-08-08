const Modal = ({body}) => (

    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered ">
            <div className="modal-content">
                <div className="modal-body">
                    {body}
                </div>
            </div>
        </div>
    </div>)

export default Modal;
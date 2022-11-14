import './Modal.css';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function Modal({ children, isOpen, closeModal }){
    const handleModalContainerClick = (e) => e.stopPropagation()

    return(
        <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modal-container" onClick={handleModalContainerClick}>
                <button className="modal-close" onClick={closeModal}>
                <CloseRoundedIcon/>
                </button>
                {children}
            </div>
        </article>
    )
}
import { Portal } from '../../../libs/hooks'
import { useModal } from '../../../libs/stores'

const Modal: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  const isOpen = useModal((state) => state.isOpen)
  const toggleModal = useModal((state) => state.toggleModal)
  return (
    isOpen && (
      <Portal selector="#modal-root">
        <div
          onClick={() => toggleModal()}
          className="fixed w-full min-h-screen bg-black bg-opacity-50 flex justify-center items-center top-0 right-0"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white p-20"
          >
            <button onClick={() => toggleModal()}></button>
            <p>{title}</p>
            {children}
          </div>
        </div>
      </Portal>
    )
  )
}

export default Modal

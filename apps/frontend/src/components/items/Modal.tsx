import { useState } from 'react';
import { ItemType } from '@/@types';
import { v4 as uuidv4 } from 'uuid';

interface ModalProps {
  title: string;
  text: string;
  item?: ItemType;
  saveButtonText: string;
  saveModal: (item: ItemType) => Promise<void>;
  closeModal: () => void;
}
//https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*
export default function Modal({
  title,
  text,
  item,
  saveButtonText,
  saveModal,
  closeModal,
}: ModalProps) {
  const [itemName, setItemName] = useState(item ? item.name : '');
  const [itemDescription, setItemDescription] = useState(
    item ? item.description : '',
  );
  const [itemImageUrl, setItemImageUrl] = useState(item ? item.imageUrl : '');
  const [isItemAvailable, setIsItemAvailable] = useState(
    item ? item.isAvailable : true,
  );

  function save() {
    const itemToSave = item
      ? {
          ...item,
          name: itemName,
          description: itemDescription,
          imageUrl: itemImageUrl,
          isAvailable: isItemAvailable,
        }
      : {
          id: uuidv4(),
          name: itemName,
          description: itemDescription,
          imageUrl: itemImageUrl,
          isAvailable: isItemAvailable,
          userId: 1,
          locationId: '',
        };
    console.log('itemToSave', itemToSave);
    saveModal(itemToSave);
  }

  function updateIsItemAvailable() {
    setIsItemAvailable(!isItemAvailable);
  }

  function close() {
    closeModal();
  }

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={close}>
          &times;
        </span>
        <div className="flex-column j-between h-100-p">
          <div>
            <div className="ml-md">
              <h2 className="mb-md">{title}</h2>
              <p className="mb-md">{text}</p>
            </div>
            <div className="flex wrap j-around">
              <div className="flex-column">
                <label htmlFor="itemName">Item Name</label>
                <input
                  type="text"
                  name="itemName"
                  value={itemName}
                  className="form-input"
                  onChange={(e) => setItemName(e.target.value)}
                />
              </div>
              <div className="flex-column">
                <label htmlFor="itemDescription">Item Description</label>
                <input
                  type="text"
                  name="itemDescription"
                  value={itemDescription}
                  className="form-input"
                  onChange={(e) => setItemDescription(e.target.value)}
                />
              </div>
              <div className="flex-column">
                <label htmlFor="itemImageUrl">Item Image URL</label>
                <input
                  type="text"
                  name="itemImageUrl"
                  value={itemImageUrl}
                  className="form-input w-30"
                  onChange={(e) => setItemImageUrl(e.target.value)}
                />
              </div>
              <div className="flex-column mt-lg">
                <label htmlFor="itemImageUrl">
                  Is Available for borrowing?
                </label>
                <input
                  type="checkbox"
                  name="isAvailable "
                  checked={isItemAvailable}
                  className="h-2"
                  onChange={updateIsItemAvailable}
                />
              </div>
            </div>
          </div>

          <button onClick={save}>{saveButtonText}</button>
        </div>
      </div>
    </div>
  );
}

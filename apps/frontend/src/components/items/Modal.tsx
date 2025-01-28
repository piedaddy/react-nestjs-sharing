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
  const [itemImageUrl, setItemImageUrl] = useState(
    item ? item.description : '',
  );

  function save() {
    const itemToSave = item
      ? {
          ...item,
          name: itemName,
          description: itemDescription,
          imageUrl: itemImageUrl,
        }
      : {
          id: uuidv4(),
          name: itemName,
          description: itemDescription,
          imageUrl: itemImageUrl,
          isAvailable: true,
          userId: 1,
          locationId: '',
        };

    saveModal(itemToSave);
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
        <div>
          <div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
          <div>
            <label htmlFor="itemName">Item Name</label>
            <input
              type="text"
              name="itemName"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <label htmlFor="itemDescription">Item Description</label>
            <input
              type="text"
              name="itemDescription"
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
            />

            <label htmlFor="itemImageUrl">Item Image URL</label>
            <input
              type="text"
              name="itemImageUrl"
              value={itemImageUrl}
              onChange={(e) => setItemImageUrl(e.target.value)}
            />
          </div>
          <button onClick={save}>{saveButtonText}</button>
        </div>
      </div>
    </div>
  );
}

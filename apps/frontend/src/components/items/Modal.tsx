import { useState } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { ADD_NEW_ITEM } from '@/apis/items.apis';

const DEFAULT_NEW_ITEM = {
  name: '',
  description: '',
  imageUrl: '',
  locationId: '',
  isAvailable: false,
  userId: '',
};
export default function Modal({
  title,
  text,
  closeModal,
}: {
  title: string;
  text: string;
  closeModal: () => void;
}) {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemImageUrl, setItemImageUrl] = useState('');
  const dispatch = useAppDispatch();

  function close() {
    closeModal();
  }

  async function saveNewItem() {
    try {
      const data = await ADD_NEW_ITEM({
        ...DEFAULT_NEW_ITEM,
        name: itemName,
        description: itemDescription,
        imageUrl: itemImageUrl,
        userId: 1,
      });
      console.log('data after save', data);
      close();
    } catch (error) {
      // showFailedLoginToast();
    }
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
          <button onClick={saveNewItem}>save new item</button>
        </div>
      </div>
    </div>
  );
}

import { ItemType } from '@/@types/index';
import { DELETE_ITEM } from '@/apis/items.apis';
import { ToastContainer, toast } from 'react-toastify';

export default function Item({ item }: { item: ItemType }) {
  async function deleteItem() {
    try {
      const deleted = await DELETE_ITEM(item.id);
      if (deleted) {
        toast('Item successfully deleted');
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <div className="flex-column a-center background-color__dark-blue p-xl">
      <h4>{item.name}</h4>
      <p>{item.description}</p>
      <img src={item.imageUrl} alt={item.name} width="300" height="250" />
      <div>
        <label htmlFor="isAvailable">
          {item.isAvailable ? 'avail' : 'not avail'}
        </label>
        {/* @todo - make this icon */}
        <input
          type="checkbox"
          name="isAvailable"
          id="isAvailable"
          disabled
          checked={item.isAvailable}
        />
      </div>
      <button>edit</button>

      <button onClick={deleteItem}>delete</button>
      <ToastContainer />
    </div>
  );
}

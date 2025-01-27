import { useState } from 'react';
import { useAppSelector } from '@/store/hooks';

import Layout from '@/Layout';
import Item from '@/components/items/Item';
import AddNewModal from '@/components/items/Modal';

export default function Home() {
  const userItems = useAppSelector((state) => state.user.items ?? []);

  const [shouldOpenAddNewItemModal, setShouldOpenAddNewItemModal] =
    useState(false);

  function openAddNewItemModal() {
    setShouldOpenAddNewItemModal(true);
  }
  function closeAddNewItemModal() {
    setShouldOpenAddNewItemModal(false);
  }

  return (
    <Layout>
      <div className="p-xl">
        <h2>My Items</h2>

        <button onClick={openAddNewItemModal}>add new item</button>

        {userItems.map((dummyItem) => (
          <Item item={dummyItem} key={dummyItem.id} />
        ))}

        {shouldOpenAddNewItemModal && (
          <AddNewModal
            title="Add New Item"
            text="add"
            closeModal={closeAddNewItemModal}
          />
        )}
      </div>
    </Layout>
  );
}

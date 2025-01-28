import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { useTranslation } from 'react-i18next';

import Layout from '@/Layout';
import Item from '@/components/items/Item';
import Modal from '@/components/items/Modal';
import { ItemType } from '@/@types/index';
import { ADD_NEW_ITEM } from '@/apis/items.apis';
import { addItemToUser } from '@/store/features/user/userSlice';

export default function Home() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const userItems = useAppSelector((state) => state.user.items ?? []);

  const [shouldOpenAddNewItemModal, setShouldOpenAddNewItemModal] =
    useState(false);

  const numberOfItems = userItems.length;

  function openAddNewItemModal() {
    setShouldOpenAddNewItemModal(true);
  }
  function closeAddNewItemModal() {
    setShouldOpenAddNewItemModal(false);
  }

  async function saveNewItem(item: ItemType) {
    try {
      const { data } = await ADD_NEW_ITEM(item);
      if (data) {
        dispatch(addItemToUser(data));
      }
      closeAddNewItemModal();
    } catch (error) {
      // showFailedLoginToast();
    }
  }

  return (
    <Layout>
      <div className="p-xl">
        <h2 className="tc-gr">
          {' '}
          {t('items.my_items')}: {numberOfItems}
        </h2>

        <button className="mb-md button-green" onClick={openAddNewItemModal}>
          {t('items.add')}
        </button>

        {userItems.map((dummyItem) => (
          <Item item={dummyItem} key={dummyItem.id} />
        ))}

        {shouldOpenAddNewItemModal && (
          <Modal
            title={t('items.add')}
            text="add"
            saveButtonText={t('items.save_new')}
            closeModal={closeAddNewItemModal}
            saveModal={saveNewItem}
          />
        )}
      </div>
    </Layout>
  );
}

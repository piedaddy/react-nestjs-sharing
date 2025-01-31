import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { useTranslation } from 'react-i18next';

import Layout from '@/Layout';
import Item from '@/components/items/Item';
import Modal from '@/components/items/Modal';
import { ItemType } from '@/@types/index';
import { ADD_NEW_ITEM } from '@/apis/items.apis';
import { addItemToUser } from '@/store/features/user/userSlice';
import { sortByName } from '@/utils/common';

export default function Items() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const userItems = useAppSelector((state) => state.user.items ?? []);

  const [nameFilter, setNameFilter] = useState('');
  const [localItems, setLocalItems] = useState([] as ItemType[]);
  const [isAsc, setIsAsc] = useState(true);
  const [shouldOpenAddNewItemModal, setShouldOpenAddNewItemModal] =
    useState(false);

  const numberOfItems = userItems.length;

  useEffect(() => {
    setLocalItems([...userItems]);
  }, [userItems]);

  useEffect(() => {
    // setLocalItems([...userItems]);
    filterItemsByName();
  }, [nameFilter]);

  function openAddNewItemModal() {
    setShouldOpenAddNewItemModal(true);
  }
  function closeAddNewItemModal() {
    setShouldOpenAddNewItemModal(false);
  }

  function resetFilter() {
    setNameFilter('');
    setLocalItems([...userItems]);
  }

  function filterItemsByName() {
    setLocalItems(
      userItems.filter((item) =>
        item.name.toLowerCase().includes(nameFilter.toLowerCase()),
      ),
    );
  }

  function sortItems() {
    const sorted = sortByName(localItems, isAsc);
    setLocalItems(sorted);
    setIsAsc(!isAsc);
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

  function updateNameFilter(e) {
    setNameFilter(e.target.value);
    filterItemsByName();
  }

  return (
    <Layout>
      <div className="p-xl">
        <div className="flex j-between mb-md">
          <h1 className="tc-gr">
            {t('items.my_items')}: {numberOfItems}
          </h1>
          <button className="mb-md button-green" onClick={openAddNewItemModal}>
            {t('items.add')}
          </button>
        </div>

        <div className="flex-column">
          <div className="flex mb-md">
            <input
              type="text"
              name="filterByName"
              className="filter-input mr-xs"
              value={nameFilter}
              placeholder={t('filter.name')}
              onChange={updateNameFilter}
            />
            <input
              type="text"
              name="filterByName"
              className="filter-input mr-xs"
              onChange={updateNameFilter}
            />
            <input
              type="text"
              name="filterByName"
              className="filter-input"
              onChange={updateNameFilter}
            />
          </div>
          <div className="flex j-between">
            <button
              className="button-green button-green__wide"
              onClick={sortItems}
            >
              {isAsc ? t('sort.sort_asc') : t('sort.sort_desc')}
            </button>
          </div>

          <button className="mb-md button-green" onClick={resetFilter}>
            reset filtter
          </button>
        </div>

        <div className="flex-wrap j-center w-80">
          {localItems.map((dummyItem) => (
            <Item item={dummyItem} key={dummyItem.id} isEditable={true} />
          ))}
        </div>

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

import { useState } from 'react';
import { useAppDispatch } from '@/store/hooks';
import {
  editUserItem,
  deleteItemFromUser,
} from '@/store/features/user/userSlice';

import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import { ItemType } from '@/@types/index';
import { DELETE_ITEM, UPDATE_ITEM } from '@/apis/items.apis';

import { CheckboxIcon } from '@/icons/checkbox.icon';
import { CircleXIcon } from '@/icons/circleXIcon.icon.tsx';
import { EditIcon, DeleteIcon } from '@/icons/edit.icon.tsx';

import Modal from '@/components/items/Modal';

export default function Item({
  item,
  isEditable = false,
}: {
  item: ItemType;
  isEditable?: boolean;
}) {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const [shouldOpenEditItemModal, setShouldOpenEditItemModal] = useState(false);

  async function openEditModal() {
    setShouldOpenEditItemModal(true);
  }

  async function closeEditModal() {
    setShouldOpenEditItemModal(false);
  }

  async function saveEditModal(item: ItemType) {
    try {
      const { data } = await UPDATE_ITEM(item);
      if (data) {
        dispatch(editUserItem(data));
        closeEditModal();
      }
    } catch (error) {
      // showFailedLoginToast();
    }
  }

  async function deleteItem() {
    try {
      const deleted = await DELETE_ITEM(item.id);
      if (deleted) {
        dispatch(deleteItemFromUser(item.id));
        toast('Item successfully deleted');
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <div className="background-color__dark-blue p-sm mg-s w-35 br-small">
      <div className="flex-column a-center mg-lg p-md background-color__light-blue br-small">
        <h4>{item.name}</h4>
        <p>{item.description}</p>
        <img src={item.imageUrl} alt={item.name} width="300" height="250" />
        <div className="flex a-center">
          <p className="mr-xs">
            {item.isAvailable
              ? t('items.is_available')
              : t('items.is_not_available')}
          </p>
          {item.isAvailable ? <CheckboxIcon /> : <CircleXIcon />}
        </div>
        {isEditable && (
          <div className="flex j-around w-30 mg-lg">
            <span onClick={openEditModal}>
              <EditIcon />
            </span>

            <span onClick={deleteItem}>
              <DeleteIcon />
            </span>
          </div>
        )}

        {shouldOpenEditItemModal && (
          <Modal
            title={t('items.edit')}
            text="hi"
            closeModal={closeEditModal}
            saveModal={saveEditModal}
            item={item}
            saveButtonText={t('items.save_changes')}
          />
        )}

        <ToastContainer />
      </div>
    </div>
  );
}

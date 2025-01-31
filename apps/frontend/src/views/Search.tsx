import { GET_ITEMS } from '@/apis/items.apis';
import Layout from '@/Layout';
import { useEffect, useState } from 'react';
import Item from '@/components/items/Item';

export default function Search() {
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    const getAllItems = async () => {
      try {
        const { data } = await GET_ITEMS({ limit: 5, page: 1 });
        if (data) {
          console.log('data', data);
          setAllItems(data);
          //  return data;
        }
      } catch (error) {
        // showFailedLoginToast();
      }
    };

    getAllItems();
  }, []);

  // async function getAllItems() {
  //   try {
  //     const { data } = await GET_ITEMS({ limit: 5, page: 1 });
  //     if (data) {
  //       console.log('data', data);
  //       return data;
  //     }
  //   } catch (error) {
  //     // showFailedLoginToast();
  //   }
  // }
  return (
    <Layout>
      <div>SEarch</div>
      {/* <button onClick={getAllItems}>search</button> */}

      <div className="flex-wrap j-center w-80">
        {allItems.map((dummyItem) => (
          <Item item={dummyItem} key={dummyItem.id} />
        ))}
      </div>
    </Layout>
  );
}

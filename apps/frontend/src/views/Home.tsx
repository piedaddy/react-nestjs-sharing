import Layout from '@/Layout';

export default function Home() {
  const dummyItems = [
    {
      id: '4243',
      title: 'Vaccumn',
      description: 'a vaccum',
      image: '',
    },

    {
      id: '4242',
      title: 'Dog',
      description: 'a Dog',
      image: '',
    },

    {
      id: '4241',
      title: 'Cat',
      description: 'a Cat',
      image: '',
    },
  ];

  return (
    <Layout>
      <div>
        <h2>My Items</h2>

        {dummyItems.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

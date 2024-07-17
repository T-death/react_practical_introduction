export default function TitledPanel({ children }) {
  const title = children.find(elem => elem.key === 'title');
  const body = children.find(elem => elem.key === 'body');
  console.log(title, body)
    
  return (
    <div style={{
      margin: 50,
      padding: 5,
      vorder: '1px solid #000',
      width: 'fit-content',
      boxShadow: '10px 5px 5px #999',
      backgroundColor: '#fff',
    }}>
      { title }
      <hr />
      { body }
    </div>
  );
}
import { useState } from 'react';
import './StateTodo.css';

// Todo項目idの最大値（登録都度にインクリメント）
let maxId = 0;
export default function StateTodo() {
  // 入力値（title）、Todoリスト（todo）をStateで管理
  const [title, setTitle] = useState('');
  const [todo, setTodo] = useState([]);
  const [desc, setDesc] = useState(true);

  // テキストボックスへの入力をStateに反映
  const handleChangeTitle = e => {
    setTitle(e.target.value);
  };

  const handleClick = () => {
    // 新規のTodoを追加
    setTodo([
      ...todo,
      {
        id: ++maxId,
        title,
        created: new Date(),
        isDone: false
      }
    ]);
  };

  // [済]ボタンでTodo項目を完了状態に
  const handleDone = e => {
    setTodo(todo.map(item => {
      if (item.id === Number(e.target.dataset.id)) {
        return {
          ...item,
          isDone: true
        };
      } else {
        return item;
      }
    }));
  };
  
  // [削除]ボタンで該当するTodo項目を破棄
  const handleRemove = e => {
    setTodo(todo.filter(item =>
      item.id !== Number(e.target.dataset.id)
    ));
  };
  
  // ソート
  const handleSort = e => {
    const sorted = [...todo];
    sorted.sort((m, n) => {
      if (desc) {
        return n.created.getTime() - m.created.getTime();
      } else {
        return m.created.getTime() - n.created.getTime();
      }
    });
    setDesc(d => !d);
    setTodo(sorted);
  };
  
  return (
    <div>
      <label>
        やること：
        <input type="text" name="title" value={title} onChange={handleChangeTitle} />
      </label>
      <button type="button" onClick={handleClick}>追加</button><br />
      <button type="button" onClick={handleSort}>ソート（{desc ? '↑' : '↓'}）</button>
      <ul>
        {todo.map(item => (
          <li key={item.id} className={item.isDone ? 'done' : ''}>{item.title}
            <button type="button" onClick={handleDone} data-id={item.id}>済</button>
            <button type="button" onClick={handleRemove} data-id={item.id}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
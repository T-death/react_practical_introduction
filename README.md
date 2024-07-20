# React実践入門

## 1章 イントロダクション Done
## 2章 Reactの基本 Done
* P68
    * JSXはあくまで拡張構文なので、JavaScriptの予約語が使えない
    * 被らないように、属性名はcamelCaseを使う
## 3章 コンポーネント開発（基本） Done
* P132, 133
    * `高度なイベント処理`をある程度覚えてた方が良さそう
* P147
    * 独自データ属性（`data-****`の形式に従って、オリジナルの属性を指定可能）
イベントオブジェクトに対して、`.target`とすることで、そのオブジェクトの属性にアクセスできる
## 4章　コンポーネント開発（フォーム）
* `htmlFor`があると、その属性の箇所をクリックすることで入力に移れる
    * なくても動くけれど、あった方が便利だなぁ
* P174
    * ファイル入力ボックスは常に非制御コンポーネント
    * JavaScript側だけで管理するものじゃないからってことかな
* useStateは`e.target.~`で、useRefは`e.currnet.~`、独自データ属性は`e.target.dataset.~`って理解で良い？


P192から続きやる
import { Suspense, lazy } from 'react';

// ミリ秒の遅延を発生させるsleep関数
const sleep = ms => new Promise(resolve => { setTimeout(resolve, ms) });
// LazyButtonを遅延ロード
const LazyButton = lazy(() => sleep(2000).then(() => import('./LazyButton')));

export default function LazyBasic() {
  // LazyButtonの読み込みまでメッセージを表示
  return ( 
    // Suspenseを使って、描画されない間を取り持つ
    <Suspense fallback={<p>Now loading...</p>}>
      <LazyButton />
    </Suspense>
  );
}
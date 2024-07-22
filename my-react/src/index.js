import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import QuerySuspense from './chap6/QuerySuspence';
import { QueryClient, QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));
const cli = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    }
  }
});

root.render(
  <Suspense fallback={<p>Loading...</p>}>
    <ErrorBoundary fallback={<div>エラーが発生しました。</div>}>
      <QueryClientProvider client={cli}>
        <QuerySuspense />
      </QueryClientProvider>
    </ErrorBoundary>
  </Suspense>
);

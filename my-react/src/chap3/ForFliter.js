import React from 'react';

// 書籍情報はProps (src)経由で受け取る
export default function ForFilter({ src }) {
    //  ここでフィルターをかける
    const lowPrice = src.filter(book => book.price <= 3500);
    return (
        // 書籍情報 (src)属性を<dt>/<dd>リストに整形
        <dl>
            {lowPrice.map(elem => (
                <React.Fragment key={elem.isbn}>
                    <dt>
                        <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
                            {elem.title} ({elem.price}円)
                        </a>
                    </dt>
                    <dd>{elem.summary}</dd>
                </React.Fragment>
            ))}
        </dl>
    );
}
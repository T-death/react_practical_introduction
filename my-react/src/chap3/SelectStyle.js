import './SelectStyle.css'

export default function SelectStyle({ mode }) {
    return (
        // mode属性に応じてスタイルクラスを切り替える
        <div className={`box ${mode === 'light' ? 'light' : 'dark'}`}>
            こんちは
        </div>
    )
}
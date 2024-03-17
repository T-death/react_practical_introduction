export default function MyHello({myName, favFood, favNumber}) {
    return (
        <>
            <p>こんにちは、{myName}さん！</p>
            <p>あなたの好きな食べ物は、{favFood}ですね！</p>
            <p>すきな数字は、{favNumber}ですね！</p>
        </>
    )
}
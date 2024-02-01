export function Output({children, data}) {
    return (
        <p>{children} is: <strong>{data}</strong></p>
    )
}
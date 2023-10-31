const ItemListContainer = ({greeting}) => {
    const greetingStyle = {
        fontSize: '30px',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '20px',
        fontWeight: '700'
    }

    return (
        <div style={greetingStyle}>
            {greeting}
        </div>
    )
}

export default ItemListContainer
const CurrencyCard = ({ label, currencies = [], onValueChange, onCurrencyChange, toValue, toCurrency }) => {

    return (
        <>
            <div className="flex justify-between">
                <label className="px-2 py-1 text-sm">{label}</label>
                <label className="px-2 py-1 text-sm">Currency</label>
            </div>
            <div className="p-2 flex">
                <input className="bg-white rounded-lg p-1" type="number" min="1" value={toValue} onChange={onValueChange}></input>
                <select className="bg-white rounded-lg px-2" onChange={onCurrencyChange}>
                    {currencies.map((currency) => {
                        return <option selected={currency === toCurrency} key={currency}>{currency.toUpperCase()}</option>
                    })}
                </select>
            </div>
        </>
    )

};

export default CurrencyCard;
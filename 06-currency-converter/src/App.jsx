import { useMemo, useState, useEffect, useCallback } from 'react'
import CurrencyCard from './components/CurrencyCard';

function App() {
  const [options, setOptions] = useState({ usd: 1 });
  const [toValue, setToValue] = useState(0);
  const [fromValue, setFromValue] = useState(1);
  const [toCurrency, setToCurrency] = useState("inr");
  const [fromCurrency, setFromCurrency] = useState("usd");

  const fetchCurrencies = useCallback(async (currency) => {
    const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
    const data = await response.json();
    setOptions(data[currency]);
  }, []);

  const currencies = useMemo(() => Object.keys(options), [options]);

  useEffect(() => {
    const toRate = options[toCurrency] || 0;
    setToValue((fromValue * toRate).toFixed(2));

  }, [fromValue, fromCurrency, toCurrency, options])

  useEffect(() => {
    fetchCurrencies(fromCurrency.toLowerCase());
  }, [fromCurrency, fetchCurrencies]);

  const handleSwap = () => {
    setFromValue(Number(toValue));
    setFromCurrency(toCurrency);
    setToValue(Number(fromValue));
    setToCurrency(fromCurrency);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-center text-2xl font-bold p-4">06 - Currency Converter</h1>

      <div className="bg-gray-200 rounded-lg">
        <CurrencyCard
          label="From"
          currencies={currencies}
          toValue={fromValue}
          onValueChange={(e) => setFromValue(e.target.value)}
          toCurrency={fromCurrency}
          onCurrencyChange={(e) => setFromCurrency(e.target.value.toLowerCase())}
        />
        <div className="flex justify-center items-center py-2">
          <button className="bg-blue-400 text-white rounded-lg text-sm p-2 hover:cursor-pointer" onClick={handleSwap}>🔃 SWAP</button>
        </div>
        <CurrencyCard
          label="To"
          currencies={currencies}
          toValue={toValue}
          onValueChange={(e) => setToValue(e.target.value)}
          toCurrency={toCurrency}
          onCurrencyChange={(e) => setToCurrency(e.target.value.toLowerCase())}
        />
      </div>
    </div>
  )
}

export default App

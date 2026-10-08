import { useState } from 'react'

function App() {
  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('PKR')
  const rates = { USD: 1, PKR: 278, EUR: 0.92, GBP: 0.79, INR: 83, SAR: 3.75, AED: 3.67 }

  const result = ((amount / rates[from]) * rates[to]).toFixed(2)

  return (
    <div style={{minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:'#0f172a', margin:0}}>
      <div style={{background:'#1e293b', padding:'30px', borderRadius:'20px', width:'360px'}}>
        <h1 style={{color:'white', textAlign:'center'}}>💱 Currency Converter</h1>
        <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} style={{width:'100%', padding:'12px', borderRadius:'10px', margin:'15px 0', fontSize:'18px', boxSizing:'border-box'}} />
        <div style={{display:'flex', gap:'10px', marginBottom:'15px'}}>
          <select value={from} onChange={(e)=>setFrom(e.target.value)} style={{flex:1, padding:'10px', borderRadius:'8px'}}>{Object.keys(rates).map(c=><option key={c}>{c}</option>)}</select>
          <select value={to} onChange={(e)=>setTo(e.target.value)} style={{flex:1, padding:'10px', borderRadius:'8px'}}>{Object.keys(rates).map(c=><option key={c}>{c}</option>)}</select>
        </div>
        <div style={{background:'#0f172a', color:'#22d3ee', padding:'15px', borderRadius:'10px', textAlign:'center', fontSize:'20px', fontWeight:'bold'}}>{amount} {from} = {result} {to}</div>
        <p style={{color:'#94a3b8', textAlign:'center', marginTop:'10px', fontSize:'12px'}}>Made by Fawad Nasir</p>
      </div>
    </div>
  )
}
export default App
import React from "react"

const InputValues = ({ onChange, inputValue }) => {
    
    return (
        <div className='flex flex-wrap justify-between gap-2 w-full' id='font'>
            <label className='text-sm mt-3 ml-3 uppercase text-slate-100 font-bold' >initial Investment</label>
            <input
                type='number'
                required
                className='p-2 rounded-lg border border-slate-400 font-bold'
                value={inputValue.initialInvestment}
                onChange={(e) => onChange('initialInvestment', e.target.value)}
            />
            <label className='text-sm mt-3 ml-3 uppercase text-slate-100 font-bold' >Annual Investment</label>
            <input
                type='number'
                required
                className='p-2 rounded-lg border border-slate-400 font-bold'
                value={inputValue.annualInvestment}
                onChange={(e) => onChange('annualInvestment', e.target.value)}
            />
            <label className='text-sm mt-3 ml-3 uppercase text-slate-100 font-bold' >expected Return</label>
            <input
                type='number'
                required
                className='p-2 rounded-lg border border-slate-400 font-bold'
                value={inputValue.expectedReturn}
                onChange={(e) => onChange('expectedReturn', e.target.value)}
            />
            <label className='text-sm mt-3 ml-3 uppercase text-slate-100 font-bold' >duration</label>
            <input
                type='number'
                required
                className='p-2 rounded-lg border border-slate-400 font-bold'
                value={inputValue.duration}
                onChange={(e) => onChange('duration', e.target.value)}
            />
        </div>
    )
}

export default InputValues
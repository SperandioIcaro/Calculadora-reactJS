const Input = ({value}) => {
    return (
        <div className="flex items-center justify-end w-full h-20 bg-emerald-300 text-5xl font-sans  rounded-lg">

            <input 
                value={value}
                disabled 
                className="w-full h-20 border-none bg-emerald-300 text-right px-3  rounded-lg" />

        </div>
    )
}

export default Input
const Button = ({label, onClick}) => {
    return (
        <button 
            onClick={onClick}
            className="flex flex-1 p-3 items-center justify-center border-2 border-blue-100 bg-blue-400 text-2xl font-bold hover:opacity-60 rounded-lg">
            {label}
        </button>
    )
}

export default Button
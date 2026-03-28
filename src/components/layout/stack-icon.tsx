type Props = {
    stackName: string
    color: string
}

export const StackIcon = ({stackName, color}: Props) => {
    return (
        <div className="flex items-center justify-center bg-card border py-1 px-3 rounded-md gap-2">
            <div 
                className={`w-2 h-2 rounded-full`}
                style={{ background: color }}
            ></div>
            <h1 className="font-semibold text-sm">{stackName}</h1>
        </div>
    )
}
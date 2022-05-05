type GreetProps = {
    name: string
    messgaseCount?: number 
    isLoggedIn: boolean  
}

export const Greet = (props: GreetProps) => {
    const { messgaseCount = 0 } = props
    return (
        <div>
            <h2>
                {props.isLoggedIn 
                ? 'Welcome ${props.name}! You have ${props.messgaseCount} unread message' 
                : 'Welcome Guest'
                }
            </h2>
        </div>
    )
}
